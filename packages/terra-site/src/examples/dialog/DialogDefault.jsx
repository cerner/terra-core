import React from 'react';
import Dialog from 'terra-dialog';

const header = <span>Header Stuff</span>;

const footer = <span>Footer Stuff</span>;

const DialogDefault = () => (
  <div style={{ height: '200px', width: '350px', border: 'dashed' }}>
    <Dialog header={header} footer={footer} >
      <p>This is my body content.</p>
      <p>This is some more content.</p>
    </Dialog>
  </div>
);

export default DialogDefault;
