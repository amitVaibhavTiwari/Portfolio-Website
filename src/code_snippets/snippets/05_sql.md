---
title: "SQL queries"
description: "A collection of some simple SQL queries that you don't wanna google everytime."
language: "javascript"
---

## To update specific records based on a condition

```js
UPDATE products SET price = price * 1.10 WHERE category = 'Electronics';
```

## To perform conditional logic in queries

```js
SELECT name,
  CASE
    WHEN score >= 90 THEN 'A'
    WHEN score >= 80 THEN 'B'
    ELSE 'C'
  END AS grade
FROM students;
```

## To join two tables

```js
SELECT orders.id, customers.name
FROM orders
JOIN customers ON orders.customer_id = customers.id;
```

## Using aggregate functions with GROUP BY

```js
SELECT department, SUM(revenue) AS total_revenue
FROM employees
GROUP BY department;
```

## Using With clause

```js
WITH premium_customers AS (
    SELECT customer_id
    FROM orders
    GROUP BY customer_id
    HAVING SUM(order_total) > 100000
)
UPDATE customers
SET status = 'Premium'
WHERE customer_id IN (SELECT customer_id FROM premium_customers);
```

## Nested query

```js
SELECT employee_id, name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```
