import React from 'react';
import Text from 'terra-text';
import moment from 'moment';
import VisuallyHiddenText from 'terra-visually-hidden-text';

const timeVar = moment('10:22:30', 'hh:mm:ss').format('hh:mm:ss');

const timeParts = timeVar.split(':');
const hourVal = timeParts[0];
const minuteVal = timeParts[1];
const secondVal = timeParts[2];

const valueToDisplay = (
  <>
    <VisuallyHiddenText text="Hour" />
    <React.Fragment>
      {hourVal}
      :
    </React.Fragment>

    <VisuallyHiddenText text="Minute" />
    <React.Fragment>
      {minuteVal}
      :
    </React.Fragment>

    <VisuallyHiddenText text="Second" />
    <React.Fragment>{secondVal}</React.Fragment>
  </>
);

const TextTime = () => (
  <div><Text id="timeTest">{valueToDisplay}</Text></div>
);

export default TextTime;
