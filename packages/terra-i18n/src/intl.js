import IntlPolyfill from 'intl';

let intl;
try {
  intl = typeof (Intl) === 'undefined' ? IntlPolyfill : window.Intl;
} catch (error) {
  intl = IntlPolyfill;
}

const exportedIntl = intl;

export default exportedIntl;
