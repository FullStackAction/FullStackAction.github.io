(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{405:function(e,t,a){"use strict";a.r(t);var s=a(14),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一、简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、简述"}},[e._v("#")]),e._v(" 一、简述")]),e._v(" "),t("p",[e._v("热修复无疑是这2年较火的新技术，是作为安卓工程师必学的技能之一。在热修复出现之前，一个已经上线的app中如果出现了bug，即使是一个非常小的bug，不及时更新的话有可能存在风险，若要及时更新就得将app重新打包发布到应用市场后，让用户再一次下载，这样就大大降低了用户体验，当热修复出现之后，这样的问题就不再是问题了。")]),e._v(" "),t("p",[e._v("目前较火的热修复方案大致分为两派，分别是：")]),e._v(" "),t("ol",[t("li",[e._v("阿里系：DeXposed、andfix：从底层二进制入手（c语言）。")]),e._v(" "),t("li",[e._v("腾讯系：tinker：从java加载机制入手。")])]),e._v(" "),t("p",[e._v("本篇的主题并非讲述上面两种方案的使用，而是基于java加载机制，来研究热修复的原理与实现。（类似tinker，当然tinker没这么简单）")]),e._v(" "),t("h2",{attrs:{id:"二、android中如何动态修复bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、android中如何动态修复bug"}},[e._v("#")]),e._v(" 二、Android中如何动态修复bug")]),e._v(" "),t("p",[e._v("关于bug的概念自己百度百科吧，我认为的bug一般有2种（可能不太准确）：")]),e._v(" "),t("ul",[t("li",[e._v("代码功能不符合项目预期，即代码逻辑有问题。")]),e._v(" "),t("li",[e._v("程序代码不够健壮导致App运行时崩溃。")])]),e._v(" "),t("p",[e._v("这两种情况一般是一个或多个class出现了问题，在一个理想的状态下，我们只需将修复好的这些个class更新到用户手机上的app中就可以修复这些bug了。但说着简单，要怎么才能动态更新这些class呢？其实，不管是哪种热修复方案，肯定是如下几个步骤：")]),e._v(" "),t("ol",[t("li",[e._v("下发补丁（内含修复好的class）到用户手机，即让app从服务器上下载（网络传输）")]),e._v(" "),t("li",[e._v('app通过**"某种方式"**，使补丁中的class被app调用（本地更新）')])]),e._v(" "),t("p",[e._v('这里的**"某种方式"**，对本篇而言，就是使用Android的类加载器，通过类加载器加载这些修复好的class，覆盖对应有问题的class，理论上就能修复bug了。所以，下面就先来了解和分析Android中的类加载器吧。')]),e._v(" "),t("h2",{attrs:{id:"三、android中的类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、android中的类加载器"}},[e._v("#")]),e._v(" 三、Android中的类加载器")]),e._v(" "),t("p",[e._v("Android跟java有很大的渊源，基于jvm的java应用是通过ClassLoader来加载应用中的class的，但我们知道Android对jvm优化过，使用的是dalvik，且class文件会被打包进一个dex文件中，底层虚拟机有所不同，那么它们的类加载器当然也是会有所区别，在Android中，要加载dex文件中的class文件就需要用到 "),t("strong",[e._v("PathClassLoader")]),e._v(" 或 "),t("strong",[e._v("DexClassLoader")]),e._v(" 这两个Android专用的类加载器。")]),e._v(" "),t("h3",{attrs:{id:"_1、源码查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、源码查看"}},[e._v("#")]),e._v(" 1、源码查看")]),e._v(" "),t("p",[e._v("一般的源码在Android Studio中可以查到，但 "),t("strong",[e._v("PathClassLoader")]),e._v(" 和 "),t("strong",[e._v("DexClassLoader")]),e._v(" 的源码是属于系统级源码，所以无法在Android Studio中直接查看。不过，有两种方式可以在外部进行查看：第一种是通过下载Android镜像源码的方式进行查看，但一般镜像源码体积较大，不好下载，而且就只是为了看3、4个文件的源码动不动就下载3、4个g的源码，确实不太明智，所以我们一般采用第二种方式：到"),t("a",{attrs:{href:"http://androidxref.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("androidxref.com"),t("OutboundLink")],1),e._v("这个网站上直接查看，下面会列出之后要分析的几个类的源码地址，供看客们方便浏览。")]),e._v(" "),t("p",[e._v("以下是Android 5.0中的部分源码：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://androidxref.com/5.0.0_r2/xref/libcore/dalvik/src/main/java/dalvik/system/PathClassLoader.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("PathClassLoader.java"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://androidxref.com/5.0.0_r2/xref/libcore/dalvik/src/main/java/dalvik/system/DexClassLoader.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("DexClassLoader.java"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://androidxref.com/5.0.0_r2/xref/libcore/dalvik/src/main/java/dalvik/system/BaseDexClassLoader.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("BaseDexClassLoader.java"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://androidxref.com/5.0.0_r2/xref/libcore/dalvik/src/main/java/dalvik/system/DexPathList.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("DexPathList.java"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"_2、pathclassloader与dexclassloader的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、pathclassloader与dexclassloader的区别"}},[e._v("#")]),e._v(" 2、PathClassLoader与DexClassLoader的区别")]),e._v(" "),t("h4",{attrs:{id:"_1-使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用场景"}},[e._v("#")]),e._v(" 1）使用场景")]),e._v(" "),t("ul",[t("li",[e._v("PathClassLoader：只能加载已经安装到Android系统中的apk文件（/data/app目录），是Android默认使用的类加载器。")]),e._v(" "),t("li",[e._v("DexClassLoader：可以加载任意目录下的dex/jar/apk/zip文件，比PathClassLoader更灵活，是实现热修复的重点。")])]),e._v(" "),t("h4",{attrs:{id:"_2-代码差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码差异"}},[e._v("#")]),e._v(" 2）代码差异")]),e._v(" "),t("p",[e._v("因为PathClassLoader与DexClassLoader的源码都很简单，我就直接将它们的全部源码复制过来了：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// PathClassLoader\npublic class PathClassLoader extends BaseDexClassLoader {\n    public PathClassLoader(String dexPath, ClassLoader parent) {\n        super(dexPath, null, null, parent);\n    }\n\n    public PathClassLoader(String dexPath, String librarySearchPath, ClassLoader parent) {\n        super(dexPath, null, librarySearchPath, parent);\n    }\n}\n\n// DexClassLoader\npublic class DexClassLoader extends BaseDexClassLoader {\n    public DexClassLoader(String dexPath, String optimizedDirectory,\n            String librarySearchPath, ClassLoader parent) {\n        super(dexPath, new File(optimizedDirectory), librarySearchPath, parent);\n    }\n}\n")])])]),t("p",[e._v("通过比对，可以得出2个结论：")]),e._v(" "),t("ul",[t("li",[e._v("PathClassLoader与DexClassLoader都继承于BaseDexClassLoader。")]),e._v(" "),t("li",[e._v("PathClassLoader与DexClassLoader在构造函数中都调用了父类的构造函数，但DexClassLoader多传了一个optimizedDirectory。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000021.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_3、basedexclassloader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、basedexclassloader"}},[e._v("#")]),e._v(" 3、BaseDexClassLoader")]),e._v(" "),t("p",[e._v("通过观察PathClassLoader与DexClassLoader的源码我们就可以确定，真正有意义的处理逻辑肯定在BaseDexClassLoader中，所以下面着重分析BaseDexClassLoader源码。")]),e._v(" "),t("h4",{attrs:{id:"_1-构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-构造函数"}},[e._v("#")]),e._v(" 1）构造函数")]),e._v(" "),t("p",[e._v("先来看看BaseDexClassLoader的构造函数都做了什么：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("public class BaseDexClassLoader extends ClassLoader {\n\t...\n\tpublic BaseDexClassLoader(String dexPath, File optimizedDirectory, String libraryPath, ClassLoader parent){\n        super(parent);\n        this.pathList = new DexPathList(this, dexPath, libraryPath, optimizedDirectory);\n    }\n\t...\n}\n")])])]),t("ul",[t("li",[e._v("dexPath：要加载的程序文件（一般是dex文件，也可以是jar/apk/zip文件）所在目录。")]),e._v(" "),t("li",[e._v("optimizedDirectory：dex文件的输出目录（因为在加载jar/apk/zip等压缩格式的程序文件时会解压出其中的dex文件，该目录就是专门用于存放这些被解压出来的dex文件的）。")]),e._v(" "),t("li",[e._v("libraryPath：加载程序文件时需要用到的库路径。")]),e._v(" "),t("li",[e._v("parent：父加载器")])]),e._v(" "),t("p",[e._v('***tip：**上面说到的"程序文件"这个概念是我自己定义的，因为从一个完整App的角度来说，程序文件指定的就是apk包中的classes.dex文件；但从热修复的角度来看，程序文件指的是补丁。')]),e._v(" "),t("blockquote",[t("p",[e._v("因为PathClassLoader只会加载已安装包中的dex文件，而DexClassLoader不仅仅可以加载dex文件，还可以加载jar、apk、zip文件中的dex，我们知道jar、apk、zip其实就是一些压缩格式，要拿到压缩包里面的dex文件就需要解压，所以，DexClassLoader在调用父类构造函数时会指定一个解压的目录。")]),e._v(" "),t("p",[e._v("不过，从Android 8.0开始，BaseDexClassLoader的构造函数逻辑发生了变化，optimizedDirectory过时，不再生效，详情可查看"),t("a",{attrs:{href:"http://androidxref.com/8.0.0_r4/xref/libcore/dalvik/src/main/java/dalvik/system/BaseDexClassLoader.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android 8.0的BaseDexClassLoader.java源码"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"_2-获取class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取class"}},[e._v("#")]),e._v(" 2）获取class")]),e._v(" "),t("p",[e._v("类加载器肯定会提供有一个方法来供外界找到它所加载到的class，该方法就是findClass()，不过在PathClassLoader和DexClassLoader源码中都没有重写父类的findClass()方法，但它们的父类BaseDexClassLoader就有重写findClass()，所以来看看BaseDexClassLoader的findClass()方法都做了哪些操作，代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('private final DexPathList pathList;\n\n@Override\nprotected Class<?> findClass(String name) throws ClassNotFoundException {\n    List<Throwable> suppressedExceptions = new ArrayList<Throwable>();\n\t// 实质是通过pathList的对象findClass()方法来获取class\n    Class c = pathList.findClass(name, suppressedExceptions);\n    if (c == null) {\n        ClassNotFoundException cnfe = new ClassNotFoundException("Didn\'t find class \\"" + name + "\\" on path: " + pathList);\n        for (Throwable t : suppressedExceptions) {\n            cnfe.addSuppressed(t);\n        }\n        throw cnfe;\n    }\n    return c;\n}\n')])])]),t("p",[e._v("可以看到，BaseDexClassLoader的findClass()方法实际上是通过DexPathList对象（pathList）的findClass()方法来获取class的，而这个DexPathList对象恰好在之前的BaseDexClassLoader构造函数中就已经被创建好了。所以，下面就来看看DexPathList类中都做了什么。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000035.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_4、dexpathlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、dexpathlist"}},[e._v("#")]),e._v(" 4、DexPathList")]),e._v(" "),t("p",[e._v("在分析一个代码量较多的源码之前，我们要明确要从这段源码中要知道些什么？这样才不会在“码海”中迷失方向，我自己就定了2个小目标，分别是：")]),e._v(" "),t("ul",[t("li",[e._v("DexPathList的构造函数做了什么事？")]),e._v(" "),t("li",[e._v("DexPathList的findClass()方法是怎么获取class的？")])]),e._v(" "),t("blockquote",[t("p",[e._v("为什么是这2个目标？因为在BaseDexClassLoader的源码中主要就用到了DexPathList的构造函数和findClass()方法。")])]),e._v(" "),t("h4",{attrs:{id:"_1-构造函数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-构造函数-2"}},[e._v("#")]),e._v(" 1）构造函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("private final Element[] dexElements;\n\npublic DexPathList(ClassLoader definingContext, String dexPath,\n        String libraryPath, File optimizedDirectory) {\n    ...\n\tthis.definingContext = definingContext;\n    this.dexElements = makeDexElements(splitDexPath(dexPath), optimizedDirectory,suppressedExceptions);\n    ...\n}\n")])])]),t("p",[e._v("这个构造函数中，保存了当前的类加载器definingContext，并调用了makeDexElements()得到Element集合。")]),e._v(" "),t("blockquote",[t("p",[e._v('通过对splitDexPath(dexPath)的源码追溯，发现该方法的作用其实就是将dexPath目录下的所有程序文件转变成一个File集合。而且还发现，dexPath是一个用冒号（":"）作为分隔符把多个程序文件目录拼接起来的字符串(如：/data/dexdir1:/data/dexdir2:...)。')])]),e._v(" "),t("p",[e._v("那接下来无疑是分析makeDexElements()方法了，因为这部分代码比较长，我就贴出关键代码，并以注释的方式进行分析：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("private static Element[] makeDexElements(ArrayList<File> files, File optimizedDirectory, ArrayList<IOException> suppressedExceptions) {\n\t// 1.创建Element集合\n    ArrayList<Element> elements = new ArrayList<Element>();\n\t// 2.遍历所有dex文件（也可能是jar、apk或zip文件）\n    for (File file : files) {\n        ZipFile zip = null;\n        DexFile dex = null;\n        String name = file.getName();\n        ...\n\t\t// 如果是dex文件\n        if (name.endsWith(DEX_SUFFIX)) {\n            dex = loadDexFile(file, optimizedDirectory);\n\n\t\t// 如果是apk、jar、zip文件（这部分在不同的Android版本中，处理方式有细微差别）\n        } else {\n\t\t\tzip = file;\n            dex = loadDexFile(file, optimizedDirectory);\n        }\n\t\t...\n\t\t// 3.将dex文件或压缩文件包装成Element对象，并添加到Element集合中\n\t\tif ((zip != null) || (dex != null)) {\n            elements.add(new Element(file, false, zip, dex));\n        }\n    }\n\t// 4.将Element集合转成Element数组返回\n    return elements.toArray(new Element[elements.size()]);\n}\n")])])]),t("p",[e._v("在这个方法中，看到了一些眉目，总体来说，DexPathList的构造函数是将一个个的程序文件（可能是dex、apk、jar、zip）封装成一个个Element对象，最后添加到Element集合中。")]),e._v(" "),t("blockquote",[t("p",[e._v("其实，Android的类加载器（不管是PathClassLoader，还是DexClassLoader），它们最后只认dex文件，而loadDexFile()是加载dex文件的核心方法，可以从jar、apk、zip中提取出dex，但这里先不分析了，因为第1个目标已经完成，等到后面再来分析吧。")])]),e._v(" "),t("h4",{attrs:{id:"_2-findclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-findclass"}},[e._v("#")]),e._v(" 2）findClass()")]),e._v(" "),t("p",[e._v("再来看DexPathList的findClass()方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("public Class findClass(String name, List<Throwable> suppressed) {\n    for (Element element : dexElements) {\n\t\t// 遍历出一个dex文件\n        DexFile dex = element.dexFile;\n\n        if (dex != null) {\n\t\t\t// 在dex文件中查找类名与name相同的类\n            Class clazz = dex.loadClassBinaryName(name, definingContext, suppressed);\n            if (clazz != null) {\n                return clazz;\n            }\n        }\n    }\n    if (dexElementsSuppressedExceptions != null) {\n        suppressed.addAll(Arrays.asList(dexElementsSuppressedExceptions));\n    }\n    return null;\n}\n")])])]),t("p",[e._v("结合DexPathList的构造函数，其实DexPathList的findClass()方法很简单，就只是对Element数组进行遍历，一旦找到类名与name相同的类时，就直接返回这个class，找不到则返回null。")]),e._v(" "),t("blockquote",[t("p",[e._v("为什么是调用DexFile的loadClassBinaryName()方法来加载class？这是因为一个Element对象对应一个dex文件，而一个dex文件则包含多个class。也就是说Element数组中存放的是一个个的dex文件，而不是class文件！！！这可以从Element这个类的源码和dex文件的内部结构看出。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000054.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"四、热修复的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、热修复的实现原理"}},[e._v("#")]),e._v(" 四、热修复的实现原理")]),e._v(" "),t("p",[e._v("  终于进入主题了，经过对PathClassLoader、DexClassLoader、BaseDexClassLoader、DexPathList的分析，我们知道，安卓的类加载器在加载一个类时会先从自身DexPathList对象中的Element数组中获取（Element[] dexElements）到对应的类，之后再加载。采用的是数组遍历的方式，不过注意，遍历出来的是一个个的dex文件。")]),e._v(" "),t("p",[e._v("  在for循环中，首先遍历出来的是dex文件，然后再是从dex文件中获取class，所以，我们只要让修复好的class打包成一个dex文件，放于Element数组的第一个元素，这样就能保证获取到的class是最新修复好的class了（当然，有bug的class也是存在的，不过是放在了Element数组的最后一个元素中，所以没有机会被拿到而已）。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000122.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"五、热修复的简单实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、热修复的简单实现"}},[e._v("#")]),e._v(" 五、热修复的简单实现")]),e._v(" "),t("p",[e._v("通过前面的一堆理论之后，是时候实践一把了。")]),e._v(" "),t("h3",{attrs:{id:"_1、得到dex格式补丁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、得到dex格式补丁"}},[e._v("#")]),e._v(" 1、得到dex格式补丁")]),e._v(" "),t("h4",{attrs:{id:"_1-修复好有问题的java文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-修复好有问题的java文件"}},[e._v("#")]),e._v(" 1）修复好有问题的java文件")]),e._v(" "),t("p",[e._v("这一步根据bug的实际情况修改代码即可。")]),e._v(" "),t("h4",{attrs:{id:"_2-将java文件编译成class文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-将java文件编译成class文件"}},[e._v("#")]),e._v(" 2）将java文件编译成class文件")]),e._v(" "),t("p",[e._v("在修复bug之后，可以使用Android Studio的Rebuild Project功能将代码进行编译，然后从build目录下找到对应的class文件。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000141.png",alt:""}})]),e._v(" "),t("p",[e._v("将修复好的class文件复制到其他地方，例如桌面上的dex文件夹中。需要注意的是，在复制这个class文件时，需要把它所在的完整包目录一起复制。假设上图中修复好的class文件是SimpleHotFixBugTest.class，则到时复制出来的目录结构是：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000156.png",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"_3-将class文件打包成dex文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-将class文件打包成dex文件"}},[e._v("#")]),e._v(" 3）将class文件打包成dex文件")]),e._v(" "),t("h5",{attrs:{id:"a-dx指令程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-dx指令程序"}},[e._v("#")]),e._v(" a. dx指令程序")]),e._v(" "),t("p",[e._v("要将class文件打包成dex文件，就需要用到dx指令，这个dx指令类似于java指令。我们知道，java的指令有javac、jar等等，之所以可以使用这类指令，是因为我们有安装过jdk，jdk为我们提供了java指令，相同的，dx指令也需要有程序来提供，它就在Android SDK的build-tools目录下各个Android版本目录之中。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000210.png",alt:""}})]),e._v(" "),t("h5",{attrs:{id:"b-dx指令的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-dx指令的使用"}},[e._v("#")]),e._v(" b. dx指令的使用")]),e._v(" "),t("p",[e._v("dx指令的使用跟java指令的使用条件一样，有2种选择：")]),e._v(" "),t("ul",[t("li",[e._v("配置环境变量（添加到classpath），然后命令行窗口（终端）可以在任意位置使用。")]),e._v(" "),t("li",[e._v("不配环境变量，直接在build-tools/安卓版本 目录下使用命令行窗口（终端）使用。")])]),e._v(" "),t("p",[e._v("第一种方式参考java环境变量配置即可，这里我选用第二种方式。下面我们需要用到的命令是：")]),e._v(" "),t("p",[t("strong",[e._v("dx --dex --output=dex文件完整路径 (空格) 要打包的完整class文件所在目录")]),e._v("，如：")]),e._v(" "),t("blockquote",[t("p",[e._v("dx --dex --output=C:\\Users\\Administrator\\Desktop\\dex\\classes2.dex C:\\Users\\Administrator\\Desktop\\dex")])]),e._v(" "),t("p",[e._v("具体操作看下图：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource20210320170901/image/20210106000241.gif",alt:""}})]),e._v(" "),t("blockquote",[t("p",[e._v("在文件夹目录的空白处，按住shift+鼠标右击，可出现“在此处打开命令行窗口”。")])]),e._v(" "),t("h3",{attrs:{id:"_2、加载dex格式补丁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、加载dex格式补丁"}},[e._v("#")]),e._v(" 2、加载dex格式补丁")]),e._v(" "),t("p",[e._v("根据原理，可以做一个简单的工具类：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('/**\n * @创建者 CSDN_LQR\n * @描述 热修复工具(只认后缀是dex、apk、jar、zip的补丁)\n */\npublic class FixDexUtils {\n\n    private static final String DEX_SUFFIX = ".dex";\n    private static final String APK_SUFFIX = ".apk";\n    private static final String JAR_SUFFIX = ".jar";\n    private static final String ZIP_SUFFIX = ".zip";\n    public static final String DEX_DIR = "odex";\n    private static final String OPTIMIZE_DEX_DIR = "optimize_dex";\n    private static HashSet<File> loadedDex = new HashSet<>();\n\n    static {\n        loadedDex.clear();\n    }\n\n    /**\n     * 加载补丁，使用默认目录：data/data/包名/files/odex\n     *\n     * @param context\n     */\n    public static void loadFixedDex(Context context) {\n        loadFixedDex(context, null);\n    }\n\n    /**\n     * 加载补丁\n     *\n     * @param context       上下文\n     * @param patchFilesDir 补丁所在目录\n     */\n    public static void loadFixedDex(Context context, File patchFilesDir) {\n        if (context == null) {\n            return;\n        }\n        // 遍历所有的修复dex\n        File fileDir = patchFilesDir != null ? patchFilesDir : new File(context.getFilesDir(), DEX_DIR);// data/data/包名/files/odex（这个可以任意位置）\n        File[] listFiles = fileDir.listFiles();\n        for (File file : listFiles) {\n            if (file.getName().startsWith("classes") &&\n                    (file.getName().endsWith(DEX_SUFFIX)\n                            || file.getName().endsWith(APK_SUFFIX)\n                            || file.getName().endsWith(JAR_SUFFIX)\n                            || file.getName().endsWith(ZIP_SUFFIX))) {\n                loadedDex.add(file);// 存入集合\n            }\n        }\n        // dex合并之前的dex\n        doDexInject(context, loadedDex);\n    }\n\n    private static void doDexInject(Context appContext, HashSet<File> loadedDex) {\n        String optimizeDir = appContext.getFilesDir().getAbsolutePath() + File.separator + OPTIMIZE_DEX_DIR;// data/data/包名/files/optimize_dex（这个必须是自己程序下的目录）\n        File fopt = new File(optimizeDir);\n        if (!fopt.exists()) {\n            fopt.mkdirs();\n        }\n        try {\n            // 1.加载应用程序的dex\n            PathClassLoader pathLoader = (PathClassLoader) appContext.getClassLoader();\n            for (File dex : loadedDex) {\n                // 2.加载指定的修复的dex文件\n                DexClassLoader dexLoader = new DexClassLoader(\n                        dex.getAbsolutePath(),// 修复好的dex（补丁）所在目录\n                        fopt.getAbsolutePath(),// 存放dex的解压目录（用于jar、zip、apk格式的补丁）\n                        null,// 加载dex时需要的库\n                        pathLoader// 父类加载器\n                );\n                // 3.合并\n                Object dexPathList = getPathList(dexLoader);\n                Object pathPathList = getPathList(pathLoader);\n                Object leftDexElements = getDexElements(dexPathList);\n                Object rightDexElements = getDexElements(pathPathList);\n                // 合并完成\n                Object dexElements = combineArray(leftDexElements, rightDexElements);\n                // 重写给PathList里面的Element[] dexElements;赋值\n                Object pathList = getPathList(pathLoader);// 一定要重新获取，不要用pathPathList，会报错\n                setField(pathList, pathList.getClass(), "dexElements", dexElements);\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    /**\n     * 反射给对象中的属性重新赋值\n     */\n    private static void setField(Object obj, Class<?> cl, String field, Object value) throws NoSuchFieldException, IllegalAccessException {\n        Field declaredField = cl.getDeclaredField(field);\n        declaredField.setAccessible(true);\n        declaredField.set(obj, value);\n    }\n\n    /**\n     * 反射得到对象中的属性值\n     */\n    private static Object getField(Object obj, Class<?> cl, String field) throws NoSuchFieldException, IllegalAccessException {\n        Field localField = cl.getDeclaredField(field);\n        localField.setAccessible(true);\n        return localField.get(obj);\n    }\n\n\n    /**\n     * 反射得到类加载器中的pathList对象\n     */\n    private static Object getPathList(Object baseDexClassLoader) throws ClassNotFoundException, NoSuchFieldException, IllegalAccessException {\n        return getField(baseDexClassLoader, Class.forName("dalvik.system.BaseDexClassLoader"), "pathList");\n    }\n\n    /**\n     * 反射得到pathList中的dexElements\n     */\n    private static Object getDexElements(Object pathList) throws NoSuchFieldException, IllegalAccessException {\n        return getField(pathList, pathList.getClass(), "dexElements");\n    }\n\n    /**\n     * 数组合并\n     */\n    private static Object combineArray(Object arrayLhs, Object arrayRhs) {\n        Class<?> componentType = arrayLhs.getClass().getComponentType();\n        int i = Array.getLength(arrayLhs);// 得到左数组长度（补丁数组）\n        int j = Array.getLength(arrayRhs);// 得到原dex数组长度\n        int k = i + j;// 得到总数组长度（补丁数组+原dex数组）\n        Object result = Array.newInstance(componentType, k);// 创建一个类型为componentType，长度为k的新数组\n        System.arraycopy(arrayLhs, 0, result, 0, i);\n        System.arraycopy(arrayRhs, 0, result, i, j);\n        return result;\n    }\n}\n')])])]),t("p",[e._v("代码虽然较长，但注释写得很清楚，请仔细看，这里要说两点：")]),e._v(" "),t("h4",{attrs:{id:"_1-class-ref-in-pre-verified-class-resolved-to-unexpected-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-class-ref-in-pre-verified-class-resolved-to-unexpected-implementation"}},[e._v("#")]),e._v(" 1）Class ref in pre-verified class resolved to unexpected implementation")]),e._v(" "),t("p",[e._v("经反馈，这个是大家遇到的最多的一个问题，这里我把注意事项和我的解决方法写清楚：")]),e._v(" "),t("h5",{attrs:{id:"a-fixdexutils"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-fixdexutils"}},[e._v("#")]),e._v(" a.FixDexUtils")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('// 合并完成\nObject dexElements = combineArray(leftDexElements, rightDexElements);\n// 重写给PathList里面的Element[] dexElements;赋值\nObject pathList = getPathList(pathLoader);// 一定要重新获取，不要用pathPathList，会报错\nsetField(pathList, pathList.getClass(), "dexElements", dexElements);\n')])])]),t("p",[e._v("在合并守Element数组后，一定要再重新获取一遍App中的原有的pathList，不要复用前面的pathPathList，绝对会报错（Class ref in pre-verified class resolved to unexpected implementation）。")]),e._v(" "),t("h5",{attrs:{id:"b-instant-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-instant-run"}},[e._v("#")]),e._v(" b.Instant Run")]),e._v(" "),t("p",[e._v("Android Studio的Instant Run功能也是用到了热修复的原理，在重新安装app时并不会完整安装，只会动态修改有更新的class部分，它会影响到测试结果，在跟着本文做试验的同学请确保Instant Run已经关闭。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000302.png",alt:""}})]),e._v(" "),t("h5",{attrs:{id:"c-模拟器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-模拟器"}},[e._v("#")]),e._v(" c.模拟器")]),e._v(" "),t("p",[e._v("我在测试的过程中，使用的是Genymotion，发现Android 4.4的模拟器一直无法打上补丁，但是Android 5.0的模拟器却可以，真机测试也没问题，所以建议不要使用Android 5.0以下的模拟器来测试，强烈建议用真机测试！！")]),e._v(" "),t("h4",{attrs:{id:"_2-dexpath与optimizeddirectory的目录问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-dexpath与optimizeddirectory的目录问题"}},[e._v("#")]),e._v(" 2）dexPath与optimizedDirectory的目录问题")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("DexClassLoader dexLoader = new DexClassLoader(\n        dex.getAbsolutePath(),// 修复好的dex（补丁）所在目录\n        fopt.getAbsolutePath(),// 存放dex的解压目录（用于jar、zip、apk格式的补丁）\n        null,// 加载dex时需要的库\n        pathLoader// 父类加载器\n")])])]),t("p",[e._v("上面的代码是创建一个DexClassLoader对象，其中第1个和第2个参数有个细节需要注意：")]),e._v(" "),t("ul",[t("li",[e._v("参数1是dexPath，指的是补丁所有目录，可以是多个目录（用冒号拼接），而且可以是任意目录，比如说SD卡。")]),e._v(" "),t("li",[e._v("参数2是optimizedDirectory，就是存放从压缩包时解压出来的dex文件的目录，但不能是任意目录，它必须是程序所属的目录才行，比如：data/data/包名/xxx。")])]),e._v(" "),t("p",[e._v("如果你把optimizedDirectory指定成SD卡目录，则会报如下错误：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000314.png",alt:""}})]),e._v(" "),t("blockquote",[t("p",[e._v("java.lang.IllegalArgumentException: Optimized data directory /storage/emulated/0/opt_dex is not owned by the current user. Shared storage cannot protect your application from code injection attacks.")])]),e._v(" "),t("p",[e._v("意思是说SD卡目录不属于当前用户。此外，这里再校正之前的一个小问题，optimizedDirectory不仅仅存放从压缩包出来的dex文件，如果补丁文件就是一个dex文件，那么它也会将这个补丁文件复制到optimizedDirectory目录下。")]),e._v(" "),t("h3",{attrs:{id:"_3、加载jar、apk、zip格式补丁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、加载jar、apk、zip格式补丁"}},[e._v("#")]),e._v(" 3、加载jar、apk、zip格式补丁")]),e._v(" "),t("p",[e._v("前面已经说了很多次DexClassLoader可以加载jar、apk、zip格式补丁文件了，那这类格式的补丁文件有什么要求吗？"),t("br"),e._v("\n答案是：这类压缩包中必须放着一个dex文件，而且对名字有要求，必须是classes.dex。Why？这就需要分析DexPathList类中的loadDexFile()方法了。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("private static DexFile loadDexFile(File file, File optimizedDirectory)\n        throws IOException {\n\t// 如果optimizedDirectory为null，其实就是PathClassLoader加载dex文件的处理方式\n    if (optimizedDirectory == null) {\n        return new DexFile(file);\n    } \n\t// 如果optimizedDirectory不是null，这就是DexClassLoader加载dex文件的处理方式了，重点看这个\n\telse {\n        String optimizedPath = optimizedPathFor(file, optimizedDirectory);\n        return DexFile.loadDex(file.getPath(), optimizedPath, 0);\n    }\n}\n")])])]),t("blockquote",[t("p",[e._v("参数一file，可能是dex文件，也可能是jar、apk、zip文件。")])]),e._v(" "),t("p",[e._v("从上面的源码中，不难看出else分支才是DexClassLoader加载dex文件的处理方式，它调用的是optimizedPathFor()方法拿到之后dex文件在optimizedDirectory目录下的全路径：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('private static String optimizedPathFor(File path, File optimizedDirectory) {\n    String fileName = path.getName();\n    if (!fileName.endsWith(DEX_SUFFIX)) {\n        int lastDot = fileName.lastIndexOf(".");\n\t\t// 如果补丁没有后缀，就给它加一个".dex"后缀\n        if (lastDot < 0) {\n            fileName += DEX_SUFFIX;\n        } \n\t\t// 不管补丁后缀是dex、jar、apk还是zip，最终放到optimizedDirectory目录下的一定是dex文件\n\t\telse {\n            StringBuilder sb = new StringBuilder(lastDot + 4);\n            sb.append(fileName, 0, lastDot);\n            sb.append(DEX_SUFFIX);\n            fileName = sb.toString();\n        }\n    }\n\n    File result = new File(optimizedDirectory, fileName);\n    return result.getPath();\n}\n')])])]),t("p",[e._v("前面已经说过了，Android的类加载器最终只认dex文件，即使补丁是jar、apk、zip等压缩文件，它也会把其中的dex文件解压出来，所以该方法得到的文件名一定是以dex结尾的。好了，这个optimizedPathFor()方法并不是重点，回头看loadDexFile()中的else分支还有一个DexFile.loadDex()方法，这个方法就相当重要了。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("static public DexFile loadDex(String sourcePathName, String outputPathName, int flags) throws IOException {\n    return new DexFile(sourcePathName, outputPathName, flags);\n}\n")])])]),t("p",[e._v("这个方法中就调用了一下自己的构造函数，并传入各个参数，接着来看看DexFile的构造函数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('/**\n * Open a DEX file, specifying the file in which the optimized DEX\n * data should be written.  If the optimized form exists and appears\n * to be current, it will be used; if not, the VM will attempt to\n * regenerate it.\n *\n * This is intended for use by applications that wish to download\n * and execute DEX files outside the usual application installation\n * mechanism.  This function should not be called directly by an\n * application; instead, use a class loader such as\n * dalvik.system.DexClassLoader.\n *\n * @param sourcePathName\n *  Jar or APK file with "classes.dex".  (May expand this to include\n *  "raw DEX" in the future.)\n * @param outputPathName\n *  File that will hold the optimized form of the DEX data.\n * @param flags\n *  Enable optional features.  (Currently none defined.)\n * @return\n *  A new or previously-opened DexFile.\n * @throws IOException\n *  If unable to open the source or output file.\n */\nprivate DexFile(String sourceName, String outputName, int flags) throws IOException {\n    if (outputName != null) {\n        try {\n            String parent = new File(outputName).getParent();\n            if (Libcore.os.getuid() != Libcore.os.stat(parent).st_uid) {\n                throw new IllegalArgumentException("Optimized data directory " + parent\n                        + " is not owned by the current user. Shared storage cannot protect"\n                        + " your application from code injection attacks.");\n            }\n        } catch (ErrnoException ignored) {\n            // assume we\'ll fail with a more contextual error later\n        }\n    }\n\n    mCookie = openDexFile(sourceName, outputName, flags);\n    mFileName = sourceName;\n    guard.open("close");\n    //System.out.println("DEX FILE cookie is " + mCookie + " sourceName=" + sourceName + " outputName=" + outputName);\n}\n')])])]),t("p",[e._v("奇怪吗，这次我没有把构造函数的注释去掉，原因是在它的注释中就已经有我们想要的答案了：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('@param sourcePathName Jar or APK file with "classes.dex".  (May expand this to include "raw DEX" in the future.)\n')])])]),t("p",[e._v("这名注释的意思就是说，jar或apk格式的补丁文件中需要有一个classes.dex。至此，对于压缩格式的补丁文件的要求就弄明白了。那么接下来就只需要生成这几种格式的补丁试一试就好了。制作这类压缩文件也很简单，直接用压缩软件压缩成zip文件，然后改下后缀就可以。")]),e._v(" "),t("h2",{attrs:{id:"六、测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、测试"}},[e._v("#")]),e._v(" 六、测试")]),e._v(" "),t("p",[e._v("这部分其实本不想写的，因为比较简单，但想了想不写又觉得不完整，那接下来就来测试一波吧。")]),e._v(" "),t("h3",{attrs:{id:"_1、代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、代码"}},[e._v("#")]),e._v(" 1、代码")]),e._v(" "),t("h4",{attrs:{id:"_1-activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-activity"}},[e._v("#")]),e._v(" 1）Activity")]),e._v(" "),t("p",[e._v("布局文件就俩按钮，很简单就不贴布局文件代码了，看这两个按钮的点击事件就行。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("public class SimpleHotFixActivity extends AppCompatActivity {\n\n    @Override\n    protected void onCreate(@Nullable Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_simple_hot_fix);\n    }\n\n\t// “修复”按钮的点击事件\n    public void fix(View view) {\n        FixDexUtils.loadFixedDex(this, Environment.getExternalStorageDirectory());\n    }\n\n\t// “计算”按钮的点击事件\n    public void clac(View view) {\n        SimpleHotFixBugTest test = new SimpleHotFixBugTest();\n        test.getBug(this);\n    }\n}\n")])])]),t("p",[e._v("可以看到，“修复”按钮的点击事件是去加载SD卡目录下的补丁文件。")]),e._v(" "),t("h4",{attrs:{id:"_2-simplehotfixbugtest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-simplehotfixbugtest"}},[e._v("#")]),e._v(" 2）SimpleHotFixBugTest")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('public class SimpleHotFixBugTest {\n    public void getBug(Context context) {\n        int i = 10;\n        int a = 0;\n        Toast.makeText(context, "Hello,I am CSDN_LQR:" + i / a, Toast.LENGTH_SHORT).show();\n    }\n}\n')])])]),t("p",[e._v("会发生什么事呢？除数是0异常，一个简单的运行时异常，修复它也很简单，把a的值改为非0即可。")]),e._v(" "),t("h3",{attrs:{id:"_2、演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、演示"}},[e._v("#")]),e._v(" 2、演示")]),e._v(" "),t("h4",{attrs:{id:"_1、bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、bug"}},[e._v("#")]),e._v(" 1、bug")]),e._v(" "),t("p",[e._v("不多说，看操作。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000344.gif",alt:""}})]),e._v(" "),t("p",[e._v("妥妥的ArithmeticException。")]),e._v(" "),t("blockquote",[t("p",[e._v("Caused by: java.lang.ArithmeticException: divide by zero")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000403.png",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"_2、动态修复bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、动态修复bug"}},[e._v("#")]),e._v(" 2、动态修复bug")]),e._v(" "),t("p",[e._v("首先，我将补丁文件classes2.dex放到手机的SD目录下。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000416.png",alt:""}})]),e._v(" "),t("p",[e._v("然后先点击修复按钮，再点计算按钮。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000429.gif",alt:""}})]),e._v(" "),t("p",[e._v("大功告成，压缩格式的补丁跟dex格式的补丁一样，直接丢掉SD卡目录下就行了，但一定要注意，压缩格式的补丁中的文件一定是classes.dex！！！")]),e._v(" "),t("h3",{attrs:{id:"最后贴下demo地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后贴下demo地址"}},[e._v("#")]),e._v(" 最后贴下Demo地址")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/GitLqr/HotFixDemo",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/GitLqr/HotFixDemo"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("权限申请：本文的提供的Demo是读取SD卡下的补丁文件，但却没有为Android6.0以上适配动态权限申请，如果你有使用该demo进行测试，那要注意自己测试机的Android版本，若是6.0以上，请务必先为Demo分配SD卡读写操作权限，否则App崩溃都不知道是不是因为bug造成的 ，切记。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106000449.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);