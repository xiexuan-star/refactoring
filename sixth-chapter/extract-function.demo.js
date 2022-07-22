export function printOwing(invoice) {
  let result = '';

  printBanner();

  recordDueDate(invoice);

  printDetail(invoice, calculateOutstanding(invoice));

  return result;

  function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }
    return result;
  }

  function printDetail(invoice, outstanding) {
    appendResult(`name: ${invoice.customer}`);
    appendResult(`amount: ${outstanding}`);
    appendResult(`time: ${invoice.dueDate.toLocaleDateString()}`);
  }

  function printBanner() {
    appendResult('********************');
    appendResult('*** Customer Owes ***');
    appendResult('********************');
  }

  function recordDueDate(invoice) {
    const today = new Date;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  }

  function appendResult(content) {
    result += `${content}\n`;
  }
}

console.log(printOwing({ customer: 'test customer', orders: [{ amount: 100 }, { amount: 200 }] }));
