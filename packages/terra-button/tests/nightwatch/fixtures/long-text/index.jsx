import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../../../../lib/Button';

const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';
const noPropsVariety = <Button text={text} />;

ReactDOM.render(noPropsVariety, document.getElementById('terra-button'));
