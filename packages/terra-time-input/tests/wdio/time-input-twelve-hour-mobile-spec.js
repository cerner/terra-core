const viewports = Terra.viewports('medium');

// Color contrast will be resolved in https://github.com/cerner/terra-core/issues/1670
const ignoredA11y = {
  'color-contrast': { enabled: false },
};

describe('Time Input Twelve Hour Mobile', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('tiny')[0]);
    browser.execute(() => {
      if (!window.ontouchstart) {
        window.ontouchstart = 'true';
      }
      console.log('what the FFFFF');
    });
  });

  describe('Twelve Hour Mobile - Default with no time', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, rules: ignoredA11y });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-time-input-background': '#ff7777',
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
        '--terra-time-input-time-input-group-margin-left': '1.357em',
        '--terra-time-input-time-input-group-margin-right': '1.357em',
        '--terra-time-input-line-height': '2',
        '--terra-time-input-width-input': '7.14em',
        '--terra-time-input-input-padding-bottom': '0.714em',
        '--terra-time-input-input-padding-left': '0.714em',
        '--terra-time-input-input-padding-right': '0.714em',
        '--terra-time-input-input-padding-top': '0.714em',
        '--terra-time-input-desktop-input-height': '2.8em',
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
        '--terra-time-input-meridiem-button-background-color': '#1c1f4d',
        '--terra-time-input-meridiem-button-border-color': '#ab1c4f',
        '--terra-time-input-meridiem-button-color': '#ffffff',
        '--terra-time-input-meridiem-button-padding-bottom': '0.714em',
        '--terra-time-input-meridiem-button-padding-top': '1.157em',
        '--terra-time-input-meridiem-button-hover-background-color': '#bcbfff',
        '--terra-time-input-meridiem-button-hover-border-color': '#888888',
        '--terra-time-input-meridiem-button-hover-color': '#666',
        '--terra-time-input-meridiem-button-selected-background-color': '#4e498A',
        '--terra-time-input-meridiem-button-selected-border-color': '#dfdfdf',
        '--terra-time-input-meridiem-button-selected-color': '#f2f2f2',
      },
    });
  });

  describe('Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');

      browser.click('#timeInputValueProvided button[aria-pressed="false"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Twelve Hour Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.should.beAccessible({ viewports, rules: ignoredA11y });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-time-input-transition-duration': '0s',
        '--terra-time-input-transition-timing-function': 'ease',
        '--terra-time-input-animation-background': 'linear-gradient(to bottom, #9fc3b2, #9fc3b2)',
        '--terra-time-input-background-start': '0 0',
        '--terra-time-input-focus-keyboard-border-color': '#0000f2',
        '--terra-time-input-focus-keyboard-border-style': 'solid',
        '--terra-time-input-focus-keyboard-border-width': '1px',
        '--terra-time-input-focus-keyboard-opacity': '1',
        '--terra-time-input-focus-keyboard-animation-size': '100% 10px',
        '--terra-time-input-focus-keyboard-box-shadow-ltr': '10 10 8px #cccccc',
        '--terra-time-input-desktop-focused-input-background': '#ab1f02',
      },
    });
  });

  describe('Twelve Hour Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.should.beAccessible({ viewports, rules: ignoredA11y });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-time-input-transition-duration': '0s',
        '--terra-time-input-transition-timing-function': 'ease',
        '--terra-time-input-animation-background': 'linear-gradient(to bottom, #9fc3b2, #9fc3b2)',
        '--terra-time-input-background-start': '0 0',
        '--terra-time-input-focus-keyboard-border-color': '#0000f2',
        '--terra-time-input-focus-keyboard-border-style': 'solid',
        '--terra-time-input-focus-keyboard-border-width': '1px',
        '--terra-time-input-focus-keyboard-opacity': '1',
        '--terra-time-input-focus-keyboard-animation-size': '100% 10px',
        '--terra-time-input-focus-keyboard-box-shadow-ltr': '10 10 8px #cccccc',
        '--terra-time-input-desktop-focused-input-background': '#ab1f02',
      },
    });
  });
});
