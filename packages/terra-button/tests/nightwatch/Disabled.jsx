import React from 'react';

import Button from '../../lib/Button';

const DisabledButton = () => <Button text="Disabled Button" isDisabled />;
const DisabledLink = () => <Button text="Disabled Link" href="FakeURL" variant="link" isDisabled />;

export {
  DisabledButton,
  DisabledLink,
};
