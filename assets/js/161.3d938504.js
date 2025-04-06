(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{503:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("因为 Vue3 使用了 ES6 的 Proxy 作为其观察者机制，并且无法通过 polyfill 进行转换，所以工程要兼容低版本浏览器的话，还得继续使用 Vue2，经过一些研究，整理了以下 2 个版本的 Vue2 工程在兼容低版本浏览器时的详情步骤：")]),t._v(" "),s("ul",[s("li",[t._v("webpack + ts + Vue2")]),t._v(" "),s("li",[t._v("Vite + ts + Vue2")])]),t._v(" "),s("blockquote",[s("p",[t._v("温馨提示：现在 Vue2 也可以使用组合式 api 了，具体参考："),s("a",{attrs:{href:"https://www.npmjs.com/package/@vue/composition-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/@vue/composition-api"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"一、webpack-版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、webpack-版"}},[t._v("#")]),t._v(" 一、webpack 版")]),t._v(" "),s("p",[t._v("根据 "),s("code",[t._v("Vue Cli")]),t._v(" 官网上提供的教程，默认创建出来的 Vue2 工程就是 webpack 版。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Vue Cli")]),t._v(" 安装："),s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cli.vuejs.org/zh/guide/installation.html"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("Vue Cli")]),t._v(" 基础："),s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/creating-a-project.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cli.vuejs.org/zh/guide/creating-a-project.html"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1、创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建项目"}},[t._v("#")]),t._v(" 1、创建项目")]),t._v(" "),s("p",[t._v("执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如：vue create webpack-vue2-ts")]),t._v("\nvue create your-project-name\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202211081556153.png",alt:""}})]),t._v(" "),s("p",[t._v("选择 "),s("code",[t._v("Manually select features")]),t._v(" 后回车，进入特性选择环节，根据工程需求，选择即可：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202211081558843.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("注意：空格选中或取消，回车确认。")])]),t._v(" "),s("p",[t._v("之后一路回车即可，等待工程初始化完成（会自动拉取 "),s("code",[t._v("node_modules")]),t._v(" 需要点时间）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202211081601396.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2、配置-babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置-babel"}},[t._v("#")]),t._v(" 2、配置 babel")]),t._v(" "),s("p",[t._v("工程创建完成之后，就可以来着手兼容低浏览器了，先安装如下几个 babel 插件：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @babel/plugin-transform-arrow-functions "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @babel/plugin-proposal-optional-chaining "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("p",[t._v("打开 "),s("code",[t._v("babel.config.js")]),t._v("，如下配置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// babel.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("presets")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/cli-plugin-babel/preset"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useBuiltIns")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entry"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("corejs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("targets")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ios")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("android")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("chrome")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"58"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/plugin-transform-arrow-functions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 箭头函数转换")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/plugin-proposal-optional-chaining"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选链（?.）转换")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("最后，在 "),s("code",[t._v("main.ts")]),t._v(" 文件顶部进行如下导入：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js/stable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regenerator-runtime/runtime"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./App.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("至此，webpack 版 Vue2 工程 使用 "),s("code",[t._v("npm run build")]),t._v(" 打包出来的 h5 就可以在低版本浏览器上运行了。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：以上配置仅针对 "),s("code",[t._v("Vue Cli 4")]),t._v("，"),s("code",[t._v("Vue Cli 4")]),t._v(" 与 "),s("code",[t._v("Vue Cli 3")]),t._v(" 的 babel 配置大不相同。")])]),t._v(" "),s("h3",{attrs:{id:"_3、usebuiltins-说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、usebuiltins-说明"}},[t._v("#")]),t._v(" 3、"),s("code",[t._v("useBuiltIns")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("这里是对上述配置中的 "),s("code",[t._v("useBuiltIns")]),t._v(" 的说明，没兴趣可以直接跳过~")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('"useBuiltIns": false')]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不对 polyfill 做操作，如果引入 "),s("code",[t._v("@babel/polyfill")]),t._v("，则无视配置的浏览器兼容，引入所有的 "),s("code",[t._v("polyfill")]),t._v("。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("entry")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('"useBuiltIns": "entry",'),s("br"),t._v('"corejs": 2')]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据配置的游戏器兼容，引入浏览器不兼容的 "),s("code",[t._v("polyfill")]),t._v(" 。需要在入口文件手动添加 "),s("code",[t._v("import '@babel/polyfill'")]),t._v("，会自动根据 "),s("code",[t._v("browserslist")]),t._v(" 替换成浏览器不兼容的所有 "),s("code",[t._v("polyfill")]),t._v("。这里需要指定 "),s("code",[t._v("core-js")]),t._v(' 的版本, 如果 "corejs": 3, 则 '),s("code",[t._v("import '@babel/polyfill'")]),t._v(" 需要改成 "),s("code",[t._v("import 'core-js/stable';import 'regenerator-runtime/runtime';")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("usage")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('"useBuiltIns": "usage",'),s("br"),t._v('"corejs": 2')]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加。")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("内容引用自 "),s("a",{attrs:{href:"https://juejin.cn/post/6844904069866192910",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844904069866192910"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"二、vite-版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、vite-版"}},[t._v("#")]),t._v(" 二、Vite 版")]),t._v(" "),s("p",[t._v("Vite 工程需要使用 Vite 脚手架来创建：")]),t._v(" "),s("ul",[s("li",[t._v("搭建第一个 Vite 项目："),s("a",{attrs:{href:"https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1、创建项目-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建项目-2"}},[t._v("#")]),t._v(" 1、创建项目")]),t._v(" "),s("p",[t._v("执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init vite@latest\n")])])]),s("p",[t._v("选择 "),s("code",[t._v("Vanilla")]),t._v("，之后再选择 "),s("code",[t._v("TypeScript")]),t._v("，回车，即刻创建好工程（Vite 不会自动拉取 "),s("code",[t._v("node_modules")]),t._v("，所以比较快）：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202211081611507.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2、改为-vue2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、改为-vue2"}},[t._v("#")]),t._v(" 2、改为 Vue2")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("Vite")]),t._v(" 创建的 Vue 工程默认是 Vue3 版本，需要对工程进行改造，转成 Vue2 版本需要安装一个 Vite 插件，执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vite-plugin-vue2 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("p",[t._v("创建 "),s("code",[t._v("vite.config.ts")]),t._v(" 文件，如下配置：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vite.config.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createVuePlugin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vite-plugin-vue2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createVuePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("安装完插件之后，还需要安装 Vue2 依赖，执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vue@2.7.13\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vue-template-compiler\n")])])]),s("blockquote",[s("p",[t._v("注意：使用 "),s("code",[t._v("npm i vue")]),t._v(" 默认会安装 Vue3，需要手动指定版本才能安装 Vue2。")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("src")]),t._v(" 目录下创建 "),s("code",[t._v("App.vue")]),t._v(" 文件：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- App.vue --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello Vite Vue2 --- GitLqr"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("重写 "),s("code",[t._v("src")]),t._v(" 目录下的 "),s("code",[t._v("main.ts")]),t._v(" 文件，内容如下：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./App.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("因为工程使用了 "),s("code",[t._v("TypeScript")]),t._v("，此时代码中的 "),s("code",[t._v('"./App.vue"')]),t._v(" 还不会被 ts 识别，所以会提示报错，如果放置不理的话还会导致编译失败，此时只需要在 "),s("code",[t._v("vite-env.d.ts")]),t._v(" 文件中对 "),s("code",[t._v("vue")]),t._v(" 进行类型声明即可解决：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vite-env.d.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="vite/client" />')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.vue"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3、配置-vitejs-plugin-legacy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置-vitejs-plugin-legacy"}},[t._v("#")]),t._v(" 3、配置 "),s("code",[t._v("@vitejs/plugin-legacy")])]),t._v(" "),s("p",[t._v("工程改造成 Vue2 之后，就可以着手兼容低版本浏览器了。Vite 官方提供了 "),s("code",[t._v("@vitejs/plugin-legacy")]),t._v(" 插件，专门用来处理兼容低版本浏览器问题，执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @vitejs/plugin-legacy "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("p",[t._v("打开 "),s("code",[t._v("vite.config.ts")]),t._v(" 文件，如下配置：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vite.config.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createVuePlugin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vite-plugin-vue2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" legacy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vitejs/plugin-legacy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createVuePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("legacy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      targets"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android 4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ios 8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chrome 52"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ie 11"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      additionalLegacyPolyfills"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regenerator-runtime/runtime"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      renderLegacyChunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      polyfills"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.symbol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.array.filter"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.promise"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.promise.finally"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es/map"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es/set"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.array.for-each"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.object.define-properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.object.define-property"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.object.get-own-property-descriptor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.object.get-own-property-descriptors"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.object.keys"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es.object.to-string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web.dom-collections.for-each"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esnext.global-this"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esnext.string.match-all"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("以上配置源自："),s("a",{attrs:{href:"https://blog.csdn.net/Mr_JavaScript/article/details/125388234",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/Mr_JavaScript/article/details/125388234"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_4、解决-unhandled-promise-rejection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、解决-unhandled-promise-rejection"}},[t._v("#")]),t._v(" 4、解决 "),s("code",[t._v("Unhandled promise rejection")])]),t._v(" "),s("p",[t._v("配置完 "),s("code",[t._v("@vitejs/plugin-legacy")]),t._v(" 之后，在个别浏览器上会出现 "),s("code",[t._v("Unhandled promise rejection")]),t._v(" 错误，这时需要使用 "),s("code",[t._v("@babel/polyfill")]),t._v(" 来解决，执行如下命令安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @babel/polyfill\n")])])]),s("p",[t._v("在 "),s("code",[t._v("main.ts")]),t._v(" 最顶端添加：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/polyfill"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./App.vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("至此，Vite 版 Vue2 工程使用 "),s("code",[t._v("npm run build")]),t._v(" 打包好的 h5 就可以在低版本浏览器上运行了。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：因为 "),s("code",[t._v("@vitejs/plugin-legacy")]),t._v(" 只在 build 模式下生效，这也意味着 dev 模式下不经过 "),s("code",[t._v("@vitejs/plugin-legacy")]),t._v(" 处理，所以 dev 模式下无法在低版本浏览器上运行。")])]),t._v(" "),s("h3",{attrs:{id:"_5、组合式-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、组合式-api"}},[t._v("#")]),t._v(" 5、组合式 API")]),t._v(" "),s("p",[t._v("Vue2.6 及之前版本需要通过 "),s("code",[t._v("composition-api")]),t._v(" 插件来支持组合式 API，而最近发布的 Vue2.7 则已经内置了组合式 API，所以接下来顺便让上面的 Vite 版 Vue2 工程支持组合式 API 吧：")]),t._v(" "),s("ul",[s("li",[t._v("Vue2.7 官方说明："),s("a",{attrs:{href:"https://blog.vuejs.org/posts/vue-2-7-naruto.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.vuejs.org/posts/vue-2-7-naruto.html"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Vue2.6 及之前支持说明："),s("a",{attrs:{href:"https://www.npmjs.com/package/@vue/composition-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/@vue/composition-api"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Vue2.7 不再使用 "),s("code",[t._v("vue-template-compiler")]),t._v(" 插件，执行如下命令进行卸载：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" un vue-template-compiler\n")])])]),s("blockquote",[s("p",[t._v("注意：你会发现，就会没有 "),s("code",[t._v("vue-template-compiler")]),t._v(" 插件，运行项目也是不会报错的~")])]),t._v(" "),s("p",[t._v("根据官方说明，Vue2.7 应该使用 "),s("code",[t._v("@vitejs/plugin-vue2")]),t._v(" 插件来代替 "),s("code",[t._v("vite-plugin-vue2")]),t._v(" 插件，执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" un vite-plugin-vue2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @vitejs/plugin-vue2 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意：必须使用新的 "),s("code",[t._v("@vitejs/plugin-vue2")]),t._v(" 插件，否则 "),s("code",[t._v("<script setup>")]),t._v(" 将无法正常使用！！！")])]),t._v(" "),s("p",[t._v("更换好插件后，打开 "),s("code",[t._v("vite.config.ts")]),t._v(" 修改配置：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vite.config.ts")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// import { createVuePlugin } from "vite-plugin-vue2";')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vitejs/plugin-vue2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// createVuePlugin(),")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("至此，就可以在项目中使用组合式 API 了，例如：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- App.vue --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ hello }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("setup")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Vite Vue2 --- GitLqr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"三、其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、其他"}},[t._v("#")]),t._v(" 三、其他")]),t._v(" "),s("p",[t._v("上述两个工程示例已提交 GitHub：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/GitLqr/vue-legacy-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/GitLqr/vue-legacy-project"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("可以发现不管 webpack 还是 Vite，在兼容低版本浏览器时，都会配置一个 "),s("code",[t._v("targets")]),t._v(" 参数，该参数很关键，配置不当会达不到效果，详细介绍请参考如下文档：")]),t._v(" "),s("ul",[s("li",[t._v("babel options targets："),s("a",{attrs:{href:"https://babeljs.io/docs/en/options#targets",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://babeljs.io/docs/en/options#targets"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("browserslist："),s("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/browserslist/browserslist"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);