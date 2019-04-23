import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswers: [],
      toggleInline: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    const { selectedAnswers } = this.state;

    if (e.currentTarget.checked) {
      selectedAnswers.push(e.currentTarget.value);
    } else {
      selectedAnswers.splice(selectedAnswers.indexOf(e.currentTarget.value), 1);
    }

    this.setState({ selectedAnswers });
  }

  handleOnClick() {
    this.setState(prevState => ({
      toggleInline: !prevState.toggleInline,
    }));
  }

  render() {
    return (
      <div>
        <button style={{ marginBottom: '5px' }} type="button" aria-label="Toggle Inline" onClick={this.handleOnClick}>Toggle Inline</button>
        <hr />
        <div>
          <CheckboxField
            isInline={this.state.toggleInline}
            legend="Do you have experience with any of the following?"
          >
            <Checkbox id="inline-experience-indesign" name="experience[]" labelText="InDesign" />
            <Checkbox id="inline-experience-photoshop" name="experience[]" labelText="Photoshop" />
            <Checkbox id="inline-experience-illustrator" name="experience[]" labelText="Illustrator" />
          </CheckboxField>
          <CheckboxField
            isInline={this.state.toggleInline}
            legend="Do you also have experience with any of the cutting edge technologies?"
          >
            <Checkbox id="experience-ie9" name="experience[]" labelText="IE9" />
            <Checkbox id="experience-flase" name="experience[]" labelText="Flash" />
            <Checkbox id="experience-punchcards" name="experience[]" labelText="Punch Cards" />
          </CheckboxField>
        </div>
      </div>
    );
  }
}
