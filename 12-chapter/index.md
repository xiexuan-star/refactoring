# 处理继承关系

## 1.函数上移(Pull up Method)

当使用上移(子类实现移动到超类)时，如果函数中引用了子类中的字段，那么最好在超类中定义一个陷阱(trap)函数

```javascript
class SubclassResponsibilityError extends Error {
  constructor(message) {
    return new Error(`[SubclassReponsibility] ${message}`)
  }
}

class SuperClass {
  get name() {
    throw new SubclassResponsibilityError()
  }
}
```

## 2.字段上移(Pull up Field)

## 3.构造函数本体上移(Pull Up Constructor Body)

子类中的构函数，可复用部分抽离至父类构造函数中

## 4.函数下移(Push Down Method)

## 5.字段下移(Push Down Field)

## 6.以子类取代类型码(Replace Type Code with Subclasses)

其实还是分支判断的另一种形式

## 7.移除子类(Remove Subclasses)

将不同子类的差异转化为识别码

## 8.提炼超类(Extract Superclass)

## 9.折叠继承体系(Collapse Hierarchy)

合并子类与父类

## 10.以委托取代子类(Replace Subclass with Delegate)

继承关系-->委托关系

继承的问题在于继承只能处理一个方向上的变化, 并且超类的变化容易破坏子类

委托关系: 超类中直接通过识别码做区分，转而调用委托类中的方法

对象组合(也就是委托关系)优于类继承: 审慎地组合使用对象组合与继承，优于单独使用其中一种

## 11.以委托取代超类(Replace Subclass with Delegate)

不管怎么说，对象组合和继承这两种方式组合使用，更有利于代码的结构清晰
