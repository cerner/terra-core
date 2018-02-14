/* eslint-disable no-alert */
import React from 'react';
import Dialog from 'terra-dialog';

const header = 'Header Stuff';

const footer = <span>Footer Stuff</span>;

const body = (<div>
  <p>This is my body content.</p>
  <p>This is some more content.</p>
</div>);

const DialogDefault = () => (
  <div style={{ height: '200px', width: '350px', border: 'dashed' }}>
    <Dialog header={header} footer={footer} onClose={() => alert('Close')} >
      {body}
    </Dialog>
  </div>
);

export default DialogDefault;
/* eslint-enable no-alert */
