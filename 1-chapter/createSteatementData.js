class PerformanceCalculator {
  constructor(aPerformance) {
    this.aPerformance = aPerformance;
  }

  /**
   * @type {number}
   */
  get amount() {
    throw new Error('need overwrite!!');
  }

  /**
   * @type {number}
   */
  get volumeCredits() {
    return Math.max(this.aPerformance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.aPerformance.audience > 30) {
      result += 1000 * (this.aPerformance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.aPerformance.audience > 20) {
      result += 10000 + 400 * (this.aPerformance.audience - 20);
    }
    result += 300 * this.aPerformance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.aPerformance.audience / 5);
  }
}

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance);

    case 'comedy':
      return new ComedyCalculator(aPerformance);
    default :
      throw new Error('unknown play type' + aPlay.type);
  }
}

export function createStatementData(invoice, plays) {
  /**
   * @type {Record<string,any>}
   */
  const result = {
    customer: invoice.customer,
    performance: invoice.performance.map(enrichPerformance)
  };

  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);

  return result;

  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playId];
  }

  function totalVolumeCredits(data) {
    let result = 0;
    for (const perf of data.performance) {
      result += perf.volumeCredits;
    }
    return result;
  }

  function totalAmount(data) {
    let result = 0;
    for (const perf of data.performance) {
      result += perf.amount;
    }
    return result;
  }
}
