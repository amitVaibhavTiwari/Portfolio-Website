---
title: "Page Changing component"
description: "A simple React component that adds page transition effect and scrolls to the top on route change"
language: "javascript"
---

## Wrap each page of your application with this PageChanger component

```js
import { useEffect } from "react";

export const PageChanger = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="animate-wiggle">{children}</div>;
};
```

## Add following CSS

```js
.animate-wiggle {
  animation: wiggle 0.8s;
}

@keyframes wiggle {
  from {
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0);
  }
}
```
