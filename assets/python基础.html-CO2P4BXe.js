import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as s}from"./app-C3ly2j3n.js";const i={},t=s(`<h1 id="python从入门到实践" tabindex="-1"><a class="header-anchor" href="#python从入门到实践"><span>python从入门到实践</span></a></h1><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>message<span class="token operator">=</span><span class="token string">&quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并不需要指出变量类型</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>tittle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#以首字母大写的形式输出单词</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>upper<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#全部大写输出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>lower()#全部小写输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>存储数据时经常使用lower，因为无法确保数据是大写还是小写</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rstrip()#输出删除字符串尾部多余的空格后的值
lstrip()#输出删除字符串头部多余的空格后的值
strip()#输出删除字符串两边多余的空格后的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里可以看出python对于数据和字符处理具有很多优势</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>range(1,5,2)#从一到四找一个随机数,步长为2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>value**2#value的平方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接"><span>字符串拼接</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>message=&quot;hello world&quot;
message2=&quot;python&quot;
print(message.title()+&quot; &quot;+message2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接通过加号的形式拼接</p><h2 id="打印换行符和制表符" tabindex="-1"><a class="header-anchor" href="#打印换行符和制表符"><span>打印换行符和制表符</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;\\t&quot;#制表符
&quot;\\n&quot;#换行符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>他们都相当于字符（串）</p><h2 id="强转" tabindex="-1"><a class="header-anchor" href="#强转"><span>强转</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>str(23)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不强转会报错</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p>用#而不是//</p><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表"><span>列表</span></a></h2><h3 id="增加元素" tabindex="-1"><a class="header-anchor" href="#增加元素"><span>增加元素</span></a></h3><p>类似于数组，访问方式同数组</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>append()#在列表末尾添加一个元素
str.append(&#39;a&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>insert()#在数组特定位置插入元素
str.insert(0,‘a&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按位置删除" tabindex="-1"><a class="header-anchor" href="#按位置删除"><span>按位置删除</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>del str[0]#删除第0个元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>str.pop(0)#删除某个位置的元素并返回，如果括号中不传参默认删除最后一个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="按值删除" tabindex="-1"><a class="header-anchor" href="#按值删除"><span>按值删除</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>str.remove(&quot;0&quot;)#删除值为0的元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>str.sort()#正序,sort不能直接在print中调用
str.sort(reverse=True)#反序
sorted(str)#临时输出排序后的数组，不改变原数组顺序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反序" tabindex="-1"><a class="header-anchor" href="#反序"><span>反序</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>str.reverse()#将数组倒序改变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数组长度" tabindex="-1"><a class="header-anchor" href="#数组长度"><span>数组长度</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>len(a)#返回值为a的长度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>a[-1]#永远链接最后一个元素，除非a为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列表推导式" tabindex="-1"><a class="header-anchor" href="#列表推导式"><span>列表推导式</span></a></h3><h3 id="数学运算" tabindex="-1"><a class="header-anchor" href="#数学运算"><span>数学运算</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>min(列表名),max(),sum()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列表格式操作" tabindex="-1"><a class="header-anchor" href="#列表格式操作"><span>列表格式操作</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>number=list(range(1,5))
print(number)
#list()转换为列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表解析" tabindex="-1"><a class="header-anchor" href="#列表解析"><span>列表解析</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>square=[value**2 for value in range(1,10,2)]
print(square)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切片" tabindex="-1"><a class="header-anchor" href="#切片"><span>切片</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>print(square[0:3])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>截取0到3的部分</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>print(square[-3:])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只输出后三个元素</p><h3 id="复制" tabindex="-1"><a class="header-anchor" href="#复制"><span>复制</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>new_square=square[:]#类似于克隆
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>new_square=square#类似于指针
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="元组" tabindex="-1"><a class="header-anchor" href="#元组"><span>元组</span></a></h2><p>定义：不可变的列表，区别在于用元括号而非方括号</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>dimension=(1,100)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改元组的唯一方式" tabindex="-1"><a class="header-anchor" href="#修改元组的唯一方式"><span>修改元组的唯一方式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>dimension=(1,100)
print(dimension)

dimension=(100,100)
print(dimension)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新定义元组</p><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h2><p>for循环</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>magicians=[&#39;alice&#39;,&#39;bob&#39;,&#39;dad&#39;]
for magician in magicians:
    print(magician)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有C语言基础一秒看懂</p><p>while循环使用方法同上</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>while magician !=&quot;alice&quot;:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出循环</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>break
continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用法同C语言</p><h2 id="if条件" tabindex="-1"><a class="header-anchor" href="#if条件"><span>if条件</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if d==1:
    print(d)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if d==1 and d-1==0:
    print(d)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if d==1 or d-1==0:
    print(d)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if 1 in dimension:#检查列表里面有没有某个元素
    print(d)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if 1 not in dimension:#检查列表里面没有某个元素
    print(d)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if 1 not in dimension:#三重条件判断
    print(d)
elif 100 in dimension:
    print(dimension)
else:
    print(1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有C语言基础一秒看懂</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if birthday in pi:
	print(&quot;你的生日在圆周率里面&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>py的这种方式让人感觉非常口语化</p><h2 id="字典" tabindex="-1"><a class="header-anchor" href="#字典"><span>字典</span></a></h2><p>字典的作用在于索引，形式上区别在于大括号</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>alien_0={&#39;color&#39;:&#39;green&#39;,&#39;point&#39;:&#39;5&#39;}
print(alien_0[&#39;color&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>字典的组成形式为一系列键值对，键值对之间用 , 隔开，键值对前为索引，后为值，通过 : 区分开.</p><p>键值对索引可以是任何形式的变量，值也是</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>alien_0[&#39;x_position&#39;]=100 #添加（修改）键值对
alien_0[&quot;y_position&quot;]=10
print(alien_0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>del alien_0[&#39;x_position&#39;] #删除键值对
print(alien_0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>alien_0={1:&#39;green&#39;,&#39;point&#39;:&#39;5&#39;} #遍历键值对（两种方法输出结果不一样
for point in alien_0.items():
    print(point)

print(alien_0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>for key in alien_0.keys()://提取键
    print(key)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sorted(alien_0) #输出排序后的结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>set() #输出集合后的结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字典嵌套</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>alien_0={&#39;1&#39;:&#39;green&#39;,&#39;point&#39;:&#39;5&#39;}
alien_1={&#39;1&#39;:&#39;green&#39;,&#39;point&#39;:&#39;5&#39;}
alien_2={&#39;1&#39;:&#39;green&#39;,&#39;point&#39;:&#39;5&#39;}

alien=[alien_0,alien_1,alien_2]
print(alien)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pizza={
    &#39;1&#39;:&quot;asd&quot;,
    &#39;2&#39;:[1,2,3]
}
print(pizza)
print(pizza[&#39;2&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入"><span>输入</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>message=input(&quot;hello&quot;)
print(message)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果是hello和输入的字符</p><p>input相当于兼顾了C语言中printf和scanf的功能</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>int(&#39;12&#39;) #将字符12强转为数字12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def greet():
    print(&quot;hello&quot;)
greet()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先定义，后使用，高度依赖换行和缩进</p><h3 id="传参" tabindex="-1"><a class="header-anchor" href="#传参"><span>传参</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def greet(name):
    print(&quot;hello&quot;+&#39; &#39;+name)
greet(input())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面为函数传参的使用</p><p>两种传参方式：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def greet(name):
    print(&quot;hello&quot;+&#39; &#39;+name)
greet(&#39;bob&#39;)

def greet(name):
    print(&quot;hello&quot;+&#39; &#39;+name)
greet(name=&#39;bob&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认值，输入具体值以后会冲掉默认值</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def greet(name=&#39;bob&#39;):
    print(&quot;hello&quot;+&#39; &#39;+name)
greet()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认值和传参至少有一个，也就是说必须函数里面每个变量都有值</p><p>返回值，有C语言基础一秒看懂，返回值类型任意</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def greet(name=&#39;bob&#39;):
    print(&quot;hello&quot;+&#39; &#39;+name)
    return &quot;yes&quot;
print(greet())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入多个参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def greet(*name):
    print(name)
    return &quot;yes&quot;
print(greet(&#39;a&#39;,&#39;b&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的name是一个元组</p><p>一个星号创建的是元组，两个星号创建的是字典，并且方式和建立有些不同</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def greet(**name):
    print(name)
greet(asd=&#39;123&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入包" tabindex="-1"><a class="header-anchor" href="#导入包"><span>导入包</span></a></h2><h3 id="导入函数" tabindex="-1"><a class="header-anchor" href="#导入函数"><span>导入函数</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from g import greet

greet(&quot;alice&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件"><span>导入文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import g

g.greet(&quot;alice&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import g as good

good.greet(&quot;alice&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类"><span>类</span></a></h2><p>类是面向对象编程的具体形式，类中具有属性和方法</p><p>类的基本声明：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Dog:
    def __init__(self,name,age): #self是必须的，剩下两个表示属性
        self.name=name #对属性分别需要声明
        self.age=age 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类里面的函数被称为方法，上面的_init__就是类里面的初始化方法（受markdown语法限制这里写法可能不太正确</p><p>init的下划线是类里面的方法必须具备的，作为一个标志区别类里面的方法和类外面的函数</p><p>实例化对象and访问对象（类相当于一个模板，可以根据一个类创建多个对象）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>my_dog=Dog(&#39;white&#39;,16)

print(my_dog.name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认属性</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Dog:
    def __init__(self,name):
        self.name=name
        self.age=12

my_dog=Dog(&#39;white&#39;)

print(my_dog.age)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认属性不需要再init的参数里面体现，在实例化的时候也不需要写出来，但是可以直接调用获取这个值和修改</p><h3 id="继承关系" tabindex="-1"><a class="header-anchor" href="#继承关系"><span>继承关系</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Dog:
    def __init__(self,name):
        self.name=name
        self.age=12

my_dog=Dog(&#39;white&#39;)
my_dog.age=16
print(my_dog.age)

class NBDog(Dog):
    def __init__(self,name):
        super().__init__(name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码先定义了Dog这个类，并且给定了初始化的方法，接下来重新定义了NBDog，NBDog是继承Dog类的子类，所以在声明变量之前首先需要class NBDog(Dog)表示新的类是继承之前类的，super()表示调用父类的方法（父类也被称为超类），所以调用父类的init的方法进行初始化。</p><h4 id="定义子类的属性" tabindex="-1"><a class="header-anchor" href="#定义子类的属性"><span>定义子类的属性</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class NBDog(Dog):
    def __init__(self,name):
        super().__init__(name)
        self.year=10 #新定义的子类的属性
my_NBdog=NBDog(&quot;black&quot;)
print(my_NBdog.year)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重写父类方法" tabindex="-1"><a class="header-anchor" href="#重写父类方法"><span>重写父类方法</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Dog:
    def __init__(self,name):
        self.name=name
        self.age=12
    def test(self):
        print(self.age)

my_dog=Dog(&#39;white&#39;)
my_dog.age=16
my_dog.test()

class NBDog(Dog):
    def __init__(self,name):
        super().__init__(name)
        self.year=10
    def test(self):
        print(f&#39;my age is {self.age}&#39;) #这里要注意
my_NBdog=NBDog(&quot;black&quot;)
my_NBdog.test()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接再写一个覆盖了就行</p><p>这段代码里面要注意最后一个print，这里输出以后{}中间的内容是年龄具体的变量值，f不会输出，他的作用是将大括号中的内容视为变量值，而不是都作为字符串输出</p><h4 id="将类作为属性" tabindex="-1"><a class="header-anchor" href="#将类作为属性"><span>将类作为属性</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Ear:
    def __init__(self,length):
        self.length=length


class Dog:
    def __init__(self, name):
        self.name = name
        self.age = 12
        self.ear=Ear(100);
my_dog=Dog(&quot;black&quot;)
print(my_dog.ear.length)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，Ear是dog的一部分，结果是100</p><h4 id="导入类包" tabindex="-1"><a class="header-anchor" href="#导入类包"><span>导入类包</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from g import Car #导入方式

my_car=Car(&#39;tesla&#39;)
print(my_car.name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>from g import Car前后顺序不能互换</p><p>导入多个类时，在Car后面加逗号然后加入别的类</p><p>导入整个包，调用类时用点访问</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import g

my_car=g.Car(&#39;tesla&#39;)
print(my_car.name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作和异常" tabindex="-1"><a class="header-anchor" href="#文件操作和异常"><span>文件操作和异常</span></a></h2><p>读取文件操作</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>with open(&quot;test.txt&quot;) as hello: #打开文件，hello可以自定义变量名
    contents=hello.read() #读取文件中的内容到contents中
print(contents) #打印出contents中的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>with的作用在于不需要手动关闭文件，表示在代码块中使用</p><p>在读取文件后显示的实际上末尾会多出来一个空行，因为文件读取到末尾会返回一个空字符串，而打印出来显示的就是空行</p><p>如果不想要这个空行的话可以使用print(contents.rstrip())来删除字符串末尾多余的空格或者换行</p><p>py在文件查询的过程中，默认是在与代码文件相同目录的文件夹进行查询，如果需要对子文件进行查询，需要找到其子文件夹</p><p><strong>注意：在相对路径中，我们一般使用/这个斜杠，因为\\这个反斜杠会被认为是转义字符的标志，如果非要用\\这个斜杠的话，那就需要用两个\\斜杠，表示对每两个\\斜杠都转义为一个\\斜杠</strong></p><p>读取文件并逐行输出</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>filename<span class="token operator">=</span><span class="token string">&quot;test.txt&quot;</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token keyword">as</span> hello<span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> hello<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取文件内容并且存储到列表中</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>filename<span class="token operator">=</span><span class="token string">&quot;test.txt&quot;</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token keyword">as</span> hello<span class="token punctuation">:</span>
    lines<span class="token operator">=</span>hello<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lines<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写入文件</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>filename<span class="token operator">=</span><span class="token string">&quot;test.txt&quot;</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> hello<span class="token punctuation">:</span>
    hello<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中w表示写入模式，可以替换为r（读入模式），r+（读写模式），a（附加模式），如果忽略的话默认以只读模式打开</p><p><strong>如果文件原本并不存在的话，open函数将会自动创建一个以其命名的文件</strong></p><p><strong>如果用w打开的话，文件内容会是新写入的内容，之前的内容会被清空</strong></p><p><strong>如果想要附加的话，要用a模式</strong></p><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h2><p>使用try和except组合来捕捉异常</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上不同的异常，except后面应该接不同的异常，但是对于初学者可以直接都不用加，这样方便很多</p><p>如果不需要任何东西的话，在except后接pass就行</p><h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项"><span>杂项</span></a></h2><p>分析文本：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>title<span class="token operator">=</span><span class="token string">&quot;alice in bob&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>split方法表示根据空格分开文本，并且生成一个列表</p><h2 id="json文件" tabindex="-1"><a class="header-anchor" href="#json文件"><span>json文件</span></a></h2><h3 id="写入json文件" tabindex="-1"><a class="header-anchor" href="#写入json文件"><span>写入json文件</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> json

numbers<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">]</span>
filename<span class="token operator">=</span><span class="token string">&quot;numbers.json&quot;</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    json<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>numbers<span class="token punctuation">,</span>f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>json.dump函数接受两个参数，第一个是传入的内容，第二个是文件名</p><h3 id="读取json文件" tabindex="-1"><a class="header-anchor" href="#读取json文件"><span>读取json文件</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> json

filename<span class="token operator">=</span><span class="token string">&quot;numbers.json&quot;</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    numbers<span class="token operator">=</span>json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用json.load函数来读取或存储json文件中的数据</p><h2 id="重构" tabindex="-1"><a class="header-anchor" href="#重构"><span>重构</span></a></h2><p>将一整个函数分成多个子功能并且在需要时调用子功能</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> unittest <span class="token comment">#导入单元测试的包</span>
<span class="token keyword">from</span> name_function <span class="token keyword">import</span> get_formatted_name <span class="token comment">#导入要测试的函数</span>

<span class="token keyword">class</span> <span class="token class-name">NamesTestCase</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#创建一个Test的类，要继承unittest.TestCase表示单元测试</span>

    <span class="token keyword">def</span> <span class="token function">test_first_last_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        formatted_name <span class="token operator">=</span> get_formatted_name<span class="token punctuation">(</span><span class="token string">&#39;janis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;joplin&#39;</span><span class="token punctuation">)</span> <span class="token comment">#后面是函数运行，前面用来接受返回的结果</span>
        self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>formatted_name<span class="token punctuation">,</span> <span class="token string">&#39;Janis Joplin&#39;</span><span class="token punctuation">)</span> <span class="token comment">#断言方法相当于一个比较，比较前后是否相等</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个测试是单元测试，首先要导入单元测试的包，然后创建一个表示Test的类，接着定义一个方法，在方法中比较得到的结果与预期是否相符</p><p>最后的if是判断特殊变量是不是main，也就是说目前存放代码的文件，是不是你要执行运行的文件，如果是的话，name的值就是main，然后执行后面的测试</p><p>unnittest.main()函数每次都会先执行test_打头的函数，所以在定义测试函数的时候要注意函数的命名</p><h3 id="常见的断言方法" tabindex="-1"><a class="header-anchor" href="#常见的断言方法"><span>常见的断言方法<img src="https://img-blog.csdnimg.cn/direct/36192c9af4d74320aa0c7ba0527227af.png" alt="在这里插入图片描述" loading="lazy"></span></a></h3><p>还有一个方法叫setup，在Test类中被优先调用。在测试自己编写的类时，方法setUp让测试方法编写起来更加容易：可以在setUp()方法中创建一系列实例并设置其属性，再在测试方法中直接使用这些实例。相比于在每个测试方法中都创建实例并设置属性，这种方法要更加容易。</p>`,198),l=[t];function d(r,c){return a(),n("div",null,l)}const o=e(i,[["render",d],["__file","python基础.html.vue"]]),v=JSON.parse('{"path":"/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Python%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/python%E5%9F%BA%E7%A1%80.html","title":"python从入门到实践","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"字符串拼接","slug":"字符串拼接","link":"#字符串拼接","children":[]},{"level":2,"title":"打印换行符和制表符","slug":"打印换行符和制表符","link":"#打印换行符和制表符","children":[]},{"level":2,"title":"强转","slug":"强转","link":"#强转","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"列表","slug":"列表","link":"#列表","children":[{"level":3,"title":"增加元素","slug":"增加元素","link":"#增加元素","children":[]},{"level":3,"title":"按位置删除","slug":"按位置删除","link":"#按位置删除","children":[]},{"level":3,"title":"按值删除","slug":"按值删除","link":"#按值删除","children":[]},{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":3,"title":"反序","slug":"反序","link":"#反序","children":[]},{"level":3,"title":"数组长度","slug":"数组长度","link":"#数组长度","children":[]},{"level":3,"title":"列表推导式","slug":"列表推导式","link":"#列表推导式","children":[]},{"level":3,"title":"数学运算","slug":"数学运算","link":"#数学运算","children":[]},{"level":3,"title":"列表格式操作","slug":"列表格式操作","link":"#列表格式操作","children":[]},{"level":3,"title":"列表解析","slug":"列表解析","link":"#列表解析","children":[]},{"level":3,"title":"切片","slug":"切片","link":"#切片","children":[]},{"level":3,"title":"复制","slug":"复制","link":"#复制","children":[]}]},{"level":2,"title":"元组","slug":"元组","link":"#元组","children":[{"level":3,"title":"修改元组的唯一方式","slug":"修改元组的唯一方式","link":"#修改元组的唯一方式","children":[]}]},{"level":2,"title":"循环","slug":"循环","link":"#循环","children":[]},{"level":2,"title":"if条件","slug":"if条件","link":"#if条件","children":[]},{"level":2,"title":"字典","slug":"字典","link":"#字典","children":[]},{"level":2,"title":"输入","slug":"输入","link":"#输入","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"传参","slug":"传参","link":"#传参","children":[]}]},{"level":2,"title":"导入包","slug":"导入包","link":"#导入包","children":[{"level":3,"title":"导入函数","slug":"导入函数","link":"#导入函数","children":[]},{"level":3,"title":"导入文件","slug":"导入文件","link":"#导入文件","children":[]},{"level":3,"title":"别名","slug":"别名","link":"#别名","children":[]}]},{"level":2,"title":"类","slug":"类","link":"#类","children":[{"level":3,"title":"继承关系","slug":"继承关系","link":"#继承关系","children":[]}]},{"level":2,"title":"文件操作和异常","slug":"文件操作和异常","link":"#文件操作和异常","children":[]},{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[]},{"level":2,"title":"杂项","slug":"杂项","link":"#杂项","children":[]},{"level":2,"title":"json文件","slug":"json文件","link":"#json文件","children":[{"level":3,"title":"写入json文件","slug":"写入json文件","link":"#写入json文件","children":[]},{"level":3,"title":"读取json文件","slug":"读取json文件","link":"#读取json文件","children":[]}]},{"level":2,"title":"重构","slug":"重构","link":"#重构","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[{"level":3,"title":"常见的断言方法","slug":"常见的断言方法","link":"#常见的断言方法","children":[]}]}],"git":{"createdTime":1716472672000,"updatedTime":1716472672000,"contributors":[{"name":"Vinci","email":"1341060890@qq.com","commits":1}]},"readingTime":{"minutes":9.95,"words":2984},"filePathRelative":"技术文章/Python学习笔记/python基础.md","localizedDate":"2024年5月23日","excerpt":"\\n<h2>变量</h2>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>message<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"hello world\\"</span>\\n</code></pre></div><p>并不需要指出变量类型</p>\\n<h2>方法</h2>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>tittle<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token comment\\">#以首字母大写的形式输出单词</span>\\n</code></pre></div>"}');export{o as comp,v as data};
