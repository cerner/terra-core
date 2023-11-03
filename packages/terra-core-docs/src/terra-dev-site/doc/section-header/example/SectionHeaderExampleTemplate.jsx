import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from 'terra-section-header';

const propTypes = {
  /**
   * Props to be spread onto SectionHeader
   */
  // eslint-disable-next-line react/forbid-prop-types
  exampleProps: PropTypes.object.isRequired,
};

const SectionHeaderExampleTemplate = ({ exampleProps }) => (
  <SectionHeader {...exampleProps} />
);

SectionHeaderExampleTemplate.propTypes = propTypes;

export default SectionHeaderExampleTemplate;
