import React from 'react';
import Text from 'terra-text';
import Arrange from 'terra-arrange';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';

const HeadingLevels = () => (
  <div>
    <Arrange
      align="center"
      fitStart={<Text color="#333" fontSize={20}>h1</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={1}>
Level 1 Heading
            <Text color="#767676">32px (2.286rem)</Text>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<Text color="#333" fontSize={20}>h2</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={2}>
Level 2 Heading
            <Text color="#767676">24px (1.714rem)</Text>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<Text color="#333" fontSize={20}>h3</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={3}>
Level 3 Heading
            <Text color="#767676">20px (1.429rem)</Text>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<Text color="#333" fontSize={20}>h4</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={4}>
Level 4 Heading
            <Text color="#767676">18px (1.286rem)</Text>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<Text color="#333" fontSize={20}>h5</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={5}>
Level 5 Heading
            <Text color="#767676">16px (1.143rem)</Text>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<Text color="#333" fontSize={20}>h6</Text>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={6}>
Level 6 Heading
            <Text color="#767676">14px (1rem)</Text>
          </Heading>
        </div>
)}
    />
  </div>
);

export default HeadingLevels;
