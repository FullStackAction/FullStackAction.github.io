(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{518:function(s,t,e){"use strict";e.r(t);var a=e(14),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、服务编排"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、服务编排"}},[s._v("#")]),s._v(" 一、服务编排")]),s._v(" "),t("blockquote",[t("p",[s._v("服务编排：按照一定的业务规则批量管理容器")])]),s._v(" "),t("p",[s._v("微服务架构的应用系统中一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启动和停止，那么维护的工作量就会很大。")]),s._v(" "),t("p",[s._v("比如这些工作：")]),s._v(" "),t("ul",[t("li",[s._v("要从 "),t("code",[s._v("Dockerfile build image")]),s._v(" 或者去 "),t("code",[s._v("dockerhub")]),s._v(" 拉取 "),t("code",[s._v("image")])]),s._v(" "),t("li",[s._v("要创建多个 "),t("code",[s._v("container")])]),s._v(" "),t("li",[s._v("要管理这些 "),t("code",[s._v("container")]),s._v(" (启动停止删除)")])]),s._v(" "),t("p",[s._v("这时候需要使用官方推出的服务编排")]),s._v(" "),t("h2",{attrs:{id:"二、docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-compose"}},[s._v("#")]),s._v(" 二、Docker Compose")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Docker Compose")]),s._v(" 是一个编排多容器分布式部署的工具，提供命令集管理容器化应用的完整开发周期，包括服务构建，启动和停止")])]),s._v(" "),t("p",[s._v("使用步骤：")]),s._v(" "),t("ol",[t("li",[s._v("利用 "),t("code",[s._v("Dockerfile")]),s._v(" 定义运行环境镜像")]),s._v(" "),t("li",[s._v("使用 "),t("code",[s._v("docker-compose.yml")]),s._v(" 定义组成应用的各服务（启动顺序、关联关系等）")]),s._v(" "),t("li",[s._v("运行 "),t("code",[s._v("docker-compose up")]),s._v(" 启动应用")])]),s._v(" "),t("h3",{attrs:{id:"_1、安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装"}},[s._v("#")]),s._v(" 1、安装")]),s._v(" "),t("p",[s._v("如果使用的是 "),t("a",{attrs:{href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Desktop"),t("OutboundLink")],1),s._v("，那就不需要再额外安装 "),t("code",[s._v("Compose")]),s._v(" 了，因为它已经包含了 "),t("code",[s._v("Docker Compose")]),s._v(" 。")]),s._v(" "),t("p",[s._v("下面是 "),t("code",[s._v("Linux")]),s._v(" 系统下安装 "),t("code",[s._v("Compose")]),s._v(" 的方式")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以编译好的二进制包方式安装到Linux系统中")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/docker/compose/releases/download/1.28.6/run.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置文件可执行权限")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本信息（-v 或 --version 都可以）")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2、卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、卸载"}},[s._v("#")]),s._v(" 2、卸载")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 二进制包方式安装的，删除二进制文件即可")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /usr/local/bin/docker-compose\n")])])]),t("h3",{attrs:{id:"_3、实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、实战"}},[s._v("#")]),s._v(" 3、实战")]),s._v(" "),t("p",[s._v("先来编写配置文件，新建一个 "),t("code",[s._v("docker-compose.yml")]),s._v(" 文件，文件名是固定的")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" docker-compose.yml\n")])])]),t("p",[s._v("这里我用 "),t("code",[s._v("VSCode")]),s._v(" 打开进行编辑")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("code docker-compose.yml\n")])])]),t("p",[s._v("文件内容：")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名字自行定义")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定通过nginx该镜像进行启动，这里可以指定镜像的版本号，如果不指定，默认为latest")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口映射，即 -p 参数，将宿主机的80端口映射到容器的80端口")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8090"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("links")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指明当前服务可以访问到jenkins这个服务")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" jenkins\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 目录映射，即 -v 参数，（宿主机目录:容器目录）")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ~/data/lxf/nginx/conf.d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/conf.d\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jenkins")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名字自行定义")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jenkins\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露指定的端口")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000"')]),s._v("\n")])])]),t("p",[s._v("创建 "),t("code",[s._v("~/data/lxf/nginx/conf.d")]),s._v(" 目录，并进入该目录")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" ~/data/lxf/nginx/conf.d\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/data/lxf/nginx/conf.d\n")])])]),t("p",[s._v("在该目录中创建一个 "),t("code",[s._v("conf")]),s._v(" 文件，比如 "),t("code",[s._v("lxf.conf")]),s._v(" ，文件内容如下")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n  listen 80;\n  access_log off;\n  \n  location / {\n    proxy_pass http://jenkins:8080;\n  }\n}\n")])])]),t("p",[s._v("配置反向代理，当访问 "),t("code",[s._v("80")]),s._v(" 端口时会反向代理到 "),t("code",[s._v("http://jenkins:8080")]),s._v("，这里的 "),t("code",[s._v("jenkins")]),s._v(" 就是上述 "),t("code",[s._v("docker-compose.yml")]),s._v(" 文件中 "),t("code",[s._v("links")]),s._v(" 指定的 "),t("code",[s._v("jenkins")])]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("docker-compose.yml")]),s._v(" 文件所在目录，使用 "),t("code",[s._v("docker-compose")]),s._v(" 启动容器")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d: 后台启动")]),s._v("\ndocker-compse up "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20210320170901/image/20210405143327.png",alt:""}})]),s._v(" "),t("p",[s._v("测试访问")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("127.0.0.1:8090\n或\n本机ip:8090\n")])])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20210320170901/image/20210405143344.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"三、引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、引用"}},[s._v("#")]),s._v(" 三、引用")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Compose 官方文档"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);