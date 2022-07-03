import { createStatementData } from './createSteatementData.js';

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(aNumber / 100);
}

export function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

export function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderPlainText(data) {

  let result = `Statement for ${data.customer}\n`;
  for (const perf of data.performance) {
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}<h1>`;
  result += `<table>`;
  for (const perf of data.performance) {
    result += `<tr><td>${perf.play.name}</td><td>${usd(perf.amount)}</td><td>${perf.audience} seats</td></tr>`;
  }
  result += `</table>`;

  result += `<p>Amount owed is ${usd(data.totalAmount)}</p>`;
  result += `<p>You earned ${data.totalVolumeCredits} credits</p>`;
  return result;
}
