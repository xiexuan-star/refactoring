# 重构API

## 1.将查询函数与修改函数分离(Separate Query)

当一个函数又有返回值又有副作用时，就是时候拆一拆了

## 2.函数参数化(Parameterize Function)

将两个相似的函数合并，差异的部分转换为参数

## 3.移除标记参数(Remove Flag Argument)

标记参数：字面量值

与2相反，当函数中分支逻辑差异太大时，也许多个函数更适合这种情况

## 4.保持对象完整(Preserve Whole Object)

如果同时使用某个对象的属性作为参数，更好的做法是直接将这个对象作为参数

## 5.以查询取代参数(Replace Parameter with Query)

当一个函数的多个参数可以从某个参数中推导出来时，就没理由使用多个参数

## 6.以参数取代查询(Replace Query with Parameter)

当函数中引用一些全局变量时，尽量让函数不去负责处理这些引用关系，即抽离到参数当中
