(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{455:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("众所周知，"),a("code",[s._v("OC")]),s._v(" 是一门面向对象的动态编程语言，在程序运行时才会确定对象的真实类型，并调用类和对象的相应方法。所以在 "),a("code",[s._v("iOS")]),s._v(" 逆向领域便出现了一些工具，利用 "),a("code",[s._v("Runtime")]),s._v(" 帮助我们开发者在程序运行时去动态修改类和对象中的属性和方法。")]),s._v(" "),a("h2",{attrs:{id:"class-dump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-dump"}},[s._v("#")]),s._v(" "),a("code",[s._v("class-dump")])]),s._v(" "),a("p",[a("code",[s._v("class-dump")]),s._v(" 是一个命令行工具，可对存储在 "),a("code",[s._v("Mach-O")]),s._v(" 文件中的 "),a("code",[s._v("OC")]),s._v(" "),a("code",[s._v("Runtime")]),s._v(" 信息进行检测，生成类、分类和协议的属性和方法的声明，即 "),a("code",[s._v(".h")]),s._v(" 头文件。")]),s._v(" "),a("h3",{attrs:{id:"_1、下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载安装"}},[s._v("#")]),s._v(" 1、下载安装")]),s._v(" "),a("p",[s._v("官网下载链接：")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://stevenygard.com/projects/class-dump/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://stevenygard.com/projects/class-dump"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/nygard/class-dump",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/nygard/class-dump"),a("OutboundLink")],1)])])]),s._v(" "),a("p",[s._v("下载后解压，将 "),a("code",[s._v("class-dump")]),s._v(" 拖到 "),a("code",[s._v("/usr/local/bin")]),s._v(" 目录下即可在终端内使用")]),s._v(" "),a("p",[s._v("官网下载的 "),a("code",[s._v("class-dump")]),s._v(" 由于很久没有维护了，不支持 "),a("code",[s._v("Swift")]),s._v(" 和 "),a("code",[s._v("OC")]),s._v(" 混编的二进制文件，会报如下错误")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("class-dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36848")]),s._v(":11809395"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error: Cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" offset "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" address 0x800000001001586 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" stringAtAddress:\n")])])]),a("p",[s._v("所以推荐从 "),a("a",{attrs:{href:"https://github.com/AloneMonkey/MonkeyDev/blob/master/bin/class-dump",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/AloneMonkey/MonkeyDev/blob/master/bin/class-dump"),a("OutboundLink")],1),s._v(" 下载 "),a("code",[s._v("class-dump")])]),s._v(" "),a("p",[s._v("下载后拖到 "),a("code",[s._v("/usr/local/bin")]),s._v(" 目录下，再赋予执行权限方可在终端内使用")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /usr/local/bin/class-dump\n")])])]),a("h3",{attrs:{id:"_2、使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用"}},[s._v("#")]),s._v(" 2、使用")]),s._v(" "),a("p",[s._v("使用参数说明：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("class-dump "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nUsage: class-dump "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mach-o-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  where options are:\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("             show instance variable offsets\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("             show implementation addresses\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--arch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  choose a specific architecture from a universal binary "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ppc, ppc64, i386, x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("regex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("     only display classes matching regular expression\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" method name\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v("             generate header files "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" current directory, or directory specified with "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" classes, categories, and protocols by inheritance "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("overrides -s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       output directory used "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("             recursively "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expand")]),s._v(" frameworks and fixed VM shared libraries\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" classes and categories by name\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" methods by name\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("             suppress header "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" output, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" testing\n        --list-arches  list the arches "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the file, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n        --sdk-ios      specify iOS SDK version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("will "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("look")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".sdk\n        --sdk-mac      specify Mac OS X version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("will "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("look")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /Developer/SDKs/MacOSX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".sdk\n        --sdk-root     specify the full SDK root path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or use --sdk-ios/--sdk-mac "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a shortcut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("举个例子：我们对 "),a("code",[s._v("Twitter")]),s._v(" 的二进制文件导出头文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("class-dump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--arch")]),s._v(" arm64 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" Twitter "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" ./Headers\n")])])]),a("p",[s._v("各参数说明：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("a")])]),s._v(" "),a("td",[s._v("显示实例变量的偏移地址")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("A")])]),s._v(" "),a("td",[s._v("显示方法实现地址")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("H")])]),s._v(" "),a("td",[s._v("生成头文件")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("arch")])]),s._v(" "),a("td",[s._v("指定架构（如果只有一个架构，可以不加该参数）")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("o")])]),s._v(" "),a("td",[s._v("指定保存生成的头文件的目录位置")])])])]),s._v(" "),a("p",[s._v("执行完成后，可以看到 "),a("code",[s._v("Headers")]),s._v(" 目录下一共有 "),a("code",[s._v("343")]),s._v(" 个文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20210320170901/image/202203191623479.png",alt:"Headers"}})]),s._v(" "),a("p",[s._v("任意打开一个头文件，可以看到变量名、方法名、偏移地址等信息")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20210320170901/image/202203191623825.png",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);