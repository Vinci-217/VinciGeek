import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as i,a as l}from"./app-Cz0uf0JS.js";const n={},e=l(`<h1 id="javascript基础零碎" tabindex="-1"><a class="header-anchor" href="#javascript基础零碎"><span>JavaScript基础零碎</span></a></h1><ul><li>在函数外声明的变量具有全局作用于，在函数内部声明的变量只在函数内部有效</li></ul><h2 id="关于-和-的使用" tabindex="-1"><a class="header-anchor" href="#关于-和-的使用"><span>关于 <code>[ ]</code>和 <code>{ }</code>的使用</span></a></h2><h3 id="的用法" tabindex="-1"><a class="header-anchor" href="#的用法"><span><code>{}</code> 的用法</span></a></h3><ul><li>在js中大括号 <code>{ }</code>表示的是对象，里面的内容是对象的内容。并且对象的每一项都是由键值对组成的</li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> person</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  name</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;alice&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  age</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;">30</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其中对象里面也可以嵌套复杂的数据结构</li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> user</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  name</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Jane&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  details</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    address</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;123 Main St&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    phone</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;555-1234&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在Vue.js中，组件的数据通常以对象的形式存在</li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">export default</span><span style="color:#24292E;--shiki-dark:#C678DD;">{</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  data</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    return{</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#E06C75;">      message</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;hello vue&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#C678DD;">}</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="的用法-1" tabindex="-1"><a class="header-anchor" href="#的用法-1"><span><code>[]</code> 的用法</span></a></h3><ul><li>在js中，[]表示的是数组或列表</li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> number</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="color:#005CC5;--shiki-dark:#D19A66;">2</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="color:#005CC5;--shiki-dark:#D19A66;">4</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关于引号的区别" tabindex="-1"><a class="header-anchor" href="#关于引号的区别"><span>关于引号的区别</span></a></h2><ul><li>一般而言，在js中单引号和双引号都可以引用字符串，但双引号的优点是可以嵌套单引号</li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> sentence</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;He said, &#39;Hello, world!&#39;&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>而反引号的好处是可以进行插值</li></ul><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> a</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;hello \${name}!&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关于-和-的区别" tabindex="-1"><a class="header-anchor" href="#关于-和-的区别"><span>关于 <code>=</code> 和 <code>:</code> 的区别</span></a></h2><h2 id="关于-和-区别" tabindex="-1"><a class="header-anchor" href="#关于-和-区别"><span>关于 <code>==</code> 和 <code>===</code> 区别</span></a></h2><ul><li>两个等号：两个等号进行的是 宽松 比较（loose equality），在比较前会进行类型转换。如果两个值的类型不同，JavaScript 会尝试将它们转换为相同的类型，然后再进行比较。</li></ul><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;5&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// true，因为字符串 &#39;5&#39; 被转换成了数字 5</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">null</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> undefined</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// true，因为 null 和 undefined 被认为相等</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// true，因为空字符串被转换成了数字 0</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;0&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// true，因为 &#39;0&#39; 被转换成了数字 0，而 false 也被转换成了数字 0</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>三个等号：三个等号进行的是 严格 比较（strict equality），比较时不会进行类型转换，只有当两个值的类型和内容都相同时才会返回 true。</li></ul><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;5&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// false，因为类型不同，数字 5 和字符串 &#39;5&#39; 不相等</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">null</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> undefined</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// false，因为类型不同</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// false，因为类型不同</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;0&#39;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// false，因为类型不同</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),r=[e];function o(p,d){return i(),a("div",null,r)}const k=s(n,[["render",o],["__file","JavaScript基础零碎.html.vue"]]),h=JSON.parse(`{"path":"/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/JavaScript%E5%9F%BA%E7%A1%80/JavaScript%E5%9F%BA%E7%A1%80%E9%9B%B6%E7%A2%8E.html","title":"JavaScript基础零碎","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"关于 [ ]和 { }的使用","slug":"关于-和-的使用","link":"#关于-和-的使用","children":[{"level":3,"title":"{} 的用法","slug":"的用法","link":"#的用法","children":[]},{"level":3,"title":"[] 的用法","slug":"的用法-1","link":"#的用法-1","children":[]}]},{"level":2,"title":"关于引号的区别","slug":"关于引号的区别","link":"#关于引号的区别","children":[]},{"level":2,"title":"关于 = 和 : 的区别","slug":"关于-和-的区别","link":"#关于-和-的区别","children":[]},{"level":2,"title":"关于 == 和 === 区别","slug":"关于-和-区别","link":"#关于-和-区别","children":[]}],"git":{"createdTime":1716472672000,"updatedTime":1716863466000,"contributors":[{"name":"Vinci","email":"1341060890@qq.com","commits":2}]},"readingTime":{"minutes":1.68,"words":504},"filePathRelative":"技术文章/JavaScript基础/JavaScript基础零碎.md","localizedDate":"2024年5月23日","excerpt":"\\n<ul>\\n<li>在函数外声明的变量具有全局作用于，在函数内部声明的变量只在函数内部有效</li>\\n</ul>\\n<h2>关于 <code>[ ]</code>和 <code>{ }</code>的使用</h2>\\n<h3><code>{}</code> 的用法</h3>\\n<ul>\\n<li>在js中大括号 <code>{ }</code>表示的是对象，里面的内容是对象的内容。并且对象的每一项都是由键值对组成的</li>\\n</ul>\\n<div class=\\"language-js line-numbers-mode\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\" style=\\"background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#D73A49;--shiki-dark:#C678DD\\">let</span><span style=\\"color:#24292E;--shiki-dark:#E06C75\\"> person</span><span style=\\"color:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"color:#24292E;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color:#24292E;--shiki-dark:#E06C75\\">  name</span><span style=\\"color:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#032F62;--shiki-dark:#98C379\\">'alice'</span><span style=\\"color:#24292E;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#24292E;--shiki-dark:#E06C75\\">  age</span><span style=\\"color:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"color:#005CC5;--shiki-dark:#D19A66\\">30</span><span style=\\"color:#24292E;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color:#24292E;--shiki-dark:#ABB2BF\\">};</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{k as comp,h as data};
