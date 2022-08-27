class Person {
  #name;
  #courses;

  constructor(name) {
    this.#name = name;
    this.#courses = {};
  }

  get name() {
    return this.#name;
  }

  get courses() {
    // return this.#courses;
    // 始终返回副本
    return this.#courses.slice()
  }

  // 有了单独的add/remove方法, 这个set就没有存在的必要了
  // set courses(aList) {
  //   this.#courses = aList;
  // }

  addCourse(aCourse) {
    this.#courses.push(aCourse);
  }

  removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
    const index = this.#courses.indexOf(aCourse);
    if (!~index) fnIfAbsent();
    else this.#courses.splice(index, 1);
  }
}

class Courses {
  #isAdvances;
  #name;

  constructor(name, isAdvances) {
    this.#name = name;
    this.#isAdvances = isAdvances;
  }

  get name() {
    return this.#name;
  }

  get isAdvances() {
    return this.#isAdvances;
  }
}

function getNumAdvancesCourses(aPerson) {
  return aPerson.courses.filter(c => c.isAdvances).length;
}


