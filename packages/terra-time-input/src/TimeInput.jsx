import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextMask from 'react-text-mask';
import 'terra-base/lib/baseStyles';
import TimePipe from './TimePipe';
import TimeUtil from './TimeUtil';
import './TimeInput.scss';

const propTypes = {
  /**
   * Custom input attributes to apply to the time input.
   */
  inputAttributes: PropTypes.object,
    /**
   * A callback function to execute when a time value is entered.
   */
  onChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the time value in the input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  inputAttributes: undefined,
  onChange: null,
  value: undefined,
};

class TimeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeFormat: 'HH:mm',
      value: TimeUtil.formattedTime(props.value, 'HH:mm'),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
  }

  handleChange(event) {
    if (event.target.value === this.state.value) {
      return;
    }

    this.setState({
      value: event.target.value,
    });

    if (this.props.onChange) {
      this.props.onChange(event.target.value, event);
    }
  }

  handleInputKeyDown(event) {
    let momentTime = moment(this.state.value, this.state.timeFormat, true);

    if (!momentTime.isValid()) {
      return;
    }

    let updateTime = false;

    if (event.key === 'ArrowUp') {
      momentTime = momentTime.add(1, 'minutes');
      updateTime = true;
    } else if (event.key === 'ArrowDown') {
      momentTime = momentTime.subtract(1, 'minutes');
      updateTime = true;
    }

    if (updateTime) {
      const incrementedTime = momentTime.format(this.state.timeFormat);
      this.setState({ value: incrementedTime });
    }
  }

  render() {
    const {
      inputAttributes,
      onChange,
      value,
      ...customProps
    } = this.props;

    const attributes = { ...customProps, ...inputAttributes };

    return (
      <div className="terra-TimeInput">
        <TextMask
          {...attributes}
          className="terra-TimeInput-input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.state.timeFormat}
          mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
          keepCharPositions
          placeholderChar=" "
          pipe={TimePipe(this.state.timeFormat)}
          onKeyDown={this.handleInputKeyDown}
        />
      </div>
    );
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

export default TimeInput;
