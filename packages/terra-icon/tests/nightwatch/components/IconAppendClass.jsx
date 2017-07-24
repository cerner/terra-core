import React from 'react';
import IconAllergy from '../../../lib/icon/IconAllergy';

const IconAppendClass = () => (
  <div>
    <h3>No classNames added</h3>
    <IconAllergy id="append-class-none" />
    <h3>{'Added className "custom-class"'}</h3>
    <p>{'className "icon-[hash]" should persist'}</p>
    <IconAllergy id="append-class-custom" className="custom-class" />
  </div>
);

export default IconAppendClass;
