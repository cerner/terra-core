import React from 'react';
import IconAnnouncement from 'terra-icon/lib/icon/IconAnnouncement';
import Card from 'terra-card';
import { width, height } from './common';

const A11yMeaningfulReadOnly = () => (
  <Card>
    <Card.Body>
      <IconAnnouncement
        a11yLabel="Announcement"
        width={width}
        height={height}
      />
      &nbsp; Facilities will be closed tomorrow.
    </Card.Body>
  </Card>
);

export default A11yMeaningfulReadOnly;
