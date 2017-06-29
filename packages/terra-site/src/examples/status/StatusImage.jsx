import React from 'react';
import Status from 'terra-status';
import placeholderPic150x150 from '../../assets/150x150.jpg';

const image = <img style={{ display: 'block' }} height="150" width="150" src={placeholderPic150x150} alt="placeholder" />;

const StatusImage = () => (
  <Status color="#ff0000">{image}</Status>
);

export default StatusImage;
