/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Arrange from 'terra-arrange';
import Status from '../src/Status';

const image = <img style={{ display: 'block' }} height="100" width="150" src="http://3w6kx9401skz1bup4i1gs9ne.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/telegraph-1.jpg" alt="a happy panda" />;
const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusArrange = () => (
  <div>
    <Status color="#ff0000">
      <Arrange fitStart={image} fill={simpleText} alignFill="center" />
    </Status>
  </div>
);

export default StatusArrange;
