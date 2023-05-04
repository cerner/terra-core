import React from 'react';
import Text from 'terra-text';
import moment from 'moment';
import VisuallyHiddenText from 'terra-visually-hidden-text';

const dateVar = moment('01-06-2022', 'MM-DD-YYYY').format('MM-DD-YYYY');

const TextDate = () => (
  <>
    <p>Date format using Semantic Element:</p>
    <Text id="dateTest"><time dateTime={dateVar}>{dateVar}</time></Text>

    <p>Date format using custom labels:</p>
    <Text id="text"><VisuallyHiddenText text="June, 01, 2017"/><span aria-hidden="true">2017-06-01</span></Text> {/*to make screen readers to announce value as date*/}


    <p>Date format using date as a string:</p>
    <Text id="text">2017/06/01</Text> {/*to make screen readers to announce slash or any type of separator with date values*/}
  </>
);

export default TextDate;
