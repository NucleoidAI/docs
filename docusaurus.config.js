// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nucleoid",
  tagline: "Low-code Framework for Node.js",
  url: "https://nucleoid.com/",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "media/icon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NucleoidJS", // Usually your GitHub org/user name.
  projectName: "Nucleoid", // Usually your repo name.

  scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-L9H12K94J4",
      async: true,
    },
    "/test/gtag.js",
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
          { to: "/docs", label: "HOME", position: "left" },
          { to: "/docs", label: "GET STARTED", position: "left" },
          { to: "/docs", label: "LEARN", position: "left" },
          { to: "/docs", label: "API", position: "left" },
          {
            href: "https://dev.to/nucleoid",
            label: "BLOG",
            position: "left",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            html: "<a href='/'>Star us on GitHub</a>",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
