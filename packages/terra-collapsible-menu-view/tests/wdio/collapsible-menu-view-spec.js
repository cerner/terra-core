describe('Collapsible Menu View', () => {
  Terra.viewports().forEach((viewport) => {
    describe('Responsive', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          /*
          * Below style is the equivalent of having
          * @include terra-inline-svg-var('--terra-collapsible-menu-view-menu-button-background', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M39.6 33.9V22.5H25.4v-8.4h5.5V0h-14v14.1h5.5v8.4H8.5v11.4H2.9V48H17V33.9h-5.5v-8.4h25.1v8.4H31V48h14.1V33.9z"/></svg>');
          * in a :root block and is used because the above cannot be used with themeCombinationOfCustomProperties
          */
          '--terra-collapsible-menu-view-menu-button-icon-background': 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20d%3D%22M39.6%2033.9V22.5H25.4v-8.4h5.5V0h-14v14.1h5.5v8.4H8.5v11.4H2.9V48H17V33.9h-5.5v-8.4h25.1v8.4H31V48h14.1V33.9z%22%2F%3E%3C%2Fsvg%3E")',
          '--terra-collapsible-menu-view-menu-button-padding-left': '4em',
          '--terra-collapsible-menu-view-item-padding-left': '2em',
          '--terra-collapsible-menu-view-divider-border-right': '1px solid red',
          '--terra-collapsible-menu-view-divider-height': '4.143rem',
        },
      });
    });
  });

  // Only test viewports that have collapsed menu items
  Terra.viewports('tiny', 'small', 'medium', 'large').forEach((viewport) => {
    describe('Responsive Hidden Open', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
        browser.setViewportSize(viewport);
        browser.click('[data-collapsible-menu-toggle]');
      });

      Terra.should.matchScreenshot({ selector: '[id=root]' });
      Terra.should.beAccessible();
    });
  });

  describe('First hidden item visible when isIconOnly', () => {
    const viewports = Terra.viewports('medium');
    before(() => browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/first-hidden-item-is-icon'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
