import React from 'react';
import Dialog from 'terra-dialog';

const header = 'Header Stuff';

const footer = <span>Footer Stuff</span>;

const body = (<div>
  <p>This is my body content.</p>
  <p>This is some more content.</p>
</div>);

const DialogNoClose = () => (
  <div style={{ height: '200px', width: '350px', border: 'dashed' }}>
    <Dialog header={header} footer={footer}>
      {body}
    </Dialog>
  </div>
);

export default DialogNoClose;
