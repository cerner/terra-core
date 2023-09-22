import React from 'react';
import Button from 'terra-button';
import { IconAdd, IconAttachment, IconEdit } from 'terra-icon';
import Toolbar from 'terra-toolbar';
import { Placeholder } from '@cerner/terra-docs';

export default () => (
  <>
    <Toolbar ariaControls="test-content-id">
      <Button text="Edit" variant="utility" icon={<IconEdit />} />
      <Button text="Add" variant="utility" icon={<IconAdd />} />
      <Button text="Attachment" variant="utility" icon={<IconAttachment />} />
    </Toolbar>
    <div id="test-content-id">
      <Placeholder title="Sample Content Area for Toolbar" />
    </div>
  </>
);
