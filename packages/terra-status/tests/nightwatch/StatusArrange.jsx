/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Arrange from 'terra-arrange';
import Status from '../../lib/Status';

const image = <img style={{ display: 'block' }} height="150" width="300" src="http://placehold.it/350x150" alt="placeholder" />;
const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusArrange = () => (
  <div>
    <Status color="#ff0000">
      <Arrange id="statusArrange" fitStart={image} fill={simpleText} alignFill="center" />
    </Status>
  </div>
);

export default StatusArrange;
