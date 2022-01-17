import React from 'react';
import Button from 'terra-button';
import Toolbar from 'terra-toolbar';

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default () => (
  <Toolbar>
    <Button text="Button 1" />
    <Button text={longText} />
    <Button text="Button 3" />
    <Button text="Button 4" />
  </Toolbar>
);
