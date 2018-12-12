/* eslint-disable react/jsx-boolean-value, import/no-extraneous-dependencies */
import { IntlProvider, intlShape } from 'react-intl';
import messages from '../../translations/en-US.json';

const locale = 'en-US';
const intlProvider = new IntlProvider({ locale, messages }, {});
const { intl } = intlProvider.getChildContext();

const shallowContext = { context: { intl } };
const mountContext = { context: { intl }, childContextTypes: { intl: intlShape } };

const intlContexts = { shallowContext, mountContext };

export default intlContexts;
