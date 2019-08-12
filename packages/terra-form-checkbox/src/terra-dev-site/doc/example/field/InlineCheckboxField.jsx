import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
import classNames from 'classnames/bind';
import styles from './InlineCheckboxField.module.scss';

const cx = classNames.bind(styles);
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInvalid: false,
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

  handleOnClick(e) {
    if (e.currentTarget.id === 'inline') {
      this.setState((prevState) => ({
        toggleInline: !prevState.toggleInline,
      }));
    } else {
      this.setState((prevState) => ({
        isInvalid: !prevState.isInvalid,
      }));
    }
  }

  render() {
    const errorMessage = 'All options are now invalid';

    return (
      <div>
        <button className={cx('checkbox-button-wrapper')} id="inline" type="button" aria-label="Toggle Inline" onClick={this.handleOnClick}>Toggle Inline</button>
        <button className={cx('checkbox-button-wrapper')} id="invalid" type="button" aria-label="Toggle Inline" onClick={this.handleOnClick}>Toggle Invalid Status</button>
        <hr />
        <div>
          <CheckboxField
            error={errorMessage}
            isInline={this.state.toggleInline}
            isInvalid={this.state.isInvalid}
            legend="Do you have experience with any of the following?"
          >
            <Checkbox id="inline-experience-indesign" name="experience[]" labelText="InDesign" />
            <Checkbox id="inline-experience-photoshop" name="experience[]" labelText="Photoshop" />
            <Checkbox id="inline-experience-illustrator" name="experience[]" labelText="Illustrator" />
          </CheckboxField>
          <CheckboxField
            error={errorMessage}
            isInline={this.state.toggleInline}
            isInvalid={this.state.isInvalid}
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
