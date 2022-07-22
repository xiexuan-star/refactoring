import { printOwing } from '../extract-function.demo.js';
import { test, expect } from 'vitest';

test('console info', () => {
  expect(printOwing({ customer: 'test customer', orders: [{ amount: 100 }, { amount: 200 }] })).toBe(`********************
*** Customer Owes ***
********************
name: test customer
amount: 300
time: 8/21/2022
`);
});
