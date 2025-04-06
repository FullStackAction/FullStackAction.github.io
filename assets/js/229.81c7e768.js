(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{572:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("ul",[s("li",[t._v("观察者模式\n"),s("ul",[s("li",[t._v("作用：定义了一个一对多的依赖关系，让一个或多个观察者对象监听一个主题对象。这样一来，当被观察者状态发生改变时，需要通知相应的观察者，使这些观察者对象能够自动更新。")]),t._v(" "),s("li",[t._v("核心操作：\n"),s("ul",[s("li",[t._v("观察者（订阅者）添加或删除对 被观察者（主题）的状态监听")]),t._v(" "),s("li",[t._v("被观察者（主题）状态改变时，将事件通知给所有观察者，观察者执行响应逻辑")])])])])])]),t._v(" "),s("h2",{attrs:{id:"二、使用观察者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、使用观察者模式"}},[t._v("#")]),t._v(" 二、使用观察者模式")]),t._v(" "),s("ul",[s("li",[t._v("例子：监听股票价格变动")]),t._v(" "),s("li",[t._v("重点：使用 Java API 或 自定义实现 观察者模式")])]),t._v(" "),s("h3",{attrs:{id:"_1、使用-java-api-实现观察者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用-java-api-实现观察者模式"}},[t._v("#")]),t._v(" 1、使用 Java API 实现观察者模式")]),t._v(" "),s("p",[t._v("Java 标准库中提供了通用观察者模式的 API，分别是：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("java.util.Observable")]),t._v("：被观察者（主题）\n"),s("ul",[s("li",[s("code",[t._v("setChanged()")]),t._v("：标记状态更新")]),t._v(" "),s("li",[s("code",[t._v("addObserver()")]),t._v("：添加观察者")]),t._v(" "),s("li",[s("code",[t._v("deleteObserver()")]),t._v("：删除观察者")]),t._v(" "),s("li",[s("code",[t._v("countObservers()")]),t._v("：获取观察者数量")]),t._v(" "),s("li",[s("code",[t._v("notifyObservers()")]),t._v("：通知所有观察者")]),t._v(" "),s("li",[s("code",[t._v("notifyObservers(Object arg)")]),t._v("：通知所有观察者（携带参数 arg）")])])]),t._v(" "),s("li",[s("code",[t._v("java.util.Observer")]),t._v("：观察者（订阅者）")])]),t._v(" "),s("p",[t._v("利用 Java API，可以实现监听股票价格变动这个功能：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observer\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 被观察者（主题）\n *\n * @author GitLqr\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" StockSubject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Observable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeStockPrice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChanged")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识状态更新")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notifyObservers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通知所有观察者当前股票价格")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 观察者（订阅者）\n *\n * @author GitLqr\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Observer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Observable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("name")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" receive stock price : ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("price")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意 price 的类型是 Any?")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockSubject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observer 1"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"observer 2"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeStockPrice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// observer 2 receive stock price : 200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// observer 1 receive stock price : 200")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意：在主题中通过 "),s("code",[t._v("notifyObservers()")]),t._v(" 方法通知订阅者之前，需要先调用 "),s("code",[t._v("setChanged()")]),t._v(" 标识状态更新，才能正常通知给订阅者，这是使用 Java API 实现观察者模式时需要注意的一点。")])]),t._v(" "),s("p",[t._v("Java 提供的 API 已经涵盖了观察者模式的完整实现，所以我们在使用的时候，只需要关注业务本身，而不用自己去做模式的具体实现，但是呢，Java 提供的 API 是一种通用实现，从上面的例子中可以注意到，"),s("code",[t._v("StockDisplay.update(o: Observable?, price: Any?)")]),t._v(" 中的 "),s("code",[t._v("price")]),t._v(" 参数类型是 "),s("code",[t._v("Any?")]),t._v(" ，这就会有以下几个问题：")]),t._v(" "),s("ul",[s("li",[t._v("参数判断：因为参数类型是 "),s("code",[t._v("Any?")]),t._v("，所以开发中不得不对 参数是否为空 以及 参数的实际类型 做判断。")]),t._v(" "),s("li",[t._v("通知入口单一：实际业务需求会更加复杂，而 "),s("code",[t._v("java.util.Observer")]),t._v(" 只有唯一一个通知入口 "),s("code",[t._v("update(o: Observable?, arg: Any?)")]),t._v("，所以我们不得不在该方法中分离响应逻辑，比如股票价格升降，这会让代码显得臃肿。")])]),t._v(" "),s("h3",{attrs:{id:"_2、自定义实现观察者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、自定义实现观察者模式"}},[t._v("#")]),t._v(" 2、自定义实现观察者模式")]),t._v(" "),s("p",[t._v("虽然 Java 提供了现成的观察者模式 API，但是实际开发中，我们通常还是会自定义实现观察者模式，以便更好的控制代码结构：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 回调接口（解耦业务通知入口）\n *\n * @author GitLqr\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" StockUpdateListener "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 被观察者（主题）\n *\n * @author GitLqr\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" StockSubject "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" listeners "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutableSetOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("StockUpdateListener"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StockUpdateListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StockUpdateListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeStockPrice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" isRise "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price\n        listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isRise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 观察者（订阅者）\n *\n * @author GitLqr\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" StockDisplay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StockUpdateListener "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The latest stock price has rise to ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("price")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The latest stock price has fell to ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("price")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockSubject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeStockPrice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The latest stock price has rise to 200")]),t._v("\n")])])]),s("p",[t._v("可见，自定义实现观察者模式，可以让代码结构变得更加简单直观。")]),t._v(" "),s("h2",{attrs:{id:"三、改良观察者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、改良观察者模式"}},[t._v("#")]),t._v(" 三、改良观察者模式")]),t._v(" "),s("ul",[s("li",[t._v("例子：监听股票价格变动")]),t._v(" "),s("li",[t._v("重点：委托属性 "),s("code",[t._v("Delegates.observable()")])])]),t._v(" "),s("p",[t._v("Kotlin 标准库引入了可被观察的委托属性，可通过 "),s("code",[t._v("xxx by Delegates.observable()")]),t._v(" 的方式，用来监听 "),s("code",[t._v("xxx")]),t._v(" 属性的改变，于是可以用来改良上面的自定义观察者模式：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" kotlin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Delegates\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 观察者模式改良：使用委托属性监听值变化后通知\n *\n * @author GitLqr\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" StockSubject "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" listeners "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mutableSetOf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("StockUpdateListener"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" Delegates"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" isRise "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" old\n        listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isRise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StockUpdateListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StockUpdateListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listeners"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fun changeStockPrice(price: Int) { ... }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockSubject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StockDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The latest stock price has rise to 200")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("Delegates.observable()")]),t._v(" 之后，"),s("code",[t._v("StockSubject")]),t._v(" 相比之前减少了一个 "),s("code",[t._v("changeStockPrice()")]),t._v(" 方法。使用上，一旦对 "),s("code",[t._v("price")]),t._v(" 属性赋值，就可以触发通知，显然，这对使用者更加友好了（直观，少记一个方法）。")]),t._v(" "),s("h2",{attrs:{id:"四、补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、补充"}},[t._v("#")]),t._v(" 四、补充")]),t._v(" "),s("p",[t._v("前面说到，Kotlin 标准库引入可被观察的委托属性，除了 "),s("code",[t._v("Delegates.observable()")]),t._v(" 之外，还有\n"),s("code",[t._v("Delegates.vetoable()")]),t._v(" 也很实用，当我们不希望被监控的属性被随意修改时，就可以用它来否决属性赋值：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" kotlin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("properties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Delegates\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" Delegates"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vetoable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" old"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新值大于0时，才给属性赋值")]),t._v("\n    new "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1（没能赋值成功）")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);