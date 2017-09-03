import React from 'react';

export default props => (<div
  style={{
    backgroundColor: 'rgba(0,0,100,.2)',
    border: '1px solid rgba(0,0,100,.5)',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '5px',
    height: '100%',
    wordWrap: 'break-word',
    verticalAlign: 'middle',
  }} {...props}
/>);
