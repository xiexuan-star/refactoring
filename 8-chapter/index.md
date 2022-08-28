# 搬移特性

## 1.搬移函数(Move Function)

将内联函数抽离至顶层作用域(然后通过模块化机制屏蔽它)

将已经可以独立成类的函数抽离至新类

## 2.搬移字段(Move Field)

将更加相关的字段放到同一个类中

## 3.搬移语句至函数(Move Statements into Function)

如果某条语句总是和某个函数一起出现，那可能这条语句更适合放在这个函数中

## 4.搬移语句到调用者(Move Statements To Callers)

当之前的抽象有演进时，差异化的内容就可以从函数中拿出去了

## 5.以函数调用取代内联代码(Replace Inline Code with Function Call)

## 6.移动语句(Slide Statements)

大部分时候，这项重构都是为了做另一项更大的重构

确保自己编写的大部分函数都是无副作用的(命令与查询分离原则)

## 7.拆分循环(Split Loop)

## 8.以管道取代循环(Replace Loop with Pipeline)

## 9.移除死代码(Remove Dead Code)
