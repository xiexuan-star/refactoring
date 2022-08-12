import { expect, test } from 'vitest';
import { priceOrder } from '../split-phase.js';

test('extract-variable', () => {
  expect(priceOrder({ basePrice: 100, discountThreshold: 30, discountRate: 0.7 }, 40, {
    discountThreshold: 20,
    discountedFee: 15,
    feePerCase: 20
  })).toEqual(1800);
});
