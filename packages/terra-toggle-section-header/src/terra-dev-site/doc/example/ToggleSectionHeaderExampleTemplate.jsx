import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ToggleSectionHeader from 'terra-toggle-section-header/lib/ToggleSectionHeader';

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
