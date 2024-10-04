/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

export var notInitializedVar;
export let notInitializedLet;

export var notInitializedVar1, initializedVar2 = false, notInitializedVar2;

export function foo1() { var foo = 0; var bar; }
export function foo2() { var foo; var bar = foo; }
export function foo3() { let a = 1, b; if (a) { let c = 3, d = null; } }
export function foo4() { let a; const b = false; var c; }
