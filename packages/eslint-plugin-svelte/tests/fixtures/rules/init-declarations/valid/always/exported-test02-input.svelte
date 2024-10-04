/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

<script>
	export var notInitializedVar;
	export let notInitializedLet;

	export var notInitializedVar1, initializedVarBetween = false, notInitializedVar2;

	export let initializedLet = 1;
	export var initializedVar = 2;

	export var initializedVar1 = 1, initializedVar2 = false, initializedVar3 = {};
	export var bothInitializedVar1 = bothInitializedVar2 = 2;
	export const initializedConst = {};

	export var fn = function() {};

	export function foo1() { var foo = 0; var bar = []; }
	export function foo2() { let a = 1, b = false; if (a) { let c = 3, d = null; } }
	export function foo3() { const a = 1, b = true; if (a) { const c = 3, d = null; } }
	export function foo4() { let a = 1; const b = false; var c = true; }
</script>
