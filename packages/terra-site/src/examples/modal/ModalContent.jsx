import React from 'react';

const addPadding = {
  padding: '5px',
};

const ModalDialog = () => {
  return (
    <div style={addPadding}>
      <h1>Terra Modal</h1>
      <h2>Subtitle</h2>
      <hr/>
      <p>The Terra Modal is appended to the document body.</p>
      <p>Modal is assigned a role of 'dialog' for accessibility.</p>
    </div>
  );
}

export default ModalDialog;
