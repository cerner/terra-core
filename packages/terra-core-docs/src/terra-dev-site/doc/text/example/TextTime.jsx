import React from 'react';
import Text from 'terra-text';
import VisuallyHiddenText from 'terra-visually-hidden-text';

const TextTime = () => (
  <>
    <p>Time format using Semantic Element:</p>
    <Text id="timeTest"><time dateTime="10:22:30">10:22:30</time></Text>

    <p>Time format using custom labels:</p>
    <Text id="text"><VisuallyHiddenText text="10 Hours 22 Minutes 30 Seconds"/><span aria-hidden="true">10:22:30</span></Text> {/*to make screen readers to announce value as time*/}
  </>
);

export default TextTime;
