class Order {
  #priority;

  constructor(data) {
    this.#priority = data.priority;
  }

  get priorityString() {
    return this.#priority.toString();
  }

  set priority(aString) {
    this.#priority = new Priority(aString);
  }
}

class Priority {
  static legalValues() {return ['low', 'normal', 'high', 'rush'];};

  #value;

  constructor(value) {
    if (value instanceof Priority) return value;
    if (!Priority.legalValues().includes(value)) throw new Error(`invalid value of priority ${value}`);
    this.#value = value;
  }

  toString() {
    return this.#value;
  }

  get index() {
    return Priority.legalValues().findIndex(s => s === this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  moreThan(other) {
    return this.index >= other.index;
  }

  lessThan(other) {
    return this.index <= other.index;
  }
}

function highPriorityCount(orders) {
  // return orders.filter(o => ['rush', 'high'].includes(o.priorityString));
  return orders.filter(o => o.moreThan(new Priority('normal')));
}
