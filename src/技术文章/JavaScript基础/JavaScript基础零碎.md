# JavaScript基础零碎

- 在函数外声明的变量具有全局作用于，在函数内部声明的变量只在函数内部有效

## 关于 `[ ]`和 `{ }`的使用

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


## 关于 `==` 和 `===` 区别

- 两个等号：两个等号进行的是 宽松 比较（loose equality），在比较前会进行类型转换。如果两个值的类型不同，JavaScript 会尝试将它们转换为相同的类型，然后再进行比较。

```javascript
console.log(5 == '5'); // true，因为字符串 '5' 被转换成了数字 5
console.log(null == undefined); // true，因为 null 和 undefined 被认为相等
console.log('' == 0); // true，因为空字符串被转换成了数字 0
console.log('0' == false); // true，因为 '0' 被转换成了数字 0，而 false 也被转换成了数字 0
```

- 三个等号：三个等号进行的是 严格 比较（strict equality），比较时不会进行类型转换，只有当两个值的类型和内容都相同时才会返回 true。

```javascript
console.log(5 === '5'); // false，因为类型不同，数字 5 和字符串 '5' 不相等
console.log(null === undefined); // false，因为类型不同
console.log('' === 0); // false，因为类型不同
console.log('0' === false); // false，因为类型不同
```