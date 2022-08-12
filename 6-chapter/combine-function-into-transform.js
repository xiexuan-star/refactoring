import { cloneDeep } from 'lodash-es';

function acquireReading() {
  return { customer: 'ivan', quantity: 10, month: 5, year: 2017 };
}

const rawReading = acquireReading();
const aReading = enrichReading(rawReading)
const taxableCharge = aReading.taxableCharge

function enrichReading(original){
  const result = cloneDeep(original);
  result.baseCharge = baseRate(this.month, this.year) * this.quantity;
  result.taxableCharge = Math.max(0,this.baseCharge - taxThreshold(this.year))
  return result;
}
