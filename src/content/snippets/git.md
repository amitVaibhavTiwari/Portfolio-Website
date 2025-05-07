---
title: "Git commands"
description: "A collection of some useful git commands."
language: "javascript"
---

## git rebase

**Description**: Prevents a function from being called too often.

```js
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), delay);
  };
}
```
