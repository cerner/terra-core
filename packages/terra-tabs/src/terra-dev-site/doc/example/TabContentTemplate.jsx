import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isLabelHidden: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
};


const TabContentTemplate = ({ isLabelHidden, label, children }) => (
  <div style={{ padding: '10px', height: '100%' }}>
    {isLabelHidden ? <h3>{label}</h3> : null}
    {children || (
    <div>
Content for
      <i>{label}</i>
    </div>
    )}
  </div>
);

TabContentTemplate.propTypes = propTypes;
export default TabContentTemplate;
