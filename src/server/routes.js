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
    page: 'mission',
    prettyUrl: '/mission',
    priority: '.09'
  },
  {
    page: 'referral',
    prettyUrl: '/referral-program',
    priority: '.09'
  },
  {
    page: 'blog',
    prettyUrl: '/blog',
    priority: '.07'
  },
  {
    page: 'team',
    prettyUrl: '/our-team',
    priority: '.07'
  },
  {
    page: 'contact',
    prettyUrl: '/contact-us',
    priority: '.07'
  },
  {
    page: 'post',
    prettyUrl: ({ slug }) => `/blog/${slug}`,
    prettyUrlPatterns: [
      {
        pattern: '/blog/:slug',
        defaultParams: {
          slug: ''
        }
      }
    ],
    priority: '.06'
  },
  {
    page: 'team-member',
    prettyUrl: ({ slug }) => `/team/${slug}`,
    prettyUrlPatterns: [
      {
        pattern: '/team/:slug',
        defaultParams: {
          slug: ''
        }
      }
    ],
    priority: '.05'
  }
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
