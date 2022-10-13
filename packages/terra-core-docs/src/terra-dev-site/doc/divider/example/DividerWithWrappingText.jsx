import React from 'react';
import SectionDivider from 'terra-divider/src/_SectionDivider';
import DividerExampleTemplate from './DividerExampleTemplate';

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor leo ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar.';

const DividerWithWrappingText = () => (
  <DividerExampleTemplate>
    <SectionDivider text={content} level={3} />
  </DividerExampleTemplate>
);

export default DividerWithWrappingText;
