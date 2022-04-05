import React from 'react';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconDeviceCheck from 'terra-icon/lib/icon/IconDeviceCheck';

const IconBidi = () => (
  <div dir="rtl">
    <h3>Icon where isBidi is false by default</h3>
    <h4>Default</h4>
    <IconDeviceCheck a11yLabel="device check icon" />
    <h4>Set isBidi true</h4>
    <IconDeviceCheck a11yLabel="device check icon" isBidi />
    <h4>Set isBidi false</h4>
    <IconDeviceCheck a11yLabel="device check icon" isBidi={false} />

    <h3>Icon where isBidi is true by default</h3>
    <h4>Default</h4>
    <IconComment a11yLabel="comment icon" />
    <h4>Set isBidi true</h4>
    <IconComment a11yLabel="comment icon" isBidi />
    <h4>Set isBidi false</h4>
    <IconComment a11yLabel="comment icon" isBidi={false} />
  </div>
);

export default IconBidi;
