import { statement } from './index.js';
import { invoices } from './invoices.js';
import { plays } from './plays.js';

test('correct result', () => {
  expect(statement(invoices[0], plays)).toBe(
    `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As you like: $565.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,715.00
You earned 47 credits
`);
});
