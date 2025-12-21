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
      description: "京都の留学生向けのごみ分別ウェブサイト",
    },
    "/en/": {
      lang: "en-US",
      title: "Kyoto Trash Teacher",
      description: "A waste separation website for international students in Kyoto",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
