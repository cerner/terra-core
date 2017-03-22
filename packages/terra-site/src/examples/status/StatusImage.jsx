import React from 'react';
import Status from 'terra-status';

const image = <img style={{ display: 'block' }} height="150" width="300" src="http://placehold.it/350x150" alt="placeholder" />;

const StatusImage = () => (
  <Status color="#ff0000">{image}</Status>
);

export default StatusImage;
