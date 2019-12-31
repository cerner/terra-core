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
    * Attributes applied to the `input` element.
    */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttrs: PropTypes.object,

  /**
    * Text of the label.
    */
  labelText: PropTypes.node.isRequired,

  /**
    * Additional attributes for the text object.
    */
  // eslint-disable-next-line react/forbid-prop-types
  labelTextAttrs: PropTypes.object,

  /**
    * Callback fired when the state is changed.
    */
  onChange: PropTypes.func,

  /**
    * The value of the input element.
    */
  value: PropTypes.string,
};

const defaultProps = {
  isOn: false,
  disabled: false,
  id: undefined,
  inputAttrs: {},
  labelTextAttrs: {},
  onChange: undefined,
  value: undefined,
};

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
      this.setState({ focused: true });
      this.props.onChange();
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
      inputAttrs,
      onChange,
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

    const sliderClassNames = cx([
      'slider',
      { 'is-disabled': disabled },
      { 'is-focused': this.state.focused },
    ]);

    const statusLabelText = isOn ? SWITCH_STATE.ON : SWITCH_STATE.OFF;

    return (
      <label
        htmlFor={id}
      >
        <div className={cx('switch-container')}>
          <div className={cx('label-container')}>
            <div {...labelTextAttrs} className={cx('label-text')}>{labelText}</div>
            <div className={cx('status-text')}>{statusLabelText}</div>
          </div>
          <div className={switchClassNames}>
            <input
              id={id}
              checked={isOn}
              disabled={disabled}
              onChange={onChange}
              role="switch"
              type="checkbox"
              value={value}
              {...customProps}
            />
            <span className={trayClassNames}>
              <span
                aria-checked={isOn}
                className={sliderClassNames}
                role="switch"
                tabIndex="0"
                onKeyDown={this.handleOnKeyDown}
                onKeyUp={this.handleKeyUp}
                onBlur={this.handleOnBlur}
              >
                <VisuallyHiddenText text={labelText} />
              </span>
            </span>
          </div>
        </div>
      </label>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
