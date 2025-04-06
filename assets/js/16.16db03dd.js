(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(t,e,n){"use strict";n.r(e);var i=n(14),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"一、简述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、简述"}},[t._v("#")]),t._v(" 一、简述")]),t._v(" "),e("p",[t._v("说到RecyclerView大家都很熟悉了，相比于ListView，它具有高度解耦、性能优化等优势，而且现在大多数安卓开发者都已经将RecyclerView用来完全替代ListView和GridView，因为它功能十分强大，但往往功能强大的东西，反而不太好控制，例如今天要说的这个ItemDecoration，ItemDecoration是条目装饰，下面来看看它的强大吧。")]),t._v(" "),e("h2",{attrs:{id:"二、使用itemdecoration绘制分割线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、使用itemdecoration绘制分割线"}},[t._v("#")]),t._v(" 二、使用ItemDecoration绘制分割线")]),t._v(" "),e("p",[t._v("想想之前的ListView，要加条分割线，那是分分钟解决的小事，只需要在布局文件中对ListView控件设置其divier属性或者在动态中设置divider即可完成，但RecyclerView却没这么简单了，RecyclerView并没有提供任何直接设置分割线的方法，除了在条目布局中加入这种笨方法之外，也就只能通过ItemDecoration来实现了。")]),t._v(" "),e("h3",{attrs:{id:"_1、自定义itemdecoration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、自定义itemdecoration"}},[t._v("#")]),t._v(" 1、自定义ItemDecoration")]),t._v(" "),e("p",[t._v("要使用ItemDecoration，我们得必须先自定义，直接继承ItemDecoration即可。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("public class MyDecorationOne extends RecyclerView.ItemDecoration {\n\n}\n")])])]),e("h3",{attrs:{id:"_2、重写getitemoffsets-和ondraw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、重写getitemoffsets-和ondraw"}},[t._v("#")]),t._v(" 2、重写getItemOffsets()和onDraw()")]),t._v(" "),e("p",[t._v("在实现自定义的装饰效果就必须重写getItemOffsets()和onDraw()。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("public class MyDecorationOne extends RecyclerView.ItemDecoration {\n\n    /**\n     * 画线\n     */\n    @Override\n    public void onDraw(Canvas c, RecyclerView parent, RecyclerView.State state) {\n        super.onDraw(c, parent, state);\n    }\n\n    /**\n     * 设置条目周边的偏移量\n     */\n    @Override\n    public void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {\n        super.getItemOffsets(outRect, view, parent, state);\n        \n    }\n}\n")])])]),e("h3",{attrs:{id:"_3、解析getitemoffsets-和ondraw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、解析getitemoffsets-和ondraw"}},[t._v("#")]),t._v(" 3、解析getItemOffsets()和onDraw()")]),t._v(" "),e("p",[t._v("在理清这两个方法的作用之前，先理清下ItemDecoration的含义，直译：条目装饰，顾名思义，ItemDecoration是对Item起到了装饰作用，更准确的说是对item的周边起到了装饰的作用，通过下面的图应该能帮助你理解这话的含义。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210107081833.png",alt:""}})]),t._v(" "),e("p",[t._v("上图中已经说到了，getItemOffsets()就是设置item周边的偏移量（也就是装饰区域的“宽度”）。而onDraw()才是真正实现装饰的回调方法，通过该方法可以在装饰区域任意画画，这里我们来画条分割线。")]),t._v(" "),e("h3",{attrs:{id:"_4、-实现-getitemoffsets-和ondraw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、-实现-getitemoffsets-和ondraw"}},[t._v("#")]),t._v(" 4、“实现”getItemOffsets()和onDraw()")]),t._v(" "),e("p",[t._v("本例中实现的是线性列表的分割线（即使用LinearLayoutManager）。")]),t._v(" "),e("p",[t._v("1）当线性列表是水平方向时，分割线竖直的；当线性列表是竖直方向时，分割线是水平的。")]),t._v(" "),e("p",[t._v("2）当画竖直分割线时，需要在item的右边偏移出一条线的宽度；当画水平分割线时，需要在item的下边偏移出一条线的高度。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("/**\n * 画线\n */\n@Override\npublic void onDraw(Canvas c, RecyclerView parent, RecyclerView.State state) {\n    super.onDraw(c, parent, state);\n    if (orientation == RecyclerView.HORIZONTAL) {\n        drawVertical(c, parent, state);\n    } else if (orientation == RecyclerView.VERTICAL) {\n        drawHorizontal(c, parent, state);\n    }\n}\n\n/**\n * 设置条目周边的偏移量\n */\n@Override\npublic void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {\n    super.getItemOffsets(outRect, view, parent, state);\n    if (orientation == RecyclerView.HORIZONTAL) {\n        //画垂直线\n        outRect.set(0, 0, mDivider.getIntrinsicWidth(), 0);\n    } else if (orientation == RecyclerView.VERTICAL) {\n        //画水平线\n        outRect.set(0, 0, 0, mDivider.getIntrinsicHeight());\n    }\n}\n")])])]),e("h3",{attrs:{id:"_5、画出一条华丽的分割线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、画出一条华丽的分割线"}},[t._v("#")]),t._v(" 5、画出一条华丽的分割线")]),t._v(" "),e("p",[t._v("因为getItemOffsets()是相对每个item而言的，即每个item都会偏移出相同的装饰区域。而onDraw()则不同，它是相对Canvas来说的，通俗的说就是要自己找到要画的线的位置，这是自定义ItemDecoration中唯一比较难的地方了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("/**\n * 在构造方法中加载系统自带的分割线（就是ListView用的那个分割线）\n */\npublic MyDecorationOne(Context context, int orientation) {\n    this.orientation = orientation;\n    int[] attrs = new int[]{android.R.attr.listDivider};\n    TypedArray a = context.obtainStyledAttributes(attrs);\n    mDivider = a.getDrawable(0);\n    a.recycle();\n}    \n\n/**\n * 画竖直分割线\n */\nprivate void drawVertical(Canvas c, RecyclerView parent, RecyclerView.State state) {\n    int childCount = parent.getChildCount();\n    for (int i = 0; i < childCount; i++) {\n        View child = parent.getChildAt(i);\n        RecyclerView.LayoutParams params = (RecyclerView.LayoutParams) child.getLayoutParams();\n        int left = child.getRight() + params.rightMargin;\n        int top = child.getTop() - params.topMargin;\n        int right = left + mDivider.getIntrinsicWidth();\n        int bottom = child.getBottom() + params.bottomMargin;\n        mDivider.setBounds(left, top, right, bottom);\n        mDivider.draw(c);\n    }\n}\n\n/**\n * 画水平分割线\n */\nprivate void drawHorizontal(Canvas c, RecyclerView parent, RecyclerView.State state) {\n    int childCount = parent.getChildCount();\n    for (int i = 0; i < childCount; i++) {\n        View child = parent.getChildAt(i);\n        RecyclerView.LayoutParams params = (RecyclerView.LayoutParams) child.getLayoutParams();\n        int left = child.getLeft() - params.leftMargin;\n        int top = child.getBottom() + params.bottomMargin;\n        int right = child.getRight() + params.rightMargin;\n        int bottom = top + mDivider.getIntrinsicHeight();\n        mDivider.setBounds(left, top, right, bottom);\n        mDivider.draw(c);\n    }\n}\n")])])]),e("p",[t._v("下图仅对水平分割线的左、上坐标进行图解，其他坐标的计算以此类推。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210107081848.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_6、效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、效果"}},[t._v("#")]),t._v(" 6、效果")]),t._v(" "),e("p",[t._v("看了下面的效果，你可能会吐槽说，不就是加条分割线吗？要不要这么大费周章？是的，一开始我也是这么想，确实只是为了画条分割线的话，这也太麻烦了，而且项目开发中很少对分割线有多高的定制要求，一般就是ListView那样的，最多就是改改颜色这些。所以本人在之前有对RecyclerView进行过一次封装，可以轻松实现分割线，有兴趣的可以"),e("a",{attrs:{href:"https://github.com/GitLqr/LQRRecyclerViewLibrary",target:"_blank",rel:"noopener noreferrer"}},[t._v("戳我看看！！"),e("OutboundLink")],1),t._v("。好了，下面继续。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210107081906.gif",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"三、使用itemdecoration绘制表格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、使用itemdecoration绘制表格"}},[t._v("#")]),t._v(" 三、使用ItemDecoration绘制表格")]),t._v(" "),e("p",[t._v("经过上面的学习，相信心中已经对ItemDecoration有个大概的底了，下面再来实现个其他的效果吧——绘制表格。")]),t._v(" "),e("h3",{attrs:{id:"_1、分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、分析"}},[t._v("#")]),t._v(" 1、分析")]),t._v(" "),e("p",[t._v("我们知道ItemDecoration就是装饰item周边用的，画条分割线只需要2步，1是在item的下方偏移出一定的宽度，2是在偏移出来的位置上画线。画表格线其实也一样，除了画item下方的线，还画item右边的线就好了（当然换成左边也行）。")]),t._v(" "),e("h3",{attrs:{id:"_2、实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、实现"}},[t._v("#")]),t._v(" 2、实现")]),t._v(" "),e("p",[t._v("为了完成表格的样式，本例中使用的是网格列表（即使用GridLayoutManager）。")]),t._v(" "),e("h4",{attrs:{id:"_1-自定义分割线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义分割线"}},[t._v("#")]),t._v(" 1）自定义分割线")]),t._v(" "),e("p",[t._v("为了效果更加明显，这里自定义分割线样式。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<?xml version="1.0" encoding="utf-8"?>\n<shape xmlns:android="http://schemas.android.com/apk/res/android"\n       android:shape="rectangle">\n\n    <solid android:color="#f00"/>\n    <size\n        android:width="2dp"\n        android:height="2dp"/>\n\n</shape>\n')])])]),e("h4",{attrs:{id:"_2-自定义itemdecoration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义itemdecoration"}},[t._v("#")]),t._v(" 2）自定义ItemDecoration")]),t._v(" "),e("p",[t._v("实现上跟画分割线没多大差别，瞄一下就明白了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("public class MyDecorationTwo extends RecyclerView.ItemDecoration {\n\n    private final Drawable mDivider;\n\n    public MyDecorationTwo(Context context) {\n        mDivider = context.getResources().getDrawable(R.drawable.divider);\n    }\n\n    @Override\n    public void onDraw(Canvas c, RecyclerView parent, RecyclerView.State state) {\n        super.onDraw(c, parent, state);\n        drawVertical(c, parent);\n        drawHorizontal(c, parent);\n    }\n\n    private void drawVertical(Canvas c, RecyclerView parent) {\n        int childCount = parent.getChildCount();\n        for (int i = 0; i < childCount; i++) {\n            View child = parent.getChildAt(i);\n            RecyclerView.LayoutParams params = (RecyclerView.LayoutParams) child.getLayoutParams();\n            int left = child.getRight() + params.rightMargin;\n            int top = child.getTop() - params.topMargin;\n            int right = left + mDivider.getIntrinsicWidth();\n            int bottom = child.getBottom() + params.bottomMargin;\n            mDivider.setBounds(left, top, right, bottom);\n            mDivider.draw(c);\n        }\n    }\n\n    private void drawHorizontal(Canvas c, RecyclerView parent) {\n        int childCount = parent.getChildCount();\n        for (int i = 0; i < childCount; i++) {\n            View child = parent.getChildAt(i);\n            RecyclerView.LayoutParams params = (RecyclerView.LayoutParams) child.getLayoutParams();\n            int left = child.getLeft() - params.leftMargin;\n            int top = child.getBottom() + params.bottomMargin;\n            int right = child.getRight() + params.rightMargin;\n            int bottom = top + mDivider.getMinimumHeight();\n            mDivider.setBounds(left, top, right, bottom);\n            mDivider.draw(c);\n        }\n    }\n\n    @Override\n    public void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {\n        super.getItemOffsets(outRect, view, parent, state);\n        outRect.set(0, 0, mDivider.getIntrinsicWidth(), mDivider.getIntrinsicHeight());\n    }\n}\n")])])]),e("h3",{attrs:{id:"_3、效果-有瑕疵"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、效果-有瑕疵"}},[t._v("#")]),t._v(" 3、效果（有瑕疵）")]),t._v(" "),e("p",[t._v("可以看出下面的效果是有问题的，表格的最后一列和最后一行不应该出现边边。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210107081926.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_4、修复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、修复"}},[t._v("#")]),t._v(" 4、修复")]),t._v(" "),e("p",[t._v("既然知道表格的最后一列和最后一行不应该出现边边，那就让最后一列和最后一行的边边消失就好了。有以下几个思路。")]),t._v(" "),e("ol",[e("li",[t._v("在onDraw()方法中，判断当前列是否为最后一列和判断当前行是否为最后一行来决定是否绘制边边。")]),t._v(" "),e("li",[t._v("在getItemOffsets()方法中对行列进行判断，来决定是否设置条目偏移量（当偏移量为0时，自然就看不出边边了）。")])]),t._v(" "),e("p",[t._v("这里我选用第二种方式。这里要说明一下，getItemOffsets()有两个，一个是getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state)，另一个是getItemOffsets(Rect outRect, int itemPosition, RecyclerView parent)，第二个已经过时，但是该方法中有回传当前item的position，所以我选用了过时的getItemOffsets()。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("@Override\npublic void getItemOffsets(Rect outRect, int itemPosition, RecyclerView parent) {\n    super.getItemOffsets(outRect, itemPosition, parent);\n    int right = mDivider.getIntrinsicWidth();\n    int bottom = mDivider.getIntrinsicHeight();\n\n    if (isLastSpan(itemPosition, parent)) {\n        right = 0;\n    }\n\n    if (isLastRow(itemPosition, parent)) {\n        bottom = 0;\n    }\n    outRect.set(0, 0, right, bottom);\n}\n\npublic boolean isLastRow(int itemPosition, RecyclerView parent) {\n    RecyclerView.LayoutManager layoutManager = parent.getLayoutManager();\n    if (layoutManager instanceof GridLayoutManager) {\n        int spanCount = ((GridLayoutManager) layoutManager).getSpanCount();\n        int itemCount = parent.getAdapter().getItemCount();\n        if ((itemCount - itemPosition - 1) < spanCount)\n            return true;\n    }\n    return false;\n}\n\npublic boolean isLastSpan(int itemPosition, RecyclerView parent) {\n    RecyclerView.LayoutManager layoutManager = parent.getLayoutManager();\n    if (layoutManager instanceof GridLayoutManager) {\n        int spanCount = ((GridLayoutManager) layoutManager).getSpanCount();\n        if ((itemPosition + 1) % spanCount == 0)\n            return true;\n    }\n    return false;\n}\n")])])]),e("p",[t._v("代码理解上并不难，这里不做多余的解释。")]),t._v(" "),e("h3",{attrs:{id:"_5、效果-几乎没有瑕疵"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、效果-几乎没有瑕疵"}},[t._v("#")]),t._v(" 5、效果（几乎没有瑕疵）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210107082039.gif",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"四、使用itemdecoration实现侧边字母提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、使用itemdecoration实现侧边字母提示"}},[t._v("#")]),t._v(" 四、使用ItemDecoration实现侧边字母提示")]),t._v(" "),e("p",[t._v("上面的两个例子仅仅只是画线，下面的这个例子就来画字吧。先看下效果。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210107082110.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_1、分析-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、分析-2"}},[t._v("#")]),t._v(" 1、分析")]),t._v(" "),e("p",[t._v("说到底也就是在item左边偏移出来的空间区域中心画个字母而已。下面是大体思路：")]),t._v(" "),e("ol",[e("li",[t._v("在item的左边偏移出一定的空间（本例偏移量是40dp）。")]),t._v(" "),e("li",[t._v("在onDraw()时，使用Pinyin工具类获取item中名字拼音的第一个字母。")]),t._v(" "),e("li",[t._v("判断如果当前是第一个item，就画出字母。")]),t._v(" "),e("li",[t._v("若不是第一个item则判断当前item的名字字母与上一个字母是否一致，不一致则画出当前字母。")])]),t._v(" "),e("h3",{attrs:{id:"_2、实现-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、实现-2"}},[t._v("#")]),t._v(" 2、实现")]),t._v(" "),e("h4",{attrs:{id:"_1-自定义文字拼音工具类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义文字拼音工具类"}},[t._v("#")]),t._v(" 1）自定义文字拼音工具类")]),t._v(" "),e("p",[t._v("*"),e("em",[e("strong",[t._v("该工具类需要用到pinyin4j-2.5.0.jar")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('public class PinyinUtils {\n\n    public static String getPinyin(String str) {\n\n        HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();\n        format.setCaseType(HanyuPinyinCaseType.UPPERCASE);\n        format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);\n\n        StringBuilder sb = new StringBuilder();\n\n        char[] charArray = str.toCharArray();\n        for (int i = 0; i < charArray.length; i++) {\n            char c = charArray[i];\n            // 如果是空格, 跳过\n            if (Character.isWhitespace(c)) {\n                continue;\n            }\n            if (c >= -127 && c < 128 || !(c >= 0x4E00 && c <= 0x9FA5)) {\n                // 肯定不是汉字\n                sb.append(c);\n            } else {\n                String s = "";\n                try {\n                    // 通过char得到拼音集合. 单 -> dan, shan \n                    s = PinyinHelper.toHanyuPinyinStringArray(c, format)[0];\n                    sb.append(s);\n                } catch (BadHanyuPinyinOutputFormatCombination e) {\n                    e.printStackTrace();\n                    sb.append(s);\n                }\n            }\n        }\n\n        return sb.toString();\n    }\n}\n')])])]),e("h4",{attrs:{id:"_2-自定义itemdecoration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义itemdecoration-2"}},[t._v("#")]),t._v(" 2）自定义ItemDecoration")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('public class MyDecorationThree extends RecyclerView.ItemDecoration {\n\n    Context mContext;\n    List<String> mData;\n    Paint paint = new Paint(Paint.ANTI_ALIAS_FLAG);\n\n\n    public MyDecorationThree(Context context, List<String> data) {\n        mContext = context;\n        mData = data;\n        paint.setTextSize(sp2px(16));\n        paint.setColor(Color.RED);\n    }\n\n    @Override\n    public void onDraw(Canvas c, RecyclerView parent, RecyclerView.State state) {\n        super.onDraw(c, parent, state);\n        drawLetterToItemLeft(c, parent);\n    }\n\n    private void drawLetterToItemLeft(Canvas c, RecyclerView parent) {\n        RecyclerView.LayoutManager layoutManager = parent.getLayoutManager();\n        if (!(layoutManager instanceof LinearLayoutManager))\n            return;\n        int childCount = parent.getChildCount();\n        for (int i = 0; i < childCount; i++) {\n            int position = ((LinearLayoutManager) layoutManager).findFirstVisibleItemPosition() + i;\n            View child = parent.getChildAt(i);\n            RecyclerView.LayoutParams params = (RecyclerView.LayoutParams) child.getLayoutParams();\n            float left = 0;\n            float top = child.getTop() - params.topMargin;\n            float right = child.getLeft() - params.leftMargin;\n            float bottom = child.getBottom() + params.bottomMargin;\n            float width = right - left;\n            float height = bottom - (bottom - top) / 2;\n            //当前名字拼音的第一个字母\n            String letter = PinyinUtils.getPinyin(mData.get(position)).charAt(0) + "";\n            if (position == 0) {\n                drawLetter(letter, width, height, c, parent);\n            } else {\n                String preLetter = PinyinUtils.getPinyin(mData.get(position - 1)).charAt(0) + "";\n                if (!letter.equalsIgnoreCase(preLetter)) {\n                    drawLetter(letter, width, height, c, parent);\n                }\n            }\n        }\n    }\n\n    private void drawLetter(String letter, float width, float height, Canvas c, RecyclerView parent) {\n        float fontLength = getFontLength(paint, letter);\n        float fontHeight = getFontHeight(paint);\n        float tx = (width - fontLength) / 2;\n        float ty = height - fontHeight / 2 + getFontLeading(paint);\n        c.drawText(letter, tx, ty, paint);\n    }\n\n    @Override\n    public void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {\n        super.getItemOffsets(outRect, view, parent, state);\n        outRect.set(dip2px(40), 0, 0, 0);\n    }\n\n    private int dip2px(int dip) {\n        float density = mContext.getResources().getDisplayMetrics().density;\n        int px = (int) (dip * density + 0.5f);\n        return px;\n    }\n\n    public int sp2px(int sp) {\n        return (int) (TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_SP, sp, mContext.getResources().getDisplayMetrics()) + 0.5f);\n    }\n\n\n    /**\n     * 返回指定笔和指定字符串的长度\n     */\n    private float getFontLength(Paint paint, String str) {\n        return paint.measureText(str);\n    }\n\n    /**\n     * 返回指定笔的文字高度\n     */\n    private float getFontHeight(Paint paint) {\n        Paint.FontMetrics fm = paint.getFontMetrics();\n        return fm.descent - fm.ascent;\n    }\n\n\n    /**\n     * 返回指定笔离文字顶部的基准距离\n     */\n    private float getFontLeading(Paint paint) {\n        Paint.FontMetrics fm = paint.getFontMetrics();\n        return fm.leading - fm.ascent;\n    }\n}\n')])])]),e("h3",{attrs:{id:"最后附上demo链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后附上demo链接"}},[t._v("#")]),t._v(" 最后附上Demo链接")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/GitLqr/MaterialDesignDemo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/GitLqr/MaterialDesignDemo"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);