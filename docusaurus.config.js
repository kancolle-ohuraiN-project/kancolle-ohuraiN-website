// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kancolle-offline',
  tagline: '舰队收藏离线项目官网',
  url: 'https://colle.sakurakoyi.top',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kancolle-ohuraiN', // Usually your GitHub org/user name.
  projectName: 'kancolle-ohuraiN-website', // Usually your repo name.
  ssrTemplate: `<!DOCTYPE html>
<html <%~ it.htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="Docusaurus v<%= it.version %>">
    <meta name="google-site-verification" content="hKOY4zzuY0TdTRgL8eXoVdnWBgU9vwmNYrbZ5MPUzRk" />
    <% if (it.noIndex) { %>
      <meta name="robots" content="noindex, nofollow" />
    <% } %>
    <%~ it.headTags %>
    <% it.metaAttributes.forEach((metaAttribute) => { %>
      <%~ metaAttribute %>
    <% }); %>
    <% it.stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
    <% }); %>
    <% it.scripts.forEach((script) => { %>
      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
    <% }); %>
  </head>
  <body <%~ it.bodyAttributes %>>
    <%~ it.preBodyTags %>
    <div id="__docusaurus">
      <%~ it.appHtml %>
    </div>
    <% it.scripts.forEach((script) => { %>
      <script src="<%= it.baseUrl %><%= script %>"></script>
    <% }); %>
    <%~ it.postBodyTags %>
  </body>
</html>`,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/offline-colle/offline-colle-website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/offline-colle/offline-colle-website/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'kancolle-offline',
        logo: {
          alt: 'kancolle-offline Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/offline-colle',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '文档主页',
                to: '/docs/index',
              },
              {
                label: '游戏端文档',
                to: '/docs/kancolle-offline',
              }
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/YKqytuN7PQ',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/offline-colle',
              },
              {
                label: 'SiteMap',
                href: 'https://colle.sakurakoyi.top/sitemap.xml',
              },
            ],
          },
          {
            title: '姊妹网站',
            items: [
              {
                label: '喵帕斯动画',
                href: 'http://anime.sakurakoyi.top:10843',
              },
              {
                label: '明日方舟主页',
                href: 'https://arknights-h5.pages.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/offline-colle" target="_blank">offline-colle, Inc.</a> Built with Docusaurus.<br>Website hosting is provided by <a href="https://pages.cloudflare.com/" target="_blank">cloudflare pages</a>. Thank you very much for providing cloudflare!<br>Among them, some pictures on the website are painted by <a href="https://www.pixiv.net/users/22300147" target="_blank">よしなお</a> on pixiv. Thank you very much よしなお!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

