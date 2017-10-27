import React from 'react';

import Select from '../../../lib/Select';

const DisabledSelect = () => (
  <div>
    <p>Disabled select with a preselected value of kittens.</p>
    <form>
      <Select
        name="zibby"
        disabled
        id="disabledSelect"
      >
        <Select.Option value="puppies" display="Puppies" key="puppies" />
        <Select.Option value="kittens" display="Kittens" key="kittens" isSelected />
        <Select.Option value="snappers" display="Snappers" key="snappers" />
        <Select.Option value="bumblers" display="Bumblers" disabled key="bumblers" />
        <Select.Option value="joeys" display="Joeys" key="joeys" />
        <Select.Option value="micros" display="Microprocessors" disabled key="miros" />
      </Select>
    </form>
    <br />
  </div>
);

export default DisabledSelect;
