# JS定时器

> 用于指定时间区间/倒计时的定时器

> 解决前端定时器执行时间不准确的问题，内部单独计时后与指定服务器开始时间进行校准

# API

## Classes

<dl>
<dt><a href="#TickTock">TickTock</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#start">start(sTime, eTime)</a></dt>
<dd><p>开始运行定时器</p>
</dd>
<dt><a href="#stop">stop()</a></dt>
<dd><p>停止定时器</p>
</dd>
<dt><a href="#count">count(seconds)</a></dt>
<dd><p>运行倒计时</p>
</dd>
<dt><a href="#whenTic">whenTic(fn, ctx)</a> ⇒ <code>string</code></dt>
<dd><p>注册tick事件</p>
</dd>
<dt><a href="#whenEnd">whenEnd(fn, ctx)</a> ⇒ <code>string</code></dt>
<dd><p>注册tick事件</p>
</dd>
<dt><a href="#when">when(time, fn, ctx)</a> ⇒ <code>string</code></dt>
<dd><p>倒计时剩余时间为time时 有且只触发一次 -&gt; 如果7min注册一次, 5min注册一次, 开始倒计时为4min则只会触发5min, 就近原则</p>
</dd>
</dl>

<a name="TickTock"></a>

## TickTock
**Kind**: global class

* [TickTock](#TickTock)
    * [new TickTock()](#new_TickTock_new)
    * [new TickTock(name, type)](#new_TickTock_new)

<a name="new_TickTock_new"></a>

### new TickTock()
指定开始时间-结束时间 区间内进行倒计时 指定时间点运行,每秒运行,结束运行

<a name="new_TickTock_new"></a>

### new TickTock(name, type)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 定时器标识名称 |
| type | <code>string</code> | 运行类型: ['timer', 'counter'] timer定时器 counter倒计时器 |

<a name="start"></a>

## start(sTime, eTime)
开始运行定时器

**Kind**: global function
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| sTime | <code>string</code> | 开始时间 _服务器时间 |
| eTime | <code>string</code> | 结束时间 |

<a name="stop"></a>

## stop()
停止定时器

**Kind**: global function
**Access**: public
<a name="count"></a>

## count(seconds)
运行倒计时

**Kind**: global function
**Access**: public

| Param | Type |
| --- | --- |
| seconds | <code>number</code> |

<a name="whenTic"></a>

## whenTic(fn, ctx) ⇒ <code>string</code>
注册tick事件

**Kind**: global function
**Returns**: <code>string</code> - handlerId
**Access**: public

| Param | Type |
| --- | --- |
| fn | <code>func</code> |
| ctx | <code>obj</code> |

<a name="whenEnd"></a>

## whenEnd(fn, ctx) ⇒ <code>string</code>
注册tick事件

**Kind**: global function
**Returns**: <code>string</code> - handlerId
**Access**: public

| Param | Type |
| --- | --- |
| fn | <code>func</code> |
| ctx | <code>obj</code> |

<a name="when"></a>

## when(time, fn, ctx) ⇒ <code>string</code>
倒计时剩余时间为time时 有且只触发一次 -> 如果7min注册一次, 5min注册一次, 开始倒计时为4min则只会触发5min, 就近原则

**Kind**: global function
**Returns**: <code>string</code> - handlerId
**Access**: public

| Param | Type |
| --- | --- |
| time | <code>string</code> |
| fn | <code>func</code> |
| ctx | <code>obj</code> |

# 注意事项

1. 倒计时使用count()运行，定时器使用start()运行

2. 倒计时不应该监听when(time)时间点，因为count没有时间的概念只会倒计时秒数

3. timer when(time)，如果当前起始时间处于多个time之后，只会执行最靠近的一个time fn (这里有待商榷，可以修改为start时去除过期time)
