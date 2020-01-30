import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

const SWITCH_STATE = Object.freeze({
  ON: 'On',
  OFF: 'Off',
});

const propTypes = {
  /**
    * Whether or not the Switch is enabled ("ON").
    */
  isOn: PropTypes.bool,

  /**
    * If true, the user won't be able to toggle the switch.
    */
  disabled: PropTypes.bool,

  /**
    * The id of the `input` element.
    */
  id: PropTypes.string,

  /**
    * Text of the label.
    */
  labelText: PropTypes.node.isRequired,

  /**
    * Additional attributes applied to the label.
    */
  // eslint-disable-next-line react/forbid-prop-types
  labelTextAttrs: PropTypes.object,

  /**
    * Callback fired when the state is changed.
    */
  onClick: PropTypes.func,

  /**
    * The value of the input element.
    */
  value: PropTypes.string,
};

const defaultProps = {
  isOn: false,
  disabled: false,
  id: undefined,
  labelTextAttrs: {},
  onClick: undefined,
  value: undefined,
};

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ focused: true });
    this.sliderRef.focus();
    this.props.onClick(event);
  }

  handleOnKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
      this.setState({ focused: true });
      this.props.onClick();
    }
  }

  handleOnBlur() {
    this.setState({ focused: false });
  }

  handleKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_TAB) {
      this.setState({ focused: true });
    }
  }

  render() {
    const {
      isOn,
      disabled,
      id,
      onClick,
      labelText,
      labelTextAttrs,
      value,
      ...customProps
    } = this.props;

    const switchClassNames = cx([
      'switch',
      customProps.className,
    ]);

    const trayClassNames = cx([
      'tray',
      { 'is-disabled': disabled },
    ]);

    const buttonClassNames = cx([
      'switch-button',
      { 'switch-button-clicked': isOn },
    ]);

    const sliderClassNames = cx([
      'slider',
      { 'is-disabled': disabled },
      { 'is-focused': this.state.focused },
    ]);

    const statusLabelText = isOn ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

    return (
      <div className={cx('switch-wrapper')}>
        <label
          htmlFor={id}
        >
          <div className={cx('switch-container')}>
            <div className={cx('label-container')}>
              <div {...labelTextAttrs} className={cx('label-text')}>{labelText}</div>
              <div className={cx('status-text')}>{statusLabelText}</div>
            </div>
            <div className={switchClassNames}>
              <button
                type="button"
                id={id}
                className={buttonClassNames}
                aria-pressed={isOn}
                tabIndex="0"
                disabled={disabled}
                onClick={this.handleClick}
                value={value}
                {...customProps}
              />
              <span
                className={trayClassNames}
              >
                <span
                  className={sliderClassNames}
                  tabIndex="0"
                  aria-checked={isOn}
                  role="switch"
                  onKeyDown={this.handleOnKeyDown}
                  onKeyUp={this.handleKeyUp}
                  onBlur={this.handleOnBlur}
                  ref={(sliderRef) => { this.sliderRef = sliderRef; }}
                >
                  <VisuallyHiddenText text={labelText} />
                </span>
              </span>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

export default SwitchButton;
