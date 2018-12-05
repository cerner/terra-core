import React from 'react';
import Arrange from 'terra-arrange';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';

const HeadingSizes = () => (
  <div>
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h3</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={3} size="huge">
Huge
            <span style={{ color: '#767676' }}>32px (2.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h3</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={3} size="large">
Large
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
          <Heading level={3} size="medium">
Medium
            <span style={{ color: '#767676' }}>20px (1.429rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h3</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={3} size="small">
Small
            <span style={{ color: '#767676' }}>18px (1.286rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h3</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={3} size="tiny">
Tiny
            <span style={{ color: '#767676' }}>16px (1.143rem)</span>
          </Heading>
        </div>
)}
    />
    <Arrange
      align="center"
      fitStart={<span style={{ color: '#333', fontSize: '1.429rem' }}>h3</span>}
      fill={(
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <Heading level={3} size="mini">
Mini
            <span style={{ color: '#767676' }}>14px (1rem)</span>
          </Heading>
        </div>
)}
    />
  </div>
);

export default HeadingSizes;
