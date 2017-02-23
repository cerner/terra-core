import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../../../../../lib/Button';

const button = <Button text="Disabled Link" href="FakeURL" variant="link" isDisabled />;

ReactDOM.render(button, document.getElementById('terra-button'));
