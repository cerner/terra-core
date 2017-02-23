import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../../../../../lib/Button';

const iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
const icon = <span style={iconStyle}><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;

const button = <Button icon={icon} />;

ReactDOM.render(button, document.getElementById('terra-button'));
