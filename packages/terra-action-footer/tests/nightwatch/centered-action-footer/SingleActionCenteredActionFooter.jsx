import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import CenteredActionFooter from '../../../lib/CenteredActionFooter';

export default () => (
  <CenteredActionFooter
    id="centered-action-footer-single-action"
    center={<Button text="Action" />}
  />
);
