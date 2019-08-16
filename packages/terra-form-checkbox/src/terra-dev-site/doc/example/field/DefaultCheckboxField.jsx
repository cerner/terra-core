import React from 'react';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

class DefaultCheckboxField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInvalid: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState(prevState => ({ isInvalid: !prevState.isInvalid }));
  }

  render() {
    const errorMessage = 'All options are now invalid';

    return (
      <div>
        <div>
          <CheckboxField
            error={errorMessage}
            isInvalid={this.state.isInvalid}
            legend="Do you have experience with any of the following?"
          >
            <Checkbox id="experience-indesign" name="experience[]" labelText="InDesign" />
            <Checkbox id="experience-photoshop" name="experience[]" labelText="Photoshop" />
            <Checkbox id="experience-illustrator" name="experience[]" labelText="Illustrator" />
          </CheckboxField>
        </div>
        <hr />
        <button type="button" aria-label="Toggle Invalid Status" onClick={this.handleOnClick}>Toggle Invalid Status</button>
      </div>
    );
  }
}

export default DefaultCheckboxField;
