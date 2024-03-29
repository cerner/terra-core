import React from 'react';
import Radio, { RadioField } from 'terra-form-radio';

export default class extends React.Component {
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
          <RadioField
            error={errorMessage}
            isInvalid={this.state.isInvalid}
            legend="Which Track are you looking for?"
            help="This cannot be changed when submitted"
            showOptional
          >
            <Radio id="frontend-track" name="track" labelText="Frontend Development" value="backend" />
            <Radio id="backend-track" name="track" labelText="Backend Development" value="frontend" />
            <Radio id="devops-track" name="track" labelText="DevOps" value="devops" />
          </RadioField>
        </div>
        <hr />
        <button type="button" aria-label="Toggle Invalid Status" onClick={this.handleOnClick}>Toggle Invalid Status</button>
      </div>
    );
  }
}
