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

    {
      text: "代码之外",
      link: "/代码之外/README.md",
      prefix: "代码之外/",
      children: "structure",
      icon: "pen-nib"
    },
  
    {
      text: "留言墙",
      link: "/留言墙/README.md",
      prefix: "留言墙/",
      children: "structure",
      icon: "hand-holding-heart"
    },
  ],
});
