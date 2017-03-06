import React from 'react';
import Status from '../src/Status';

const image = <img style={{ display: 'block' }} height="100" width="150" src="http://3w6kx9401skz1bup4i1gs9ne.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/telegraph-1.jpg" alt="a happy panda" />;

const StatusImage = () => (
  <Status color="#ff0000">{image}</Status>
);

export default StatusImage;
