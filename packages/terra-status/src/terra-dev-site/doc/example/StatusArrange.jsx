/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Arrange from 'terra-arrange';
import Status from 'terra-status';
import placeholderPic150x150 from '../../assets/150x150.jpg';

const image = <img style={{ display: 'block' }} height="150" width="150" src={placeholderPic150x150} alt="placeholder" />;
const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusArrange = () => (
  <div>
    <Status color="#ff0000">
      <Arrange fitStart={image} fill={simpleText} alignFill="center" />
    </Status>
  </div>
);

export default StatusArrange;
