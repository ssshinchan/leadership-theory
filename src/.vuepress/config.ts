import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "ja-JP",
      title: "リーダーシップセオリーグループ64",
      description: "グループ64のプロジェクト----リーダーシップセオリー",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
