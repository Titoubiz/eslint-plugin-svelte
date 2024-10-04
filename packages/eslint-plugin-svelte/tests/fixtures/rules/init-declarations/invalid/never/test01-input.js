/**
 * Based on eslint’s test by Colin Ihrig
 * https://github.com/eslint/eslint/blob/main/tests/lib/rules/init-declarations.js
 */

var initializedVar = true;
let initializedLet = 1;

var bothInitializedVars1 = bothInitializedVars2 = 2;
var onlyNotInitializedVar, initializedVar1 = 5, initializedVar2 = 3;

for(var i = 0; i < 1; i++){}
for (var foo of []) {}

function foo1() { var foo; var bar = foo; }
function foo2() { let a = 'foo', b; if (a) { let c, d; } }
function foo3() { let a; const b = false; var c = 1; }
