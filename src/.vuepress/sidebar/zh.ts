import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text:"垃圾分类",
      icon: "laptop-code",
      prefix: "rubbish/",
      link: "rubbish/",
      children: "structure",
    },
  ],
});
