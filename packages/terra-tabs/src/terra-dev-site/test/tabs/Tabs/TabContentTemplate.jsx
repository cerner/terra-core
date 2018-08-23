import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isLabelHidden: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
};


const TabContentTemplate = ({ isLabelHidden, label, id }) => (
  <div style={{ padding: '20px', height: '100%' }} id={id} className="tabContent">
    {isLabelHidden ? <h3 className="truncationHeader">{label}</h3> : null}
    Content for
    {' '}
    <i>{label}</i>
  </div>
);

TabContentTemplate.propTypes = propTypes;
export default TabContentTemplate;
