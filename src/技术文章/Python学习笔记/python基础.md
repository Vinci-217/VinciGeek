---
category:
  - 技术文章
tag:
  - Python
  - 语法基础
---
# python从入门到实践

## 变量

```python
message="hello world"
```

并不需要指出变量类型

## 方法

```python
tittle()#以首字母大写的形式输出单词
```

```python
upper()#全部大写输出
```

```
lower()#全部小写输出
```

存储数据时经常使用lower，因为无法确保数据是大写还是小写

```
rstrip()#输出删除字符串尾部多余的空格后的值
lstrip()#输出删除字符串头部多余的空格后的值
strip()#输出删除字符串两边多余的空格后的值
```

从这里可以看出python对于数据和字符处理具有很多优势

```
range(1,5,2)#从一到四找一个随机数,步长为2
```

```
value**2#value的平方
```

```

```

## 字符串拼接

```
message="hello world"
message2="python"
print(message.title()+" "+message2)
```

直接通过加号的形式拼接

## 打印换行符和制表符

```
"\t"#制表符
"\n"#换行符
```

他们都相当于字符（串）

## 强转

```
str(23)
```

不强转会报错

## 注释

用#而不是//

## 列表

### 增加元素

类似于数组，访问方式同数组

```
append()#在列表末尾添加一个元素
str.append('a')
```

```
insert()#在数组特定位置插入元素
str.insert(0,‘a')
```

### 按位置删除

```
del str[0]#删除第0个元素
```

```
str.pop(0)#删除某个位置的元素并返回，如果括号中不传参默认删除最后一个
```

### 按值删除

```
str.remove("0")#删除值为0的元素
```

### 排序

```
str.sort()#正序,sort不能直接在print中调用
str.sort(reverse=True)#反序
sorted(str)#临时输出排序后的数组，不改变原数组顺序
```

### 反序

```
str.reverse()#将数组倒序改变
```

### 数组长度

```
len(a)#返回值为a的长度
```

```
a[-1]#永远链接最后一个元素，除非a为空
```

### 列表推导式

### 数学运算

```
min(列表名),max(),sum()
```

### 列表格式操作

```
number=list(range(1,5))
print(number)
#list()转换为列表
```

### 列表解析

```
square=[value**2 for value in range(1,10,2)]
print(square)
```

### 切片

```
print(square[0:3])
```

截取0到3的部分

```
print(square[-3:])
```

只输出后三个元素

### 复制

```
new_square=square[:]#类似于克隆
```

```
new_square=square#类似于指针
```

## 元组

定义：不可变的列表，区别在于用元括号而非方括号

```
dimension=(1,100)
```

### 修改元组的唯一方式

```
dimension=(1,100)
print(dimension)

dimension=(100,100)
print(dimension)
```

重新定义元组

## 循环

for循环

```
magicians=['alice','bob','dad']
for magician in magicians:
    print(magician)
```

有C语言基础一秒看懂

while循环使用方法同上

```
while magician !="alice":
```

退出循环

```
break
continue
```

用法同C语言

## if条件

```
if d==1:
    print(d)
```

```
if d==1 and d-1==0:
    print(d)
```

```
if d==1 or d-1==0:
    print(d)
```

```
if 1 in dimension:#检查列表里面有没有某个元素
    print(d)
```

```
if 1 not in dimension:#检查列表里面没有某个元素
    print(d)
```

```
if 1 not in dimension:#三重条件判断
    print(d)
elif 100 in dimension:
    print(dimension)
else:
    print(1)
```

有C语言基础一秒看懂

```
if birthday in pi:
	print("你的生日在圆周率里面")
```

py的这种方式让人感觉非常口语化

## 字典

字典的作用在于索引，形式上区别在于大括号

```
alien_0={'color':'green','point':'5'}
print(alien_0['color'])
```

字典的组成形式为一系列键值对，键值对之间用 , 隔开，键值对前为索引，后为值，通过 : 区分开.

键值对索引可以是任何形式的变量，值也是

```
alien_0['x_position']=100 #添加（修改）键值对
alien_0["y_position"]=10
print(alien_0)
```

```
del alien_0['x_position'] #删除键值对
print(alien_0)
```

```
alien_0={1:'green','point':'5'} #遍历键值对（两种方法输出结果不一样
for point in alien_0.items():
    print(point)

print(alien_0)
```

```
for key in alien_0.keys()://提取键
    print(key)
```

```
sorted(alien_0) #输出排序后的结果
```

```
set() #输出集合后的结果
```

字典嵌套

```
alien_0={'1':'green','point':'5'}
alien_1={'1':'green','point':'5'}
alien_2={'1':'green','point':'5'}

alien=[alien_0,alien_1,alien_2]
print(alien)
```

```
pizza={
    '1':"asd",
    '2':[1,2,3]
}
print(pizza)
print(pizza['2'])
```

## 输入

```
message=input("hello")
print(message)
```

结果是hello和输入的字符

input相当于兼顾了C语言中printf和scanf的功能

```
int('12') #将字符12强转为数字12
```

## 函数

```
def greet():
    print("hello")
greet()
```

先定义，后使用，高度依赖换行和缩进

### 传参

```
def greet(name):
    print("hello"+' '+name)
greet(input())
```

上面为函数传参的使用

两种传参方式：

```
def greet(name):
    print("hello"+' '+name)
greet('bob')

def greet(name):
    print("hello"+' '+name)
greet(name='bob')
```

默认值，输入具体值以后会冲掉默认值

```
def greet(name='bob'):
    print("hello"+' '+name)
greet()
```

默认值和传参至少有一个，也就是说必须函数里面每个变量都有值

返回值，有C语言基础一秒看懂，返回值类型任意

```
def greet(name='bob'):
    print("hello"+' '+name)
    return "yes"
print(greet())
```

传入多个参数

```
def greet(*name):
    print(name)
    return "yes"
print(greet('a','b'))
```

得到的name是一个元组

一个星号创建的是元组，两个星号创建的是字典，并且方式和建立有些不同

```
def greet(**name):
    print(name)
greet(asd='123')
```

## 导入包

### 导入函数

```
from g import greet

greet("alice")
```

### 导入文件

```
import g

g.greet("alice")
```

### 别名

```
import g as good

good.greet("alice")
```

## 类

类是面向对象编程的具体形式，类中具有属性和方法

类的基本声明：

```
class Dog:
    def __init__(self,name,age): #self是必须的，剩下两个表示属性
        self.name=name #对属性分别需要声明
        self.age=age 
```

类里面的函数被称为方法，上面的_init__就是类里面的初始化方法（受markdown语法限制这里写法可能不太正确

init的下划线是类里面的方法必须具备的，作为一个标志区别类里面的方法和类外面的函数

实例化对象and访问对象（类相当于一个模板，可以根据一个类创建多个对象）

```
my_dog=Dog('white',16)

print(my_dog.name)
```

默认属性

```
class Dog:
    def __init__(self,name):
        self.name=name
        self.age=12

my_dog=Dog('white')

print(my_dog.age)
```

默认属性不需要再init的参数里面体现，在实例化的时候也不需要写出来，但是可以直接调用获取这个值和修改

### 继承关系

```
class Dog:
    def __init__(self,name):
        self.name=name
        self.age=12

my_dog=Dog('white')
my_dog.age=16
print(my_dog.age)

class NBDog(Dog):
    def __init__(self,name):
        super().__init__(name)
```

上述代码先定义了Dog这个类，并且给定了初始化的方法，接下来重新定义了NBDog，NBDog是继承Dog类的子类，所以在声明变量之前首先需要class NBDog(Dog)表示新的类是继承之前类的，super()表示调用父类的方法（父类也被称为超类），所以调用父类的init的方法进行初始化。

#### 定义子类的属性

```
class NBDog(Dog):
    def __init__(self,name):
        super().__init__(name)
        self.year=10 #新定义的子类的属性
my_NBdog=NBDog("black")
print(my_NBdog.year)
```

#### 重写父类方法

```
class Dog:
    def __init__(self,name):
        self.name=name
        self.age=12
    def test(self):
        print(self.age)

my_dog=Dog('white')
my_dog.age=16
my_dog.test()

class NBDog(Dog):
    def __init__(self,name):
        super().__init__(name)
        self.year=10
    def test(self):
        print(f'my age is {self.age}') #这里要注意
my_NBdog=NBDog("black")
my_NBdog.test()
```

直接再写一个覆盖了就行

这段代码里面要注意最后一个print，这里输出以后{}中间的内容是年龄具体的变量值，f不会输出，他的作用是将大括号中的内容视为变量值，而不是都作为字符串输出

#### 将类作为属性

```
class Ear:
    def __init__(self,length):
        self.length=length


class Dog:
    def __init__(self, name):
        self.name = name
        self.age = 12
        self.ear=Ear(100);
my_dog=Dog("black")
print(my_dog.ear.length)
```

如上，Ear是dog的一部分，结果是100

#### 导入类包

```
from g import Car #导入方式

my_car=Car('tesla')
print(my_car.name)
```

from g import Car前后顺序不能互换

导入多个类时，在Car后面加逗号然后加入别的类

导入整个包，调用类时用点访问

```
import g

my_car=g.Car('tesla')
print(my_car.name)
```

## 文件操作和异常

读取文件操作

```
with open("test.txt") as hello: #打开文件，hello可以自定义变量名
    contents=hello.read() #读取文件中的内容到contents中
print(contents) #打印出contents中的内容
```

with的作用在于不需要手动关闭文件，表示在代码块中使用

在读取文件后显示的实际上末尾会多出来一个空行，因为文件读取到末尾会返回一个空字符串，而打印出来显示的就是空行

如果不想要这个空行的话可以使用print(contents.rstrip())来删除字符串末尾多余的空格或者换行

py在文件查询的过程中，默认是在与代码文件相同目录的文件夹进行查询，如果需要对子文件进行查询，需要找到其子文件夹

**注意：在相对路径中，我们一般使用/这个斜杠，因为\这个反斜杠会被认为是转义字符的标志，如果非要用\这个斜杠的话，那就需要用两个\斜杠，表示对每两个\斜杠都转义为一个\斜杠**

读取文件并逐行输出

```python
filename="test.txt"
with open(filename) as hello:
    for line in hello:
        print(line)
```

读取文件内容并且存储到列表中

```python
filename="test.txt"
with open(filename) as hello:
    lines=hello.readlines()
print(lines)
```

写入文件

```python
filename="test.txt"
with open(filename,'w') as hello:
    hello.write("hello")
```

其中w表示写入模式，可以替换为r（读入模式），r+（读写模式），a（附加模式），如果忽略的话默认以只读模式打开

**如果文件原本并不存在的话，open函数将会自动创建一个以其命名的文件**

**如果用w打开的话，文件内容会是新写入的内容，之前的内容会被清空**

**如果想要附加的话，要用a模式**

## 异常

使用try和except组合来捕捉异常

```python
try:
    print(5/0)
except:
    print("error")
```

实际上不同的异常，except后面应该接不同的异常，但是对于初学者可以直接都不用加，这样方便很多

如果不需要任何东西的话，在except后接pass就行

## 杂项

分析文本：

```python
title="alice in bob"
print(title.split())
```

split方法表示根据空格分开文本，并且生成一个列表

## json文件

### 写入json文件

```python
import json

numbers=[1,3,5,9,4,11]
filename="numbers.json"

with open(filename,'w') as f:
    json.dump(numbers,f)
```

json.dump函数接受两个参数，第一个是传入的内容，第二个是文件名

### 读取json文件

```python
import json

filename="numbers.json"

with open(filename) as f:
    numbers=json.load(f)
print(numbers)
```

使用json.load函数来读取或存储json文件中的数据

## 重构

将一整个函数分成多个子功能并且在需要时调用子功能

## 测试

```python
import unittest #导入单元测试的包
from name_function import get_formatted_name #导入要测试的函数

class NamesTestCase(unittest.TestCase): #创建一个Test的类，要继承unittest.TestCase表示单元测试

    def test_first_last_name(self):
        formatted_name = get_formatted_name('janis', 'joplin') #后面是函数运行，前面用来接受返回的结果
        self.assertEqual(formatted_name, 'Janis Joplin') #断言方法相当于一个比较，比较前后是否相等
if __name__ == '__main__':
    unittest.main()
```

这个测试是单元测试，首先要导入单元测试的包，然后创建一个表示Test的类，接着定义一个方法，在方法中比较得到的结果与预期是否相符

最后的if是判断特殊变量是不是main，也就是说目前存放代码的文件，是不是你要执行运行的文件，如果是的话，name的值就是main，然后执行后面的测试

unnittest.main()函数每次都会先执行test_打头的函数，所以在定义测试函数的时候要注意函数的命名

### 常见的断言方法![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/36192c9af4d74320aa0c7ba0527227af.png)

还有一个方法叫setup，在Test类中被优先调用。在测试自己编写的类时，方法setUp让测试方法编写起来更加容易：可以在setUp()方法中创建一系列实例并设置其属性，再在测试方法中直接使用这些实例。相比于在每个测试方法中都创建实例并设置属性，这种方法要更加容易。
