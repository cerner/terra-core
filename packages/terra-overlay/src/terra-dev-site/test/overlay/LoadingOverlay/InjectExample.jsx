import React from 'react';
import { injectIntl } from 'react-intl';

const Example = ({ intl }) => {
  return (
    <div>
      Provided Locale: {intl.locale}
      <div>
       {Intl.NumberFormat(intl.locale).format(1123432.123)} ---- Intl.NumberFormat(intl.local).format(1123432.123)
      </div>
                         {intl.formatNumber(1123432.123)} ---- intl.formatNumber(1123432.123)
    </div>
  )
};

export default injectIntl(Example);
