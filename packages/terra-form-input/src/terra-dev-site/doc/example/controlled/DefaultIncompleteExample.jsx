import React, { useState } from 'react';
import Field from 'terra-form-field';
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
      <Field label="Default" htmlFor="default-controlled-incomplete">
        <Input
          name="default incomplete input"
          id="default-controlled-incomplete"
          value={input}
          onChange={handleChange}
          required
          isIncomplete={isIncomplete}
        />
      </Field>
      <p>
Input Provided:
        {input}
      </p>
    </div>
  );
};

export default DefaultIncompleteExample;
