import React from 'react';
import Select from '../../lib/Select';

const ManyOptionsExample = () => {
  const options = [];

  for (let index = 0; index < 100; index += 1) {
    options.push(<Select.Option key={index} value={index} display={`${index}`} />);
  }

  return (
    <Select placeholder="Select a color">
      {options}
    </Select>
  );
};

export default ManyOptionsExample;
