const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'index',
    prettyUrl: '/',
    priority: '1.0'
  },
  {
    page: 'about',
    prettyUrl: '/about-us',
    priority: '.09'
  },
  {
    page: 'blog',
    prettyUrl: '/blog',
    priority: '.07'
  },
  {
    page: 'post',
    prettyUrl: ({ slug = '' }) => `/blog/${slug}`,
    prettyUrlPatterns: [
      {
        pattern: '/blog/:slug',
        defaultParams: {
          apiRoute: 'post'
        }
      }
    ],
    priority: '.06'
  },
  {
    page: 'team-member',
    prettyUrl: ({ slug = '' }) => `/team/${slug}`,
    prettyUrlPatterns: [
      {
        pattern: '/team/:slug'
      }
    ],
    priority: '.05'
  }
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
