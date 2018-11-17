export default [
  {
    id: 0,
    href: '/',
    label: 'Home'
  },
  {
    id: 1,
    href: '/',
    label: 'Contact',
    children: [
      {
        id: 2,
        href: '',
        label: 'Next'
      },
      {
        id: 3,
        href: '',
        label: 'Not Hidden'
      },
      {
        id: 4,
        href: '/',
        label: 'Page',
        options: {
          target: '_blank'
        }
      }
    ]
  }
];
