import { getSidebar } from "vitepress-plugin-auto-sidebar";

export default {
  base: "/RZCore_Doc/",
  title: "RobiZona",
  description: "RobiZona",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo.png" },
    ],

  ],
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern:
        "https://github.com/robizona/rzcore_doc/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    siteTitle: "RobiZona",
    outline: "deep",
    nav: [
      { text: "Docs", link: "/api" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/RobiZona" },
    ],
    sidebar: {
      "/api/": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
      "/api": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["api"],
        collapsible: true,
        collapsed: false,
      }),
    },
    footer: {
      message: "Released under the GNU General Public License v2.0.",
      copyright: "Copyright © 2024-present RobiZona",
    },
  },
};
