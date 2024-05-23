import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Vinci/",

  lang: "zh-CN",
  title: "Vinci",
  description: "Vinci的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
