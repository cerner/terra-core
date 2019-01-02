import React from 'react';

export default props => (
  <div
    style={{
      backgroundColor: '#CCCCFF',
      border: '1px solid #7F7FE3',
      textAlign: 'center',
      padding: '20px',
      borderRadius: '5px',
      height: '100%',
      wordWrap: 'break-word',
      verticalAlign: 'middle',
    }}
    {...props}
  />
);
