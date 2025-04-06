(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{374:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、工程配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、工程配置"}},[t._v("#")]),t._v(" 一、工程配置")]),t._v(" "),s("p",[t._v("AndroidStudio 可以创建好几种 Module 工程，如果 Module 使用的是 android 插件（"),s("code",[t._v("com.android.application")]),t._v(" 或 "),s("code",[t._v("com.android.library")]),t._v("），那么通过在 "),s("code",[t._v("buildTypes")]),t._v(" 中将 "),s("code",[t._v("minifyEnabled")]),t._v(" 设为 "),s("code",[t._v("true")]),t._v(" 即可开启混淆，但如果 Module 使用的是 java 插件（"),s("code",[t._v("java-library")]),t._v("），那就需要借助额外的工具了，因为 "),s("code",[t._v("java-library")]),t._v(" 默认没有提供混淆配置域。")]),t._v(" "),s("h3",{attrs:{id:"_1、依赖混淆库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、依赖混淆库"}},[t._v("#")]),t._v(" 1、依赖混淆库")]),t._v(" "),s("p",[t._v("想要混淆 "),s("code",[t._v("java-library")]),t._v(" 工程，需要在 "),s("code",[t._v("build.gradle")]),t._v(" 文件中手动依赖一个第三方库 "),s("code",[t._v("proguard-gradle")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" proguard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProGuardTask\n\nbuildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.guardsquare:proguard-gradle:7.1.0"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、自定义混淆-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、自定义混淆-task"}},[t._v("#")]),t._v(" 2、自定义混淆 Task")]),t._v(" "),s("p",[t._v("依赖混淆库之后，还要自定义混淆任务，配置一些混淆选项，这里说明几个重点配置项：")]),t._v(" "),s("ul",[s("li",[t._v("injars：要混淆的 jar 包（可以是文件或目录）")]),t._v(" "),s("li",[t._v("outjars：混淆后的 jar 包输出位置（可以是文件或目录）")]),t._v(" "),s("li",[t._v("printmapping：混淆后的代码与源码之间的映射关系日志")]),t._v(" "),s("li",[t._v("configuration：混淆规则文件（一般就是 "),s("code",[t._v("proguard-rules.pro")]),t._v("）")]),t._v(" "),s("li",[t._v("dontshrink：不要开启压缩（默认混淆时会压缩代码，将没被引用到的代码抹去，这会导致某些类文件丢失字段，比如 java bean）")])]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proguardTask"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ProGuardTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependsOn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    description "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Obfuscates source files"')])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" artifactName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[you library name].jar"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据实际情况修改！！！")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" inputFolder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("buildDir")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/libs"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" obfuscatedFolder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("buildDir")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/obfuscated"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" inputJar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("inputFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("artifactName")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" outputJar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("obfuscatedFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("artifactName")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n\n    injars inputJar\n    outjars outputJar\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For de-obfuscating stack traces later on")]),t._v("\n    printseeds "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("obfuscatedFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/seeds.txt"')])]),t._v("\n    printmapping "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("obfuscatedFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/mapping.txt"')])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dependencies")]),t._v("\n    libraryjars "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java.home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/lib/rt.jar"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//works for java 8")]),t._v("\n    libraryjars configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtime\n    libraryjars sourceSets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compileClasspath\n\n    configuration "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proguard-rules.pro"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要压缩（压缩会把暂时没用到的代码抹去）")]),t._v("\n    dontshrink\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置阶段触发：将之前生成的混淆jar包删除")]),t._v("\n    delete obfuscatedFolder\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行阶段触发：当混淆jar包生成出来时，自动替换掉 build/libs 目录下的原始jar包")]),t._v("\n    doLast "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        delete "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("inputJar")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n        copy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            from outputJar\n            into inputFolder\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("proguard-gradle")]),t._v(" 这个库还有很多配置项，需要你感兴趣，可以到官网查阅手册了解：")]),t._v(" "),s("ul",[s("li",[t._v("ProGuard 官方手册："),s("a",{attrs:{href:"https://www.guardsquare.com/manual/setup/gradle",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.guardsquare.com/manual/setup/gradle"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Publishing an obfuscated kotlin library："),s("a",{attrs:{href:"https://dev.to/iurysza/publishing-an-obfuscated-kotlin-library-2kbk",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.to/iurysza/publishing-an-obfuscated-kotlin-library-2kbk"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_3、关联混淆-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、关联混淆-task"}},[t._v("#")]),t._v(" 3、关联混淆 Task")]),t._v(" "),s("p",[t._v("注意了，上面在声明混淆任务 "),s("code",[t._v("proguardTask")]),t._v(" 时指定了一个依赖任务 "),s("code",[t._v("dependsOn: jar")]),t._v("，意思是当执行 "),s("code",[t._v("proguardTask")]),t._v(" 任务时，需要先执行 "),s("code",[t._v("jar")]),t._v(" 任务而已。反过来就不一定了，执行 "),s("code",[t._v("jar")]),t._v(" 任务并不会执行 "),s("code",[t._v("proguardTask")]),t._v(" 任务（此时 "),s("code",[t._v("jar")]),t._v(" 任务不对 "),s("code",[t._v("proguardTask")]),t._v(" 负责）。但是一般情况下，我们希望 "),s("code",[t._v("jar")]),t._v(" 任务执行之后，顺便把 "),s("code",[t._v("proguardTask")]),t._v(" 任务一并执行，这时就可以使用 "),s("code",[t._v("finalizedBy()")]),t._v(" 方法对其进行关联：")]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("jar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalizedBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proguardTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("至此，只要 "),s("code",[t._v("java-library")]),t._v(" 工程一触发 "),s("code",[t._v("jar")]),t._v(" 任务（Mark 或 Build），"),s("code",[t._v("proguardTask")]),t._v(" 任务也会一并执行了。")]),t._v(" "),s("h2",{attrs:{id:"二、完整代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、完整代码"}},[t._v("#")]),t._v(" 二、完整代码")]),t._v(" "),s("p",[t._v("以下是 "),s("code",[t._v("java-library")]),t._v(" 工程 "),s("code",[t._v("build.gradle")]),t._v(" 文件中的全部代码：")]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("apply plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java-library'")]),t._v("\ndependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" proguard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProGuardTask\n\nbuildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.guardsquare:proguard-gradle:7.1.0"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proguardTask"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ProGuardTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependsOn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    description "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Obfuscates source files"')])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" artifactName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[you library name].jar"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据实际情况修改！！！")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" inputFolder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("buildDir")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/libs"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" obfuscatedFolder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("buildDir")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/obfuscated"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" inputJar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("inputFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("artifactName")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" outputJar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("obfuscatedFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("artifactName")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n\n    injars inputJar\n    outjars outputJar\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For de-obfuscating stack traces later on")]),t._v("\n    printseeds "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("obfuscatedFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/seeds.txt"')])]),t._v("\n    printmapping "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("obfuscatedFolder")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/mapping.txt"')])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dependencies")]),t._v("\n    libraryjars "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java.home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('/lib/rt.jar"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//works for java 8")]),t._v("\n    libraryjars configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtime\n    libraryjars sourceSets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compileClasspath\n\n    configuration "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proguard-rules.pro"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要压缩（压缩会把暂时没用到的代码抹去）")]),t._v("\n    dontshrink\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置阶段触发：将之前生成的混淆jar包删除")]),t._v("\n    delete obfuscatedFolder\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行阶段触发：当混淆jar包生成出来时，自动替换掉 build/libs 目录下的原始jar包")]),t._v("\n    doLast "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        delete "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("inputJar")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),t._v("\n        copy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            from outputJar\n            into inputFolder\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\njar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("finalizedBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proguardTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);