import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/mysql-homework/page-release/vue-hope/home/",

  lang: "zh-CN",
  title: "MySQL-Study",
  description: "MySQL 学习笔记",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
