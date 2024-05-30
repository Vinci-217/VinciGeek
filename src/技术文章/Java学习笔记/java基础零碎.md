# Java基础零碎

## 语法基础

- Java的程序实际上是在虚拟机JVM上运行的，这就完美实现了可移植性，解决了在不同操作系统或者不同平台上由于数据类型等其他方面不同造成的错误
- Java中，每一个函数，实际上就是类中的方法。
- 关于类似（2.0-1.1不等于0.9的问题）：浮点数采用二进制表示，而不是十进制。二进制中无法精确表示1/10，就像十进制无法精确表示1/3一样
- 特殊字符的转移序列：

  ```
  - \b 退格
  - \t 制表
  - \n 换行
  - \r 回车
  - \" 双引号
  - \' 单引号
  - \\ 反斜杠
  ```
- 在Java中，x=0不能替换为boolern使用
- Java中用final修饰常量
- static final 修饰类变量，这个常量可以在一个类的多个方法中使用
- 局部变量可以通过var修饰，不需要指明类型，但这并不是一种很好的编程方法
- 输入时，采用Scanner对象进行输入，需要先创建一个Scanner对象，通过对象的方法读入

## 字符串

- String在java中是不可变类型的变量，对String类型的变量重新赋值，相当于将这个变量重新指向了另一个字符串，而不是修改了这个字符串。当两个字符串变量同时被赋值为一个字符串时，实际上他们同时指向一块字符串占据的内存。这个概念是不同于C/C++中的字符数组的。  并且如果对String类型的变量重新赋值，假如旧的字符串不被其他变量使用，那么就会被Java自动进行垃圾回收
- 比较字符串时，尽量使用字符串的equals方法进行比较。因为equals比较的本质是比较字符串的字面量，而“=”比较的本质是看两个变量是否指向同一块内存。一般情况下他们得到的结果是相同的，但是+或者substring等操作得到的字符串，和另一个具有相同字面量的字符串变量就不指向同一块地址了。
- 在字符串变量中，""表示空串，也表示长度为0的字符串，但不表示null。也就是说null和""是完全相异的概念
- String也是由char序列组成的，调用字符串的charAt(n)将返回位置n的代码单元，可以用这种方法遍历字符串

## 大数

- 在java.math包里面有两个很有用的类：BigInteger和BigDecimal。这两个类可以处理包含任意长度数字序列的数值。

```java
BigInteger a = BigInteger.valueof(100); // 相对较小的数
BigInteger big = new BigInteger("6546512165165050650651"); // 相对较大的数
BigInteger c = a.add(b);
BigInteger d = c.multiply(b);
```

- java中没有运算符重载的功能，因此程序员不能够自定义运算符，只能用BigInteger中的方法进行运算

## 数组

- 数组的长度一旦被确定了，就不能修改大小了。如果想要经常扩展数组的大小，那么就需要使用数组列表

```java
int [] a = new int[100];
```

- 在java中，允许出现长度为0的数组，但并不是null
- java的数组初始化以后会自动填充默认值，而不是像C语言一样填充垃圾值
- for each循环语句中的循环变量会遍历数组元素中的每个元素，而不是下标值
- 数组拷贝要用copyof方法

```java
int [] b = Arrays.copyof(a,a.length);
```

## 面向对象

- 在Java中，对于对象的方法传递，并不是引用传递，而是按值传递。但是可以通过传递对象的方式修改对象的属性和值。
- 在方法重载中，返回类型不是方法签名的一部分。也就是说不能有两个名字相同，参数类型相同，但有不同返回类型的方法。
- 在一个构造器中可以使用this来调用另一个构造器

## hashCode和equals方法

- `hashCode`方法返回对象的哈希码值，它是一个整数。哈希码通常用于散列表中的散列算法，例如Java中的 `HashMap`、`HashSet`等集合。
- `equals`方法用于判断两个对象是否相等。它是从 `Object`类继承而来的，默认实现是比较对象的内存地址。
- 根据Java的规范，`hashCode`和 `equals`方法必须满足以下条件：
  1. **如果两个对象相等（即 `equals(Object obj)` 返回 `true`），那么它们的哈希码值必须相等**。即对于任何两个对象 `a` 和 `b`，如果 `a.equals(b)` 为 `true`，那么 `a.hashCode() == b.hashCode()` 也必须为 `true`。
  2. **如果两个对象的哈希码值相等，它们并不一定相等**。即对于任何两个对象 `a` 和 `b`，如果 `a.hashCode() == b.hashCode()` 为 `true`，`a.equals(b)` 不一定为 `true`。
  3. **如果对象在equals比较中不相等，那么它们的hashCode值不要求一定不相等，但好的hashCode实现应该尽量避免这种情况**。为了提高散列表的性能，不相等的对象尽量具有不同的哈希码值。

## 异常

**在Java编程中，异常分为两大类：****checked异常**和**unchecked异常**。这两类异常的主要区别在于它们的处理方式以及在编译时和运行时的行为。下面是详细的解释：

### Checked异常

#### 定义

**Checked异常是那些在编译时就必须处理的异常。这意味着，如果某个方法可能会抛出checked异常，那么该方法要么必须在方法签名中声明该异常，要么必须在方法体内通过try-catch块进行处理。**

#### 特点

* **编译时检查**：编译器会强制检查这些异常是否被处理。
* **必须处理**：如果不处理checked异常，代码将无法通过编译。
* **典型例子**：`IOException`, `SQLException`, `ClassNotFoundException` 等。

#### 示例代码

```
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            File file = new File("non_existent_file.txt");
            FileReader fr = new FileReader(file);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

**在上面的例子中，**`FileNotFoundException`是一个checked异常，必须通过try-catch块处理，否则编译器会报错。

### Unchecked异常

#### 定义

**Unchecked异常是那些在编译时不强制要求处理的异常。它们通常是由程序中的逻辑错误或程序员的疏忽引起的。这类异常在运行时才会抛出。**

#### 特点

* **运行时检查**：编译器不强制检查这些异常是否被处理。
* **不强制处理**：程序员可以选择处理或不处理unchecked异常。
* **典型例子**：`NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException` 等。

#### 示例代码

```
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        System.out.println(numbers[3]); // 这将抛出ArrayIndexOutOfBoundsException
    }
}
```

**在上面的例子中，**`ArrayIndexOutOfBoundsException`是一个unchecked异常，程序不会在编译时提醒处理这个异常，但它会在运行时抛出。

### 异常的继承关系

**在Java的异常层次结构中：**

* ```
  java.lang.Throwable
  ```

  **是所有异常的根类。**

  * ```
    java.lang.Exception
    ```

    **是所有checked异常的父类。**

    * `java.lang.RuntimeException`是所有unchecked异常的父类。

**因此，checked异常是** `Exception`的直接子类（但不包括 `RuntimeException`及其子类），而unchecked异常是 `RuntimeException`及其子类。

## Iterable接口和Iteator接口

1. **用途**：
   * `Iterable`：定义一个集合可以被迭代，但不提供具体的迭代实现。实现 `Iterable`接口的类可以使用增强型for循环。
   * `Iterator`：提供具体的迭代功能，可以在迭代过程中删除元素。
2. **方法**：
   * `Iterable`只有一个方法 `iterator()`，返回一个 `Iterator`对象。
   * `Iterator`有三个方法：`hasNext()`，`next()`，和 `remove()`，用于遍历和修改集合。
3. **关系**：
   * **实现** `Iterable`接口的类必须提供一个 `iterator()`方法，该方法返回一个 `Iterator`对象。
   * `Iterator`接口提供了实际的迭代行为，是遍历集合元素的工具。
