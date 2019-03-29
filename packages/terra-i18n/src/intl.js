import IntlPolyfill from 'intl';

const exportedIntl = typeof (Intl) === 'undefined' ? IntlPolyfill : window.Intl;
export default exportedIntl;
