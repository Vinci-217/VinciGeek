import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "技术文章",
      link: "/技术文章/",
      prefix: "技术文章/",
      children: "structure",
      icon: "code",
      // 会在 `/zh/faq` 开头的路径激活
      // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
      // activeMatch: "^/zh/faq",
    },

    // {
    //   text: "处世经验",
    //   link: "/处世经验/README.md",
    //   prefix: "处世经验/",
    //   children: "structure",
    //   icon: "lightbulb",
    //   // 仅在 `/zh/guide/` 激活
    //   // activeMatch: "^/zh/guide/$",
    // },
    // {
    //   text: "个人日记",
    //   link: "/个人日记/README.md",
    //   prefix: "个人日记/",
    //   children: "structure",
    //   icon: "star"
    // },
    {
      text: "学习方法",
      link: "/学习方法/README.md",
      prefix: "学习方法/",
      children: "structure",
      icon: "book"
    },
    {
      text: "代码之外",
      link: "/代码之外/README.md",
      prefix: "代码之外/",
      children: "structure",
      icon: "pen-nib"
    },
    // {
    //   text: "恋爱话术",
    //   link: "/恋爱话术/README.md",
    //   prefix: "恋爱话术/",
    //   children: "structure",
    //   icon: "heart"
    // },
    // {
    //   text: "每日一言",
    //   link: "/每日一言/README.md",
    //   prefix: "每日一言/",
    //   children: "structure",
    //   icon: "cube"
    // },
    {
      text: "留言墙",
      link: "/留言墙/README.md",
      prefix: "留言墙/",
      children: "structure",
      icon: "hand-holding-heart"
    },
    // "",
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
