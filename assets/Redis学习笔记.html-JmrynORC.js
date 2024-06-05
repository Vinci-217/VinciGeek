import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as l,a as s}from"./app-C8Aa6H9h.js";const a={},n=s(`<div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>category:</span></span>
<span class="line"><span>  - 技术文章</span></span>
<span class="line"><span>tag:</span></span>
<span class="line"><span>  - Redis</span></span>
<span class="line"><span>  - 数据库</span></span>
<span class="line"><span>  - 语法基础</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="redis学习笔记" tabindex="-1"><a class="header-anchor" href="#redis学习笔记"><span>Redis学习笔记</span></a></h1><h2 id="redis是什么" tabindex="-1"><a class="header-anchor" href="#redis是什么"><span>Redis是什么？</span></a></h2><p>Redis是一个非关系型数据库，它可以存储键（key）和五中不同类型的值（value）之间的映射，可以将存储在<strong>内存</strong>的 <strong>键值对</strong> 数据持久化 到硬盘，可以使用赋值特性来扩展读性能，还可以通过客户端分片来扩展写性能。</p><p>因为Redis是存储在内存中的，所以他的读写效率相对于其他数据库较高。</p><p>Redis的作用往往是用来存储热点数据的，比如磨某个数据某个时间段点击量比较高，就可以用Redis快速存取</p><h2 id="redis中常用的数据类型" tabindex="-1"><a class="header-anchor" href="#redis中常用的数据类型"><span>Redis中常用的数据类型</span></a></h2><blockquote><p>这里的数据类型特指value的数据类型</p></blockquote><ul><li>字符串string</li><li>哈希hash（类似于java中的HashMap）</li><li>列表list（java中的LinkedList）</li><li>集合set（无序集合，类似java中的HashSet）</li><li>有序集合sorted set/zset（集合中每一个元素关联一个分数，根据分数进行排序，没有重复元素）</li></ul><h2 id="常用操作命令" tabindex="-1"><a class="header-anchor" href="#常用操作命令"><span>常用操作命令</span></a></h2><blockquote><p>Redis中的命令也不区分大小写，和MySQL一样</p></blockquote><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h3><ul><li>SET key value 设置指定key的值</li><li>GET key 获取指定key的值</li><li>SETEX key seconds value 设置key的值，并且指定过期时间</li><li>SETNX key value 只有key不存在的时候才设置</li></ul><h3 id="哈希" tabindex="-1"><a class="header-anchor" href="#哈希"><span>哈希</span></a></h3><ul><li>HSET key field value 将哈希表key中的字段field的值设为value</li><li>HGET key field 获取存储在哈希表中指定字段的值</li><li>HGET key field 删除key对应的field</li><li>HKEYS key 获取哈希表中所有字段</li><li>HVALS key 获取哈希表中所有的值</li></ul><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表"><span>列表</span></a></h3><ul><li>LPUSH key value1 [value2] 将一个或多个插入头部</li><li>LRANGE key start stop获取列表指定范围的元素</li><li>RPOP key 移除并获取尾部元素</li><li>LLEN key 获取列表长度</li></ul><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合"><span>集合</span></a></h3><ul><li>SADD key member1 [member2] 向集合添加一个或多个成员</li><li>SMEMBERS key 返回集合中的所有成员</li><li>SCARD key 获取集合中的成员数</li><li>SINTER key1 [key2] 返回给定所有集合的交集</li><li>SUNION key1 [key2] 返回所有给定集合的并集</li><li>SREM key member1 [member2] 删除集合中的元素</li></ul><h3 id="有序集合" tabindex="-1"><a class="header-anchor" href="#有序集合"><span>有序集合</span></a></h3><blockquote><p>score是一个double类型的数，用来标识顺序</p></blockquote><ul><li>ZADD key score1 member1 [score2 member2]</li><li>ZRANGE key start stop [WITHSCORES] 通过索引区间返回集合成员</li><li>ZINCRBY key increment member 给某个成员member加分数increment</li><li>ZREM key member 删除某个成员</li></ul><blockquote><p>zrange key 0 -1 显示所有内容</p></blockquote><h3 id="通用命令" tabindex="-1"><a class="header-anchor" href="#通用命令"><span>通用命令</span></a></h3><ul><li>KEYS pattern 查找所有符合给定模式pattern的key</li><li>EXISTS key 检查key存不存在</li><li>TYPE key 返回key所存储的值的类型</li><li>DEL key 删除key</li></ul><blockquote><p>keys * 返回所有key</p></blockquote>`,26),d=[n];function r(t,c){return l(),i("div",null,d)}const h=e(a,[["render",r],["__file","Redis学习笔记.html.vue"]]),k=JSON.parse('{"path":"/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"Redis学习笔记","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Redis是什么？","slug":"redis是什么","link":"#redis是什么","children":[]},{"level":2,"title":"Redis中常用的数据类型","slug":"redis中常用的数据类型","link":"#redis中常用的数据类型","children":[]},{"level":2,"title":"常用操作命令","slug":"常用操作命令","link":"#常用操作命令","children":[{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"哈希","slug":"哈希","link":"#哈希","children":[]},{"level":3,"title":"列表","slug":"列表","link":"#列表","children":[]},{"level":3,"title":"集合","slug":"集合","link":"#集合","children":[]},{"level":3,"title":"有序集合","slug":"有序集合","link":"#有序集合","children":[]},{"level":3,"title":"通用命令","slug":"通用命令","link":"#通用命令","children":[]}]}],"git":{"createdTime":1716472672000,"updatedTime":1717576218000,"contributors":[{"name":"Vinci","email":"1341060890@qq.com","commits":3}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"技术文章/数据库/Redis学习笔记.md","localizedDate":"2024年5月23日","excerpt":"<div class=\\"language- line-numbers-mode\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\" style=\\"background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>category:</span></span>\\n<span class=\\"line\\"><span>  - 技术文章</span></span>\\n<span class=\\"line\\"><span>tag:</span></span>\\n<span class=\\"line\\"><span>  - Redis</span></span>\\n<span class=\\"line\\"><span>  - 数据库</span></span>\\n<span class=\\"line\\"><span>  - 语法基础</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{h as comp,k as data};
