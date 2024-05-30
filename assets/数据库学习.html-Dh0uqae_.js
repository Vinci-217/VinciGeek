import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,o as d,a as c}from"./app-Cz0uf0JS.js";const o={},i=c(`<h1 id="数据库语句学习" tabindex="-1"><a class="header-anchor" href="#数据库语句学习"><span>数据库语句学习</span></a></h1><blockquote><p>摘要：文章主要内容是数据库语句的基本操作，以及一些基本的数据库标准库函数</p></blockquote><blockquote><p>重点：<strong>SQL语句对大小写不敏感</strong></p></blockquote><h2 id="数据库操作语句" tabindex="-1"><a class="header-anchor" href="#数据库操作语句"><span>数据库操作语句</span></a></h2><ul><li><em>SELECT</em> - 从数据库表中获取数据</li><li><em>UPDATE</em> - 更新数据库表中的数据</li><li><em>DELETE</em> - 从数据库表中删除数据</li><li><em>INSERT INTO</em> - 向数据库表中插入数据</li></ul><h3 id="字句与附加内容" tabindex="-1"><a class="header-anchor" href="#字句与附加内容"><span>字句与附加内容</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>SELECT list1,list2 FROM table;//输出某几个表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * FROM table;//输出表中全部内容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT DISTINCT list1 FROM table;//输出列中内容，但每个值只出现一次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * FROM table WHERE id=2;//查找id为2的那一行，注意等号为单个，并且如果查找内容非数值，需要加单引号eg:WHERE name=&#39;alice&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * FROM table WHERE id=2 AND name=&#39;alice&#39;;//他的意思和你想的一样，同样的用法还有OR</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * FROM table ORDER by id;//查找以后的结果按照id正序输出</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>INSERT INTO table(list1,list2) VALUES(&#39;alice&#39;,&#39;bob&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>UPDATE table SET list1=&#39;alice&#39;,list2=&#39;bob&#39; WHERE id=1;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>DELETE FROM table WHERE id=1;</span></span>
<span class="line"><span>DELETE * FROM table;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库定义语句" tabindex="-1"><a class="header-anchor" href="#数据库定义语句"><span>数据库定义语句</span></a></h2><ul><li><em>CREATE DATABASE</em> - 创建新数据库</li><li><em>ALTER DATABASE</em> - 修改数据库</li><li><em>CREATE TABLE</em> - 创建新表</li><li><em>ALTER TABLE</em> - 变更（改变）数据库表</li><li><em>DROP TABLE</em> - 删除表</li><li><em>CREATE INDEX</em> - 创建索引（搜索键）</li><li><em>DROP INDEX</em> - 删除索引</li></ul><h2 id="oracle数据库标准库函数-math库-dml库-操作游标-json" tabindex="-1"><a class="header-anchor" href="#oracle数据库标准库函数-math库-dml库-操作游标-json"><span>oracle数据库标准库函数（math库）（DML库-操作游标 json）</span></a></h2><h3 id="_1-单行函数" tabindex="-1"><a class="header-anchor" href="#_1-单行函数"><span>1. 单行函数</span></a></h3><h4 id="字符函数" tabindex="-1"><a class="header-anchor" href="#字符函数"><span>字符函数</span></a></h4><ul><li><code>CONCAT(&#39;Hello&#39;, &#39;World&#39;)</code>: 结果为 <code>&#39;HelloWorld&#39;</code>。</li><li><code>SUBSTR(&#39;HelloWorld&#39;, 6, 5)</code>: 从第6位开始取5个字符，结果为 <code>&#39;World&#39;</code>。</li><li><code>LENGTH(&#39;Hello&#39;)</code>: 返回字符串 <code>&#39;Hello&#39;</code> 的长度，结果为 <code>5</code>。</li><li><code>TRIM(&#39;H&#39; FROM &#39;HHHelloHH&#39;)</code>: 移除字符串两侧的 &#39;H&#39;，结果为 <code>&#39;Hello&#39;</code>。</li><li><code>LOWER(&#39;HELLO&#39;)</code>: 将字符串转换为小写，结果为 <code>&#39;hello&#39;</code>。</li><li><code>UPPER(&#39;hello&#39;)</code>: 将字符串转换为大写，结果为 <code>&#39;HELLO&#39;</code>。</li><li><code>REPLACE(&#39;2024 Happy New Year&#39;, &#39;2024&#39;, &#39;2025&#39;)</code>: 将字符串中的 <code>2024</code> 替换为 <code>2025</code>，结果为 <code>&#39;2025 Happy New Year&#39;</code>。</li></ul><h4 id="数值函数" tabindex="-1"><a class="header-anchor" href="#数值函数"><span>数值函数</span></a></h4><ul><li><code>ROUND(123.4567, 2)</code>: 将 <code>123.4567</code> 四舍五入到小数点后2位，结果为 <code>123.46</code>。</li><li><code>TRUNC(123.4567, 2)</code>: 将 <code>123.4567</code> 截断到小数点后2位，结果为 <code>123.45</code>。</li><li><code>ABS(-123.45)</code>: 返回 <code>-123.45</code> 的绝对值，结果为 <code>123.45</code>。</li><li><code>CEIL(123.45)</code>: 返回大于等于 <code>123.45</code> 的最小整数，结果为 <code>124</code>。</li><li><code>FLOOR(123.45)</code>: 返回小于等于 <code>123.45</code> 的最大整数，结果为 <code>123</code>。</li></ul><h4 id="日期函数" tabindex="-1"><a class="header-anchor" href="#日期函数"><span>日期函数</span></a></h4><ul><li><code>SYSDATE</code>: 返回当前系统日期和时间，结果取决于系统时刻。</li><li><code>ADD_MONTHS(&#39;01-JAN-2024&#39;, 1)</code>: 在日期 <code>01-JAN-2024</code> 上加1个月，结果为 <code>01-FEB-2024</code>。</li><li><code>LAST_DAY(&#39;15-JAN-2024&#39;)</code>: 返回 <code>JAN-2024</code> 的最后一天，结果为 <code>31-JAN-2024</code>。</li><li><code>MONTHS_BETWEEN(&#39;01-JAN-2024&#39;, &#39;01-MAR-2024&#39;)</code>: 计算从 <code>01-MAR-2024</code> 到 <code>01-JAN-2024</code> 之间的月份差异，结果为 <code>-2</code>。</li><li><code>NEXT_DAY(&#39;01-JAN-2024&#39;, &#39;FRIDAY&#39;)</code>: 返回 <code>01-JAN-2024</code> 后的第一个星期五，日期取决于当年日历。</li></ul><h3 id="_2-聚合函数-详细-三个不同" tabindex="-1"><a class="header-anchor" href="#_2-聚合函数-详细-三个不同"><span>2. 聚合函数（详细）（三个不同）</span></a></h3><ul><li><code>SUM(column)</code>: 计算某列的总和。例如，在收入列上使用，可以计算总收入。</li><li><code>AVG(column)</code>: 计算某列的平均值。例如，计算所有员工的平均薪资。</li><li><code>MAX(column)</code>: 找出某列的最大值。例如，找出最高的订单金额。</li><li><code>MIN(column)</code>: 找出某列的最小值。例如，找出最低的库存量。</li><li><code>COUNT(column)</code>: 计算某列的非空值数量。例如，计算有多少员工有邮箱地址。</li></ul><h3 id="_3-转换函数" tabindex="-1"><a class="header-anchor" href="#_3-转换函数"><span>3. 转换函数</span></a></h3><ul><li><code>TO_CHAR(SYSDATE, &#39;YYYY-MM-DD&#39;)</code>: 将当前日期转换为 <code>&#39;YYYY-MM-DD&#39;</code> 格式的字符串。</li><li><code>TO_NUMBER(&#39;123.45&#39;, &#39;999.99&#39;)</code>: 将字符串 <code>&#39;123.45&#39;</code> 转换为数字。</li><li><code>TO_DATE(&#39;01-JAN-2024&#39;, &#39;DD-MON-YYYY&#39;)</code>: 将字符串 <code>&#39;01-JAN-2024&#39;</code> 转换为日期类型。</li></ul><h3 id="_4-分析函数" tabindex="-1"><a class="header-anchor" href="#_4-分析函数"><span>4. 分析函数</span></a></h3><ul><li><code>ROW_NUMBER() OVER (ORDER BY salary DESC)</code>: 对所有员工按薪资降序排列，并给每个员工分配一个唯一的行号。</li><li><code>RANK() OVER (ORDER BY score DESC)</code>: 在成绩表中，对学生的分数进行排名，相同分数的学生排名相同。</li><li><code>DENSE_RANK() OVER (ORDER BY score DESC)</code>: 类似 <code>RANK</code>，但排名将连续不留空。</li></ul><h3 id="_5-空值处理函数-详细" tabindex="-1"><a class="header-anchor" href="#_5-空值处理函数-详细"><span>5. 空值处理函数（详细）</span></a></h3><ul><li><code>NVL(NULL, &#39;default&#39;)</code>: 如果第一个表达式是 <code>NULL</code>，返回 <code>&#39;default&#39;</code>。</li><li><code>COALESCE(NULL, NULL, &#39;first_non_null&#39;)</code>: 返回参数列表中的第一个非空表达式，结果为 <code>&#39;first_non_null&#39;</code>。</li><li><code>NULLIF(&#39;A&#39;, &#39;B&#39;)</code>: 如果两个表达式不相等，返回第一个表达式，结果为 <code>&#39;A&#39;</code>；如果相等，则返回 <code>NULL</code>。</li></ul><h2 id="mysql数据库函数" tabindex="-1"><a class="header-anchor" href="#mysql数据库函数"><span>MySQL数据库函数</span></a></h2><h3 id="_1-字符串函数" tabindex="-1"><a class="header-anchor" href="#_1-字符串函数"><span>1. 字符串函数</span></a></h3><ul><li><code>CONCAT(str1, str2, ...)</code>: 连接两个或多个字符串。例如：<code>CONCAT(&#39;Hello&#39;, &#39; &#39;, &#39;World&#39;)</code> 返回 <code>&#39;Hello World&#39;</code>。</li><li><code>LENGTH(str)</code>: 返回字符串的长度。例如：<code>LENGTH(&#39;Hello&#39;)</code> 返回 <code>5</code>。</li><li><code>LOWER(str)</code>: 将字符串转换为小写。例如：<code>LOWER(&#39;HELLO&#39;)</code> 返回 <code>&#39;hello&#39;</code>。</li><li><code>UPPER(str)</code>: 将字符串转换为大写。例如：<code>UPPER(&#39;hello&#39;)</code> 返回 <code>&#39;HELLO&#39;</code>。</li><li><code>REPLACE(str, from_str, to_str)</code>: 在字符串中替换子串。例如：<code>REPLACE(&#39;Hello World&#39;, &#39;World&#39;, &#39;MySQL&#39;)</code> 返回 <code>&#39;Hello MySQL&#39;</code>。</li><li><code>SUBSTRING(str, pos, len)</code>: 从字符串中提取子串。例如：<code>SUBSTRING(&#39;Hello World&#39;, 7, 5)</code> 返回 <code>&#39;World&#39;</code>。</li><li><code>TRIM(str)</code>: 去除字符串两侧的空格。例如：<code>TRIM(&#39; Hello &#39;)</code> 返回 <code>&#39;Hello&#39;</code>。</li></ul><h3 id="_2-数值函数" tabindex="-1"><a class="header-anchor" href="#_2-数值函数"><span>2. 数值函数</span></a></h3><ul><li><code>ROUND(number, decimals)</code>: 对数值进行四舍五入。例如：<code>ROUND(123.4567, 2)</code> 返回 <code>123.46</code>。</li><li><code>FLOOR(number)</code>: 返回不大于数值的最大整数。例如：<code>FLOOR(123.45)</code> 返回 <code>123</code>。</li><li><code>CEIL(number)</code>: 返回不小于数值的最小整数。例如：<code>CEIL(123.45)</code> 返回 <code>124</code>。</li><li><code>ABS(number)</code>: 返回数值的绝对值。例如：<code>ABS(-123)</code> 返回 <code>123</code>。</li></ul><h3 id="_3-日期和时间函数" tabindex="-1"><a class="header-anchor" href="#_3-日期和时间函数"><span>3. 日期和时间函数</span></a></h3><ul><li><code>CURDATE()</code>: 返回当前日期。例如，如果今天是 2024-04-10，则 <code>CURDATE()</code> 返回 <code>2024-04-10</code>。</li><li><code>NOW()</code>: 返回当前日期和时间。例如，如果现在是 2024-04-10 12:34:56，则 <code>NOW()</code> 返回 <code>2024-04-10 12:34:56</code>。</li><li><code>DATEDIFF(date1, date2)</code>: 返回两个日期之间的天数。例如：<code>DATEDIFF(&#39;2024-04-10&#39;, &#39;2024-04-01&#39;)</code> 返回 <code>9</code>。</li><li><code>DATE_ADD(date, INTERVAL expr type)</code>: 给定日期加上一个时间间隔。例如：<code>DATE_ADD(&#39;2024-01-01&#39;, INTERVAL 1 MONTH)</code> 返回 <code>2024-02-01</code>。</li></ul><h3 id="_4-条件表达式" tabindex="-1"><a class="header-anchor" href="#_4-条件表达式"><span>4. 条件表达式</span></a></h3><ul><li><code>IF(expr1, expr2, expr3)</code>: 如果 <code>expr1</code> 为真，则返回 <code>expr2</code>；否则返回 <code>expr3</code>。例如：<code>IF(1&gt;0, &#39;true&#39;, &#39;false&#39;)</code> 返回 <code>&#39;true&#39;</code>。</li><li><code>CASE WHEN condition THEN result [WHEN ...] [ELSE result] END</code>: 条件选择语句。例如：<code>CASE WHEN 1&gt;0 THEN &#39;true&#39; ELSE &#39;false&#39; END</code> 返回 <code>&#39;true&#39;</code>。</li></ul><h3 id="_5-聚合函数" tabindex="-1"><a class="header-anchor" href="#_5-聚合函数"><span>5. 聚合函数</span></a></h3><ul><li><code>SUM(column)</code>: 计算数值列的总和。例如，在销售表中，<code>SUM(price)</code> 可以计算总销售额。</li><li><code>AVG(column)</code>: 计算数值列的平均值。例如：<code>AVG(price)</code> 可以计算平均销售价格。</li><li><code>MAX(column)</code>: 返回列中的最大值。例如：<code>MAX(price)</code> 可以找到最高的销售价格。</li><li><code>MIN(column)</code>: 返回列中的最小值。例如：<code>MIN(price)</code> 可以找到最低的销售价格。</li><li><code>COUNT(column)</code>: 返回列中非NULL值的数量。例如：<code>COUNT(*)</code> 可以计算表中的行数。</li></ul><h3 id="_6-其他有用的函数" tabindex="-1"><a class="header-anchor" href="#_6-其他有用的函数"><span>6. 其他有用的函数</span></a></h3><ul><li><code>COALESCE(value1, value2, ...)</code>: 返回参数列表中的第一个非NULL值。例如：<code>COALESCE(NULL, NULL, &#39;first_non_null&#39;, NULL)</code> 返回 <code>&#39;first_non_null&#39;</code>。</li><li><code>NULLIF(value1, value2)</code>: 如果两个值相等则返回NULL，否则返回第一个值。例如：<code>NULLIF(&#39;A&#39;, &#39;B&#39;)</code> 返回 <code>&#39;A&#39;</code>；<code>NULLIF(&#39;A&#39;, &#39;A&#39;)</code> 返回 <code>NULL</code>。</li></ul><h2 id="postgresql数据库函数" tabindex="-1"><a class="header-anchor" href="#postgresql数据库函数"><span>PostgreSQL数据库函数</span></a></h2><h3 id="_1-字符串函数-1" tabindex="-1"><a class="header-anchor" href="#_1-字符串函数-1"><span>1. 字符串函数</span></a></h3><ul><li><code>CONCAT(str1, str2, ...)</code>: 连接两个或多个字符串。例如：<code>CONCAT(&#39;Hello&#39;, &#39; &#39;, &#39;World&#39;)</code> 返回 <code>&#39;Hello World&#39;</code>。</li><li><code>LENGTH(str)</code>: 返回字符串的长度。例如：<code>LENGTH(&#39;Hello&#39;)</code> 返回 <code>5</code>。</li><li><code>LOWER(str)</code>: 将字符串转换为小写。例如：<code>LOWER(&#39;HELLO&#39;)</code> 返回 <code>&#39;hello&#39;</code>。</li><li><code>UPPER(str)</code>: 将字符串转换为大写。例如：<code>UPPER(&#39;hello&#39;)</code> 返回 <code>&#39;HELLO&#39;</code>。</li><li><code>REPLACE(str, from_str, to_str)</code>: 在字符串中替换子串。例如：<code>REPLACE(&#39;Hello World&#39;, &#39;World&#39;, &#39;PostgreSQL&#39;)</code> 返回 <code>&#39;Hello PostgreSQL&#39;</code>。</li><li><code>SUBSTRING(str FROM start FOR length)</code>: 从字符串中提取子串。例如：<code>SUBSTRING(&#39;Hello World&#39; FROM 7 FOR 5)</code> 返回 <code>&#39;World&#39;</code>。</li><li><code>TRIM([LEADING | TRAILING | BOTH] [characters] FROM str)</code>: 去除字符串两侧的指定字符。例如：<code>TRIM(&#39; Hello &#39;)</code> 返回 <code>&#39;Hello&#39;</code>。</li></ul><h3 id="_2-数值函数-1" tabindex="-1"><a class="header-anchor" href="#_2-数值函数-1"><span>2. 数值函数</span></a></h3><ul><li><code>ROUND(value, precision)</code>: 对数值进行四舍五入到指定的小数位数。例如：<code>ROUND(123.4567, 2)</code> 返回 <code>123.46</code>。</li><li><code>FLOOR(value)</code>: 返回不大于数值的最大整数。例如：<code>FLOOR(123.45)</code> 返回 <code>123</code>。</li><li><code>CEILING(value)</code>: 返回不小于数值的最小整数。例如：<code>CEILING(123.45)</code> 返回 <code>124</code>。</li><li><code>ABS(value)</code>: 返回数值的绝对值。例如：<code>ABS(-123)</code> 返回 <code>123</code>。</li></ul><h3 id="_3-日期和时间函数-1" tabindex="-1"><a class="header-anchor" href="#_3-日期和时间函数-1"><span>3. 日期和时间函数</span></a></h3><ul><li><code>CURRENT_DATE</code>: 返回当前日期。例如：<code>CURRENT_DATE</code>。</li><li><code>CURRENT_TIMESTAMP</code>: 返回当前日期和时间。例如：<code>CURRENT_TIMESTAMP</code>。</li><li><code>AGE(timestamp1, timestamp2)</code>: 返回两个日期之间的间隔。例如：<code>AGE(TIMESTAMP &#39;2024-04-10&#39;, TIMESTAMP &#39;2024-01-01&#39;)</code> 返回 <code>&#39;3 mons 9 days&#39;</code>。</li><li><code>DATE_PART(&#39;field&#39;, timestamp)</code>: 提取日期的指定部分。例如：<code>DATE_PART(&#39;year&#39;, TIMESTAMP &#39;2024-04-10&#39;)</code> 返回 <code>2024</code>。</li></ul><h3 id="_4-条件表达式-1" tabindex="-1"><a class="header-anchor" href="#_4-条件表达式-1"><span>4. 条件表达式</span></a></h3><ul><li><code>CASE WHEN condition THEN result [WHEN ...] [ELSE result] END</code>: 条件选择语句。例如：<code>CASE WHEN 1&gt;0 THEN &#39;true&#39; ELSE &#39;false&#39; END</code> 返回 <code>&#39;true&#39;</code>。</li><li><code>COALESCE(value1, value2, ...)</code>: 返回参数列表中的第一个非NULL值。例如：<code>COALESCE(NULL, NULL, &#39;first_non_null&#39;, NULL)</code> 返回 <code>&#39;first_non_null&#39;</code>。</li><li><code>NULLIF(value1, value2)</code>: 如果两个值相等则返回NULL，否则返回第一个值。例如：<code>NULLIF(&#39;A&#39;, &#39;B&#39;)</code> 返回 <code>&#39;A&#39;</code>；<code>NULLIF(&#39;A&#39;, &#39;A&#39;)</code> 返回 <code>NULL</code>。</li></ul><h3 id="_5-聚合函数-1" tabindex="-1"><a class="header-anchor" href="#_5-聚合函数-1"><span>5. 聚合函数</span></a></h3><ul><li><code>SUM(column)</code>: 计算数值列的总和。例如，<code>SUM(price)</code> 可以计算总销售额。</li><li><code>AVG(column)</code>: 计算数值列的平均值。例如：<code>AVG(price)</code> 可以计算平均销售价格。</li><li><code>MAX(column)</code>: 返回列中的最大值。例如：<code>MAX(price)</code> 可以找到最高的销售价格。</li><li><code>MIN(column)</code>: 返回列中的最小值。例如：<code>MIN(price)</code> 可以找到最低的销售价格。</li><li><code>COUNT(column)</code>: 返回列中非NULL值的数量。例如：<code>COUNT(*)</code> 可以计算表中的行数。</li></ul><h3 id="_6-数组函数" tabindex="-1"><a class="header-anchor" href="#_6-数组函数"><span>6. 数组函数</span></a></h3><ul><li><code>ARRAY_LENGTH(array, dimension)</code>: 返回数组在指定维度的长度。例如：<code>ARRAY_LENGTH(ARRAY[1,2,3,4], 1)</code> 返回 <code>4</code>。</li><li><code>ARRAY_APPEND(array, element)</code>: 向数组添加元素。例如：<code>ARRAY_APPEND(ARRAY[1,2,3], 4)</code> 返回 <code>{1,2,3,4}</code>。</li></ul><h3 id="_7-地理空间函数-gis" tabindex="-1"><a class="header-anchor" href="#_7-地理空间函数-gis"><span>7. 地理空间函数（GIS）</span></a></h3><ul><li><code>ST_Area(geom)</code>: 计算地理对象的面积。例如：<code>ST_Area(ST_GeomFromText(&#39;POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))&#39;))</code> 返回 <code>1.0</code>。</li></ul>`,56),a=[i];function s(n,r){return d(),l("div",null,a)}const E=e(o,[["render",s],["__file","数据库学习.html.vue"]]),p=JSON.parse('{"path":"/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AD%A6%E4%B9%A0.html","title":"数据库语句学习","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"数据库操作语句","slug":"数据库操作语句","link":"#数据库操作语句","children":[{"level":3,"title":"字句与附加内容","slug":"字句与附加内容","link":"#字句与附加内容","children":[]}]},{"level":2,"title":"数据库定义语句","slug":"数据库定义语句","link":"#数据库定义语句","children":[]},{"level":2,"title":"oracle数据库标准库函数（math库）（DML库-操作游标 json）","slug":"oracle数据库标准库函数-math库-dml库-操作游标-json","link":"#oracle数据库标准库函数-math库-dml库-操作游标-json","children":[{"level":3,"title":"1. 单行函数","slug":"_1-单行函数","link":"#_1-单行函数","children":[]},{"level":3,"title":"2. 聚合函数（详细）（三个不同）","slug":"_2-聚合函数-详细-三个不同","link":"#_2-聚合函数-详细-三个不同","children":[]},{"level":3,"title":"3. 转换函数","slug":"_3-转换函数","link":"#_3-转换函数","children":[]},{"level":3,"title":"4. 分析函数","slug":"_4-分析函数","link":"#_4-分析函数","children":[]},{"level":3,"title":"5. 空值处理函数（详细）","slug":"_5-空值处理函数-详细","link":"#_5-空值处理函数-详细","children":[]}]},{"level":2,"title":"MySQL数据库函数","slug":"mysql数据库函数","link":"#mysql数据库函数","children":[{"level":3,"title":"1. 字符串函数","slug":"_1-字符串函数","link":"#_1-字符串函数","children":[]},{"level":3,"title":"2. 数值函数","slug":"_2-数值函数","link":"#_2-数值函数","children":[]},{"level":3,"title":"3. 日期和时间函数","slug":"_3-日期和时间函数","link":"#_3-日期和时间函数","children":[]},{"level":3,"title":"4. 条件表达式","slug":"_4-条件表达式","link":"#_4-条件表达式","children":[]},{"level":3,"title":"5. 聚合函数","slug":"_5-聚合函数","link":"#_5-聚合函数","children":[]},{"level":3,"title":"6. 其他有用的函数","slug":"_6-其他有用的函数","link":"#_6-其他有用的函数","children":[]}]},{"level":2,"title":"PostgreSQL数据库函数","slug":"postgresql数据库函数","link":"#postgresql数据库函数","children":[{"level":3,"title":"1. 字符串函数","slug":"_1-字符串函数-1","link":"#_1-字符串函数-1","children":[]},{"level":3,"title":"2. 数值函数","slug":"_2-数值函数-1","link":"#_2-数值函数-1","children":[]},{"level":3,"title":"3. 日期和时间函数","slug":"_3-日期和时间函数-1","link":"#_3-日期和时间函数-1","children":[]},{"level":3,"title":"4. 条件表达式","slug":"_4-条件表达式-1","link":"#_4-条件表达式-1","children":[]},{"level":3,"title":"5. 聚合函数","slug":"_5-聚合函数-1","link":"#_5-聚合函数-1","children":[]},{"level":3,"title":"6. 数组函数","slug":"_6-数组函数","link":"#_6-数组函数","children":[]},{"level":3,"title":"7. 地理空间函数（GIS）","slug":"_7-地理空间函数-gis","link":"#_7-地理空间函数-gis","children":[]}]}],"git":{"createdTime":1716730750000,"updatedTime":1716730750000,"contributors":[{"name":"Vinci","email":"1341060890@qq.com","commits":1}]},"readingTime":{"minutes":7.77,"words":2332},"filePathRelative":"技术文章/数据库/数据库学习.md","localizedDate":"2024年5月26日","excerpt":"\\n<blockquote>\\n<p>摘要：文章主要内容是数据库语句的基本操作，以及一些基本的数据库标准库函数</p>\\n</blockquote>\\n<blockquote>\\n<p>重点：<strong>SQL语句对大小写不敏感</strong></p>\\n</blockquote>\\n<h2>数据库操作语句</h2>\\n<ul>\\n<li><em>SELECT</em> - 从数据库表中获取数据</li>\\n<li><em>UPDATE</em> - 更新数据库表中的数据</li>\\n<li><em>DELETE</em> - 从数据库表中删除数据</li>\\n<li><em>INSERT INTO</em> - 向数据库表中插入数据</li>\\n</ul>"}');export{E as comp,p as data};
