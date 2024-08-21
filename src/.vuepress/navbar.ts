import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  // navbar: [
  {
    text: "技术文章",
    link: "/技术文章/README.md",
    icon: "code",

  },
  {
    text: "代码之外",
    link: "/代码之外/README.md",
    icon: "pen-nib"
  },


  {
    text: "留言墙",
    link: "/留言墙/README.md",
    icon: "hand-holding-heart"
  },
  {
    text: "实验室",
    icon: "flask",
    children: [
      { text: 'Todo List', link: '/实验室/todo.html' }
    ],
  },

  {
    text: "友情链接",
    icon: "link",
    children: [
      { text: "VuePress-Theme-Hope", link: "https://theme-hope.vuejs.press/zh/" },
      { text: "GitHub", link: "https://github.com" },
      { text: "廖雪峰Java教程", link: "https://www.liaoxuefeng.com/wiki/1252599548343744" },
      { text: "JavaGuide", link: "https://javaguide.cn/home.html" },
      { text: "小林Coding", link: "https://xiaolincoding.com/" },
      { text: "力扣", link: "https://leetcode.cn/problemset/" },
      { text: "代码随想录", link: "https://www.programmercarl.com/" },
    ],
  },



  // ],
]);
