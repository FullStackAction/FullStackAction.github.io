(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{496:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("iframe",{attrs:{src:"//player.bilibili.com/player.html?isOutside=true&aid=112665531909649&bvid=BV1gAgreJE55&cid=500001593299517&p=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"100%",height:"500px"}}),t._v(" "),a("h2",{attrs:{id:"一、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),a("p",[t._v("相信大家接触【即时通信应用】的时候都会遇到这个问题，那就是如何去实现聊天页面的键盘和其它功能面板的丝滑切换，这种问题也有人向 "),a("code",[t._v("Flutter")]),t._v(" 官方提出过 "),a("code",[t._v("issue")]),t._v("，如下这两个：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/flutter/flutter/issues/121059",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/flutter/flutter/issues/121059"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/flutter/flutter/issues/32583",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/flutter/flutter/issues/32583"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20230813121546/image/202406231252604.gif",alt:""}})]),t._v(" "),a("p",[t._v("可以看到，从表情面板切到文本输入框时会抖动一下，影响用户体验。")]),t._v(" "),a("p",[t._v("但几年过去了依旧没有得到解决，再加上我自己也有这个小烦恼，所以我与 "),a("a",{attrs:{href:"https://github.com/GitLqr",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitLqr"),a("OutboundLink")],1),t._v("（GitHub: "),a("a",{attrs:{href:"https://github.com/GitLqr",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/GitLqr"),a("OutboundLink")],1),t._v("）一起开发了这个 "),a("code",[t._v("chat_bottom_container")]),t._v("，来帮助我们快速实现这个丝滑切换的效果。")]),t._v(" "),a("h2",{attrs:{id:"二、效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、效果"}},[t._v("#")]),t._v(" 二、效果")]),t._v(" "),a("p",[t._v("这里先附上效果图，好让大家直观感受一下~")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20230813121546/image/202406172255393.gif",alt:""}})]),t._v(" "),a("p",[t._v("下面我们一起来看看怎么使用吧。")]),t._v(" "),a("h2",{attrs:{id:"三、集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、集成"}},[t._v("#")]),t._v(" 三、集成")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("chat_bottom_container")]),t._v(" 添加到你的 "),a("code",[t._v("pubspec.yaml")]),t._v(" 文件中")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("dependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  chat_bottom_container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" latest_version\n")])])]),a("p",[t._v("具体版本大家到 "),a("code",[t._v("pub.dev")]),t._v(" 上复制粘贴最新的吧，附上链接："),a("a",{attrs:{href:"https://pub.dev/packages/chat_bottom_container",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pub.dev/packages/chat_bottom_container"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("Android")]),t._v(" 端需要添加 "),a("code",[t._v("jitpack")]),t._v(" 仓库到你的项目根目录下的 "),a("code",[t._v("build.gradle")]),t._v(" 文件中:")]),t._v(" "),a("div",{staticClass:"language-gradle extra-class"},[a("pre",{pre:!0,attrs:{class:"language-gradle"}},[a("code",[t._v("allprojects "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repositories")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jitpack.io'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在需要使用的地方导入 "),a("code",[t._v("chat_bottom_container")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:chat_bottom_container/chat_bottom_container.dart'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"四、使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、使用"}},[t._v("#")]),t._v(" 四、使用")]),t._v(" "),a("h3",{attrs:{id:"页面布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面布局"}},[t._v("#")]),t._v(" 页面布局")]),t._v(" "),a("p",[t._v("首先第一件事，确定整体的页面布局")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scaffold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置为 false")]),t._v("\n    resizeToAvoidBottomInset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      mainAxisAlignment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainAxisAlignment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Expanded")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输入框视图")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildInputView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 底部容器")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildPanelContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里就两个注意点：")]),t._v(" "),a("ol",[a("li",[t._v("底部容器放在最底下")]),t._v(" "),a("li",[a("code",[t._v("resizeToAvoidBottomInset")]),t._v(" 必须设置为 "),a("code",[t._v("false")])])]),t._v(" "),a("h3",{attrs:{id:"底部容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底部容器"}},[t._v("#")]),t._v(" 底部容器")]),t._v(" "),a("p",[t._v("输入框视图的样式各种各样，这里就不说了，大家爱怎么实现都行，接下来我们来看看怎么使用 "),a("code",[t._v("chat_bottom_container")]),t._v(" 这个库实现底部容器，代码如下：")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 自定义底部面板类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收起")]),t._v("\n  none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 键盘")]),t._v("\n  keyboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表情")]),t._v("\n  emoji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其它工具")]),t._v("\n  tool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// chat_bottom_container 的控制器，用来告知 chat_bottom_container 需要切面板类型了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 注：这里传泛型传了 PanelType，是为了与外部的面板类型相关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" controller "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatBottomPanelContainerController")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 输入框的焦点对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FocusNode")]),t._v(" inputFocusNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FocusNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 记录当前的底部面板类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),t._v(" currentPanelType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildPanelContainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatBottomPanelContainer")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    inputFocusNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inputFocusNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    otherPanelWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回自定义的面板视图")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SizedBox")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emoji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表情面板")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildEmojiPickerPanel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其它工具面板")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_buildToolPanel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SizedBox")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    onPanelTypeChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("panelType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可用来记录当前的面板类型（该操作非必须~）")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// panelType: chat_bottom_container 内部定义的面板类型，就三种（.none|.keyboard|.other）")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data: 外部自定义的底部面板类型")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("panelType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatBottomPanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          currentPanelType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatBottomPanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          currentPanelType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatBottomPanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emoji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              currentPanelType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emoji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              currentPanelType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              currentPanelType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 底部面板容器背景色")]),t._v("\n    panelBgColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" panelBgColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("chat_bottom_container")]),t._v(" 内部定义的面板类型，就三种")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatBottomPanelType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无")]),t._v("\n  none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 键盘")]),t._v("\n  keyboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其它")]),t._v("\n  other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("因为 "),a("code",[t._v("chat_bottom_container")]),t._v(" 并不关心你外部除了键盘外还有多少种面板类型，所以这里统一视为是 "),a("code",[t._v("ChatBottomPanelType.other")]),t._v("。")]),t._v(" "),a("p",[t._v("而我们外部开发者不可能不在乎，所以我们在点击表情面板按钮时，调用 "),a("code",[t._v("controller.updatePanelType")]),t._v(" 去切换底部面板类型，并为 "),a("code",[t._v("data")]),t._v(" 这个参数传入外部自定义的底部面板类型，如下代码所示")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updatePanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置 ChatBottomPanelContainer 当前的底部面板类型")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可传入 ChatBottomPanelType.keyboard | ChatBottomPanelType.other | ChatBottomPanelType.none")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChatBottomPanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回调给外部开发者自定义的 PanelType，当 ChatBottomPanelType.other 时必传")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PanelType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emoji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PanelType.tool")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("所以上面提到的泛型就是为了关联 "),a("code",[t._v("otherPanelWidget")]),t._v(" 和 "),a("code",[t._v("onPanelTypeChange")]),t._v(" 回调中的类型，方便我们拿来使用。")]),t._v(" "),a("h2",{attrs:{id:"五、最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、最后"}},[t._v("#")]),t._v(" 五、最后")]),t._v(" "),a("p",[t._v("好了，上述便是该库的核心使用步骤, 我已将上述的 "),a("code",[t._v("Flutter")]),t._v(" 聊天底部面板容器库发布至 "),a("code",[t._v("GitHub")]),t._v(": "),a("a",{attrs:{href:"https://github.com/LinXunFeng/flutter_chat_packages/tree/main/packages/chat_bottom_container",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/LinXunFeng/flutter_chat_packages/tree/main/packages/chat_bottom_container"),a("OutboundLink")],1),t._v(" ，如果接入上有什么问题，可以在链接中查看 "),a("code",[t._v("demo")]),t._v(" 演示代码。")]),t._v(" "),a("p",[t._v("开源不易，如果你也觉得这个库好用，请不吝给个 "),a("code",[t._v("Star")]),t._v(" 👍 ，并多多支持！")]),t._v(" "),a("p",[t._v("本篇到此结束，感谢大家的支持，我们下次再见！ 👋")])])}),[],!1,null,null,null);a.default=e.exports}}]);