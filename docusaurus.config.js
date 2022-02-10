// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grid AI",
  tagline: "focus on ML leave infra to us",
  url: "https://docs.grid.ai",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/logos/favicon-32x32.png",
  organizationName: "gridai",
  projectName: "grid-docs",
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          editUrl: "https://github.com/gridai/grid-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          anonymizeIP: true,
          trackingID: "G-GW8EJHVZ6P",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      /**@type {import('@docusaurus/plugin-client-redirects').PluginOptions} */
      {
        redirects: [
          {
            to: "/platform/custom-cloud-credentials/adding-custom-cloud-credentials",
            from: "/platform/upgrades/adding-custom-cloud-credentials",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      docs: {
        versionPersistence: "localStorage",
      },
      announcementBar: {
        id: "v0",
        content: "Welcome to the new and improved Grid Documentation site!",
      },
      hideableSidebar: true,
      navbar: {
        title: "",
        logo: {
          alt: "Grid AI Logo",
          src: "images/logos/grid-logo-light.png",
          srcDark: "images/logos/grid-logo-dark.png",
        },
        items: [
          {
            type: "doc",
            docId: "platform/changelog",
            label: "Changelog",
            position: "left",
          },
          {
            type: "doc",
            docId: "products/runs/README",
            label: "Runs",
            position: "right",
          },
          {
            type: "doc",
            docId: "products/sessions/README",
            label: "Sessions",
            position: "right",
          },
          {
            type: "doc",
            docId: "products/add-data-to-grid-datastores/README",
            label: "Datastores",
            position: "right",
          },
          {
            href: "https://platform.grid.ai",
            label: "Platform",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            label: "fontawesome-brands-twitter",
            href: "https://twitter.com/gridai_",
          },
          {
            label: "fontawesome-brands-youtube",
            href: "https://www.youtube.com/channel/UCZYvMtnyzp0hrV2VXWUWL5w",
          },
          {
            label: "fontawesome-brands-linkedin",
            href: "https://www.linkedin.com/company/grid-ai",
          },
          {
            label: "fontawesome-brands-facebook",
            href: "https://www.facebook.com/grid.ai.1",
          },
          {
            label: "fontawesome-brands-slack",
            href: "https://join.slack.com/t/gridai-community/shared_invite/zt-ozqiwuif-UYK6rZGVmTTpMfPcVSdicg",
          },
          { label: "fontawesome-solid-globe", href: "https://grid.ai" },
          {
            label: "fontawesome-solid-envelope",
            href: "mailto:support@grid.ai",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GRID AI`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "ZQJPKPI662",
        apiKey: "329ac5e044bc68a15b56d09e81b6c340",
        indexName: "grid_docs",
        contextualSearch: false,
      },
    }),
  scripts: ["/js/termynal.js", "/js/main.js"],
};

module.exports = config;
