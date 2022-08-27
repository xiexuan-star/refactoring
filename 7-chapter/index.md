# 封装

## 1. 封装记录(Encapsulate record)

## 2.封装集合(Encapsulate Collection)

## 3.以对象取代基本类型(Replace Primitive With Object)

## 4.以查询取代临时变量(Replace Temp with Query)

## 5.提炼类(Extract Class)

当一个类随着更新逐渐变大时，应该考虑是否需要分离部分逻辑形成一个新类

## 6.内联类(Inline Class)

大部分时候出现这种情况都是因为一些其他重构，导致某个类已经不再承担足够的责任，此时需要将其内联合并

## 7.隐藏委托关系(Hide Delegate)

当客户端向服务端请求后，服务端返回另一个实例，这个实例便是委托类，应当将其屏蔽

## 8.移除中间人(Remove Middle Man)

与隐藏委托关系正好相反，当委托类的功能越来越多，过多的转发令人沮丧，此时直接暴露委托类即可

## 9.替换算法(Substitute Algorithm)

当有了更好的算法，替换掉也是理所应当的
