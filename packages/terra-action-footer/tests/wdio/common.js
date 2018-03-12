/* global Terra */

const baseThemeables = {
  '--terra-action-footer-background-color': '#f00',
  '--terra-action-footer-border-top': 'thick double #0f0',
  '--terra-action-footer-padding-bottom': '10px',
  '--terra-action-footer-padding-left': '15px',
  '--terra-action-footer-padding-right': '20px',
  '--terra-action-footer-padding-top': '25px',
};

const withActionsThemeables = Object.assign({}, baseThemeables, {
  '--terra-action-footer-with-actions-min-height': '56px',
});

const withoutActionsThemeables = Object.assign({}, baseThemeables, {
  '--terra-action-footer-empty-height': '16px',
});

const viewports = Terra.viewports('tiny', 'small', 'medium');

module.exports = {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
};
