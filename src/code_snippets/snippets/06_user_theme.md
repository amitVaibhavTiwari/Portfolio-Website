---
title: "Get user's preferred color theme"
description: "To get user's preferred color theme when they visit your website for the first time."
language: "javascript"
---

## JavaScript Code

```js
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme:dark)"
).matches;

if (prefersDarkMode === true) {
  // user likes dark mode by default
} else {
  // user likes light mode by default
}
```
