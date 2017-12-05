import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isLabelHidden: PropTypes.bool,
  label: PropTypes.string,
};


const TabContentTemplate = ({ isLabelHidden, label }) => (
  <div style={{ height: '200px', padding: '10px' }}>
    {isLabelHidden ? <h3>{label}</h3> : null}
    Content for <i>{label}</i>.
  </div>
);

TabContentTemplate.propTypes = propTypes;
export default TabContentTemplate;
