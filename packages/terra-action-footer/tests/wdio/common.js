/* global Terra */

const baseThemeables = {
  '--terra-action-footer-background-color': '#f00',
  '--terra-action-footer-border-top': 'thick double #0f0',
};

const withActionsThemeables = Object.assign({}, baseThemeables, {
  '--terra-action-footer-with-actions-min-height': '56px',
  '--terra-action-footer-padding-bottom': '16px',
  '--terra-action-footer-padding-left': '16px',
  '--terra-action-footer-padding-right': '16px',
  '--terra-action-footer-padding-top': '16px',
});

const withoutActionsThemeables = Object.assign({}, baseThemeables, {
  '--terra-action-footer-empty-height': '16px',
});

const viewports = Terra.viewports('small', 'medium');

module.exports = {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
};
