import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const propTypes = {
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * The filter value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const NoResults = ({ noResultContent, value }) => {
  return (
    <div role="option" aria-selected="false">
      {noResultContent || <FormattedMessage id="Terra.form.select.noResults" values={{ text: value }} />}
    </div>
  );
};

NoResults.propTypes = propTypes;

export default NoResults;
