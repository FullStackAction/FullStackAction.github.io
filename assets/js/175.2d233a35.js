(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{526:function(t,e,a){"use strict";a.r(e);var s=a(14),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("系列文章：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/6AFd-4hyJQ6N7AVuJW4WIw",target:"_blank",rel:"noopener noreferrer"}},[t._v("《AI - stable-diffusion(AI 绘画)的搭建与使用》"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/-POx-c_fcMTtYU-6dWOaVg",target:"_blank",rel:"noopener noreferrer"}},[t._v("《AI - AI 绘画的精准控图(ControlNet)》"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/GvyOC101H3sALNtB67No4w",target:"_blank",rel:"noopener noreferrer"}},[t._v("《AI - stable-diffusion 艺术化二维码》"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("最近 AI 火的一塌糊涂，除了 ChatGPT 以外，AI 绘画领域也有很大的进步，以下几张图片都是 AI 绘制的，你能看出来么？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261551199.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"一、环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、环境搭建"}},[t._v("#")]),t._v(" 一、环境搭建")]),t._v(" "),e("p",[t._v("上面的效果图其实是使用了开源的 AI 绘画项目 "),e("code",[t._v("stable-diffusion")]),t._v(" 绘制的，这是它的官方仓库：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/CompVis/stable-diffusion",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/CompVis/stable-diffusion"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("但是这个官方项目并不适合我们这些新手直接使用，好在有一些基于 "),e("code",[t._v("stable-diffusion")]),t._v(" 封装的 "),e("code",[t._v("webui")]),t._v(" 开源项目，可以通过界面交互的方式来使用 "),e("code",[t._v("stable-diffusion")]),t._v("，极大的降低了使用门槛，以下是几个比较火的 "),e("code",[t._v("webui")]),t._v(" 项目：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/AUTOMATIC1111/stable-diffusion-webui"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Sygil-Dev/sygil-webui",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Sygil-Dev/sygil-webui"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("其中，"),e("code",[t._v("AUTOMATIC1111")]),t._v(" 的 "),e("code",[t._v("stable-diffusion-webui")]),t._v(" 是目前功能最多最好用的，强烈推荐，下面就来介绍如何使用它。")]),t._v(" "),e("h3",{attrs:{id:"_1、下载项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载项目"}},[t._v("#")]),t._v(" 1、下载项目")]),t._v(" "),e("p",[e("code",[t._v("stable-diffusion-webui")]),t._v(" 没有发布可执行程序（比如："),e("code",[t._v(".exe")]),t._v("），我们需要通过 "),e("code",[t._v("git")]),t._v(" 的方式将整个工程源码拉下来运行：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git\n")])])]),e("blockquote",[e("p",[t._v("注：这个开源项目目前的更新频率很快，会不定期的修复一些 bug 或加入一些新功能，所以建议可以时常 "),e("code",[t._v("git pull")]),t._v(" 拉取最新代码。")])]),t._v(" "),e("h3",{attrs:{id:"_2、python-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、python-环境"}},[t._v("#")]),t._v(" 2、Python 环境")]),t._v(" "),e("p",[e("code",[t._v("stable-diffusion-webui")]),t._v(" 主要是使用 Python 开发的，所以运行这个工程，需要安装一下 Python 环境并配置好环境变量，因为 Python 环境的安装很简单，这里就不多说了，环境配置完成之后，可以通过以下命令查看 Python 的版本号，验证环境是否正常：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("python "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("注意：官方推荐安装 "),e("code",[t._v("Python 3.10.6")]),t._v(" 版本")])]),t._v(" "),e("p",[t._v("另外，建议使用 "),e("code",[t._v("Anaconda")]),t._v(" 管理多个 Python 环境，详见")]),t._v(" "),e("ul",[e("li",[t._v("官方的 conda 环境安装说明："),e("a",{attrs:{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs#alternative-installation-on-windows-using-conda",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs#alternative-installation-on-windows-using-conda"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("anaconda 常用命令："),e("a",{attrs:{href:"https://blog.csdn.net/ligous/article/details/124209700",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/ligous/article/details/124209700"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_3、cuda-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、cuda-环境"}},[t._v("#")]),t._v(" 3、CUDA 环境")]),t._v(" "),e("p",[t._v("默认 "),e("code",[t._v("stable-diffusion-webui")]),t._v(" 运行使用的是 GPU 算力，也就是说需要用到 Nvidia 显卡（配置越高，绘图越快）。这里我们需要安装 CUDA 驱动，先确定一下电脑能安装的 CUDA 版本，桌面右下角->右键 NVIDIA 设置图标->NVIDIA 控制面板：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302251730046.png",alt:""}})]),t._v(" "),e("p",[t._v("可以看到我的电脑的显示的是 "),e("code",[t._v("NVIDIA CUDA 11.6.134 driver")]),t._v("，所以我的电脑要安装的 CUDA 版本不能超过 11.6。")]),t._v(" "),e("blockquote",[e("p",[t._v("注意：高版本显卡是可以安装低版本的 CUDA 驱动的，比如我也可以安装经典的 10.2 版本，但是安装 11.6 版本可以获得更高的 GPU 运行效率，所以一般来说推荐安装显卡支持的最高 CUDA 版本。")])]),t._v(" "),e("p",[t._v("在下面的网址中找到对应的 CUDA 版本进行安装：")]),t._v(" "),e("ul",[e("li",[t._v("CUDA 官方归档："),e("a",{attrs:{href:"https://developer.nvidia.com/cuda-toolkit-archive",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.nvidia.com/cuda-toolkit-archive"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302251743456.png",alt:""}})]),t._v(" "),e("p",[t._v('直接选择 "精简" 安装就可以了，安装完成之后，可以使用如下命令查看 CUDA 版本，来验证 CUDA 是否安装成功：')]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("nvcc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302251746307.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("注：如果你没有 Nvidia 显卡，也可以通过给 "),e("code",[t._v("stable-diffusion-webui")]),t._v(" 指定运行参数 "),e("code",[t._v("--use-cpu sd")]),t._v("，让其使用 CPU 算力运行，但是非常不建议你这么做，CPU 算力跟 GPU 算力相比简直天差地别，可能 GPU 只需要 10 秒就能绘制完成，而 CPU 却要 10 分钟，这不是开玩笑的。另外，如果你的显卡内存不多，建议 4G 的显卡加上 "),e("code",[t._v("--medvram")]),t._v(" 启动参数，2G 的显卡加上 "),e("code",[t._v("--lowvram")]),t._v(" 启动参数。怎么配置启动参数我们后面说。")])]),t._v(" "),e("h3",{attrs:{id:"_4、启动项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动项目"}},[t._v("#")]),t._v(" 4、启动项目")]),t._v(" "),e("p",[t._v("在安装配置好运行环境之后，直接运行工程下的 "),e("code",[t._v("webui-user.bat")]),t._v(" 文件即可（如果是类 Unix 系统，则运行 "),e("code",[t._v("webui-user.sh")]),t._v("）。首次启动会自动下载一些 Python 依赖库（具体哪些库请看工程下的 "),e("code",[t._v("requirements.txt")]),t._v("） ，以及项目需要用到的配置和模型文件（比如："),e("code",[t._v("v1-5-pruned-emaonly.safetensors")]),t._v("，将近 4 个 G~），初始化一次之后，下次启动就快了。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Launching Web UI with arguments:\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nRunning on "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" URL:  http://127.0.0.1:7860\nTo create a public link, "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("share")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("True"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("launch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),e("p",[t._v("看到这个提示就说明成功运行起来了，打开网址就可以看到程序的运行界面了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302251702114.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("温馨提示：该项目是英文页面，可以使用浏览器的翻译功能转成中文来使用~")])]),t._v(" "),e("h2",{attrs:{id:"二、使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、使用"}},[t._v("#")]),t._v(" 二、使用")]),t._v(" "),e("p",[e("code",[t._v("stable-diffusion-webui")]),t._v(" 的功能很多，主要有如下 2 个：")]),t._v(" "),e("ul",[e("li",[t._v("文生图（"),e("code",[t._v("text2img")]),t._v("）：根据提示词（Prompt）的描述生成相应的图片。")]),t._v(" "),e("li",[t._v("图生图（"),e("code",[t._v("img2img")]),t._v("）：将一张图片根据提示词（Prompt）描述的特点生成另一张新的图片。")])]),t._v(" "),e("blockquote",[e("p",[t._v("注：本文只讲解文生图（"),e("code",[t._v("text2img")]),t._v("）功能，图生图（"),e("code",[t._v("img2img")]),t._v("）后续有机会再出文章，喜欢的请多多点赞关注支持一下 😃。")])]),t._v(" "),e("h3",{attrs:{id:"_1、文生图-text2img"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、文生图-text2img"}},[t._v("#")]),t._v(" 1、文生图（"),e("code",[t._v("text2img")]),t._v("）")]),t._v(" "),e("p",[t._v("在开始使用文生图之前，有必要了解以下几个参数的含义：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Prompt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提示词（正向）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Negative prompt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("消极的提示词（反向）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Width & Height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("要生成的图片尺寸。尺寸越大，越耗性能，耗时越久。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CFG scale")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("AI 对描述参数（Prompt）的倾向程度。值越小生成的图片越偏离你的描述，但越符合逻辑；值越大则生成的图片越符合你的描述，但可能不符合逻辑。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Sampling method")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("采样方法。有很多种，但只是采样算法上有差别，没有好坏之分，选用适合的即可。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Sampling steps")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("采样步长。太小的话采样的随机性会很高，太大的话采样的效率会很低，拒绝概率高(可以理解为没有采样到,采样的结果被舍弃了)。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Seed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("随机数种子。生成每张图片时的随机种子，这个种子是用来作为确定扩散初始状态的基础。不懂的话，用随机的即可。")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("以上对参数的解析源自以下文章：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/574063064",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/574063064"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1758865024644276830&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://baijiahao.baidu.com/s?id=1758865024644276830&wfr=spider&for=pc"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[t._v('接下来我们来生成一张赛博朋克风格的猫咪图片，配置以下参数后，点击 "Generate" 即可：')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Prompt：a cute cat, cyberpunk art, by Adam Marczyński, cyber steampunk 8 k 3 d, kerem beyit, very cute robot zen, beeple |\n\nNegative prompt：(deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, (mutated hands and fingers:1.4), disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, flowers, human, man, woman\n\nCFG scale：6.5\n\nSampling method：Euler a\n\nSampling steps：26\n\nSeed：1791574510\n")])])]),e("blockquote",[e("p",[t._v("注：提示词（Prompt）越多，AI 绘图结果会更加精准，另外，目前中文提示词的效果不好，还得使用英文提示词。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261334843.png",alt:"赛博朋克猫咪"}})]),t._v(" "),e("blockquote",[e("p",[t._v("关注 "),e("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20210320170901/image/202203102224403.png",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("FSA全栈行动")]),e("OutboundLink")],1),t._v(' 微信公众号，回复 "赛博朋克猫咪" 可获得该原始效果图哦~❤️')])]),t._v(" "),e("h3",{attrs:{id:"_2、模型文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、模型文件"}},[t._v("#")]),t._v(" 2、模型文件")]),t._v(" "),e("p",[t._v("眼尖的你可能发现了，上面截图里左上角 "),e("code",[t._v("Stable Diffusion checkpoint")]),t._v(" 的值怎么跟之前截图里的不一样？这是因为我换了一个模型文件，还记得前面提到那个将近 4 个 G 大小的模型文件（"),e("code",[t._v("v1-5-pruned-emaonly.safetensors")]),t._v("）吗？那是 "),e("code",[t._v("stable-diffusion-webui")]),t._v(" 的默认模型文件，用这个模型文件生成出来的图片比较丑，因此我换了另一个模型文件。模型文件下载的网站几个，比较出名的就是 "),e("code",[t._v("civitai")]),t._v("，这上面共享的都是别人训练好的模型。")]),t._v(" "),e("blockquote",[e("p",[t._v("模型文件下载地址：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("civitai")]),t._v("："),e("a",{attrs:{href:"https://civitai.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://civitai.com/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("默认的 "),e("code",[t._v("v1-5-pruned-emaonly")]),t._v("："),e("a",{attrs:{href:"https://huggingface.co/runwayml/stable-diffusion-v1-5/tree/main",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://huggingface.co/runwayml/stable-diffusion-v1-5/tree/main"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261359630.png",alt:""}})]),t._v(" "),e("p",[t._v("根据你要生成的图片风格（比如：动漫、风景），挑选合适的模型查看，前面那个文生图的例子，使用的就是这个 "),e("code",[t._v("Deliberate")]),t._v(' 模型，直接点击 "Download Latest" 即可下载该模型文件。')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261356679.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("注：模型文件有 2 种格式，分别是 "),e("code",[t._v(".ckpt")]),t._v("（Model PickleTensor） 和 "),e("code",[t._v(".safetensors")]),t._v("（Model SafeTensor），据说 "),e("code",[t._v(".safetensors")]),t._v(" 更安全，这两种格式 "),e("code",[t._v("stable-diffusion-webui")]),t._v(" 都支持，随意下载一种即可。")])]),t._v(" "),e("p",[t._v("将下载好的模型文件放到 "),e("code",[t._v("stable-diffusion-webui\\models\\Stable-diffusion")]),t._v(" 目录下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261408096.png",alt:""}})]),t._v(" "),e("p",[t._v("放置好模型文件之后，需要重启一下 "),e("code",[t._v("stable-diffusion-webui")]),t._v("（执行 "),e("code",[t._v("webui-user.bat")]),t._v("）才能识别到。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261412109.png",alt:""}})]),t._v(" "),e("p",[t._v("这些模型文件一般会附带一组效果图，点击任意一张，就可以看到生成该效果图的一些参数配置：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261423767.png",alt:""}})]),t._v(" "),e("p",[t._v("把这些参数配置到 "),e("code",[t._v("stable-diffusion-webui")]),t._v(' 中，点击 "Generate" 就可以生成类似效果的图片了。')]),t._v(" "),e("blockquote",[e("p",[t._v("注：因为 AI 绘图带有随机性质，所以生成出来的图片跟效果图不一定完全一样。")])]),t._v(" "),e("p",[t._v("文生图功能有很多东西可以发掘，你可以用它来生成世界上独一无二的图片，而要用好文生图功能，提示词（Prompt）是必须掌握的重中之重，它是有语法规则的，在此推荐两篇对 Prompt 详细说明的文章：")]),t._v(" "),e("ul",[e("li",[t._v("全网 Stable Diffusion Prompt 运用技巧："),e("a",{attrs:{href:"https://www.bilibili.com/read/cv19903784",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bilibili.com/read/cv19903784"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Prompt 工具網站："),e("a",{attrs:{href:"https://www.accucrazy.com/prompt-tools-ai/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.accucrazy.com/prompt-tools-ai/"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"三、工程配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、工程配置"}},[t._v("#")]),t._v(" 三、工程配置")]),t._v(" "),e("p",[t._v("前面说到，"),e("code",[t._v("stable-diffusion-webui")]),t._v(" 是可以配置启动参数的，这是官方的 wiki：")]),t._v(" "),e("ul",[e("li",[t._v("配置参数文档："),e("a",{attrs:{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"_1、常用参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、常用参数"}},[t._v("#")]),t._v(" 1、常用参数")]),t._v(" "),e("p",[t._v("这里列几个常用的参数说明一下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--listen")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认启动绑定的 ip 是 "),e("code",[t._v("127.0.0.1")]),t._v("，只能是你自己电脑可以访问 webui，如果你想让同个局域网的人都可以访问的话，可以配置该参数（会自动绑定 "),e("code",[t._v("0.0.0.0")]),t._v(" ip）。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--port xxx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认端口是 "),e("code",[t._v("7860")]),t._v("，如果想换个端口，可以配置该参数，例如："),e("code",[t._v("--port 8888")]),t._v("。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--gradio-auth username:password")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果你希望给 webui 设置登录密码，可以配置该参数，例如："),e("code",[t._v("--gradio-auth GitLqr:123456")]),t._v("。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--use-cpu")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认使用 GPU 算力（需要 Nvidia 显卡），如果没显卡，可以配置该参数，改用 CPU 算力。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--medvram")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为低显存（比如：4G）启用模型优化，会牺牲一点速度。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--lowvram")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为极低显存（比如：2G）启用模型优化，会牺牲很多速度。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--autolaunch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("启动时自动打开浏览器访问 webui。")])])])]),t._v(" "),e("p",[t._v("要配置这些参数很简单，打开 "),e("code",[t._v("webui-user.bat")]),t._v("，把你需要配置的参数添加到 "),e("code",[t._v("COMMANDLINE_ARGS")]),t._v(" 后面即可：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("@echo off\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PYTHON")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VENV_DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COMMANDLINE_ARGS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("--listen "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--port")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v(" --gradio-auth GitLqr:123456 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--autolaunch")]),t._v("\n\ncall webui.bat\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261508388.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2、api-接口服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、api-接口服务"}},[t._v("#")]),t._v(" 2、API 接口服务")]),t._v(" "),e("p",[t._v("除了上述几个常用的参数外，还有一个特别的参数 "),e("code",[t._v("--api")]),t._v("，可以在启动 "),e("code",[t._v("stable-diffusion-webui")]),t._v(" 的同时，启动一个接口服务，在 "),e("code",[t._v("COMMANDLINE_ARGS")]),t._v(" 后面追加上 "),e("code",[t._v("--api")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("@echo off\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PYTHON")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VENV_DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COMMANDLINE_ARGS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("--listen "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--port")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v(" --gradio-auth GitLqr:123456 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--autolaunch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--api")]),t._v("\n\ncall webui.bat\n")])])]),e("p",[t._v("重启后在 url 后面加上 "),e("code",[t._v("/docs")]),t._v(" 即可看到 api 请求说明文档：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20220417121922/image/202302261524963.png",alt:""}})]),t._v(" "),e("p",[t._v("这样我们就可以通过编写程序的方式，使用文生图、图生图等功能了，关于接口传参格式等要求，参见官方 wiki：")]),t._v(" "),e("ul",[e("li",[t._v("官方 api 说明文档："),e("a",{attrs:{href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/API#api-guide-by-kilvoctu",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/API#api-guide-by-kilvoctu"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);