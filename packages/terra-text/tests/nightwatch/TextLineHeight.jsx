import React from 'react';
import Text from '../../lib/Text';

const TextLineHeight = () => (
  <div>
    <div style={{ 'font-size': '100px' }}>
      Parent font size: 100px
      <Text fontSize={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo.
      </Text>
    </div>
    <div style={{ 'font-size': '8px' }}>
      Parent font size: 8px
      <Text id="lineHeight" fontSize={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo.
      </Text>
    </div>
  </div>
);

export default TextLineHeight;
