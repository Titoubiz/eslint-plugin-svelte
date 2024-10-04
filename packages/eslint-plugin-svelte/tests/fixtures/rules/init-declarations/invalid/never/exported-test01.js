/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

export var initializedVar = true;
export let initializedLet = 1;

export var bothInitializedVars1 = bothInitializedVars2 = 2;
export var onlyNotInitializedVar, initializedVar1 = 5, initializedVar2 = 3;

export function foo1() { var foo; var bar = foo; }
export function foo2() { let a = 'foo', b; if (a) { let c, d; } }
export function foo3() { let a; const b = false; var c = 1; }
