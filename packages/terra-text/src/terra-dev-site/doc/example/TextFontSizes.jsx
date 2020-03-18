import React from 'react';
import Text from 'terra-text';

// The `fontSize` prop can be used set the `font-size` on any `<Text />` component. The `fontSize` prop accepts one of the following numbers:

// `10`, `12`, `14`, `16`, `18`, `20`, `24`, `32`, `36`, `46`, `50`, `56`, `64`, `72`, `92`, `100`

// These values represent the pixel values of our UX defined font-scale. The `<Text />` component renders these font-sizes with `rem` units.

const TextFontSizes = () => (
  <div>
    <p>
      The `fontSize` prop can be used set the `font-size` on any `Text` component. The `fontSize` prop accepts one of the following numbers:
      <br />
      <br />
      `10`, `12`, `14`, `16`, `18`, `20`, `24`, `32`, `36`, `46`, `50`, `56`, `64`, `72`, `92`, `100`
      <br />
      <br />
      These values represent the pixel values of our UX defined font-scale. The `Text` component renders these font-sizes with `rem` units.
    </p>
    <Text fontSize={100}>100px (7.143rem)</Text>
    <br />
    <Text fontSize={92}>92px (2.286rem)</Text>
    <br />
    <Text fontSize={72}>72px (2.286rem)</Text>
    <br />
    <Text fontSize={64}>64px (2.286rem)</Text>
    <br />
    <Text fontSize={56}>56px (2.286rem)</Text>
    <br />
    <Text fontSize={50}>50px (2.286rem)</Text>
    <br />
    <Text fontSize={46}>46px (2.286rem)</Text>
    <br />
    <Text fontSize={36}>36px (2.286rem)</Text>
    <br />
    <Text fontSize={32}>32px (2.286rem)</Text>
    <br />
    <Text fontSize={24}>24px (1.714rem)</Text>
    <br />
    <Text fontSize={20}>20px (1.429rem)</Text>
    <br />
    <Text fontSize={18}>18px (1.286rem)</Text>
    <br />
    <Text fontSize={16}>16px (1.143rem)</Text>
    <br />
    <Text fontSize={14}>14px (1rem)</Text>
    <br />
    <Text fontSize={12}>12px (0.8571rem)</Text>
    <br />
    <Text fontSize={10}>10px (0.7143rem)</Text>
  </div>
);

export default TextFontSizes;
