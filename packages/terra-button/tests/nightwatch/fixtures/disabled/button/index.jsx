import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../../../../../lib/Button';

const button = <Button text="Disabled Button" isDisabled />;

ReactDOM.render(button, document.getElementById('terra-button'));
