import React from 'react';

import Select from '../../../lib/Select';

const display = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget metus aliquet, tincidunt lacus eu, placerat turpis. Nunc volutpat, nunc ac euismod suscipit, nunc felis porta elit, a ultrices nulla neque quis risus. Nulla at suscipit velit, eu facilisis nulla. Phasellus aliquet metus sagittis odio gravida eleifend. Nulla gravida et.';

const DefaultSelect = () => (
  <div>
    <p>Select contains a preselected value with long text that should truncate.</p>
    <form>
      <Select
        name="zibby"
        id="longTextSelect"
        defaultValue="long-text"
      >
        <Select.Option value="puppies" display="Puppies" key="puppies" />
        <Select.Option value="kittens" display="Kittens" key="kittens" />
        <Select.Option value="snappers" display="Snappers" key="snappers" />
        <Select.Option value="long-text" display={display} key="long-text" />
        <Select.Option value="bumblers" display="Bumblers" disabled key="bumblers" />
        <Select.Option value="joeys" display="Joeys" key="joeys" />
        <Select.Option value="micros" display="Microprocessors" disabled key="miros" />
      </Select>
    </form>
    <br />
  </div>
);

export default DefaultSelect;
