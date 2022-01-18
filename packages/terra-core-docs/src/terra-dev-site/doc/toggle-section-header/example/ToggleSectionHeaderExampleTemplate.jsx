import React from 'react';
import PropTypes from 'prop-types';
import ToggleSectionHeader from 'terra-toggle-section-header';

const propTypes = {
  /**
   * Props to be spread onto TerraSectionHeader
   */
  // eslint-disable-next-line react/forbid-prop-types
  exampleProps: PropTypes.object.isRequired,
  /**
   * Props to populate children of TerraSectionHeader
   */
  children: PropTypes.node.isRequired,
};

const ToggleSectionHeaderExampleTemplate = ({ exampleProps, children }) => (
  <div>
    <ToggleSectionHeader {...exampleProps}>
      {children}
    </ToggleSectionHeader>
  </div>
);

ToggleSectionHeaderExampleTemplate.propTypes = propTypes;

export default ToggleSectionHeaderExampleTemplate;
