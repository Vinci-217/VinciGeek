# Oracle数据库

> [!tip]
> 当我们学习一个新知识的时候，往往是先学会怎么用，然后再使用的过程中慢慢理解原理，这样也许不失为一种高效的学习方式

## 数据库语言的分类

数据库语言一般分为四种

- DDL：数据库定义语言：create、drop
- DML：数据库操作语言：insert、update、delete
- DQL：数据库查询语言：select
- DCL：数据库控制语言：grant、revoke

> [!warning]
> 在数据库语言中，对大小写是不敏感的

## Select语句的用法

```sql
select column1,column2 from table1; //查询表中某几个列的数据
select * from table2; //查询表中所有列的数据
```

## Order by子句

```sql
select * from table1 order by id ASC; //查询结果根据id排序，其中ASC表示升序，DESC表示降序（不加ASC也默认是升序）
select * from table1 order by id ASC NULLS FIRST;//如果出现了null，就将所有带有null的放到前面
```

## Distinct子句

```sql
select distinct column1 from table1; //过滤掉了column1中重复项后输出
```

## Where子句

```sql
select * from table1 where id = 1; //查询id为1的数据
select * from table2 where id = 1 and column1 = 'alice'; //查询id为1并且某一列是alice的数据
select * from table3 where id between 10 and 60; //查询id在10到60之间的数据
select * from table3 where id in(1,3); //查询id为1或者id为3的数据
select * from table4 where column1 like 'alic%'; //%是一个通配符，查询column1中值为alic开头的数据
```

## And和Or子句

- And子句在上面介绍过，表示两个条件同时满足
- Or字句表示两个条件满足一个即可
- 二者可以结合使用，可以多次使用

## Fetch子句

> FETCH 子句在 Oracle 中可以用来限制查询返回的行数，但仅能在12c以上版本使用

```sql
select * from table1 order by score fetch next 5 rows only; //获取前五行内容，其中的 next ... rows 可以替换为 first ... row
select * from table2 order by score fetch next 5 rows with ties; //如果前五行之后有并列第五的，也会包含在内
select * from table3 order by score fetch next 5 percent rows only; //查询前5%
select * from table4 order by score offset 10 rows fetch next 5 rows; //跳过前10之后的五行，实际上是11~15行
```

## In子句

> 基本用法上面已经介绍过了，这里说明一下还可用not in 以及执行子子语句

```sql
select * from table1 where id in(
    select id from table1 where column1 = 'alice'
); //先执行里面的语句筛选出id，然后再进行外部的查询，查找id在in的范围里面的数据
```

## Like子句

> 前面已经有过样例了，这里介绍几个通配符

- % 代表0个或多个字符 alic%
- _ 代表一个字符 alic_
- [charlist] 字符表中的任意一个字符 [abc]lice 搜索alice blice clice
- [!charlist]或者[^charlist] 不在字符表中的任何一个字符 [ab] 排除alice blice
