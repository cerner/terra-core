/* eslint-disable no-alert */
import React from 'react';
import Dialog from 'terra-dialog/src/Dialog';

const header = 'Header Stuff';

const footer = <Dialog.Footer>Footer Stuff</Dialog.Footer>;

const body = (<Dialog.Body>
  <p>This is my body content.</p>
  <p>This is some more content.</p>
</Dialog.Body>);

const DialogDefault = () => (
  <div style={{ height: '200px', width: '350px', border: 'dashed' }}>
    <Dialog header={header} footer={footer} onClose={() => alert('Close')} >
      {body}
    </Dialog>
  </div>
);

export default DialogDefault;
/* eslint-enable no-alert */
