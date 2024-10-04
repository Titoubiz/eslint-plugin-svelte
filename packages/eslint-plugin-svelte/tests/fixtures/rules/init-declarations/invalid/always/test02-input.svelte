/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

<script>
	var notInitializedVar;
	let notInitializedLet;

	for (var a in []) var notInitializedLoopVar;

	var notInitializedVar1, initializedVar2 = false, notInitializedVar2;

	function foo1() { var foo = 0; var bar; }
	function foo2() { var foo; var bar = foo; }
	function foo3() { let a = 1, b; if (a) { let c = 3, d = null; } }
	function foo4() { let a; const b = false; var c; }
</script>
