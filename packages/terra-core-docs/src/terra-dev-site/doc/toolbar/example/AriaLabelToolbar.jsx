import React, { useState } from 'react';
import Toolbar from 'terra-toolbar';
import Button from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';

export default () => {
  const [align, setAlign] = useState();
  const handleOnChange = (event) => {
    setAlign(event.target.value);
  };

  return (
    <div>
      <label>
        Alignment:
        <select onChange={handleOnChange}>
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
        </select>
      </label>
      <br />
      <Toolbar ariaLabel="image tools" align={align}>
        <Button text="Edit" variant="utility" icon={<IconEdit />} />
        <Button text="Add" variant="utility" icon={<IconAdd />} />
        <Button text="Attachment" variant="utility" icon={<IconAttachment />} />
      </Toolbar>
    </div>
  );
};
