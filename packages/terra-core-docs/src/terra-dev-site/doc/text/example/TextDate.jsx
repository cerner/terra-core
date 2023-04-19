import React from 'react';
import Text from 'terra-text';
import moment from 'moment';

const dateVar = moment('01-10-2022', 'MM-DD-YYYY').format('MM-DD-YYYY');

const valueToDisplay = (
  <time datetime={dateVar}>{dateVar}</time>
);

const TextDate = () => (
  <div><Text id="dateTest">{valueToDisplay}</Text></div>
);

export default TextDate;
