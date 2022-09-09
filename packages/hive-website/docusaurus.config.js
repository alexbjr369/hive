module.exports = {
  title: "Hive",
  tagline: "",
  url: "https://alexbleggi.netlify.app/",
  baseUrl: "/hive/",
  onBrokenLinks: "warn", // default: throw
  onBrokenMarkdownLinks: "warn",
  favicon: "img/hive.svg",
  organizationName: "alexbjr369",
  projectName: "alexbjr369/hive/website",
  titleDelimiter: "·", // added
  themeConfig: {
    prism: {
      // added
      theme: require("prism-react-renderer/themes/dracula"),
    },
    announcementBar: {
      // added
      content:
        ' <p style="margin: 0;">🚧🚧🚧 Under construction... 🚧🚧🚧</p> ',
      isCloseable: false,
    },
    colorMode: {
      // added
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true, // added
      title: "Hive",
      logo: {
        alt: "Hive",
        src: "img/hive.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: "/versions",
              label: "All versions",
            },
          ],
        },
        {
          to: "docs/css/getting-started/download",
          label: "CSS Framework",
          position: "left",
        },
        {
          to: "docs/web-components/getting-started/download",
          label: "Web Components",
          position: "left",
        },
        {
          to: "docs/react/getting-started/download",
          label: "React",
          position: "left",
        },
        {
          to: "docs/vue/getting-started/download",
          label: "Vue",
          position: "left",
        },
        {
          to: "docs/angular/getting-started/download",
          label: "Angular",
          position: "left",
        },
        {
          href: "https://github.com/alexbjr369/hive",
          position: "right",
          className: "navbar-icon navbar-icon_github",
        },
        {
          href: "https://www.npmjs.com/~alexbjr369",
          position: "right",
          className: "navbar-icon navbar-icon_npm",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "CSS Framework",
          items: [
            {
              label: "Getting Started",
              to: "docs/css/getting-started/download",
            },
            {
              label: "Customize",
              to: "docs/css/customize/customize",
            },
            {
              label: "Layout",
              to: "docs/css/layout/containers",
            },
          ],
        },
        {
          title: "Web Components",
          items: [
            {
              label: "Getting Started",
              to: "docs/web-components/getting-started/download",
            },
            {
              label: "Layout",
              to: "docs/web-components/layout/containers",
            },
          ],
        },
        {
          title: "React",
          items: [
            {
              label: "Getting Started",
              to: "docs/react/getting-started/download",
            },
            {
              label: "Layout",
              to: "docs/react/layout/containers",
            },
          ],
        },
        {
          title: "Vue",
          items: [
            {
              label: "Getting Started",
              to: "docs/vue/getting-started/download",
            },
            {
              label: "Layout",
              to: "docs/vue/layout/containers",
            },
          ],
        },
        {
          title: "Angular",
          items: [
            {
              label: "Getting Started",
              to: "docs/angular/getting-started/download",
            },
            {
              label: "Layout",
              to: "docs/angular/layout/containers",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/alexbjr369/hive",
            },
            {
              label: "npm",
              to: "https://www.npmjs.com/~alexbjr369",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/in/alex-bleggi-377907201/",
            },
          ],
        },
        {
          title: "Credits",
          items: [
            {
              label: "Honey icons created by Freepik - Flaticon",
              to: "https://www.flaticon.com/free-icons/honey",
            },
          ],
        },
      ],
      copyright: `Built with ❤️ and ☕ by <strong><a class="footer__copyright-link" href="https://www.linkedin.com/in/alex-bleggi-377907201/" target="_blank">Alex Bleggi</a></strong>.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/alexbjr369/hive/website/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/alexbjr369/hive/website/edit/master/website/blog/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/variables.css"),

            require.resolve("./src/css/base/base.css"),

            require.resolve("./src/css/custom/footer.css"),
            require.resolve("./src/css/custom/hero.css"),
            require.resolve("./src/css/custom/highlight.css"),
            require.resolve("./src/css/custom/markdown.css"),
            require.resolve("./src/css/custom/navbar-sidebar.css"),
            require.resolve("./src/css/custom/navbar.css"),
            require.resolve("./src/css/custom/table.css"),

            require.resolve("./src/css/components/button.css"),
            require.resolve("./src/css/components/markdown-code.css"),
            require.resolve("./src/css/components/navbar-icon.css"),

            require.resolve("./src/css/pages/home.css"),
          ],
        },
        gtag: {
          // added
          trackingID: "G-YT3YLN5SLX",
        },
        googleAnalytics: {
          // added
          trackingID: "G-YT3YLN5SLX",
        },
      },
    ],
  ],
};
