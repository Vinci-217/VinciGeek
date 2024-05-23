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
        // 会在 `/zh/faq` 开头的路径激活
        // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
        // activeMatch: "^/zh/faq",
      },
      {
        text: "学习方法",
        link: "/学习方法/README.md",
        icon: "book"
      },
      // {
      //   text: "处世经验",
      //   link: "/处世经验/README.md",
      //   icon: "lightbulb",
      //   // 仅在 `/zh/guide/` 激活
      //   // activeMatch: "^/zh/guide/$",
      // },
      // {
      //   text: "个人日记",
      //   link: "/个人日记/README.md",
      //   icon: "star"
      // },
      {
        text: "代码之外",
        link: "/代码之外/README.md",
        icon: "pen-nib"
      },
      // {
      //   text: "恋爱话术",
      //   link: "/恋爱话术/README.md",
      //   icon: "heart"
      // },
      // {
      //   text: "每日一言",
      //   link: "/每日一言/README.md",
      //   icon: "cube"
      // },
      {
        text: "留言墙",
        link: "/留言墙/README.md",
        icon: "hand-holding-heart"
      },
    // ],
]);
