(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{383:function(t,e,n){"use strict";n.r(e);var i=n(14),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"一、简述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、简述"}},[t._v("#")]),t._v(" 一、简述")]),t._v(" "),e("p",[t._v("IoC和AOP可谓是后台开发入门必学的知识（Spring相关），但这两者都仅仅只是概念而已，并非具体技术实现，同样的，Android也可以使用IoC和AOP，之前已经写过如何在Android开发中使用AOP了，有兴趣的朋友可以看我之前的博客（顺便点个关注吧），所以，本文主题便是IoC。")]),t._v(" "),e("blockquote",[e("p",[t._v("控制反转（Inversion of Control，英文缩写为IoC）是框架的重要特征，并非面向对象编程的专用术语。它包括依赖注入（Dependency Injection，简称DI）和依赖查找（Dependency Lookup）。")])]),t._v(" "),e("p",[t._v("上述源至百度百科，对于第一次接触IoC的人可能有些晦涩难懂，其实，通俗来讲，就是本来我可以做的事我现在不想做了，交给框架来做。举个实际的例子，就是ButterKnife，它就是Android上IoC的典型，实现了控件的动态注入及点击事件的绑定。所以，下面我们就来打造一个类似ButterKnife的IoC框架吧。")]),t._v(" "),e("h2",{attrs:{id:"二、框架实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、框架实现"}},[t._v("#")]),t._v(" 二、框架实现")]),t._v(" "),e("p",[t._v("下面是"),e("a",{attrs:{href:"https://github.com/JakeWharton/butterknife",target:"_blank",rel:"noopener noreferrer"}},[t._v("ButterKnife"),e("OutboundLink")],1),t._v("在GitHub上的代码示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("class ExampleActivity extends Activity {\n  @BindView(R.id.user) EditText username;\n  @BindView(R.id.pass) EditText password;\n\n  @OnClick(R.id.submit) void submit() {\n    // TODO call server...\n  }\n\n  @Override public void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.simple_activity);\n    ButterKnife.bind(this);\n    // TODO Use fields...\n  }\n}\n")])])]),e("p",[t._v("它包含3部分：")]),t._v(" "),e("ul",[e("li",[t._v("控件注入使用@BindView注解")]),t._v(" "),e("li",[t._v("点击事件的绑定使用@OnClick注解")]),t._v(" "),e("li",[t._v("在onCreate()方法中调用ButterKnife.bind(this)")])]),t._v(" "),e("p",[t._v("所以，我们要模仿ButterKnife，先从@BindView和@OnClick这两个注解入手。")]),t._v(" "),e("h3",{attrs:{id:"_1、注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、注解"}},[t._v("#")]),t._v(" 1、注解")]),t._v(" "),e("p",[t._v("注意，不管是控件注入还是点击事件绑定，都必须跟控件的id扯上关系，所以这两个注解中都会有一个属性用于表示控件的id。代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// 控件注入注解\n@Target(ElementType.FIELD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface BindView {\n    int value();\n}\n\n// 控件点击事件注解\n@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface ClickView {\n    int value();\n}\n")])])]),e("blockquote",[e("p",[t._v("因为我不想事件绑定的注解名为OnClick，所以这里的注解命名为ClickView，效果一样的。")])]),t._v(" "),e("p",[t._v("其中，BindView注解用于控件的注入，即类字段，所以其Target取值ElementType.FIELD，而ClickView注解用于控件的点击事件绑定，即方法，所以其Target取值ElementType.METHOD；并且，这两个注解都是在App运行期间被框架所使用，即运行时可见，所以，Retention取值为RetentionPolicy.RUNTIME。这俩注解在编码上的使用见如下代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('public class MainActivity extends AppCompatActivity {\n\n    @BindView(R.id.btn_hello)\n    Button mBtnHello;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n    }\n\n    @ClickView(R.id.btn_hello)\n    public void sayHello() {\n        Toast.makeText(getApplicationContext(), "hello", Toast.LENGTH_SHORT).show();\n    }\n}\n')])])]),e("p",[t._v("但这样是不够的，因为注解可以认为只是一个标记，是静态的，它并没有实现控件注入与事件绑定的功能，控件的获取实际上还是需要findViewById()来实现，而事件的绑定同样也需要setOnClickListener()来实现，这也正是框架要为我们所做的工作。")]),t._v(" "),e("h3",{attrs:{id:"_2、控件注入与事件绑定的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、控件注入与事件绑定的实现"}},[t._v("#")]),t._v(" 2、控件注入与事件绑定的实现")]),t._v(" "),e("blockquote",[e("p",[t._v("ButterKnife不是这么实现的，这只是我个人的想法而已。")])]),t._v(" "),e("ol",[e("li",[t._v("控件注入：实际上是框架调用了activity的findViewById()方法拿到id对应的控件，再通过反射的方式，对控件（类字段）进行赋值。")]),t._v(" "),e("li",[t._v("事件绑定：实际上也是框架调用了activity的findViewById()方法拿到id对应的控件，再调用控件的setOnClickListener()设置控件的点击事件，在这个点击事件里通过反射调用Activity中被ClickView注解的sayHello()方法而已。")])]),t._v(" "),e("p",[t._v("下面就来动手实现它吧：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("public class ViewUtil {\n\n\tpublic static void inject(final Activity activity) {\n\t\t// 拿到Activity的class对象\n        Class clazz = activity.getClass();\n\n        // 遍历属性\n        Field[] fields = clazz.getDeclaredFields();\n        for (Field field : fields) {\n\t\t\t// 找到有BindView注解的属性\n            BindView bindView = field.getAnnotation(BindView.class);\n            if (bindView != null) {\n                try {\n\t\t\t\t\t// 让属性可被访问（如果属性使用final和jprivate，则必须使其可访问，否则以下操作会报错）\n\t\t\t\t\tfield.setAccessible(true);\n\t\t\t\t\t// 通过id获取到View，再对属性赋值\n                    field.set(activity, activity.findViewById(bindView.value()));\n                } catch (IllegalAccessException e) {\n                    e.printStackTrace();\n                }\n            }\n        }\n\n        // 遍历方法\n        Method[] methods = clazz.getDeclaredMethods();\n        for (final Method method : methods) {\n\t\t\t// 找到有ClickView注解的方法\n            ClickView clickView = method.getAnnotation(ClickView.class);\n            if (clickView != null) {\n\t\t\t\t// 通过id获取到View，再对view设置点击事件\n                activity.findViewById(clickView.value()).setOnClickListener(new View.OnClickListener() {\n                    @Override\n                    public void onClick(View v) {\n                        try {\n                            method.setAccessible(true);\n                            // 调用这个被ClickView注解的方法\n                            method.invoke(activity);\n                        } catch (IllegalAccessException e) {\n                            e.printStackTrace();\n                        } catch (InvocationTargetException e) {\n                            e.printStackTrace();\n                        }\n                    }\n                });\n            }\n        }\n    }\n}\n")])])]),e("h3",{attrs:{id:"_3、试试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、试试"}},[t._v("#")]),t._v(" 3、试试")]),t._v(" "),e("p",[t._v("功能既已实现，下来就来试试看，是否真的有效，在原先代码的onCreate()方法中加上ViewUtil.inject(this)：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('public class MainActivity extends AppCompatActivity {\n\n    @BindView(R.id.btn_hello)\n    Button mBtnHello;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        ViewUtil.inject(this);\n    }\n\n    @ClickView(R.id.btn_hello)\n    public void sayHello() {\n        Toast.makeText(getApplicationContext(), "hello", Toast.LENGTH_SHORT).show();\n    }\n}\n')])])]),e("p",[t._v('如果控件注入成功，则当点击控件时，会吐司"hello"。')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210106001940.gif",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"三、拓展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、拓展"}},[t._v("#")]),t._v(" 三、拓展")]),t._v(" "),e("p",[t._v("上面的测试很成功啊，不过，这个框架目前只能给Activity使用，而ButterKnife可不只如此，不管Activity还是Fragment都能通吃，所以，我们这个框架也要适用于Fragment。")]),t._v(" "),e("h3",{attrs:{id:"_1、activity与fragment获取控件的不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、activity与fragment获取控件的不同"}},[t._v("#")]),t._v(" 1、Activity与Fragment获取控件的不同")]),t._v(" "),e("p",[t._v("不管是控件注入还是事件绑定，都离不开最初始的一点，那就是控件的获取，即findViewById()。Activity获取控件只需要调用自己的findViewById()方法即可，但Fragment可不是这样，先来看看Fragment是如何设置布局的：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("public class MyFragment extends Fragment {\n    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {\n        if (mRootView == null) {\n            mRootView = inflater.inflate(R.layout.fragment_my, null, false);\n        }\n        return mRootView;\n    }\n}\n")])])]),e("p",[t._v("之所以Activity可以调用自己的findViewById()方法来获取控件，是因为Activity本身就是布局，而Fragment则不是这样的，Fragment的布局是它自己的一个View（mRootView），所以要获取Fragment中的控件，就必须调用mRootView的findViewById()方法来获取。")]),t._v(" "),e("h3",{attrs:{id:"_2、代码抽取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、代码抽取"}},[t._v("#")]),t._v(" 2、代码抽取")]),t._v(" "),e("p",[t._v("回顾ViewUtil的inject(Activity activity)方法，其实这个activity参数在这个方法中是担任两个角色的，一个是类（容器），另一个是布局。当作为容器这个角色时，是为了使用反射获得其中的字段和方法并赋值或执行。而作为布局这个角色时，是为了通过id获取布局控件（findViewById）。再看看Fragment，是不是有点端倪了呢？Fragment就是容器角色，而它的mRootView则是布局角色，所以，inject()的方法体可以这么抽：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("private static Context context;\nprivate static void injectReal(final Object container, Object rootView) {\n    if (container instanceof Activity) {\n        context = (Activity) container;\n    } else if (container instanceof Fragment) {\n        context = ((Fragment) container).getActivity();\n    } else if (container instanceof android.app.Fragment) {\n        context = ((android.app.Fragment) container).getActivity();\n    }\n\n    Class clazz = container.getClass();\n    // 遍历属性\n    Field[] fields = clazz.getDeclaredFields();\n    for (Field field : fields) {\n        BindView bindView = field.getAnnotation(BindView.class);\n        if (bindView != null) {\n            try {\n                field.setAccessible(true);\n                field.set(container, findViewById(rootView, bindView.value()));\n            } catch (IllegalAccessException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n    // 遍历方法\n    Method[] methods = clazz.getDeclaredMethods();\n    for (final Method method : methods) {\n        ClickView clickView = method.getAnnotation(ClickView.class);\n        if (clickView != null) {\n            findViewById(rootView, clickView.value()).setOnClickListener(new View.OnClickListener() {\n                @Override\n                public void onClick(View v) {\n                    try {                            \n                        method.setAccessible(true);\n                        method.invoke(container);\n                    } catch (IllegalAccessException e) {\n                        e.printStackTrace();\n                    } catch (InvocationTargetException e) {\n                        e.printStackTrace();\n                    }\n                }\n            });\n        }\n    }\n}\n\nprivate static View findViewById(Object layout, int resId) {\n    if (layout instanceof Activity) {\n        return ((Activity) layout).findViewById(resId);\n    } else if (layout instanceof View) {\n        return ((View) layout).findViewById(resId);\n    }\n    return null;\n}\n")])])]),e("p",[t._v("如此抽取之后，Activity与Fragment对应的inject()方法就可以共同使用这个injectReal()方法了：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// Activity\npublic static void inject(Activity activity) {\n    injectReal(activity, activity);\n}\n\n// v4 Fragment\npublic static void inject(Fragment container, View rootView) {\n    injectReal(container, rootView);\n}\n\n// app Fragment\npublic static void inject(android.app.Fragment container, View rootView) {\n    injectReal(container, rootView);\n}\n")])])]),e("p",[t._v("相当清晰，而且是可以成功的，这里就不测试了。")]),t._v(" "),e("h3",{attrs:{id:"最后贴下demo地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后贴下demo地址"}},[t._v("#")]),t._v(" 最后贴下Demo地址")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/GitLqr/IocDemo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/GitLqr/IocDemo"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);