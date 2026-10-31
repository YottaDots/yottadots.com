const config = {
  title: 'YottaDots',
  tagline: 'Federate your organization. Amplify it with AI.',

  favicon: 'img/logo.svg',

  url: 'https://yottadots.github.io',
  baseUrl: '/yottadots.com/',

  organizationName: 'YottaDots',
  projectName: 'yottadots.com',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
    // Default share image (LinkedIn, X, Slack, Teams). Pages get their own via scripts/social-cards.
    image: 'img/social/home.png',

    metadata: [
      {
        name: 'description',
        content:
          'YottaDots is an open framework for federated organizations and AI-enabled work.',
      },
    ],

    navbar: {
      hideOnScroll: false,

      logo: {
        alt: 'YottaDots',
        src: 'img/cropped-logo-header.png',
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
          title: 'Explore',
          items: [
            {
              label: 'Why YottaDots',
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
            {
              label: 'AI Co-worker',
              to: '/docs/ai-coworker',
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
          title: 'Open knowledge',
          items: [
            {
              label: 'License & Trademarks',
              to: '/docs/community/license',
            },
            {
              label: 'How we use AI',
              to: '/docs/ai-coworker/how-we-use-ai',
            },
            {
              label: 'Repository',
              href:
                'https://github.com/YottaDots/yottadots.com',
            },
          ],
        },
      ],

      copyright:
        `Made with AI as a co-worker, reviewed by humans · Content licensed under CC BY 4.0 · YottaDots® is a registered trademark · © ${new Date().getFullYear()}`,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;
