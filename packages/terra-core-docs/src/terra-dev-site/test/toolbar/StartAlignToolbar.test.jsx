import React from 'react';
import { IconButton } from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import Toolbar from 'terra-toolbar';

export default () => (
  <Toolbar align="start">
    <IconButton text="Edit" variant="utility" icon={<IconEdit a11yLabel="Edit" />} iconType="informative" />
    <IconButton text="Add" variant="utility" icon={<IconAdd a11yLabel="Add" />} iconType="informative" />
    <IconButton text="Attachment" variant="utility" icon={<IconAttachment a11yLabel="Attachment" />} iconType="informative" />
  </Toolbar>
);
