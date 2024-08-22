import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import { defineUserConfig } from "vuepress";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // hostname: "https://mister-hope.github.io",

  author: {
    name: "Vinci",
    // url: "https://mister-hope.com",
  },
  pure: true,

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/icon/icon.png",

  repo: "Vinci-217",
  repoLabel: "GitHub",
  repoDisplay: true,

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "我也是有底线的",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "一名技术爱好者",
    intro: "/intro.html",
    medias: {
      Email: "1341060890@qq.com",

      GitHub: "https://github.com/Vinci-217",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    searchPro: true,

    copyCode: {},

    comment: {
      provider: "Giscus",
      repo: "Vinci-217/Comment",
      repoId: "R_kgDOLyrzFA",
      category: "Announcements",
      categoryId: "DIC_kwDOLyrzFM4Ce8lE",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
