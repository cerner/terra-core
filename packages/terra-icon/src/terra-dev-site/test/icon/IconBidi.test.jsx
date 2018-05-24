import React from 'react';
import IconComment from '../../../icon/IconComment';
import IconDeviceCheck from '../../../icon/IconDeviceCheck';

const IconBidi = () => (
  <div dir="rtl">
    <h3>Icon where isBidi is false by default</h3>
    <h4>Default</h4>
    <IconDeviceCheck />
    <h4>Set isBidi true</h4>
    <IconDeviceCheck isBidi />
    <h4>Set isBidi false</h4>
    <IconDeviceCheck isBidi={false} />

    <h3>Icon where isBidi is true by default</h3>
    <h4>Default</h4>
    <IconComment />
    <h4>Set isBidi true</h4>
    <IconComment isBidi />
    <h4>Set isBidi false</h4>
    <IconComment isBidi={false} />
  </div>
);

export default IconBidi;
