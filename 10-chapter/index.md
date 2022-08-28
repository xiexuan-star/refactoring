# 简化条件逻辑

## 1.分解条件表达式(Decompose Conditional)

提炼函数(Extract Function)的一个应用场景，尽量少的在条件语句中书写复杂的逻辑

## 2.合并条件表达式(Consolidate Conditional Expression)

## 3.以卫语句取代嵌套的条件表达式(Replace Nested Conditional with Guard Clauses)

卫语句：单独检查条件并让函数在条件为真时返回，这样的单独检查成为卫语句

## 4.以多态取代条件表达式(Replace Conditional with Polymorphism)

(1)将逻辑抽离成类

(2)找出差异点，形成变体子类

(3)创建工厂函数用于返回对应的实例

## 5.引入特例(Introduce Special Case)

一个类中对特殊情况的判断也可以放到一个特例实例中(有点像一个特殊情况的多态)

## 6.引入断言(Introduce Assertion)

通过断言来追踪bug
