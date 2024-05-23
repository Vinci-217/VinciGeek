# JavaScript基础零碎

- 在函数外声明的变量具有全局作用于，在函数内部声明的变量只在函数内部有效
- 


## 关于`[ ]`和`{ }`的使用

### `{}` 的用法

- 在js中大括号 `{ }`表示的是对象，里面的内容是对象的内容。并且对象的每一项都是由键值对组成的

```js
let person = {
  name='alice',
  age=30,
};
```

- 其中对象里面也可以嵌套复杂的数据结构

```js
let user = {
  name: "Jane",
  details: {
    address: "123 Main St",
    phone: "555-1234"
  }
};
```

- 在Vue.js中，组件的数据通常以对象的形式存在

```js
<script>
export default{
  data(){
    return{
      message: "hello vue",
    };
  }
};
</script>
```

### `[]` 的用法

- 在js中，[]表示的是数组或列表

```js
let number = [1,2,3,4,5];
```

## 关于引号的区别

- 一般而言，在js中单引号和双引号都可以引用字符串，但双引号的优点是可以嵌套单引号

```js
let sentence = "He said, 'Hello, world!'";
```

- 而反引号的好处是可以进行插值

```js
let a = "hello ${name}!";
```

## 关于 `=` 和 `:` 的区别
