let _defaultOwner = { name: 'x', age: 10 };

// 取值函数的命名一般会与变量名相同
function defaultOwner() {
  return _defaultOwner;
}

function setDefaultOwner(arg) {
  _defaultOwner = arg;
}
