import { expect, test } from 'vitest';
import { price } from '../extract-variable.demo.js';

test('extract-variable', () => {
  expect(price({ quantity: 700, itemPrice: 20 })).toEqual(13900);
});
