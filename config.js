const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://jfsscsclub.github.io/resources',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://avatars2.githubusercontent.com/u/59027791',
    logoLink: '/',
    title:
      `Resources`,
    githubUrl: 'https://github.com/jfsscsclub/resources',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/webdev',
      '/misc'
    ],
    links: [],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'JFSS CS Club Resources',
    description: 'Some resources for the JFSS CS Club',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'JFSS CS Club Resources',
      short_name: 'JFSS CS Resources',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
