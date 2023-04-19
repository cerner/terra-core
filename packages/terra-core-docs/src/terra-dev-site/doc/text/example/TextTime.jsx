import React from 'react';
import Text from 'terra-text';
import moment from 'moment';

const timeVar = moment('10:22:30', 'hh:mm:ss').format('hh:mm:ss');

const valueToDisplay = (
  <time datetime={timeVar}>{timeVar}</time>
);

const TextTime = () => (
  <div><Text id="timeTest">{valueToDisplay}</Text></div>
);

export default TextTime;
