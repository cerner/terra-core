const navConfig = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
      pageTypes: ['home'],
    }, {
      path: '/components',
      text: 'Components',
      pageTypes: ['doc'],
      capabilities: {
        devTools: true,
      },
    }, {
      path: '/dev_tools',
      text: 'Developer Tools',
      pageTypes: ['tool'],
      capabilities: {
        devTools: true,
      },
    }, {
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
