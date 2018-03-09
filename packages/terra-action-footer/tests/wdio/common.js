/* global Terra */

const themeables = {
  '--terra-action-footer-background-color': '#f00',
  '--terra-action-footer-border-top': 'thick double #0f0',
  '--terra-action-footer-padding-bottom': '10px',
  '--terra-action-footer-padding-left': '15px',
  '--terra-action-footer-padding-right': '20px',
  '--terra-action-footer-padding-top': '25px',
};

const viewports = Terra.viewports('tiny', 'small', 'medium');

module.exports = {
  themeables,
  viewports,
};
