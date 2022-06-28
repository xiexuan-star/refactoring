import { invoices } from './invoices.js';
import { plays } from './plays.js';

/**
 * @param {{customer:string,performance:{playId:string,audience:number}[]}} invoice
 * @param {Record<string,Record<'name'|'type',string>>} plays
 */
export function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  const { format } = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });

  for (const perf of invoice.performance) {
    const play = plays[perf.playId];
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy"  :
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 400 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error('error');
    }

    // add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);

    // add extra credit for every the comedy attendees
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // print
    result += `  ${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

invoices.forEach(invoice => {
  console.log(statement(invoice, (plays)));
});
