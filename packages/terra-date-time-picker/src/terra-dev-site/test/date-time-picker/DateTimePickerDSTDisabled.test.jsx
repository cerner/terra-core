import React from 'react';
import Button from 'terra-button';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: true };
    this.toggleDateTimePicker = this.toggleDateTimePicker.bind(this);
  }

  toggleDateTimePicker() {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  }

  render() {
    return (
      <div>
        <Button
          id="date-time-picker-toggler"
          text={this.state.active ? 'Disable' : 'Enable'}
          onClick={this.toggleDateTimePicker}
        />
        <DateTimePickerExampleTemplate
          value="2017-11-05T01:30:00"
          disabled={!this.state.active}
        />
      </div>
    );
  }
}
