---
pageClass: 'rule-details'
sidebarDepth: 0
title: 'svelte/init-declarations'
description: 'Require or disallow initialization in variable declarations'
---

# svelte/init-declarations

> Require or disallow initialization in variable declarations

- :exclamation: <badge text="This rule has not been released yet." vertical="middle" type="error"> **_This rule has not been released yet._** </badge>

## :book: Rule Details

This rule requires or disallows that variables are assigned during declaration.

This rule extends the base ESLint's [init-declarations] rule.

<ESLintCodeBlock>

<!--eslint-skip-->

```svelte
<script>
  /* ✓ GOOD */
  export let nonInitializedProp;
  export let initializedProp = null;

  /* eslint svelte/no-inner-declarations: ["error", "always"] */

  /* ✗ BAD */
  let d;
  let e,
    f = {};

  /* eslint svelte/no-inner-declarations: ["error", "never"] */

  /* ✓ GOOD */
  let g, h;
  g = 1;
  h = '';

  /* ✗ BAD */
  let i = 1;
  let j,
    k = {};
</script>
```

</ESLintCodeBlock>

## :wrench: Options

```json
{
  "svelte/no-inner-declarations": [
    "error",
    "functions" // or "both"
  ]
}
```

Same as [no-inner-declarations] rule option. See [here](https://eslint.org/docs/rules/no-inner-declarations#options) for details.

## :couple: Related rules

- [no-inner-declarations]

[no-inner-declarations]: https://eslint.org/docs/rules/no-inner-declarations

## :mag: Implementation

- [Rule source](https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/rules/init-declarations.ts)
- [Test source](https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/tests/src/rules/init-declarations.ts)

<sup>Taken with ❤️ [from @typescript-eslint/init-declarations](https://typescript-eslint.io/rules/init-declarations/)</sup>
