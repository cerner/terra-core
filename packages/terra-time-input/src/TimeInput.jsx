import React, { PropTypes } from 'react';
import moment from 'moment';
import TextMask from 'react-text-mask';
import createAutoCorrectedTimePipe from './TimePipe';
import './TimeInput.scss';

const propTypes = {
  /**
   * A moment object to use as the default initial time.
   */
  defaultTime: PropTypes.object,
    /**
   * A callback function to execute when a valid time entered.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  defaultTime: null,
  onChange: null,
};

class TimeInput extends React.Component {
  static userLocale() {
    // TODO: Get the locale from date_util
    return 'en-US';
  }

  static timeFormat() {
    // TODO: Get the time format based on the locale.
    return 'HH:mm';
  }

  static formattedTime(timeMoment) {
    if (timeMoment) {
      return timeMoment.clone().locale(TimeInput.userLocale()).format(TimeInput.timeFormat());
    }

    return '';
  }

  constructor(props) {
    super(props);

    this.state = {
      defaultTime: TimeInput.formattedTime(this.props.defaultTime),
      value: TimeInput.formattedTime(this.props.defaultTime),
    };

    this.onChange = this.onChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
  }

  onChange(event) {
    if (event.target.value === this.state.value) {
      return;
    }

    this.setState({
      value: event.target.value,
    });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleInputKeyDown(event) {
    const copy = moment(this.state.value, TimeInput.timeFormat());

    if (!copy.isValid()) {
      return;
    }

    if (event.key === 'ArrowUp') {
      this.setState({ value: TimeInput.formattedTime(copy.add(1, 'minutes')) });
    } else if (event.key === 'ArrowDown') {
      this.setState({ value: TimeInput.formattedTime(copy.subtract(1, 'minutes')) });
    }
  }

  render() {
    const {
      defaultTime,
      onChange,
      ...customProps
    } = this.props;

    const autoCorrectedTimePipe = createAutoCorrectedTimePipe(TimeInput.timeFormat());

    return (
      <div className="terra-TimeInput">
        <TextMask
          {...customProps}
          className="terra-TimeInput-input"
          type="text"
          value={this.state.value}
          defaultValue={this.state.defaultTime}
          onChange={this.onChange}
          placeholder={TimeInput.timeFormat()}
          mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
          keepCharPositions
          placeholderChar=" "
          pipe={autoCorrectedTimePipe}
          onKeyDown={this.handleInputKeyDown}
        />
      </div>
    );
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

export default TimeInput;
