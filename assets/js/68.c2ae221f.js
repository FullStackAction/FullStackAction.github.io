(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{418:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、屏幕适配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、屏幕适配"}},[t._v("#")]),t._v(" 一、屏幕适配")]),t._v(" "),s("p",[t._v('你可能会问 "都 2021 年了还折腾屏幕适配？直接用 dp 单位适配不好吗？", 确实，如果公司的 UI 设计师、产品经理以及老板，能明白为什么一套 UI 在不同设备上显现出来的一些差异并不是 bug 时，开发者直接用 dp 单位配合一些布局技巧来进行适配是可以的，但是，实现多数情况下并不是如此美好，他们更希望看到的是 UI 在不同屏幕上，仅仅只是缩放的区别，为了满足这种要求，应用第三方屏幕适配方案就非常有必要了。根据在网上查到的比较好的原生屏幕适配方案有两种：')]),t._v(" "),s("ul",[s("li",[t._v("smallestWidth 限定符适配方案")]),t._v(" "),s("li",[t._v("今日头条屏幕适配方案")])]),t._v(" "),s("blockquote",[s("p",[t._v("两者的原理，以及优缺点这里不废话，有兴趣的可通过下方链接了解：")]),t._v(" "),s("ul",[s("li",[t._v("smallestWidth 限定符适配方案："),s("a",{attrs:{href:"https://juejin.cn/post/6844903681524006925",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903681524006925"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("今日头条屏幕适配方案："),s("a",{attrs:{href:"https://juejin.cn/post/6844903661819133960",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903661819133960"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("考虑到 apk 体积包大小问题，最终还是选择了 "),s("code",[t._v("AndroidAutoSize")]),t._v("，同时项目中有使用到插件化框架 "),s("code",[t._v("RePlugin")]),t._v("，需要在插件中集成 "),s("code",[t._v("AndroidAutoSize")]),t._v("，然而网上又几乎没有相关的集成踩坑资料，于是便有了本篇文章~")]),t._v(" "),s("h2",{attrs:{id:"二、问题与解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、问题与解决方案"}},[t._v("#")]),t._v(" 二、问题与解决方案")]),t._v(" "),s("p",[s("code",[t._v("AndroidAutoSize")]),t._v(" 的使用说明及已知问题汇总请访问以下链接查看：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/JessYanCoding/AndroidAutoSize",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/JessYanCoding/AndroidAutoSize"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/JessYanCoding/AndroidAutoSize/issues/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/JessYanCoding/AndroidAutoSize/issues/13"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("按作者的集成步骤，在 app 作为单品运行时是没有任何问题的，但是，如果你项目中使用了 RePlugin，一旦 app 作为插件运行中，你就会发现，一点用都没有！！！")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：本文基于关闭常驻进程的前提完成的论证及测试，即："),s("code",[t._v("persistentEnable = false")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_1、框架初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、框架初始化"}},[t._v("#")]),t._v(" 1、框架初始化")]),t._v(" "),s("p",[t._v("不可否认，"),s("code",[t._v("AndroidAutoSize")]),t._v(" 的框架设计很优秀，利用 "),s("code",[t._v("ContentProvider")]),t._v(' 实现框架自动初始化工作，然而，这种"黑科技"在个别情况下不好使，比如有些魔改 ROM，还有就是作为 RePlugin 插件的时候，所以，'),s("code",[t._v("AndroidAutoSize")]),t._v(" 没起作用的一方面原因是框架未能正常初始化，插件 AndroidManifest.xml 中声明的 "),s("code",[t._v("ContentProvider")]),t._v(" 并不会自动被执行创建，也就是 "),s("code",[t._v("InitProvider")]),t._v(" 没被执行到，好在该库提供了手动初始化的方式：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MyApplication "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动直接执行 AutoSizeConfig#init()")]),t._v("\n        AutoSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkAndInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过启动InitProvider，再由InitProvider执行 AutoSizeConfig#init()")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AutoSize.initCompatMultiProcess(this)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("AutoSize.checkAndInit(this)")]),t._v(" 亲测有效，"),s("code",[t._v("AutoSize.initCompatMultiProcess(this)")]),t._v(" 没有测试过，理论上也是可以的，但大可不必。")])]),t._v(" "),s("p",[t._v("通过上面的代码就可以解决 "),s("code",[t._v("AndroidAutoSize")]),t._v(" 的初始化问题。另外，如果你担心 app 作为单品时，"),s("code",[t._v("AutoSizeConfig#init()")]),t._v(" 会被 "),s("code",[t._v("AutoSize.checkAndInit(this)")]),t._v(" 和 "),s("code",[t._v("InitProvider")]),t._v(" 执行多次的话，你可以选择把 "),s("code",[t._v("InitProvider")]),t._v(" 移除掉：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="utf-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("tools")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".MyApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provider")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("tools:")]),t._v("node")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("remove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("me.jessyan.autosize.InitProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("exported")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("multiprocess")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("authorities")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${your application id}.autosize-init-provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("关键点是 "),s("code",[t._v('tools:node="remove"')]),t._v("，可以把 aar 中的 AndroidManifest.xml 声明好的组件移除。此处的 "),s("code",[t._v("${your application id}")]),t._v(" 需要根据你当前 app 的 appid 来修改，不知道怎么改的话，可以先正常打个包，再反编译看看 AndroidManifest.xml 中原来的 "),s("code",[t._v("InitProvider")]),t._v(" 声明是怎样的就明白了。")]),t._v(" "),s("blockquote",[s("p",[t._v("其实并不需要担心 "),s("code",[t._v("AutoSizeConfig#init()")]),t._v(" 会被执行多次的问题，框架肯定有做好防护措施的，但如果你很严谨，不想有意外情况发生的话，强烈建议把 "),s("code",[t._v("InitProvider")]),t._v(" 移除，这样的话，不管是单品还是插件，初始化逻辑都将是一样的。")])]),t._v(" "),s("h3",{attrs:{id:"_2、启动屏幕适配功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、启动屏幕适配功能"}},[t._v("#")]),t._v(" 2、启动屏幕适配功能")]),t._v(" "),s("p",[t._v("解决完框架初始化的问题，现在 "),s("code",[t._v("AndroidAutoSize")]),t._v(" 还是无法起作用的。通过 "),s("code",[t._v("AndroidAutoSize")]),t._v(" 源码可以得知，框架会给 Application 注册一个 "),s("code",[t._v("ActivityLifecycleCallbacks")]),t._v("，用于执行各个 Activity 初始化时的适配工作，然后，当 app 作为插件时这个 "),s("code",[t._v("ActivityLifecycleCallbacks")]),t._v(" 是不会回调的-_-")]),t._v(" "),s("ul",[s("li",[t._v("原因：插件的 Application 无法正常注册 "),s("code",[t._v("ActivityLifecycleCallbacks")]),t._v(" "),s("ul",[s("li",[t._v("依据在此："),s("a",{attrs:{href:"https://github.com/Qihoo360/RePlugin/issues/509",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Qihoo360/RePlugin/issues/509"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("解决方案：用宿主的 Application 注册 "),s("code",[t._v("ActivityLifecycleCallbacks")])])]),t._v(" "),s("p",[t._v("怎么用宿主的 Application 注册 "),s("code",[t._v("ActivityLifecycleCallbacks")]),t._v(" 呢？Easy，在初始化 "),s("code",[t._v("AndroidAutoSize")]),t._v(" 的时候用宿主的 Application 即可：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (RePlugin.getHostContext() != null) { // 插件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     AutoSize.checkAndInit(RePlugin.getHostContext().applicationContext as Application)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// } else { // 单品")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     AutoSize.checkAndInit(this)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 简洁写法：")]),t._v("\nAutoSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkAndInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RePlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHostContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationContext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Application "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("好了，到这里 "),s("code",[t._v("AndroidAutoSize")]),t._v(" 就起作用了。")]),t._v(" "),s("blockquote",[s("p",[t._v("这个 "),s("code",[t._v("ActivityLifecycleCallbacks")]),t._v(" (也就是 "),s("code",[t._v("ActivityLifecycleCallbacksImpl")]),t._v(") 相当重要，它生效了， "),s("code",[t._v("CancelAdapt")]),t._v(" 和 "),s("code",[t._v("CustomAdapt")]),t._v(" 才能正常使用。")])]),t._v(" "),s("h3",{attrs:{id:"_3、指定设计图尺寸"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、指定设计图尺寸"}},[t._v("#")]),t._v(" 3、指定设计图尺寸")]),t._v(" "),s("p",[t._v("现在框架初始化，以及屏幕适配功能都已经没有问题了，接下来就是配置工作，默认情况下，"),s("code",[t._v("AndroidAutoSize")]),t._v(" 会读取开发者在 AndroidManifest.xml 中预先填写好的 meta 设计图尺寸，用于计算 "),s("code",[t._v("DisplayMetrics#density")]),t._v("，然而当 app 作为插件时，你会发现这个配置也是无效的。")]),t._v(" "),s("ul",[s("li",[t._v("原因：框架中通过 context 拿到的是宿主的 AndroidManifest.xml 信息，因为上面 "),s("code",[t._v("AutoSize#checkAndInit()")]),t._v(" 传入的是宿主的 Application\n"),s("ul",[s("li",[t._v("依据在此："),s("a",{attrs:{href:"https://github.com/Qihoo360/RePlugin/issues/468",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Qihoo360/RePlugin/issues/468"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("解决方案：由于 "),s("code",[t._v("AutoSizeConfig#getMetaData(final Context context)")]),t._v(" 是私有方法，所以，你有 2 种选择：\n"),s("ul",[s("li",[t._v("反射调用 "),s("code",[t._v("AutoSizeConfig#getMetaData()")]),t._v(" 并传入插件的 Application")]),t._v(" "),s("li",[t._v("改为代码配置的方式，给 "),s("code",[t._v("AutoSizeConfig")]),t._v(" 直接指定设计图尺寸")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("别跟我说什么在宿主的 AndroidManifest.xml 中配置设计图尺寸，太 low 了-_-")])]),t._v(" "),s("p",[t._v("怎么简单怎么来，这里就通过代码方式给 "),s("code",[t._v("AutoSizeConfig")]),t._v(" 直接指定设计图尺寸：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("AutoSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkAndInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RePlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHostContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationContext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Application "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：一定要在框架初始化之后再进行配置，否则框架内部拿不到正确的设计图尺寸（会被 AutoSizeConfig#init() 重置）")]),t._v("\nAutoSizeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动指定设计图尺寸，不读取清单文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDesignWidthInDp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1280")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDesignHeightInDp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置使用冷门尺寸单位作为副单位")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unitsManager\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSupportDP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSupportSP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSupportSubunits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Subunits"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("至此，"),s("code",[t._v("AndroidAutoSize")]),t._v(" 无论是单品还是插件都能正常运作了，Nice~")]),t._v(" "),s("h2",{attrs:{id:"三、其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、其他"}},[t._v("#")]),t._v(" 三、其他")]),t._v(" "),s("p",[t._v("这里就已经和 RePlugin 的坑没有关系了，只是记录一些 "),s("code",[t._v("AndroidAutoSize")]),t._v(" 的使用问题。")]),t._v(" "),s("h3",{attrs:{id:"_1、重写-activity-getresources-导致-canceladapt-和-customadapt-失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、重写-activity-getresources-导致-canceladapt-和-customadapt-失效"}},[t._v("#")]),t._v(" 1、重写 "),s("code",[t._v("Activity#getResources()")]),t._v(" 导致 "),s("code",[t._v("CancelAdapt")]),t._v(" 和 "),s("code",[t._v("CustomAdapt")]),t._v(" 失效")]),t._v(" "),s("p",[t._v("原因是在 getResources()方法中没有判断当前 Activity 是否有实现 "),s("code",[t._v("CancelAdapt")]),t._v(" 和 "),s("code",[t._v("CustomAdapt")]),t._v("，一股脑全部适配导致的，只需要做个判断就好了：")]),t._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" BaseActivity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AppCompatActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Resources "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" CancelAdapt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                AutoSizeCompat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelAdapt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" CustomAdapt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                AutoSizeCompat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("autoConvertDensityOfCustomAdapt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要升级到 v1.1.2 及以上版本才能使用 AutoSizeCompat")]),t._v("\n                AutoSizeCompat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("autoConvertDensityOfGlobal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果没有自定义需求用这个方法")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AutoSizeCompat.autoConvertDensity((super.getResources()), 667f, false)//如果有自定义需求就用这个方法")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);