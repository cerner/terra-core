import React, { useState } from 'react';
import Textarea from 'terra-form-textarea';

const IncompleteExample = () => {
  const [area, setArea] = useState('');

  return (
    <Textarea
      value={area}
      required
      isIncomplete={area === ''}
      onChange={event => setArea(event.target.value)}
      size="small"
      id="incomplete"
    />
  );
};

export default IncompleteExample;
