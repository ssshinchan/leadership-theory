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
      title: "京都ゴミ先生",
      description: "---------京都ゴミ先生",
    },
    "/en/": {
      lang: "en-US",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
