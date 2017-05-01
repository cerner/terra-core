import React from 'react';
import IconAllergy from '../../../lib/icon/IconAllergy';

const IconAppendClass = () => (
  <div>
    <h3>No classNames added</h3>
    <IconAllergy />
    <h3>{'Added className "custom-class"'}</h3>
    <p>{'className "terra-Icon" should still persist'}</p>
    <IconAllergy className="custom-class" />
  </div>
);

export default IconAppendClass;
