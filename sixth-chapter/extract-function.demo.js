function printOwing(invoice) {
  let outstanding = 0;

  console.log('"********************"');
  console.log('*** Customer Owes ***');
  console.log('"********************"');

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = new Date;

  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`name: ${invoice.dueDate.toLocaleDateString()}`);
}
