/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

<script>
	var notInitializedVar;
	let notInitializedLet;
	const initializedConst = 1;

	var notInitializedVar1, notInitializedVar2, notInitializedVar3;

	function foo1() { var foo; var bar; }
	function foo2() { let a, b; if (a) { let c, d; } }
	function foo3() { const a = 1, b = true; if (a) { const c = 3, d = null; } }
	function foo4() { let a; const b = false; var c; }
</script>
