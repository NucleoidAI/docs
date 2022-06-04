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
