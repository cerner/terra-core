import React from 'react';
import Dialog from 'terra-dialog';

const header = <div><span>Header Stuff</span><span>Header Stuff</span><span>Header Stuff</span><span>Header Stuff</span><span>Header Stuff</span></div>;

const footer = <div><span>Footer Stuff</span><span>Footer Stuff</span><span>Footer Stuff</span><span>Footer Stuff</span><span>Footer Stuff</span></div>;

const DialogLongContent = () => (
  <div style={{ height: '200px', width: '350px', border: 'dashed' }}>
    <Dialog header={header} footer={footer} >
      <p>This is my body content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
      <p>This is some more content.</p>
    </Dialog>
  </div>
);

export default DialogLongContent;
