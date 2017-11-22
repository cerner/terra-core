import React from 'react';
import Base from 'terra-base';
import Select from '../../../lib/Select';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DefaultSelect = () => (
  <Base locale={locale}>
    <p>Basic select with no initial selected value. The placeholder select text should be displayed.</p>
    <form>
      <Select
        name="zibby"
        id="defaultSelect"
      >
        <Select.Option value="puppies" display="Puppies" key="puppies" />
        <Select.Option value="kittens" display="Kittens" key="kittens" id="kittens" />
        <Select.Option value="snappers" display="Snappers" key="snappers" />
        <Select.Option value="bumblers" display="Bumblers" disabled key="bumblers" id="disabledOption" />
        <Select.Option value="joeys" display="Joeys" key="joeys" />
        <Select.Option value="micros" display="Microprocessors" disabled key="miros" />
      </Select>
    </form>
    <br />
  </Base>
);

export default DefaultSelect;
