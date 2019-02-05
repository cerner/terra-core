import React from 'react';
import ProgressBar from '../../../ProgressBar';
import '../../doc/example/colors.css';

export default () => (
  <div>
    <ProgressBar valueText="8%" value={8} max={10} colorClass="green-to-red-bar-blue-to-yellow-background-green-border" />
  </div>
);
