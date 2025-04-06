(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{510:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131145525.jpeg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"拷贝数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拷贝数据"}},[a._v("#")]),a._v(" 拷贝数据")]),a._v(" "),t("h3",{attrs:{id:"宿主机文件-容器内"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宿主机文件-容器内"}},[a._v("#")]),a._v(" 宿主机文件 -> 容器内")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" 需要拷贝的文件或目录 容器名:容器内的目录路径\n")])])]),t("p",[a._v("如：把宿主机当前目录下的 "),t("code",[a._v("lxf.sh")]),a._v(" 文件，拷贝到  "),t("code",[a._v("lxfubuntu1")]),a._v(" 容器下的 "),t("code",[a._v("/data")]),a._v(" 目录中")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" lxf.sh lxfubuntu1:/data\n")])])]),t("h3",{attrs:{id:"容器内-宿主机文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器内-宿主机文件"}},[a._v("#")]),a._v(" 容器内 -> 宿主机文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" 容器名:容器内需要拷贝的文件或目录 宿主机目录  \n")])])]),t("p",[a._v("如：把 "),t("code",[a._v("lxfubuntu1")]),a._v(" 容器中 "),t("code",[a._v("/data")]),a._v(" 目录下的 "),t("code",[a._v("lxf.sh")]),a._v(" 文件，拷贝到宿主机 "),t("code",[a._v("~/lxf/")]),a._v(" 目录下")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" lxfubuntu1:/data/lxf.sh ~/lxf/\n")])])]),t("h2",{attrs:{id:"数据卷管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷管理"}},[a._v("#")]),a._v(" 数据卷管理")]),a._v(" "),t("blockquote",[t("p",[a._v("数据卷管理就是将容器的某个目录，映射到宿主机，作为数据存储同步的目录")])]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("容器名字"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("宿主机目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("容器目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("可选"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("下面进行操作示范：")]),a._v(" "),t("p",[a._v("在宿主机创建一个名为 "),t("code",[a._v("data")]),a._v(" 的目录，这个名字可任意")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" data\n")])])]),t("p",[a._v("将宿主机的 "),t("code",[a._v("data")]),a._v(" 目录映射到容器中的 "),t("code",[a._v("/home")]),a._v(" 目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" ~/lxf/data:/home ubuntu /bin/bash\n")])])]),t("p",[t("code",[a._v("-v")]),a._v(" ：挂载一个数据卷\n接着，我在容器的 "),t("code",[a._v("/home")]),a._v(" 目录下创建一个 "),t("code",[a._v("lxfdir")]),a._v(" 目录\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131143655.png",alt:""}}),a._v("\n此时，宿主机的 "),t("code",[a._v("data")]),a._v(" 目录下也会同步多了一个 "),t("code",[a._v("lxfdir")]),a._v(" 目录\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131143708.png",alt:""}})]),a._v(" "),t("p",[a._v("这个宿主机的 "),t("code",[a._v("data")]),a._v(" 目录就叫数据卷。")]),a._v(" "),t("p",[a._v("除了宿主机与容器之间可以进行数据交互外，如果两个容器的目录都映射到同一个宿主机目录，那还可以让多个容器间进行数据共享。")]),a._v(" "),t("h2",{attrs:{id:"数据卷容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷容器"}},[a._v("#")]),a._v(" 数据卷容器")]),a._v(" "),t("blockquote",[t("p",[a._v("数据卷容器也是一个容器，目的是专门用于提供数据卷给其它容器挂载，从而实现多个容器之间同步数据的更新。")])]),a._v(" "),t("h3",{attrs:{id:"创建数据卷模板容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据卷模板容器"}},[a._v("#")]),a._v(" 创建数据卷模板容器")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("容器数据卷目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("容器名字"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("可选"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("对"),t("code",[a._v("ubuntu")]),a._v(" 镜像做了文件映射，得到数据卷目录为 "),t("code",[a._v("/data")]),a._v(" 的模板容器")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data ubuntu\n")])])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131143736.png",alt:""}}),a._v("\n注意看该模板容器的状态是 "),t("code",[a._v("Created")]),a._v(" ，即并没有运行，容器名为  "),t("code",[a._v("determined_nightingale")])]),a._v(" "),t("h3",{attrs:{id:"基于数据卷模板创建容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于数据卷模板创建容器"}},[a._v("#")]),a._v(" 基于数据卷模板创建容器")]),a._v(" "),t("p",[a._v("命令:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run --volumes-from "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("数据卷容器id/name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tid")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("容器名字"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("可选"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("创建 "),t("code",[a._v("lxfubuntu1")]),a._v(" 容器")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" --volumes-from determined_nightingale "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" lxfubuntu1 ubuntu /bin/bash\n")])])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131143750.png",alt:""}}),a._v("\n在容器的根目录下，会基于上述模板创建了一个名为 "),t("code",[a._v("data")]),a._v(" 的目录（原 "),t("code",[a._v("ubuntu")]),a._v(" 镜像中是没有的）")]),a._v(" "),t("p",[a._v("我们再创建一个 "),t("code",[a._v("lxfubuntu2")]),a._v(" 容器")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" --volumes-from determined_nightingale "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" lxfubuntu2 ubuntu /bin/bash\n")])])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131143805.png",alt:""}}),a._v("\n此时，我们在 "),t("code",[a._v("lxfubuntu1")]),a._v(" 的 "),t("code",[a._v("data")]),a._v(" 目录下创建一个名为 "),t("code",[a._v("lxf")]),a._v(" 的目录， "),t("code",[a._v("lxfubuntu2")]),a._v(" 的 "),t("code",[a._v("data")]),a._v(" 目录中也会同步到相同的数据\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131143817.png",alt:""}}),a._v("\n这样，只要我们是基于数据卷模板容器创建出来的容器，就可以得到一个数据共享的 "),t("code",[a._v("data")]),a._v(" 目录，在该 "),t("code",[a._v("data")]),a._v(" 目录中对文件的操作，都可以同步到各个由该模板容器创建出来的容器中。")]),a._v(" "),t("h3",{attrs:{id:"与宿主机同步文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与宿主机同步文件"}},[a._v("#")]),a._v(" 与宿主机同步文件")]),a._v(" "),t("blockquote",[t("p",[a._v("数据卷容器可以实现多个容器的数据同步，但是数据是保存在数据卷内，并没有保存到宿主机的文件目录中。")]),a._v(" "),t("p",[a._v("如果想将宿主机的文件同步到各个容器，可以使用 "),t("code",[a._v("docker cp")]),a._v(" 将宿主机下的文件拷贝到数据卷容器即可，反之亦然")])]),a._v(" "),t("p",[a._v("如：把宿主机当前目录下的 "),t("code",[a._v("lxf.sh")]),a._v(" 文件，拷贝到数据卷容器 "),t("code",[a._v("determined_nightingale")]),a._v(" 中 "),t("code",[a._v("/data")]),a._v(" 目录下")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" lxf.sh determined_nightingale:/data\n")])])]),t("p",[a._v("如：把数据卷容器 "),t("code",[a._v("determined_nightingale")]),a._v(" 中 "),t("code",[a._v("/data")]),a._v(" 目录下的 "),t("code",[a._v("lxf.sh")]),a._v(" 文件，拷贝到宿主机 "),t("code",[a._v("~/lxf")]),a._v(" 目录下")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" determined_nightingale:/data/lxf.txt ~/lxf\n")])])]),t("p",[a._v("是不是有人要问了，如果我基于数据卷模板创建容器时，顺带设置数据卷呢？，命令如下所示")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" ~/lxf/data:/data --volumes-from determined_nightingale "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" lxfubuntu3 ubuntu /bin/bash\n")])])]),t("p",[a._v("很遗憾，只有数据卷配置生效，数据卷容器配置不生效～")])])}),[],!1,null,null,null);t.default=n.exports}}]);