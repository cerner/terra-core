import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import RadioField from 'terra-form-radio/lib/RadioField';

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
          <RadioField error={errorMessage} isInvalid={this.state.isInvalid} legend="Which Type of Account are you looking for?">
            <Radio id="user-account" name="account" labelText="Base User" value="user" />
            <Radio id="team-account" name="account" labelText="Team Owner" value="team" />
            <Radio id="admin-account" name="account" labelText="Administrator" value="admin" />
          </RadioField>
        </div>
        <hr />
        <button type="button" aria-label="Toggle Invalid Status" onClick={this.handleOnClick}>Toggle Invalid Status</button>
      </div>
    );
  }
}
