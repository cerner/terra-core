import React from 'react';
import Button from 'terra-button';
import CenteredActionFooter from '../../../CenteredActionFooter';

export default () => (
  <CenteredActionFooter
    isBlock
    center={
      <div>
        <Button isBlock text="First Action" />
        <Button isBlock text="Second Action" />
      </div>
    }
  />
);
