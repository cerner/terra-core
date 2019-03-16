import IntlPolyfill from 'intl';

const exportedIntl = typeof (Intl) === 'undefined' ? IntlPolyfill : global.Intl;
export default exportedIntl;
