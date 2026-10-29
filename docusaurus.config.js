const config = {
  title: 'YottaDots',
  tagline: 'Federate your organization. Amplify it with AI.',

  favicon: 'img/logo.svg',

  url: 'https://yottadots.com/',
  baseUrl: 'https://yottadots.github.io/yottadots.com/',

  organizationName: 'YottaDots',
  projectName: 'yottadots.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl:
            'https://github.com/YottaDots/yottadots.com/edit/main/',
        },

        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'YottaDots is an open framework for federated organizations and AI-enabled work.',
      },
    ],

    navbar: {
      title: 'YottaDots',

      logo: {
        alt: 'YottaDots',
        src: 'img/logo.svg',
      },

      items: [
        {
          to: '/docs/why',
          label: 'Why',
          position: 'left',
        },
        {
          to: '/docs/method',
          label: 'Method',
          position: 'left',
        },
        {
          to: '/docs/patterns',
          label: 'Patterns',
          position: 'left',
        },
        {
          to: '/docs/ai-coworker',
          label: 'AI Co-worker',
          position: 'left',
        },
        {
          to: '/docs/canvases',
          label: 'Canvases',
          position: 'left',
        },
        {
          to: '/docs/community',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://github.com/YottaDots/yottadots.com',
          label: 'GitHub',
          position: 'right',
        },
        {
          href:
            'https://github.com/YottaDots/yottadots.com/issues/new/choose',
          label: 'Contribute',
          position: 'right',
          className: 'navbar-contribute',
        },
      ],
    },

    footer: {
      style: 'light',

      links: [
        {
          title: 'YottaDots',
          items: [
            {
              label: 'Why',
              to: '/docs/why',
            },
            {
              label: 'Method',
              to: '/docs/method',
            },
            {
              label: 'Patterns',
              to: '/docs/patterns',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'Contribute',
              to: '/docs/community/contribute',
            },
            {
              label: 'Governance',
              to: '/docs/community/governance',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/YottaDots/yottadots.com',
            },
          ],
        },

        {
          title: 'Open Knowledge',
          items: [
            {
              label: 'License',
              href:
                'https://github.com/YottaDots/yottadots.com/blob/main/LICENSE.md',
            },
          ],
        },
      ],

      copyright:
        `YottaDots · Open knowledge. Better together. © ${new Date().getFullYear()}`,
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
