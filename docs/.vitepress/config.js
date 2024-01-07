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
      { text: "Guida", link: "/guida" },
      { text: "Docs", link: "/functions" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/RobiZona" },
    ],
    sidebar: {
      "/guida": [
        {
          text: "RZ Core", // Titolo visibile per la sottosezione rz_core
          collapsible: true,
          collapsed: false,
          items: getSidebarItems("/scripts/rz_core"), // Assumi una funzione getSidebarItems per generare gli elementi
        },
        {
          text: "RZ Inventory", // Titolo visibile per la sottosezione rz_inventory
          collapsible: true,
          collapsed: false,
          items: getSidebarItems("/scripts/rz_inventory"), // Assumi una funzione getSidebarItems per generare gli elementi
        }
      ],
      "/functions": getSidebar({
        contentRoot: "/docs",
        contentDirs: ["functions"],
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
