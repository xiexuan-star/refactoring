const organization = { name: 'acme gooseberries', country: 'Zh' };

function getRawDataOfOrganization() {
  return organization;
}

// 这里只是一个简单的例子，实际上record的get/set可以很复杂
class Organization {
  #name;
  #country;

  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(v) {
    this.#name = v;
  }

  get country() {
    return this.#country;
  }

  set country(v) {
    this.#country = v;
  }
}
