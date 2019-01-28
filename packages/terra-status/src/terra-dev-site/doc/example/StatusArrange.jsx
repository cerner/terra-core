/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Arrange from 'terra-arrange';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Status from 'terra-status/lib/Status';
import placeholderPic150x150 from 'terra-status/lib/terra-dev-site/doc/example/150x150.jpg';
import './colors.css';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const image = <img style={{ display: 'block' }} height="150" width="150" src={placeholderPic150x150} alt="placeholder" />;
const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusArrange = () => (
  <div>
    <Status className="high-status" visuallyHiddenText="Status High">
      <Arrange fitStart={image} fill={simpleText} alignFill="center" />
    </Status>
  </div>
);

export default StatusArrange;
