const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nucleoid",
  tagline: "Neuro-Symbolic AI with Logic Graph",
  url: "https://nucleoid.com/",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.nucleoid.com/media/icon.png",
  organizationName: "NucleoidAI",
  projectName: "Nucleoid",
  titleDelimiter: "-",
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
          editUrl: "https://github.com/NucleoidAI/docs/tree/main/",
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
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          { to: "/docs", label: "HOME", position: "left" },
          { to: "/docs/get-started", label: "GET STARTED", position: "left" },
          { to: "/docs/learn", label: "LEARN", position: "left" },
          { to: "/docs/api", label: "API", position: "left" },
          {
            to: "https://nucleoid.com/blog",
            label: "BLOG",
            position: "left",
          },
          {
            href: "https://nucleoid.com/ide/chat",
            html: require("fs").readFileSync("./ide.html", "utf8"),
            position: "right",
          },
          {
            href: "https://github.com/NucleoidAI/Nucleoid",
            html: require("fs").readFileSync("./github.html", "utf8"),
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
