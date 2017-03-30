import React from 'react';

import Button from '../../lib/Button';

const DefaultButton = () => <Button text="Default" variant="default" />;
const PrimaryButton = () => <Button text="Primary" variant="primary" />;
const SecondaryButton = () => <Button text="Secondary" variant="secondary" />;
const LinkButton = () => <Button text="Link" variant="link" />;

export {
  DefaultButton,
  PrimaryButton,
  SecondaryButton,
  LinkButton,
};
