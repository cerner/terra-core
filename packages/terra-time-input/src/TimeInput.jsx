/* eslint-disable global-require, import/no-dynamic-require */
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { I18nProvider, i18nLoader } from 'terra-i18n';
import moment from 'moment';
import TextMask from 'react-text-mask';
import TimePipe from './TimePipe';

import './TimeInput.scss';

const propTypes = {
  /**
   * A moment object to use as the default initial time.
   */
  defaultTime: PropTypes.object,
    /**
   * A callback function to execute when a time value is entered.
   */
  onChange: PropTypes.func,
  /**
   * Locale to format the time
   */
  locale: PropTypes.string.isRequired,
};

const defaultProps = {
  defaultTime: null,
  onChange: null,
};

class TimeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
      locale: props.locale,
      timeMessages: require(`./translations/${props.locale}.js`),
      defaultTime: null,
      value: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
  }

  componentDidMount() {
    i18nLoader(this.props.locale, this.setState, this);

    this.state = {
      defaultTime: this.formattedTime(this.props.defaultTime),
      value: this.formattedTime(this.props.defaultTime),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return;
    i18nLoader(nextProps.locale, this.setState, this);
  }

  formattedTime(timeMoment) {
    if (timeMoment) {
      debugger;
      return timeMoment.clone().locale(this.props.locale).format(<FormattedMessage id="Terra.timeInput.format" />);
    }

    return '';
  }

  handleChange(event) {
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
    const copy = moment(this.state.value, <FormattedMessage id="Terra.timeInput.format" />, true);

    if (!copy.isValid()) {
      return;
    }

    if (event.key === 'ArrowUp') {
      this.setState({ value: this.formattedTime(copy.add(1, 'minutes')) });
    } else if (event.key === 'ArrowDown') {
      this.setState({ value: this.formattedTime(copy.subtract(1, 'minutes')) });
    }
  }

  render() {
    if (!this.state.load) return null;

    const {
      defaultTime,
      locale,
      onChange,
      ...customProps
    } = this.props;

    return (
      <I18nProvider
        locale={this.props.locale}
        messages={this.state.timeMessages}
      >
        <div className="terra-TimeInput">
          <TextMask
            {...customProps}
            className="terra-TimeInput-input"
            type="text"
            value={this.state.value}
            defaultValue={this.state.defaultTime}
            onChange={this.handleChange}
            placeholder={<FormattedMessage id="Terra.timeInput.format" />}
            mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
            keepCharPositions
            placeholderChar=" "
            pipe={TimePipe(<FormattedMessage id="Terra.timeInput.format" />)}
            onKeyDown={this.handleInputKeyDown}
          />
        </div>
      </I18nProvider>
    );
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

export default TimeInput;
