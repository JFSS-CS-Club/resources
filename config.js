const config = {
  gatsby: {
    pathPrefix: '/resources',
    siteUrl: 'https://jfsscsclub.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/resources/images/logo.png',
    logoLink: '/',
    title:
      `Resources`,
    githubUrl: '',
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
    favicon: 'content/images/icon.png',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'JFSS CS Club Resources',
      short_name: 'JFSS CS Resources',
      start_url: '/',
      background_color: '#001934',
      theme_color: '#001934',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icon: 'content/images/icon.png',
    },
  },
};

module.exports = config;
