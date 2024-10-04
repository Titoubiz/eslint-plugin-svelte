/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

<script>
	let initializedLet = true;
	var initializedVar = null;
	initializedNone = true;

	var initializedVar1 = 1, initializedVar2 = false, initializedVar3 = {};
	var bothInitializedVar1 = bothInitializedVar2 = 2;
	const initializedConst = {};

	for (var i = 0; i < 1; i++) {}
	for (var foo in []) {}
	for (var foo of []) {}

	var fn = function() {};

	function foo1() { var foo = 0; var bar = []; }
	function foo2() { let a = 1, b = false; if (a) { let c = 3, d = null; } }
	function foo3() { const a = 1, b = true; if (a) { const c = 3, d = null; } }
	function foo4() { let a = 1; const b = false; var c = true; }
</script>
