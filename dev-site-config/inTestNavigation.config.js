const navConfig = {
  navigation: {
    index: '/tests',
    links: [{
      path: '/tests',
      text: 'Tests',
      pageTypes: ['test'],
      capabilities: {
        devTools: true,
      },
    }],
  },
};

module.exports = navConfig;
