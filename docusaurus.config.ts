import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Single source of truth for the identity metadata that is repeated across
// meta tags, JSON-LD and the trust pages. Keeping it here stops the copies
// from drifting apart, which is exactly what domain-categorisation and
// rich-result validators penalise.
const SITE_URL = 'https://factstore.io';
const REPO_URL = 'https://github.com/factstore-io/factstore';
const WEBSITE_REPO_URL = 'https://github.com/factstore-io/factstore.io';
const CONTACT_EMAIL = 'hello@factstore.io';

// Used as the <meta name="description"> fallback, the og:description and the
// JSON-LD description. Aim for 150-160 characters: long enough to say what the
// thing is, short enough that Google does not truncate it.
const SITE_DESCRIPTION =
  'FactStore is an open-source event store for event sourcing. Append immutable facts atomically, query them by subject or tags, and stream them in real time.';

const config: Config = {
  title: 'FactStore',
  tagline: 'Because your Facts matter!',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'factstore-io', // Usually your GitHub org/user name.
  projectName: 'factstore.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    // Machine-readable identity. Search engines use this for rich results,
    // AI crawlers and answer engines use it to work out what this domain *is*,
    // and URL-categorisation vendors use it as corroborating evidence that
    // factstore.io is a developer-tool project and not an uncategorised
    // unknown. The @graph form lets one script describe several linked things.
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'FactStore',
            url: SITE_URL,
            logo: `${SITE_URL}/img/logo.png`,
            email: CONTACT_EMAIL,
            description:
              'The open-source project behind FactStore, an event store and event sourcing specification.',
            sameAs: [REPO_URL, 'https://github.com/factstore-io'],
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            name: 'FactStore',
            url: SITE_URL,
            description: SITE_DESCRIPTION,
            inLanguage: 'en',
            publisher: {'@id': `${SITE_URL}/#organization`},
          },
          {
            // The product-shaped node: this is the one that tells an answer
            // engine "FactStore is a free, self-hosted developer tool".
            '@type': 'SoftwareApplication',
            '@id': `${SITE_URL}/#software`,
            name: 'FactStore',
            url: SITE_URL,
            description: SITE_DESCRIPTION,
            applicationCategory: 'DeveloperApplication',
            applicationSubCategory: 'Database',
            operatingSystem: 'Linux, macOS, Windows',
            softwareRequirements: 'Docker, or a JVM runtime',
            license: 'https://www.apache.org/licenses/LICENSE-2.0',
            isAccessibleForFree: true,
            downloadUrl: REPO_URL,
            softwareHelp: `${SITE_URL}/docs/overview`,
            featureList: [
              'Atomic and idempotent fact appends',
              'Conditional appends with dynamic consistency boundaries',
              'Query facts by subject, tags or time range',
              'Ordered, resumable real-time fact streaming',
              'Multiple isolated logical stores',
              'Protocol-agnostic binary payloads',
              'HTTP and gRPC APIs',
            ],
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {'@id': `${SITE_URL}/#organization`},
            publisher: {'@id': `${SITE_URL}/#organization`},
          },
          {
            '@type': 'SoftwareSourceCode',
            '@id': `${SITE_URL}/#sourcecode`,
            name: 'FactStore',
            description:
              'Kotlin-first event store built on a clean specification, with a FoundationDB-backed implementation.',
            codeRepository: REPO_URL,
            programmingLanguage: 'Kotlin',
            runtimePlatform: 'JVM',
            license: 'https://www.apache.org/licenses/LICENSE-2.0',
            author: {'@id': `${SITE_URL}/#organization`},
          },
        ],
      }),
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // "Edit this page" links. Beyond convenience, a visible, working
          // link from every doc back to the source repo is a strong
          // authenticity signal for both reviewers and crawlers.
          editUrl: `${WEBSITE_REPO_URL}/tree/main/`,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'FactStore Blog',
            description:
              'Release notes, design notes and event sourcing writing from the FactStore project.',
            copyright: `Copyright © ${new Date().getFullYear()} FactStore`,
          },
          editUrl: `${WEBSITE_REPO_URL}/tree/main/`,
          blogDescription:
            'Release notes, design notes and event sourcing writing from the FactStore project.',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          // Tag/author/archive listing pages are navigation scaffolding, not
          // content. Keeping them out of the sitemap concentrates crawl budget
          // on the pages that actually answer a question.
          ignorePatterns: [
            '/blog/tags/**',
            '/blog/authors/**',
            '/blog/archive',
            '/search',
          ],
          createSitemapItems: async ({defaultCreateSitemapItems, ...rest}) => {
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              if (item.url === `${SITE_URL}/`) {
                return {...item, priority: 1.0, changefreq: 'weekly' as const};
              }
              if (item.url.includes('/docs/')) {
                return {...item, priority: 0.8};
              }
              return item;
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'pre_release',
      content: 'FactStore is currently in pre-release and not yet recommended for production use.',
      isCloseable: true,
    },
    image: 'img/factstore-social-card.jpg',
    // Site-wide meta tags. Docusaurus already emits og:title/description/image
    // and the canonical link per page; these fill the gaps it leaves.
    metadata: [
      {name: 'description', content: SITE_DESCRIPTION},
      {
        name: 'keywords',
        content:
          'event store, event sourcing, event streaming, CQRS, Kotlin, FoundationDB, append-only log, dynamic consistency boundary, open source database, immutable events',
      },
      {name: 'author', content: 'FactStore'},
      {name: 'application-name', content: 'FactStore'},
      // Explicit, human-readable category hints. Several URL-filtering
      // vendors still parse these legacy tags when classifying a domain they
      // have never seen, and they cost nothing to emit.
      {name: 'classification', content: 'Software Development, Developer Tools'},
      {name: 'category', content: 'Technology'},
      {name: 'rating', content: 'general'},
      {name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'FactStore'},
      {property: 'og:image:alt', content: 'FactStore — open-source event store'},
      {name: 'twitter:image:alt', content: 'FactStore — open-source event store'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FactStore',
      logo: {
        // One mark for both themes. #b37400 clears the 3:1 non-text threshold
        // on the white navbar (3.88:1) and the navy one (4.86:1).
        alt: 'FactStore Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/factstore-io/factstore',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
    //  style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/docs/overview',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: `${REPO_URL}/discussions`,
            },
            {
              label: 'Issue Tracker',
              href: `${REPO_URL}/issues`,
            },
            {
              label: 'Contact',
              href: `mailto:${CONTACT_EMAIL}`,
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: REPO_URL,
            },
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Security',
              to: '/security',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              to: '/privacy',
            },
            {
              label: 'Terms of Use',
              to: '/terms',
            },
            {
              label: 'Apache License 2.0',
              href: 'https://www.apache.org/licenses/LICENSE-2.0',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FactStore · Open source under the Apache License 2.0 · <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`,
    },
    prism: {
      theme: prismThemes.github,
      // nightOwl's #011627 background is deep navy, so code blocks sit in the
      // same hue family as the rest of the dark theme (dracula's #282a36 was
      // purple-grey and read as a foreign element).
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
