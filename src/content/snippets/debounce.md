---
title: "Debounce Function"
language: "JavaScript"
description: "A collection of solutions to small problems I've faced in the past. They're all copy-paste ready"
---

function debounce(func, delay) {
let timeout;
return function () {
clearTimeout(timeout);
timeout = setTimeout(() => func.apply(this, arguments), delay);
};
}
