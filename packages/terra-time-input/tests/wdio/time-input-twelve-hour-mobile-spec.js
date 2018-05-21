/* global browser, Terra, before */
const viewports = Terra.viewports('medium');

describe('Time Input Twelve Hour Mobile', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Twelve Hour Mobile - Default with no time', () => {
    beforeEach(() => browser.url('/#/raw/tests/time-input/twelve-hour/mobile'));

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
    beforeEach(() => {
      browser.url('/#/raw/tests/time-input/twelve-hour/mobile');

      browser.click('#timeInputValueProvided button[aria-pressed="false"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
