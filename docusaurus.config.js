const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nucleoid",
  tagline: "Low-code Framework for Node.js",
  url: "https://nucleoid.com/",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "media/icon.png",
  organizationName: "NucleoidJS",
  projectName: "Nucleoid",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-L9H12K94J4",
      async: true,
    },
    "/docs/gtag.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        items: [
          { to: "/", label: "HOME", position: "left" },
          { to: "/docs/get-started", label: "GET STARTED", position: "left" },
          { to: "/docs/learn", label: "LEARN", position: "left" },
          { to: "/docs/api", label: "API", position: "left" },
          {
            href: "https://dev.to/nucleoid",
            label: "BLOG",
            position: "left",
          },
          {
            href: "https://github.com/NucleoidJS/Nucleoid",
            html: '<a href="/" class="navbar__item navbar__link" style="color: white"><div><span style="position: relative; top: 6px"><svg style="fill: white; height: 22px; margin-right: 4px" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarBorderIcon"><path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg></span><span>Star us on GitHub</span></div></a>',
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
