(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{519:function(t,e,a){"use strict";a.r(e);var s=a(14),l=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("平时在开发时我们都会先安装一些python需要的包，每次安装都会有一个版本，如果不同项目需要不同版本的包时就会出现不兼容的情况。应对这种情况我们就可以搭建多个虚拟环境来应对不同的环境需求，在虚拟环境中搭建一个Python项目运行所需要的那些包，将来根据运行的项目来切换不同环境即可")])]),t._v(" "),e("h2",{attrs:{id:"安装-virtualenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-virtualenv"}},[t._v("#")]),t._v(" 安装 virtualenv")]),t._v(" "),e("p",[t._v("我们需要用 "),e("code",[t._v("pip")]),t._v(" 先安装 "),e("code",[t._v("virtualenv")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" virtualenv\n")])])]),e("p",[t._v("我们可以在当前用户的家目录中找到 "),e("code",[t._v(".virtualenvs")]),t._v(" 文件夹，查看当前所有的虚拟环境")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222159.png",alt:"virtualenvs"}})]),t._v(" "),e("h2",{attrs:{id:"创建虚拟环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟环境"}},[t._v("#")]),t._v(" 创建虚拟环境")]),t._v(" "),e("ul",[e("li",[t._v("创建：mkvirtualenv [虚拟环境名称]")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("mkvirtualenv lxfenv1\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222212.png",alt:"安装成功"}})]),t._v(" "),e("p",[t._v("注：创建的过程需要联网")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222228.png",alt:"目录结构"}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Installing setuptools, pkg_resources, pip, wheel...done.\n")])])]),e("p",[t._v("刚刚安装时提示安装的这些东西就存放在你创建好的虚拟环境下的【lib/python2.7/site-packages/】目录中")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222238.png",alt:"lib目录"}})]),t._v(" "),e("ul",[e("li",[t._v("退出：deactivate\n当我们安装好虚拟环境后默认就使用了该虚拟环境，如图标识处可以看出")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222246.png",alt:"当前环境"}})]),t._v(" "),e("p",[t._v("如果你想退出当前的虚拟环境，或以使用如下命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("deactivate\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222256.png",alt:"退出环境"}})]),t._v(" "),e("ul",[e("li",[t._v("进入：workon [虚拟环境名称]")])]),t._v(" "),e("p",[t._v("使用指定的虚拟环境则使用如下命令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("workon lxfenv1\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222313.png",alt:"workon"}})]),t._v(" "),e("ul",[e("li",[t._v("删除：rmvirtualenv [虚拟环境名称]")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("rmvirtualenv lxfenv1\n")])])]),e("h2",{attrs:{id:"安装拓展包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装拓展包"}},[t._v("#")]),t._v(" 安装拓展包")]),t._v(" "),e("ul",[e("li",[t._v("查看当前安装好的包")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pip list\n或者\npip freeze\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222323.png",alt:"查看当前安装好的包"}})]),t._v(" "),e("p",[t._v("ps: 上图"),e("code",[t._v("pip list")]),t._v("中列出的四个包是安装虚拟环境必定会安装的包\n如图，"),e("code",[t._v("pip list")]),t._v("会列出所有的包，而"),e("code",[t._v("pip freeze")]),t._v("只会列出扩展的包")]),t._v(" "),e("ul",[e("li",[t._v("安装指定包")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pip install django==1.8.2\n# ==1.8.2 为指定版本号，不写则直接安装最新的包\n")])])]),e("p",[e("strong",[t._v("注： pip install xxx 会自动删除旧版本，再安装新版本")])]),t._v(" "),e("p",[t._v("如果不知道包名可以到"),e("a",{attrs:{href:"https://pypi.python.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("pypi"),e("OutboundLink")],1),t._v("上搜索")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210110222333.png",alt:"安装指定的包"}})])])}),[],!1,null,null,null);e.default=l.exports}}]);