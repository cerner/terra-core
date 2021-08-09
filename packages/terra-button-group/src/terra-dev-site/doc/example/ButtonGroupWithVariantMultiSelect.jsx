import React from 'react';
import ButtonGroup from 'terra-button-group';
import Button from 'terra-button';

class ButtonGroupWithVariantsMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: ['multi-select1', 'multi-select3'], variant: Button.Opts.Variants.NEUTRAL };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect = (event) => {
    this.setState({ variant: event.target.value });
  }

  handleSelection(event, key) {
    event.preventDefault();
    this.setState(prevState => ({ selectedKeys: ButtonGroup.Utils.handleMultiSelectedKeys(prevState.selectedKeys, key) }));
  }

  render() {
    return (
      <div>
        <ButtonGroup
          id="button-group-different-variant-multi-select"
          buttonGroupVariant={this.state.variant}
          onChange={this.handleSelection}
          selectedKeys={this.state.selectedKeys}
        >
          <ButtonGroup.Button text="Button 1" key="1" />
          <ButtonGroup.Button text="Button 2" key="2" />
          <ButtonGroup.Button text="Button 3" key="3" />
          <ButtonGroup.Button text="Button 4" key="4" />
        </ButtonGroup>
        <fieldset>
          <legend>Change Variant</legend>
          <select
            aria-label="changeVariant"
            id="buttonGroupVariantMultiSelect"
            name="buttonGroupVariantMultiSelect"
            value={this.state.variant}
            onChange={this.handleOnSelect}
            menuItemDropdownButtonVariant
          >
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
  }
}

export default ButtonGroupWithVariantsMultiSelect;
