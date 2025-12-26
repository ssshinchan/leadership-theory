import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    ["link", {rel: "icon", href: "/assets/image/site-logo.png"}],
  ],
  locales: {
    "/": {
      lang: "ja-JP",
      title: "京都ゴミ分別先生",
      description: "京都の留学生向けのごみ分別ウェブサイト",
    },
    "/en/": {
      lang: "en-US",
      title: "Kyoto Garbage Separation Teacher",
      description: "A garbage separation website for international students in Kyoto",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "京都垃圾分类老师",
      description: "为京都的留学生提供的垃圾分类网站",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
