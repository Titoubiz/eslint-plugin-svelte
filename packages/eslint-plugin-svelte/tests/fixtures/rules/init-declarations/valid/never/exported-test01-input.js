/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

export var notInitializedVar;
export let notInitializedLet;
export const initializedConst = 1;

export var notInitializedVar1, notInitializedVar2, notInitializedVar3;

export function foo1() { var foo; var bar; }
export function foo2() { let a, b; if (a) { let c, d; } }
export function foo3() { const a = 1, b = true; if (a) { const c = 3, d = null; } }
export function foo4() { let a; const b = false; var c; }
