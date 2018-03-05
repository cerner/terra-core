import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from 'terra-section-header';

const propTypes = {
  /**
   * Title of the example
   */
  title: PropTypes.string.isRequired,
  /**
   * Props to be spread onto SectionHeader
   */
  // eslint-disable-next-line react/forbid-prop-types
  exampleProps: PropTypes.object.isRequired,
};

const SectionHeaderExampleTemplate = ({ title, exampleProps }) => (
  <div>
    <h4>{title}</h4>
    <SectionHeader {...exampleProps} />
  </div>
);

SectionHeaderExampleTemplate.propTypes = propTypes;

export default SectionHeaderExampleTemplate;
