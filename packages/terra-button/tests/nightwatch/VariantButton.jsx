import React from 'react';

import Button from '../../lib/Button';

const DefaultButton = () => <div style={{ padding: '5px' }}>
  <Button id="defaultButton" text="Default" variant="default" />
  <Button id="defaultButtonDisabled" text="Default Disabled" variant="default" isDisabled />
</div>;

const PrimaryButton = () => <div style={{ padding: '5px' }}>
  <Button id="primaryButton" text="Primary" variant="primary" />
  <Button id="primaryButtonDisabled" text="Primary Disabled" variant="primary" isDisabled />
</div>;

const SecondaryButton = () => <div style={{ padding: '5px' }}>
  <Button id="secondaryButton" text="Secondary" variant="secondary" />
  <Button id="secondaryButtonDisabled" text="Secondary Disabled" variant="secondary" isDisabled />
</div>;

const LinkButton = () => <div style={{ padding: '5px' }}>
  <Button id="linkButton" text="Link" variant="link" />
  <Button id="linkButtonDisabled" text="Link Disabled" variant="link" isDisabled />
</div>;

export {
  DefaultButton,
  PrimaryButton,
  SecondaryButton,
  LinkButton,
};
