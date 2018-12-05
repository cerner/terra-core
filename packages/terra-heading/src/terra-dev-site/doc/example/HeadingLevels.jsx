import React from 'react';
import Arrange from 'terra-arrange';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';

const HeadingLevels = () => (
  <div>
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h1</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={1}>
Level 1 Heading
            <span style={{ color: '#767676' }}>32px (2.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h2</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={2}>
Level 2 Heading
            <span style={{ color: '#767676' }}>24px (1.714rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h3</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={3}>
Level 3 Heading
            <span style={{ color: '#767676' }}>20px (1.429rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h4</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={4}>
Level 4 Heading
            <span style={{ color: '#767676' }}>18px (1.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h5</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={5}>
Level 5 Heading
            <span style={{ color: '#767676' }}>16px (1.143rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h6</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={6}>
Level 6 Heading
            <span style={{ color: '#767676' }}>14px (1rem)</span>
          </Heading>
        </div>
)}
    />
  </div>
);

export default HeadingLevels;
