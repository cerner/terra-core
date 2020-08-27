import React, { useState } from 'react';
import Input from 'terra-form-input';

const DefaultIncompleteExample = () => {
  const [input, setInput] = useState('');
  const [isIncomplete, setIsIncomplete] = useState(true);

  const handleChange = (event) => {
    setInput(event.target.value);
    setIsIncomplete(event.target.value.length === 0);
  };

  return (
    <div>
      <Input
        name="default incomplete input"
        id="default-controlled-incomplete"
        value={input}
        onChange={handleChange}
        required
        isIncomplete={isIncomplete}
      />
      <p>
        Input Provided:
        {input}
      </p>
    </div>
  );
};

export default DefaultIncompleteExample;
