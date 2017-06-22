import React from 'react';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import Collapse from '../../lib/Collapse';

const CustomIconCollapse = () => (
  <Collapse closedButtonText="Collapse" icon={<IconCaretRight id="custom-icon" />}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </Collapse>
);

export default CustomIconCollapse;
