import React from 'react';
import Button from 'terra-button';
import { IconAdd, IconAttachment, IconEdit } from 'terra-icon';
import Toolbar from 'terra-toolbar';

export default () => (
  <Toolbar align="center">
    <Button text="Edit" variant="utility" icon={<IconEdit />} />
    <Button text="Add" variant="utility" icon={<IconAdd />} />
    <Button text="Attachment" variant="utility" icon={<IconAttachment />} />
  </Toolbar>
);
