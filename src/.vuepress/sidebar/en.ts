import {sidebar} from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Rubbish",
      icon: "laptop-code",
      prefix: "rubbish/",
      link: "rubbish/",
      children: "structure",
    },
  ],
});
