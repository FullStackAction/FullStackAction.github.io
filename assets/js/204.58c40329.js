(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{554:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基本运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本运算符"}},[t._v("#")]),t._v(" 基本运算符")]),t._v(" "),a("p",[t._v("常见的基本运算符有 "),a("code",[t._v("+-*/%^?")]),t._v(" ，在 Kotlin 中，这些运算符都会有对应的具名函数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("表达式")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("翻译为")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a + b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.plus(b)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a - b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.minus(b)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a * b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.times(b)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a / b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.div(b)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a % b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.rem(b)、 a.mod(b) （已弃用）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a..b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.rangeTo(b)")])])])]),t._v(" "),a("p",[t._v("除此之处，还有一些常用的操作符（统称运算符），例如 "),a("code",[t._v("in")]),t._v("、"),a("code",[t._v("[]")]),t._v("、"),a("code",[t._v("()")]),t._v(" 等：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("表达式")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("翻译为")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a in b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("b.contains(a)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a !in b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("!b.contains(a)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a[i]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.get(i)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("a.invoke()")])])])]),t._v(" "),a("p",[t._v("了解更多操作符对应的具名函数，请点击："),a("a",{attrs:{href:"https://www.kotlincn.net/docs/reference/operator-overloading.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.kotlincn.net/docs/reference/operator-overloading.html"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"操作符重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作符重载"}},[t._v("#")]),t._v(" 操作符重载")]),t._v(" "),a("p",[t._v("根据 Kotlin 官网给出的操作符和与之对应的具名函数，我们可以自定义一个计算复数的类 Complex ：")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imaginary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复数相加：实部与虚部分别相加")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Complex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Complex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("real "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("real"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imaginary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imaginary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复数与整数相加，只处理实部")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Complex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("real "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imaginary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复数使用()时，求弦长（三角形的斜边长度）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Double "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hypot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("real"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imaginary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("real")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" + ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("imaginary")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('i"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 + 4i")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" c2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 + 7.5i")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5.0 + 11.5i")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5.0 + 4.0i")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("一个类的同名运算符重载是可以有多个的，但参数类型或返回值类型要有所区别。")]),t._v(" "),a("ul",[a("li",[t._v("何类都可以定义或重载父类的基本运算符")]),t._v(" "),a("li",[t._v("运算符重载是通过重载与运算符对应的具名函数来定义")]),t._v(" "),a("li",[t._v("运算符重载对参数个数作要求，对参数和返回值类型不作要求")]),t._v(" "),a("li",[t._v("不能像 Scala 那样定义任意运算符,如：$在 Kotlin 中就没有与之对应的具名函数。")])]),t._v(" "),a("h2",{attrs:{id:"中缀表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中缀表达式"}},[t._v("#")]),t._v(" 中缀表达式")]),t._v(" "),a("p",[t._v("上面已经说到了，Kotlin 不能像 Scala 那样定义任意运算符，那有没有办法定义一种具名函数，使其代码的书写跟运算符一样的呢？答案是：使用中缀表达式。")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Book "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("infix")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("any"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Desktop\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" book "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" desktop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Desktop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// println(book.on(desktop)) // 中缀表达式 本质还是函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book on desktop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("中缀表达式是 只有一个参数，且用 "),a("code",[t._v("infix")]),t._v(" 修饰 的函数")]),t._v(" "),a("li",[t._v("中缀表达式的作用是让函数调用时，可以省略 "),a("code",[t._v(".")]),t._v(" 和 "),a("code",[t._v("()")])])]),t._v(" "),a("blockquote",[a("p",[t._v("中缀表达式一般只用于 dsl，滥用反而会让代码变得不够清晰。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);