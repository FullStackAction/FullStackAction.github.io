(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{489:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),s("p",[t._v("时间过得真快，距离上一篇介绍 "),s("code",[t._v("scrollview_observer")]),t._v(" 功能的文章已过去了 "),s("code",[t._v("9个月")]),t._v("，目前 "),s("code",[t._v("scrollview_observer")]),t._v(" 也来到了 "),s("code",[t._v("1.21.0")]),t._v(" 版本，现在就带大家来看看都更新了哪些内容吧")]),t._v(" "),s("p",[t._v("GitHub: https://github.com/fluttercandies/flutter_scrollview_observer")]),t._v(" "),s("h2",{attrs:{id:"二、功能点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、功能点"}},[t._v("#")]),t._v(" 二、功能点")]),t._v(" "),s("h3",{attrs:{id:"支持-nestedscrollview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持-nestedscrollview"}},[t._v("#")]),t._v(" 支持 "),s("code",[t._v("NestedScrollView")])]),t._v(" "),s("p",[s("code",[t._v("scrollview_observer")]),t._v(" 的 "),s("code",[t._v("监听滚动视图中正在显示的子部件")]),t._v(" 与 "),s("code",[t._v("滚动到指定下标位置")]),t._v(" 这两大功能，现已对 "),s("code",[t._v("NestedScrollView")]),t._v(" 进行了支持，如下图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20230813121546/image/202407061548786.gif",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("等下一篇文章再跟大家详细介绍使用步骤 : )")])]),t._v(" "),s("h3",{attrs:{id:"支持-center"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持-center"}},[t._v("#")]),t._v(" 支持 "),s("code",[t._v("center")])]),t._v(" "),s("p",[t._v("如下代码所示，在一些场景下，你可能会对 "),s("code",[t._v("CustomScrollView")]),t._v(" 的 "),s("code",[t._v("center")]),t._v(" 进行设置，以此来实现聊天消息页。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildScrollView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomScrollView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _centerKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scrollController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    slivers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildSliverListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redAccent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        onBuild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _sliverListCtx1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildSliverListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueGrey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        onBuild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _sliverListCtx2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// center")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverPadding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EdgeInsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _centerKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildSliverListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("teal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        onBuild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _sliverListCtx3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildSliverListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("purple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        onBuild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          _sliverListCtx4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("但又想使用下标跳转 "),s("code",[t._v("item")]),t._v(" 的功能，放心，"),s("code",[t._v("scrollview_observer")]),t._v(" 具有良好的兼容性，在 "),s("code",[t._v("1.19.1")]),t._v(" 版本下就已得到支持，可随便你如何设置 "),s("code",[t._v("center")]),t._v("，不需要额外做其它操作。")]),t._v(" "),s("h3",{attrs:{id:"observeintervalforscrolling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observeintervalforscrolling"}},[t._v("#")]),t._v(" "),s("code",[t._v("observeIntervalForScrolling")])]),t._v(" "),s("p",[t._v("相信大家都还记得，自动触发观察的时机有以下三种")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("枚举值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("scrollStart")])]),t._v(" "),s("td",[t._v("开始滚动")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("scrollUpdate")])]),t._v(" "),s("td",[t._v("滚动中")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("scrollEnd")])]),t._v(" "),s("td",[t._v("结束滚动")])])])]),t._v(" "),s("p",[t._v("其中 "),s("code",[t._v("scrollUpdate")]),t._v(" 触发观察太过于频繁，其实很多次观察结果并不会相差多少，在大多数使用场景下，对我们来说也不太重要。")]),t._v(" "),s("p",[t._v("为此在本次更新中为 "),s("code",[t._v("ObserverController")]),t._v(" 新增了 "),s("code",[t._v("observeIntervalForScrolling")]),t._v(" 属性，用来设置触发观察的间隔，从而大量减少不必要的观察计算。")]),t._v(" "),s("p",[t._v("需要注意以下两点：")]),t._v(" "),s("ul",[s("li",[t._v("为了不改变之前的行为，所以默认值为 "),s("code",[t._v("Duration.zero")]),t._v("，所以大家需要自行调整，推荐设置为 "),s("code",[t._v("Duration(milliseconds: 500)")]),t._v("。")]),t._v(" "),s("li",[t._v("该属性仅对 "),s("code",[t._v("scrollUpdate")]),t._v(" 有效。")])]),t._v(" "),s("h3",{attrs:{id:"visiblemainaxissize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visiblemainaxissize"}},[t._v("#")]),t._v(" "),s("code",[t._v("visibleMainAxisSize")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("item")]),t._v(" 显示的尺寸大小")])]),t._v(" "),s("p",[t._v("如图所示，各固定 "),s("code",[t._v("200")]),t._v(" 高度的 "),s("code",[t._v("item")]),t._v(" 在 "),s("code",[t._v("ListView")]),t._v(" 中的 "),s("code",[t._v("visibleMainAxisSize")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20230813121546/image/202407061548544.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"visiblefraction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visiblefraction"}},[t._v("#")]),t._v(" "),s("code",[t._v("visibleFraction")])]),t._v(" "),s("blockquote",[s("p",[t._v("在 "),s("code",[t._v("sliver")]),t._v(" 中 "),s("code",[t._v("item")]),t._v(" 的显示占比")]),t._v(" "),s("p",[t._v("计算公式：visibleFraction = visibleMainAxisSize / paintExtent")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20230813121546/image/202407061548812.png",alt:""}})]),t._v(" "),s("p",[t._v("如图所示，当前 "),s("code",[t._v("SliverList")]),t._v(" 的绘制长度 "),s("code",[t._v("paintExtent")]),t._v(" 为 "),s("code",[t._v("376")]),t._v("，其 "),s("code",[t._v("item20")]),t._v(" 的可视大小 "),s("code",[t._v("visibleMainAxisSize")]),t._v(" 为 "),s("code",[t._v("30")]),t._v("，所以 "),s("code",[t._v("item20")]),t._v(" 的可视占比 "),s("code",[t._v("visibleFraction")]),t._v(" 为 "),s("code",[t._v("30/376")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"sliverobservecontext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sliverobservecontext"}},[t._v("#")]),t._v(" "),s("code",[t._v("SliverObserveContext")])]),t._v(" "),s("p",[t._v("用于获取 "),s("code",[t._v("sliver")]),t._v(" 的 "),s("code",[t._v("BuildContext")]),t._v("，这在观察 "),s("code",[t._v("sliver")]),t._v(" 的场景下非常有用。")]),t._v(" "),s("p",[t._v("如下 "),s("code",[t._v("CustomScrollView")]),t._v(" 配置了多个 "),s("code",[t._v("sliver")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildScrollView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomScrollView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scrollController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    physics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClampingScrollPhysics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    slivers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// banner")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverPersistentHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中间任意视图")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverObserveContextToBoxAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tabBar")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverPersistentHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建多个 SliverGird")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modelList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mainIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildSectionGridView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mainIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们需要观察当前哪个 "),s("code",[t._v("SliverGrid")]),t._v(" 是第一个，然后去同步更新 "),s("code",[t._v("TabBar")]),t._v(" 的选中下标。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 记录各 Sliver 的下标与 BuildContext")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" sliverIndexCtxMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverViewObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sliverObserverController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sliverContexts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sliverIndexCtxMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onObserveViewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("但在研发过程中，我们很有可能会给 "),s("code",[t._v("SliverGrid")]),t._v(" 再加一层 "),s("code",[t._v("Sliver")]),t._v(" 去添加装饰、间距等，而 "),s("code",[t._v("onObserveViewport")]),t._v(" 只认最外层的 "),s("code",[t._v("sliver")]),t._v("，所以在这里我们就用 "),s("code",[t._v("SliverObserveContext")]),t._v(" 去进行包裹成为最外层，在其 "),s("code",[t._v("onObserve")]),t._v(" 回调中就可以拿到对应的 "),s("code",[t._v("BuildContext")]),t._v(" 并记录起来。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildSectionGridView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int mainIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" resultWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverGrid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    gridDelegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverGridDelegateWithFixedCrossAxisCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverChildBuilderDelegate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到了 SliverGrid 的 BuildContext")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      childCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  resultWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverPadding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EdgeInsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sliver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" resultWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在最外层使用 SliverObserveContext 进行包裹，以获取是外层的 BuildContext。")]),t._v("\n  resultWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverObserveContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    onObserve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sliverIndexCtxMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mainIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" resultWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resultWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"聊天保持位置功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聊天保持位置功能"}},[t._v("#")]),t._v(" 聊天保持位置功能")]),t._v(" "),s("p",[t._v("保持位置功能目前有三种模式可选")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatScrollObserverHandleMode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 常规模式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 来一条消息就插入一条消息")]),t._v("\n  normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 生成式模式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 比如 ChatGPT 这种流式自更新的消息")]),t._v("\n  generative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 指定模式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 可以灵活指定用来做为参照的消息item")]),t._v("\n  specified"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("本次更新的是指定模式，因为原 "),s("code",[t._v("refItemRelativeIndex")]),t._v(" 和 "),s("code",[t._v("refItemRelativeIndexAfterUpdate")]),t._v(" 两个参数仅能表达相对下标之意，而无法表达参考坐标系，所以将其废弃。")]),t._v(" "),s("p",[t._v("新增 "),s("code",[t._v("refItemIndex")]),t._v(" 与 "),s("code",[t._v("refItemIndexAfterUpdate")]),t._v("，并结合 "),s("code",[t._v("refIndexType")]),t._v(" 来更好地指定参考 "),s("code",[t._v("item")]),t._v("。")]),t._v(" "),s("p",[t._v("我们先来看一下 "),s("code",[t._v("refIndexType")]),t._v(" 的类型定义")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatScrollObserverRefIndexType")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///     relativeIndex        trailing")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           6         |     item16    | cacheExtent")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   ----------------- -----------------")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           5         |     item15    |")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           4         |     item14    |")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           3         |     item13    | 正在显示中的item")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           2         |     item12    |")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           1         |     item11    |")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   ----------------- -----------------")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           0         |     item10    | cacheExtent <---- start")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                          leading")]),t._v("\n  relativeIndexStartFromCacheExtent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///     relativeIndex        trailing")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           5         |     item16    | cacheExtent")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   ----------------- -----------------")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           4         |     item15    |")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           3         |     item14    |")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           2         |     item13    | 正在显示中的item")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           1         |     item12    |")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           0         |     item11    |             <---- start")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   ----------------- -----------------")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///          -1         |     item10    | cacheExtent")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                          leading")]),t._v("\n  relativeIndexStartFromDisplaying"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 直接指定 item 的下标")]),t._v("\n  itemIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如上，一共有 "),s("code",[t._v("3种")]),t._v(" 参考模式供你选择")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("relativeIndexStartFromCacheExtent")]),t._v(": 从渲染区的 "),s("code",[t._v("item")]),t._v(" 开始计算下标。这种模式一般用于普通消息插入，因为插入消息必定是在 "),s("code",[t._v("0")]),t._v(" 处，插入消息前后不变的就是原来的最新消息，其下标从 "),s("code",[t._v("0")]),t._v(" 变成了 "),s("code",[t._v("1")]),t._v("，此时 "),s("code",[t._v("refItemIndex")]),t._v(" 可指定为 "),s("code",[t._v("0")]),t._v("，而 "),s("code",[t._v("refItemIndexAfterUpdate")]),t._v(" 指定为 "),s("code",[t._v("1")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("relativeIndexStartFromCacheExtent")]),t._v(": 从展示区的 "),s("code",[t._v("item")]),t._v(" 开始计算下标。该模式比较少用，一般是结合观察功能，因为通过观察功能，我们是可以轻松得知正在显示的 "),s("code",[t._v("item")]),t._v(" 有哪些，假设你此时对正在显示的第一个 "),s("code",[t._v("item")]),t._v(" 做了内容变更，但又不想影响第二个正在显示的 "),s("code",[t._v("item")]),t._v(" 的偏移，那这个模式正好适合当前这种的场景。因为改变前后不变的是第二个正在显示的 "),s("code",[t._v("item")]),t._v("，所以 "),s("code",[t._v("refItemIndex")]),t._v(" 指定为 "),s("code",[t._v("1")]),t._v("， "),s("code",[t._v("refItemIndexAfterUpdate")]),t._v(" 也指定为 "),s("code",[t._v("1")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("itemIndex")]),t._v(": 三种模式中最容易理解的模式，用来参照的 "),s("code",[t._v("item")]),t._v(" 的下标是什么，你就指定什么，比如上述中 "),s("code",[t._v("item11")]),t._v(" 发生了变化，我们想保持位置就可以拿不变的 "),s("code",[t._v("item12")]),t._v(" 来做参照，所以 "),s("code",[t._v("refItemIndex")]),t._v(" 和 "),s("code",[t._v("refItemIndexAfterUpdate")]),t._v(" 都指定为 "),s("code",[t._v("12")]),t._v("。")])]),t._v(" "),s("p",[t._v("记住，不管你选择哪种参考模式，都需要注意的一点，即指定的参照 "),s("code",[t._v("item")]),t._v(" 需要在变化前后都有被渲染，这样才能确保保持位置的功能可以正常生效！")]),t._v(" "),s("h2",{attrs:{id:"三、最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、最后"}},[t._v("#")]),t._v(" 三、最后")]),t._v(" "),s("p",[t._v("通过上述示例的讲解，相信你对 "),s("code",[t._v("scrollview_observer")]),t._v(" 的使用又更加清楚，开源不易，如果你也觉得这个库好用，请不吝给个 "),s("code",[t._v("Star")]),t._v("  👍")]),t._v(" "),s("p",[t._v("GitHub: "),s("a",{attrs:{href:"https://github.com/fluttercandies/flutter_scrollview_observer",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/fluttercandies/flutter_scrollview_observer"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("本篇到此结束，感谢大家的支持，我们下次再见！ 👋")])])}),[],!1,null,null,null);s.default=e.exports}}]);