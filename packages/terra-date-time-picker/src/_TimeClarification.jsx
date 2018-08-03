import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import DateTimeUtils from './DateTimeUtils';
import styles from './_TimeClarification.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * If set to true, the modal will rendered as opened
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * If set to true, the button to open the modal will be hidden.
   */
  isOffsetButtonHidden: PropTypes.bool.isRequired,
  /**
   * Callback function indicating the before time change option was selected.
   */
  onDaylightSavingButtonClick: PropTypes.func.isRequired,
  /**
   * Callback function indicating the after time change option was selected.
   */
  onStandardTimeButtonClick: PropTypes.func.isRequired,
  /**
   * Callback function indicating the DST offset button was selected.
   */
  onOffsetButtonClick: PropTypes.func.isRequired,
  /**
   * Callback function indicating the modal is requesting to close.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Whether the clarification is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * Callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
};

const defaultProps = {
  disabled: false,
  releaseFocus: undefined,
  requestFocus: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class TimeClarification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetDisplay: '',
    };

    this.handleDaylightSavingButtonClick = this.handleDaylightSavingButtonClick.bind(this);
    this.handleStandardTimeButtonClick = this.handleStandardTimeButtonClick.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen && this.props.requestFocus) {
      this.props.requestFocus();
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      if (this.props.requestFocus) {
        this.props.requestFocus();
      }
    } else if (this.props.releaseFocus) {
      this.props.releaseFocus();
    }
  }

  componentWillUnmount() {
    if (this.props.releaseFocus) {
      this.props.releaseFocus();
    }
  }

  handleDaylightSavingButtonClick(event) {
    this.setState({ offsetDisplay: DateTimeUtils.getDaylightSavingTZDisplay() });

    if (this.props.onDaylightSavingButtonClick) {
      this.props.onDaylightSavingButtonClick(event);
    }
  }

  handleStandardTimeButtonClick(event) {
    this.setState({ offsetDisplay: DateTimeUtils.getStandardTZDisplay() });

    if (this.props.onStandardTimeButtonClick) {
      this.props.onStandardTimeButtonClick(event);
    }
  }

  render() {
    if (this.props.isOffsetButtonHidden) {
      this.state.offsetDisplay = '';
    }

    const offsetButtonClassNames = cx([
      'button-offset',
      { 'button-offset-hidden': this.props.isOffsetButtonHidden || !this.state.offsetDisplay },
    ]);

    const { intl } = this.context;
    const title = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.title' });
    const message = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.message' });
    const daylightSavingButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.daylightSaving' });
    const standardTimeButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.standardTime' });

    return (
      <div>
        <AbstractModal
          classNameModal={cx('time-clarification')}
          ariaLabel="Time Clarification"
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
          closeOnEsc={false}
          closeOnOutsideClick={false}
          zIndex="9000"
        >
          <div>
            <header className={cx('header')}>
              {<h1 className={cx('title')}>{title}</h1>}
            </header>
            <div className={cx('body')}>
              <p>{message}</p>
            </div>
            <div className={cx('buttons')}>
              <Button
                text={daylightSavingButtonLabel}
                onClick={this.handleDaylightSavingButtonClick}
                variant={Button.Opts.Variants.EMPHASIS}
                className={cx('button-daylight')}
              />
              <Button
                text={standardTimeButtonLabel}
                onClick={this.handleStandardTimeButtonClick}
                variant={Button.Opts.Variants.EMPHASIS}
                className={cx('button-standard')}
              />
            </div>
          </div>
        </AbstractModal>
        <Button
          className={offsetButtonClassNames}
          onClick={this.props.onOffsetButtonClick}
          text={this.state.offsetDisplay}
          isCompact
          isDisabled={this.props.disabled}
        />
      </div>
    );
  }
}

TimeClarification.propTypes = propTypes;
TimeClarification.defaultProps = defaultProps;
TimeClarification.contextTypes = contextTypes;

export default TimeClarification;
