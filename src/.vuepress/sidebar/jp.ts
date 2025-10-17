import { sidebar } from "vuepress-theme-hope";

export const jpSidebar = sidebar({
  "/": [
    "",
    {
      text:"ゴミ",
      icon: "laptop-code",
      prefix: "rubbish/",
      link: "rubbish/",
      children: "structure",
    },
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
