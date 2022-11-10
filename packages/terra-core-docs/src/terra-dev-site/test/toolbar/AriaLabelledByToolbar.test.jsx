import React from 'react';
import Button from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import Toolbar from 'terra-toolbar';

export default () => (
  <>
    <h4 id="image-tools-id">Image Tools</h4>
    <Toolbar ariaLabelledBy="image-tools-id">
      <Button text="Edit" variant="utility" icon={<IconEdit />} />
      <Button text="Add" variant="utility" icon={<IconAdd />} />
      <Button text="Attachment" variant="utility" icon={<IconAttachment />} />
    </Toolbar>
  </>
);
