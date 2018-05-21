/* global browser, Terra, before */
const viewports = Terra.viewports('medium');

describe('Time Input Twelve Hour', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Twelve Hour Default with no time provided', () => {
    beforeEach(() => browser.url('/#/raw/tests/time-input/twelve-hour/default'));

    Terra.should.matchScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-time-input-background': '#ff7777',
        '--terra-time-input-animation-background': '#9fc3b2',
        '--terra-time-input-background-start': '0 0',
        '--terra-time-input-border-color': '#000000',
        '--terra-time-input-border-radius': '10px',
        '--terra-time-input-border-style': 'dashed',
        '--terra-time-input-border-width': '2px',
        '--terra-time-input-color': '#1c1fb2',
        '--terra-time-input-font-size': '1.5em',
        '--terra-time-input-padding-bottom': '1.178em',
        '--terra-time-input-padding-left': '1.178em',
        '--terra-time-input-padding-right': '1.178em',
        '--terra-time-input-padding-top': '1.178em',
        '--terra-time-input-transition-duration': '2.0s',
        '--terra-time-input-transition-timing-function': 'ease',
        '--terra-time-input-focus-keyboard-border-color': '#0000f2',
        '--terra-time-input-focus-keyboard-border-style': 'solid',
        '--terra-time-input-focus-keyboard-border-width': '1px',
        '--terra-time-input-focus-keyboard-opacity': '1',
        '--terra-time-input-focus-keyboard-animation-size': '0 0',
        '--terra-time-input-focus-keyboard-box-shadow-ltr': '4 4 8px #cccccc',
        '--terra-time-input-time-input-group-margin-left': '1.357em',
        '--terra-time-input-time-input-group-margin-right': '1.357em',
        '--terra-time-input-line-height': '2',
        '--terra-time-input-width-input': '7.14em',
        '--terra-time-input-input-padding-bottom': '0.714em',
        '--terra-time-input-input-padding-left': '0.714em',
        '--terra-time-input-input-padding-right': '0.714em',
        '--terra-time-input-input-padding-top': '0.714em',
        '--terra-time-input-desktop-input-height': '2.8em',
        '--terra-time-input-desktop-focused-input-background': 'rgba(139, 194, 249, 0.3)',
        '--terra-time-input-time-spacer-margin-bottom': '0.357em',
        '--terra-time-input-time-spacer-margin-left': '0.2858em',
        '--terra-time-input-time-spacer-margin-right': '0.2858em',
        '--terra-time-input-time-spacer-input-margin-top': '0.714em',
        '--terra-time-input-keyboard-border-style': 'solid',
        '--terra-time-input-keyboard-border-width': '2px',
        '--terra-time-input-meridiem-display-left-margin': '0.1429em',
        '--terra-time-input-meridiem-padding-bottom': '0',
        '--terra-time-input-meridiem-padding-left': '0',
        '--terra-time-input-meridiem-padding-right': '0',
        '--terra-time-input-meridiem-padding-top': '0',
      },
    });
  });

  describe('Twelve Hour Default with an evening time filled', () => {
    beforeEach(() => browser.url('/#/raw/tests/time-input/twelve-hour/filled-evening'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Default with a morning time filled', () => {
    beforeEach(() => browser.url('/#/raw/tests/time-input/twelve-hour/filled-morning'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Up switches to a.m.', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['ArrowUp']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Down switches to p.m.', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['ArrowDown']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Auto focuses on meridiem when filling out whole time', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('1234p');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Auto focuses on meridiem when filling out minute', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('34p');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('00');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('00');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Up Arrow on hour does not change meridiem', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour - Changes time to 01 when up is pressed on hour of 12', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('12');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour - Changes time to 12 when down is pressed on hour of 01', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('01');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Switched when up is press on hour of 11', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('11');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Switched when down is press on hour of 12', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('12');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour - Focuses to minute when left is pressed from meridiem', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['ArrowLeft']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour - Focuses to minute when delete is pressed from meridiem', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/default');

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['Delete']);
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
