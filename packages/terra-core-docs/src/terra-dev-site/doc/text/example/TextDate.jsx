import React from 'react';
import Text from 'terra-text';
import moment from 'moment';
import VisuallyHiddenText from 'terra-visually-hidden-text';

const dateVar = moment('01-10-2022').format('MM/DD/YYYY');

const dateParts = dateVar.split('/');
const monthVal = dateParts[0];
const dayVal = dateParts[1];
const yearVal = dateParts[2];

const valueToDisplay = (
  <>
    <VisuallyHiddenText text="Month" />
    <React.Fragment>
      {monthVal}
      /
    </React.Fragment>

    <VisuallyHiddenText text="Day" />
    <React.Fragment>
      {dayVal}
      /
    </React.Fragment>

    <VisuallyHiddenText text="Year" />
    <React.Fragment>{yearVal}</React.Fragment>
  </>
);

const TextDate = () => (
  <div><Text id="dateTest">{valueToDisplay}</Text></div>
);

export default TextDate;
