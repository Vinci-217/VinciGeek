import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/VinciGeek/",

  lang: "zh-CN",
  title: "VinciGeek",
  description: "VinciGeek",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', { rel: 'icon', href: 'assets/icon/icon.png' }
    ],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
    ['script', { async: true, src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }],

    
  ],
});
