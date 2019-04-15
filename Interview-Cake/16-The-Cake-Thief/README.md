# 16. The Cake Thief

## Problem Description

> You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
>
> While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.
>
> Each type of cake has a weight and a value, stored in an object with two properties:
>
> 1.  `weight`: the **weight** of the cake in kilograms
> 2.  `value`: the **monetary value** of the cake in British shillings
>
> You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
>
> Write a function `maxDuffelBagValue()` that takes **an array of cake type objects** and **a weight capacity**, and returns **_the maximum monetary value_ the duffel bag can hold**.

## Implementation

Relying on a dynamic programming bottom-up approach, this solution solves the problem in `O(n * k)` time, where `n` is the number of items, and `k` is the total weight capacity of the bag.

- [JavaScript](./solution.js)
