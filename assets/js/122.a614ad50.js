(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{473:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),s("p",[s("code",[t._v("Flutter")]),t._v(" 中的 "),s("code",[t._v("ListView")]),t._v(" 相信大家都用的很熟了，不过有没有人遇到过一些这样的需求：")]),t._v(" "),s("ul",[s("li",[t._v("详情页滚动到某一指定模块后，停止滚动并根据该指定模块的大小弹出全屏新手引导")]),t._v(" "),s("li",[t._v("详情页在滚动过程中，顶部的模块定位导航栏需要及时更新指示器下标")]),t._v(" "),s("li",[t._v("视频列表在滚动过程中，适当位置的子部件会自动进行播放视频")]),t._v(" "),s("li",[t._v("等等")])]),t._v(" "),s("p",[t._v("在日常开发过程中这种类似的功能需求还是蛮多的，因此我封装了一个库："),s("a",{attrs:{href:"https://github.com/LinXunFeng/flutter_scrollview_observer",target:"_blank",rel:"noopener noreferrer"}},[t._v("flutter_scrollview_observer"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("相信可以很好的帮助大家解决这些问题 😃")]),t._v(" "),s("h2",{attrs:{id:"二、应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、应用场景"}},[t._v("#")]),t._v(" 二、应用场景")]),t._v(" "),s("p",[t._v("下面我们来看看常见的应用场景：")]),t._v(" "),s("h3",{attrs:{id:"_1、获取最顶部的子部件信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取最顶部的子部件信息"}},[t._v("#")]),t._v(" 1、获取最顶部的子部件信息")]),t._v(" "),s("p",[t._v("可以获取当前的第一个子部件和所有正在显示的子部件信息")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202205291628046.gif",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2、视频列表自动播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、视频列表自动播放"}},[t._v("#")]),t._v(" 2、视频列表自动播放")]),t._v(" "),s("p",[t._v("当子部件进入列表中间区域时，自动播放视频")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202205291628769.gif",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3、模块定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、模块定位"}},[t._v("#")]),t._v(" 3、模块定位")]),t._v(" "),s("p",[t._v("当滚动到一些特定模块时，顶部的 "),s("code",[t._v("TabBar")]),t._v(" 的指示器切换到对应模块 "),s("code",[t._v("tab")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202205291628102.gif",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"三、使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、使用"}},[t._v("#")]),t._v(" 三、使用")]),t._v(" "),s("h3",{attrs:{id:"_1、基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本使用"}},[t._v("#")]),t._v(" 1、基本使用")]),t._v(" "),s("p",[t._v("创建 "),s("code",[t._v("ListView")]),t._v("，并在其 "),s("code",[t._v("builder")]),t._v(" 回调中，将 "),s("code",[t._v("SliverListView")]),t._v(" 的 "),s("code",[t._v("BuildContext")]),t._v(" 记录起来")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" _sliverListViewContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("separated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    itemBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 builder 回调中，将 BuildContext 记录起来")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sliverListViewContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _sliverListViewContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildListItemView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    separatorBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildSeparatorView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    itemCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注：在使用过程中，需要记录 "),s("code",[t._v("SliverListView")]),t._v(" 的 "),s("code",[t._v("BuildContext")]),t._v("，"),s("code",[t._v("ListView")]),t._v(" 最终也是使用 "),s("code",[t._v("SliverListView")]),t._v(" 来进行布局的")])]),t._v(" "),s("p",[t._v("构建 "),s("code",[t._v("ListViewObserver")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("child")]),t._v(": 将构建的 "),s("code",[t._v("ListView")]),t._v(" 做为 "),s("code",[t._v("ListViewObserver")]),t._v(" 的子部件")]),t._v(" "),s("li",[s("code",[t._v("sliverListContexts")]),t._v(": 该回调中需要返回被观察的 "),s("code",[t._v("ListView")]),t._v(" 的 "),s("code",[t._v("BuildContext")])]),t._v(" "),s("li",[s("code",[t._v("onObserve")]),t._v(": 该回调可以监听到当前正在显示的子部件的相关信息")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListViewObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sliverListContexts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sliverListViewContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" _sliverListViewContext"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onObserve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resultMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_sliverListViewContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印当前正在显示的第一个子部件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firstChild.index -- ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印当前正在显示的所有子部件下标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'displaying -- ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayingChildIndexList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("除了上述几个常用参数外，还有：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("leadingOffset")]),t._v("：顶部偏移，当列表的视窗会固定被其它视图挡住时使用")]),t._v(" "),s("li",[s("code",[t._v("dynamicLeadingOffset")]),t._v("：动态顶部偏移，当列表的视窗会动态被其它视图挡住时使用")])]),t._v(" "),s("p",[t._v("这里看一下图就明白了")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202205291629435.gif",alt:""}})]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("// 导航栏半透明\nflutter: firstChild.index -- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nflutter: displaying -- "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nflutter: firstChild.index -- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nflutter: displaying -- "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n// 导航栏完全不透明\nflutter: firstChild.index -- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nflutter: displaying -- "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("滚动过程会改变顶部的导航栏透明度，在这个前提下：")]),t._v(" "),s("ol",[s("li",[t._v("当半透明时，我们希望列表的所有可见子部件从最顶部开始算起")]),t._v(" "),s("li",[t._v("当完成不透明时，我们希望列表的所有可见子部件从导航栏底部开始算起")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListViewObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  dynamicLeadingOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_navBgAlpha "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _safeAreaPaddingTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _navContentHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("toNextOverPercent")]),t._v("：内部逻辑在取到第一个子部件后，如果该子部件被挡住的大小与自身大小的比例超过了该值，则会取下一个子部件为第一个子部件。")])]),t._v(" "),s("h3",{attrs:{id:"_2、手动触发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、手动触发"}},[t._v("#")]),t._v(" 2、手动触发")]),t._v(" "),s("p",[t._v("默认是 "),s("code",[t._v("ListView")]),t._v(" 在滚动的时候才会观察到相关数据。")]),t._v(" "),s("p",[t._v("如果需要在非滚动状态下进行一次观察，可以使用 "),s("code",[t._v("ListViewOnceObserveNotification")]),t._v(" 进行手动触发")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ListViewOnceObserveNotification().dispatch(_sliverListViewContext);\n")])])]),s("blockquote",[s("p",[t._v("注：如果频繁触发，且观察结果相同，则 "),s("code",[t._v("onObserve")]),t._v(" 只会回调一次")])]),t._v(" "),s("h3",{attrs:{id:"_3、子部件信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、子部件信息"}},[t._v("#")]),t._v(" 3、子部件信息")]),t._v(" "),s("p",[t._v("观察到的模型数据：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListViewObserveModel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 第一个子部件模型数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListViewObserveDisplayingChildModel")]),t._v(" firstChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 正在显示的所有子部件模型数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListViewObserveDisplayingChildModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" displayingChildModelList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 正在显示的所有子部件下标")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" displayingChildIndexList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      displayingChildModelList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("子部件模型数据：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListViewObserveDisplayingChildModel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 子部件下标")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" int index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 子部件的 RenderObject")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RenderBox")]),t._v(" renderObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("GitHub: "),s("a",{attrs:{href:"https://github.com/LinXunFeng/flutter_scrollview_observer",target:"_blank",rel:"noopener noreferrer"}},[t._v("LinXunFeng/flutter_scrollview_observer"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);