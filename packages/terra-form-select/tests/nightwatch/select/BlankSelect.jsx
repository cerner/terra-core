import React from 'react';
import Base from 'terra-base';
import Select from '../../../lib/Select';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const BlankSelect = () => (
  <Base locale={locale}>
    <p>This select has been marked as invalid.</p>
    <form>
      <Select
        name="zibby"
        isInvalid
        isPlaceholderHidden
        id="blankSelect"
      >
        <Select.Option value="puppies" display="Puppies" key="puppies" />
        <Select.Option value="kittens" display="Kittens" key="kittens" />
        <Select.Option value="snappers" display="Snappers" key="snappers" />
        <Select.Option value="bumblers" display="Bumblers" disabled key="bumblers" />
        <Select.Option value="joeys" display="Joeys" key="joeys" />
        <Select.Option value="micros" display="Microprocessors" disabled key="micros" />
      </Select>
    </form>
    <br />
  </Base>
);

export default BlankSelect;
