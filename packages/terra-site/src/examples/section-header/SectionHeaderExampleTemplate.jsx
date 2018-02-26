import React from 'react';
import PropTypes from 'prop-types';

// TODO: update this to use the real path
import SectionHeader from '../../../../terra-section-header/src/SectionHeader';

const propTypes = {
  /**
   * Title of the example
   */
  title: PropTypes.string.isRequired,
  /**
   * Props to be spread onto SectionHeader
   */
  /* eslint-disable react/forbid-prop-types */
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
