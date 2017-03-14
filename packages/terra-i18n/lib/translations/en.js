'use strict';

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  'Terra.ajax.error': 'This content failed to load.',
  'Terra.areYouSure.unsaved': 'You have unsaved changes.',
  'Terra.forms.validation.date': 'Enter a valid date in the "mm/dd/yyyy" format.',
  'Terra.forms.validation.digits': 'Enter only digits.',
  'Terra.forms.validation.email': 'Enter a valid email address.',
  'Terra.forms.validation.equalTo': 'Enter the same value again.',
  'Terra.forms.validation.max': 'Enter a value less than or equal to {value}.',
  'Terra.forms.validation.maxlength': 'Enter less than {length} characters.',
  'Terra.forms.validation.min': 'Enter a value greater than or equal to {value}.',
  'Terra.forms.validation.minlength': 'Enter at least {length} characters.',
  'Terra.forms.validation.number': 'Enter a valid number.',
  'Terra.forms.validation.range': 'Enter a value between {start} and {end}.',
  'Terra.forms.validation.remote': 'Fix this field.',
  'Terra.forms.validation.required': 'This field is required.',
  'Terra.forms.validation.url': 'Enter a valid URL.',
  'Terra.truncateText.showMore': 'Show more',
  'Terra.truncateText.showLess': 'Show less',
  'Terra.truncateText.text_remaining': '{textCount} remaining'
};

module.exports = {
  load: true,
  locale: 'en',
  messages: messages
};