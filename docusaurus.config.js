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
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
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
          editUrl: "https://github.com/gridai/grid-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          anonymizeIP: true,
          trackingID: "UA-176087655-2",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        redirects: [
          {
            to: "/platform/Custom Cloud Credentials/adding-custom-cloud-credentials",
            from: "/platform/upgrades/adding-custom-cloud-credentials"
          },
          {
            to:"/features/runs/README",
            from:"/products/run-run-and-sweep-github-files"
          },
          {
            to:"/features/datastores",
            from:"/products/add-data-to-grid-datastores"
          },
          {
            to:"/features/sessions",
            from:"/products/sessions"
          },
          {
            to:"/platform/billing/billing-rates",
            from:"/platform/billing-rates"
          },
        ],
      }),
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
            docId: "changelog",
            label: "Changelog",
            position: "left",
          },
          {
            type: "doc",
            docId: "features/runs/README",
            label: "Runs",
            position: "right",
          },
          {
            type: "doc",
            docId: "features/sessions/README",
            label: "Sessions",
            position: "right",
          },
          {
            type: "doc",
            docId: "features/datastores/README",
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
        appId: "800UQWIQ9P",
        apiKey: "3f99bb2a4b23840cbcdf9501fe3d7608",
        indexName: "docs-grid-ai",
        contextualSearch: true,
      },
    }),
  scripts: ["/js/termynal.js", "/js/main.js"],
};

module.exports = config;
