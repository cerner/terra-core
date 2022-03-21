import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconAlertDecorative from 'terra-icon/lib/icon/decorative/IconAlert';

const IconAccessibleLabel = () => (
  <div>
    <h3>Meaningful icon</h3>
    <div>
      <IconAlert a11yLabel="alert icon" />
    </div>

    <h3>Decorative icon</h3>
    <div>
      <IconAlertDecorative a11yLabel="alert icon" />
    </div>
  </div>
);

export default IconAccessibleLabel;
