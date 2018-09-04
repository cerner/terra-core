import React from 'react';
import IconCaretLeft from 'terra-icon/lib/icon/IconCaretLeft';
import ShowHide from '../../../ShowHide';

const CustomIconShowHide = () => (
  <ShowHide preview="ShowHide" icon={<IconCaretLeft id="custom-icon" />}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </ShowHide>
);

export default CustomIconShowHide;
