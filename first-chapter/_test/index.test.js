import { htmlStatement, statement } from '../statement.js';
import { invoices } from '../data/invoices.js';
import { plays } from '../data/plays.js';

test('statement', () => {
  expect(statement(invoices[0], plays)).toBe(
    `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As you like: $565.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,715.00
You earned 47 credits
`);
});

test('HtmlStatement', () => {
  console.log(htmlStatement(invoices[0], plays));
  expect(htmlStatement(invoices[0], plays)).toBe(
    `<h1>Statement for BigCo<h1>`
    + `<table><tr><td>Hamlet</td><td>$650.00</td><td>55 seats</td></tr><tr><td>As you like</td><td>$565.00</td><td>35 seats</td></tr><tr><td>Othello</td><td>$500.00</td><td>40 seats</td></tr></table>`
    + `<p>Amount owed is $1,715.00</p>`
    + `<p>You earned 47 credits</p>`);
});
