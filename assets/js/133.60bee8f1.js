(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{485:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),s("p",[t._v("最近遇到的一个需求上的优化点，在一个详情页中存在提交反馈信息的表单模块，这里简单的模拟了一下，这是运行后的效果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202308131919003.gif",alt:"优化前"}})]),t._v(" "),s("p",[t._v("设计师验收的时候觉得这里有一点需要做下优化，那就是表单视图并不大，提交按钮需要完整的显示出来，讲道理要手动去计算偏移量还是挺麻烦的，但是如果结合我的 "),s("a",{attrs:{href:"https://github.com/LinXunFeng/flutter_scrollview_observer",target:"_blank",rel:"noopener noreferrer"}},[t._v("LinXunFeng/flutter_scrollview_observer"),s("OutboundLink")],1),t._v(" 这个库就完全难不倒我们，咔咔两下就搞定了，优化后的效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202308131920819.gif",alt:"优化后"}})]),t._v(" "),s("p",[s("code",[t._v("Demo")]),t._v(" 链接："),s("a",{attrs:{href:"https://github.com/LinXunFeng/flutter_scrollview_observer/blob/main/example/lib/features/scene/scrollview_form_demo/scrollview_form_demo_page.dart",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/LinXunFeng/flutter_scrollview_observer/blob/main/example/lib/features/scene/scrollview_form_demo/scrollview_form_demo_page.dart"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("接下来我讲一下具体的实现步骤。")]),t._v(" "),s("h2",{attrs:{id:"二、布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、布局"}},[t._v("#")]),t._v(" 二、布局")]),t._v(" "),s("p",[t._v("布局比较容易，简单过一下")]),t._v(" "),s("h3",{attrs:{id:"滚动视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滚动视图"}},[t._v("#")]),t._v(" 滚动视图")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("ListView")]),t._v(" 构建滚动视图")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScrollController")]),t._v(" scrollController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScrollController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildScrollView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" resultWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scrollController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    itemBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    itemCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resultWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"表单模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单模块"}},[t._v("#")]),t._v(" 表单模块")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FocusNode")]),t._v(" formFocusNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FocusNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" resultWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      crossAxisAlignment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CrossAxisAlignment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Feedback'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            fontSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fontWeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FontWeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输入框")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          focusNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" formFocusNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提交按钮")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" double"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          alignment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alignment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          margin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EdgeInsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Submit'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            onPressed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使输入框失去焦点")]),t._v("\n              formFocusNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unfocus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resultWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、实战"}},[t._v("#")]),t._v(" 三、实战")]),t._v(" "),s("p",[t._v("由于滚动视图使用的是 "),s("code",[t._v("ListView")]),t._v("，所以我们使用对应 "),s("code",[t._v("ListViewObserver")]),t._v(" 将其包裹一层做观察")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将滚动视图的 ScrollController 传给 ListObserverController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListObserverController")]),t._v(" observerController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListObserverController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scrollController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nresultWidget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListViewObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" observerController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭自动触发功能")]),t._v("\n  autoTriggerObserveTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildScrollView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不实现观察回调")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// onObserve: (resultModel) {}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注：请留意一下注释掉的 "),s("code",[t._v("onObserve")]),t._v(" 回调，下面会做相关的版本更新说明。")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表单模块的下标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" int formIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听输入框的焦点状态")]),t._v("\nformFocusNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handleFormFocus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleFormFocus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们只处理获得焦点的情况")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("formFocusNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasFocus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获得焦点后，等待键盘完全展示出来")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Future")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delayed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发观察滚动视图")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" observerController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchOnceObserve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    isForce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制观察，不用对比上次的观察结果")]),t._v("\n    isDependObserveCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不依赖观察回调，这样就可以正常返回观察结果")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果观察不成功则不用继续下去了")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isSuccess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据下标从观察结果中找出表单对应的数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" formResultModel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("observeResult"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayingChildModelList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("firstWhere")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" formIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formResultModel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行滚动，使表单视图底部紧贴键盘显示出来")]),t._v("\n  observerController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("animateTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相减的逻辑在正文内说明")]),t._v("\n    formResultModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" formResultModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trailingMarginToViewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    curve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Curves")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("一些额外说明：")]),t._v(" "),s("ul",[s("li",[t._v("等待键盘完全展示出来的时长（"),s("code",[t._v("600 ms")]),t._v("）是测试出来的同时适用于iOS和安卓的一个值，如果你有更好的方式，可以留言分享一下 😁")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("1.16.0")]),t._v(" 版本之前，如果对应的观察回调（如："),s("code",[t._v("onObserve")]),t._v("）没有实现的话，内部的观察逻辑就无法进行下去，提前结束。而在 "),s("code",[t._v("1.16.0")]),t._v(" 版本之后对 "),s("code",[t._v("dispatchOnceObserve")]),t._v(" 方法进行了增强，可以通过对 "),s("code",[t._v("isDependObserveCallback")]),t._v(" 设置为 "),s("code",[t._v("false")]),t._v(" 避开这个逻辑，并且返回值也改造成了 "),s("code",[t._v("Future<ListViewOnceObserveNotificationResult>")]),t._v("，可直接拿到观察结果，相当方便！")]),t._v(" "),s("li",[s("code",[t._v("scrollOffset")]),t._v(" 是当前滚动视图的偏移量")]),t._v(" "),s("li",[s("code",[t._v("trailingMarginToViewport")]),t._v(" 是指当前 "),s("code",[t._v("item")]),t._v(" 到 "),s("code",[t._v("viewport")]),t._v(" 的底部距离，即 "),s("code",[t._v("表单模块视图的底部")]),t._v(" 到 "),s("code",[t._v("滚动视图的视窗底部")]),t._v(" 的间距。")]),t._v(" "),s("li",[t._v("由于上述功能我们是依赖于键盘弹出来的视图高度发生变化的特性，键盘出来时视窗大小受到挤压缩小，所以 "),s("code",[t._v("Scaffold")]),t._v(" 这里的 "),s("code",[t._v("resizeToAvoidBottomInset")]),t._v(" 属性请不要设置为 "),s("code",[t._v("false")]),t._v("。如果设置了 "),s("code",[t._v("false")]),t._v("，则滚动的偏移量需要手动加上键盘的高度~")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scaffold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  resizeToAvoidBottomInset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在理解完上面的内容后，我们再来看一下最终偏移量计算的逻辑，即")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("observerController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("animateTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  formResultModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" formResultModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trailingMarginToViewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  curve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Curves")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202308131921953.png",alt:"图解"}})]),t._v(" "),s("p",[t._v("咱们配图食用，当键盘完全展示出来后，滚动视图的的视窗变小了， 由红色区域变成了蓝色区域，而此时表单模块也完全展示出来了，其底部到视窗之间的间距就是 "),s("code",[t._v("trailingMarginToViewport")]),t._v("，为正数，但是我们需要让它紧贴底部，所以此时滚动视图的偏移量是多了的，需要减去这个 "),s("code",[t._v("trailingMarginToViewport")]),t._v("，这便是最终偏移量计算的逻辑。")])])}),[],!1,null,null,null);s.default=e.exports}}]);