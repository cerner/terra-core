import React from 'react';
import Status from '../../lib/Status';

const image = <img style={{ display: 'block' }} height="150" width="300" src="http://placehold.it/350x150" alt="placeholder" />;

const StatusImage = () => (
  <Status id="statusImage" color="#ff0000">{image}</Status>
);

export default StatusImage;
