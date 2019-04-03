import IntlPolyfill from 'intl';

let exportedIntl;
try {
  exportedIntl = typeof (Intl) === 'undefined' ? IntlPolyfill : window.Intl;
} catch {
  exportedIntl = IntlPolyfill
}

export default exportedIntl;
