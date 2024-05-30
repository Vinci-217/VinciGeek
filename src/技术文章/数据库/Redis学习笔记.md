# Redis学习笔记

## Redis是什么？

Redis是一个非关系型数据库，它可以存储键（key）和五中不同类型的值（value）之间的映射，可以将存储在**内存**的 **键值对** 数据持久化 到硬盘，可以使用赋值特性来扩展读性能，还可以通过客户端分片来扩展写性能。

因为Redis是存储在内存中的，所以他的读写效率相对于其他数据库较高。

Redis的作用往往是用来存储热点数据的，比如磨某个数据某个时间段点击量比较高，就可以用Redis快速存取

## Redis中常用的数据类型

> 这里的数据类型特指value的数据类型

- 字符串string
- 哈希hash（类似于java中的HashMap）
- 列表list（java中的LinkedList）
- 集合set（无序集合，类似java中的HashSet）
- 有序集合sorted set/zset（集合中每一个元素关联一个分数，根据分数进行排序，没有重复元素）

## 常用操作命令

> Redis中的命令也不区分大小写，和MySQL一样

### 字符串

- SET key value 设置指定key的值
- GET key 获取指定key的值
- SETEX key seconds value 设置key的值，并且指定过期时间
- SETNX key value 只有key不存在的时候才设置

### 哈希

- HSET key field value 将哈希表key中的字段field的值设为value
- HGET key field 获取存储在哈希表中指定字段的值
- HGET key field 删除key对应的field
- HKEYS key 获取哈希表中所有字段
- HVALS key 获取哈希表中所有的值

### 列表

- LPUSH key value1 [value2] 将一个或多个插入头部
- LRANGE key start stop获取列表指定范围的元素
- RPOP key 移除并获取尾部元素
- LLEN key 获取列表长度

### 集合

- SADD key member1 [member2] 向集合添加一个或多个成员
- SMEMBERS key 返回集合中的所有成员
- SCARD key 获取集合中的成员数
- SINTER key1 [key2] 返回给定所有集合的交集
- SUNION key1 [key2] 返回所有给定集合的并集
- SREM key member1 [member2] 删除集合中的元素

### 有序集合

> score是一个double类型的数，用来标识顺序

- ZADD key score1 member1 [score2 member2]
- ZRANGE key start stop [WITHSCORES] 通过索引区间返回集合成员
- ZINCRBY key increment member 给某个成员member加分数increment
- ZREM key member 删除某个成员

> zrange key 0 -1 显示所有内容

### 通用命令

- KEYS pattern 查找所有符合给定模式pattern的key
- EXISTS key 检查key存不存在
- TYPE key 返回key所存储的值的类型
- DEL key 删除key

> keys * 返回所有key
