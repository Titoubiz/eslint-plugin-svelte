import { createRule } from '../utils';
import type {
	ExportDefaultDeclaration,
	ExportNamedDeclaration,
	ForInStatement,
	ForOfStatement,
	ForStatement,
	VariableDeclaration,
	VariableDeclarator
} from 'estree';
import type { ASTNode, ASTNodeWithParent } from '../types-for-node';

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given node is a for loop.
 */
function isForLoop(
	block: ASTNode | ASTNodeWithParent
): block is ForStatement | ForInStatement | ForOfStatement {
	return (
		block.type === 'ForInStatement' ||
		block.type === 'ForOfStatement' ||
		block.type === 'ForStatement'
	);
}

/**
 * Checks whether or not a given declarator node has its initializer.
 */
function isInitialized(node: VariableDeclarator) {
	const declaration = node.parent;
	const block = declaration?.parent;

	if (block == null) return false;

	if (isForLoop(block)) {
		if (block.type === 'ForStatement') {
			return block.init === declaration;
		}
		return block.left === declaration;
	}

	return Boolean(node.init);
}

/**
 * Checks whether or not a given node is an export.
 */
function isExport(
	block: ASTNode | ASTNodeWithParent
): block is ExportDefaultDeclaration | ExportNamedDeclaration {
	return block?.type === 'ExportDefaultDeclaration' || block?.type === 'ExportNamedDeclaration';
}

/**
 * Checks if the declaration is part of a svelte context.
 */
function belongsToSvelteProgram(node: ASTNodeWithParent): boolean {
	let parent = node.parent;
	while (parent != null) {
		if (parent?.type === 'SvelteScriptElement') return true;

		parent = parent.parent;
	}
	return false;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default createRule('init-declarations', {
	meta: {
		type: 'suggestion',

		docs: {
			category: 'Extension Rules',
			description: 'Require or disallow initialization in variable declarations',
			recommended: false,
			extensionRule: {
				plugin: '@typescript-eslint/init-declarations',
				url: 'https://typescript-eslint.io/rules/init-declarations/'
			}
		},

		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: ['always']
						}
					],
					minItems: 0,
					maxItems: 1
				},
				{
					type: 'array',
					items: [
						{
							enum: ['never']
						},
						{
							type: 'object',
							properties: {
								ignoreForLoopInit: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					],
					minItems: 0,
					maxItems: 2
				}
			]
		},
		messages: {
			initialized: "Variable '{{idName}}' should be initialized on declaration.",
			notInitialized: "Variable '{{idName}}' should not be initialized on declaration."
		}
	},

	create(context) {
		const MODE_ALWAYS = 'always';
		const MODE_NEVER = 'never';

		const mode = context.options[0] || MODE_ALWAYS;
		const params = context.options[1] || {};

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			'VariableDeclaration:exit'(node: VariableDeclaration) {
				const kind = node.kind;
				const declarations = node.declarations;

				for (let i = 0; i < declarations.length; ++i) {
					const declaration = declarations[i];
					const id = declaration.id;
					const initialized = isInitialized(declaration);
					const isIgnoredForLoop = params.ignoreForLoopInit && isForLoop(node.parent);
					const isIgnoredExport = isExport(node.parent);
					const inSvelteProgram = belongsToSvelteProgram(node as ASTNodeWithParent);
					let messageId = '';

					if (mode === MODE_ALWAYS && !initialized && !(inSvelteProgram && isIgnoredExport)) {
						messageId = 'initialized';
					} else if (mode === MODE_NEVER && kind !== 'const' && initialized && !isIgnoredForLoop) {
						messageId = 'notInitialized';
					}

					if (id.type === 'Identifier' && messageId) {
						context.report({
							node: declaration,
							messageId,
							data: {
								idName: id.name
							}
						});
					}
				}
			}
		};
	}
});
