import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import RadioField from 'terra-form-radio/lib/RadioField';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: undefined,
      toggleInvalid: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    this.setState({ selectedAnswer: e.currentTarget.value });
  }

  handleOnClick() {
    this.setState(prevState => ({
      toggleInvalid: !prevState.toggleInvalid,
    }));
  }

  render() {
    let errorMessage = this.state.toggleInvalid ? 'All options are now invalid' : undefined;
    let isInvalid = false;

    if (this.state.selectedAnswer === 'monday') {
      errorMessage = 'Invalid option selected.';
      isInvalid = true;
    } else if (this.state.selectedAnswer === undefined) {
      isInvalid = true;
    }

    return (
      <div>
        <div>
          <RadioField
            legend="What is your favorite day of the week?"
            help="This cannot be changed when submitted"
            isInvalid={this.state.toggleInvalid || isInvalid}
            error={errorMessage}
            required
          >
            <Radio id="sunday" name="weekday" labelText="Sunday" onChange={this.handleOnChange} value="sunday" />
            <Radio id="monday" name="weekday" labelText="Monday (Not a valid choice)" onChange={this.handleOnChange} value="monday" />
            <Radio id="tuesday" name="weekday" labelText="Tuesday" onChange={this.handleOnChange} value="tuesday" />
            <Radio id="wednesday" name="weekday" labelText="Wednesday" onChange={this.handleOnChange} value="wednesday" />
            <Radio id="thursday" name="weekday" labelText="Thursday" onChange={this.handleOnChange} value="thursday" />
            <Radio id="friday" name="weekday" labelText="Friday" onChange={this.handleOnChange} value="friday" />
            <Radio id="saturday" name="weekday" labelText="Saturday" onChange={this.handleOnChange} value="saturday" />
          </RadioField>
        </div>
        <hr />
        <button style={{ marginBottom: '5px' }} type="button" aria-label="Toggle Invalid Status" onClick={this.handleOnClick}>Toggle Invalid Status</button>
      </div>
    );
  }
}
