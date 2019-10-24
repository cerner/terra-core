import React, { useState } from 'react';
import Field from 'terra-form-field';
import Textarea from 'terra-form-textarea';

const IncompleteExample = () => {
  const [area, setArea] = useState('');

  return (
    <Field label="Incomplete Textarea When Empty" htmlFor="incomplete">
      <Textarea
        value={area}
        required
        isIncomplete={area === ''}
        onChange={event => setArea(event.target.value)}
        size="small"
        id="incomplete"
      />
    </Field>
  );
};

export default IncompleteExample;
