const station = {
  name: 'zv',
  readings: [
    { temp: 26, time: '' },
    { temp: 28, time: '' },
    { temp: 27, time: '' },
    { temp: 22, time: '' },
    { temp: 24, time: '' },
    { temp: 21, time: '' },
  ]
};

class NumberRange {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  contains(temp) {
    return temp >= this.min && temp <= this.max;
  }
}

export function readingOutsideRange(station, range) {
  return station.readings.filter(r => !range.contains(r.temp));
}

console.log(readingOutsideRange(station, new NumberRange(22, 26)));
