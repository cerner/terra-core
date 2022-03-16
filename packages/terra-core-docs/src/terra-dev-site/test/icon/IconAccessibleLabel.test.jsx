import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconAlertDecorative from 'terra-icon/lib/icon/decorative/IconAlert';

const IconAriaLabel = () => (
  <div>
    <div>
      <h3>Meaningful icon</h3>
      <IconAlert a11yLabel="alert icon" />
    </div>
    <div>
      <h3>Decorative icon</h3>
      <IconAlertDecorative a11yLabel="alert icon" />
    </div>
  </div>
);

export default IconAriaLabel;
