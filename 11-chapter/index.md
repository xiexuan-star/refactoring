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

## 7.移除设值函数(Remove Setting Method) 

移除设值函数以表达不希望此值被修改的意图

## 8.以工厂函数取代构造函数(Replace Constructor with Factory Function)

## 9.以命令取代函数(Replace Function with Command)

此处的命令指代的是命令对象，由这个对象提供函数的调用方法(execute or call .etc)

一个常见的场景就是拆解复杂函数，将函数中的局部变量转换为实例字段，之后就可以随意进行拆解

## 10.以函数取代命令(Replace Command with Function)

大部分情况实际上没必要使用到命令对象
