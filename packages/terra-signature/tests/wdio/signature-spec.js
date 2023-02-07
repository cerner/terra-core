Terra.describeViewports('Signature', ['medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/cerner-terra-core-docs/signature/signature-default');
  });

  it('should display default Signature', () => {
    Terra.validates.element('default');
  });

  it('should try to draw with right click', () => {
    $('#drawline').moveTo({ xOffset: 0, yOffset: 0 });
    browser.performActions([{
      type: 'pointer',
      id: 'pointer1',
      parameters: {
        pointerType: 'mouse',
      },
      actions: [{
        type: 'pointerDown',
        button: 2,
      }],
    }]);
    $('#drawline').moveTo({ xOffset: 90, yOffset: 90 });
    browser.performActions([{
      type: 'pointer',
      id: 'pointer1',
      parameters: {
        pointerType: 'mouse',
      },
      actions: [{
        type: 'pointerUp',
        button: 2,
      }],
    }]);

    Terra.validates.element('draw with right click');
  });

  it('should try to draw with middle click', () => {
    $('#drawline').moveTo({ xOffset: 0, yOffset: 0 });
    browser.performActions([{
      type: 'pointer',
      id: 'pointer1',
      parameters: {
        pointerType: 'mouse',
      },
      actions: [{
        type: 'pointerDown',
        button: 1,
      }],
    }]);
    $('#drawline').moveTo({ xOffset: 90, yOffset: 90 });
    browser.performActions([{
      type: 'pointer',
      id: 'pointer1',
      parameters: {
        pointerType: 'mouse',
      },
      actions: [{
        type: 'pointerUp',
        button: 1,
      }],
    }]);

    Terra.validates.element('draw with middle click');
  });

  it('should draws lines', () => {
    $('#drawline').moveTo({ xOffset: 0, yOffset: 0 });
    browser.performActions([{
      type: 'pointer',
      id: 'pointer1',
      parameters: {
        pointerType: 'mouse',
      },
      actions: [{
        type: 'pointerDown',
        button: 0,
      }],
    }]);
    $('#drawline').moveTo({ xOffset: 90, yOffset: 90 });
    browser.performActions([{
      type: 'pointer',
      id: 'pointer1',
      parameters: {
        pointerType: 'mouse',
      },
      actions: [{
        type: 'pointerUp',
        button: 0,
      }],
    }]);

    Terra.validates.element('draws lines');
  });
});
