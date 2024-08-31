import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // 在所有人声鼎沸的欢喜里我独望向你,，有雨就有痕，有灯就有人
  title: '凭一口气，点一盏灯',
  tagline: '佛说前世五百次的回眸才换来今生一次的擦肩而过',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.staryu.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xinshuai', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: undefined,
        // ... other options
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/SocialCard-xinshuai.png',
    navbar: {
      title: 'Blog',
      logo: {
        alt: 'Blog-xinshuai',
        src: 'img/avantar-get-together.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.douyin.com/user/MS4wLjABAAAAuHs6TSIm7DRYp8lyK6h37sv5GosU_0exUf8QSjISDGOLDCPROquLJIkqzzDRKyZq',
          label: '视频',
          position: 'right',
        },
        {to: '/about', label: '关于', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'docs',
              to: '/docs',
            },
            {
              label: 'blog',
              to: '/blog',
            },
          ],
        },
        {
          title: '链接',
          items: [
            {
              label: '本站',
              href: '/',
            },
          ],
        },
        {
          title: '更多',
          items: [

            {
              label: 'Business',
              href: 'https://goel.com.cn/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by <a href='https://xinshuai.me/' target='_blank'>xinshuai_du</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
