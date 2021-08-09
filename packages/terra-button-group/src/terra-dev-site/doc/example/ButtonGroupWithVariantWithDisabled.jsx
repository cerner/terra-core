import React, { useState } from 'react';
import ButtonGroup from 'terra-button-group';
import Button from 'terra-button';

const ButtonGroupWithVariantWithDisabled = () => {
  const [variant, setVariant] = useState(Button.Opts.Variants.NEUTRAL);

  const handleOnSelect = (event) => {
    setVariant(event.target.value);
  };

  return (
    <div>
      <ButtonGroup id="button-group-different-variant-with-disabled" buttonGroupVariant={variant}>
        <ButtonGroup.Button text="Button 1" key="1" />
        <ButtonGroup.Button text="Button 2" key="2" isDisabled />
        <ButtonGroup.Button text="Button 3" key="3" />
        <ButtonGroup.Button text="Button 4" key="4" isDisabled />
      </ButtonGroup>
      <fieldset>
        <legend>Change Variant</legend>
        <select aria-label="changeVariant" id="buttonGroupVariantWithDisabled" name="buttonGroupVariantWithDisabled" value={variant} onChange={handleOnSelect}>
          <option value={Button.Opts.Variants.NEUTRAL}>Neutral</option>
          <option value={Button.Opts.Variants.EMPHASIS}>Emphasis</option>
          <option value={Button.Opts.Variants.GHOST}>Ghost</option>
          <option value={Button.Opts.Variants['DE-EMPHASIS']}>De-Emphasis</option>
          <option value={Button.Opts.Variants.ACTION}>Action</option>
          <option value={Button.Opts.Variants.UTILITY}>Utility</option>
        </select>
      </fieldset>
    </div>
  );
};

export default ButtonGroupWithVariantWithDisabled;
