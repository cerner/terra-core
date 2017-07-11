import React from 'react';

import Button from '../../lib/Button';

const DisabledButton = () => <Button id="disabledButton" text="Disabled Button" isDisabled />;
const DisabledLink = () => <Button id="disabledLink" text="Disabled Link" href="FakeURL" variant="link" isDisabled />;

export {
  DisabledButton,
  DisabledLink,
};
