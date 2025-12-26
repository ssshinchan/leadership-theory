import {sidebar} from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Garbage Separation",
      icon: "laptop-code",
      prefix: "rubbish/",
      link: "rubbish/",
      children: "structure",
    },
  ],
});
