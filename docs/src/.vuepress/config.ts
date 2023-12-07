import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MySQL-Study",
  description: "MySQL 学习笔记",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
