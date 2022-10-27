import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { KEY_RIGHT, KEY_LEFT } from 'keycode-js';
import ButtonGroupButton from './ButtonGroupButton';
import ButtonGroupUtils from './ButtonGroupUtils';
import styles from './ButtonGroup.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node,

  /**
   * Allows user to set button group to fill container width.
   */
  isBlock: PropTypes.bool,

  /**
   * Whether or not it is a multi select button group.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * Callback function when the state changes. Parameters are (event, key).
   */
  onChange: PropTypes.func,

  /**
   * A list of keys of the buttons that should be selected.
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  children: [],
  isBlock: false,
  selectedKeys: [],
  isMultiSelect: false,
};

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleOnChange(event, key) {
    if (this.props.onChange) {
      this.props.onChange(event, key);
    }
  }

  handleKeyDown(event, idx) {
    const allBtns = this.btnGrpRef.querySelectorAll('[data-terra-button-group-button]');
    let key = idx;

    if (event.keyCode === KEY_RIGHT && allBtns[key + 1]) {
      key += 1;
      while (allBtns[key] && allBtns[key].hasAttribute('disabled')) {
        key += 1;
      }
      if (allBtns[key]) allBtns[key].focus();
    }

    if (event.keyCode === KEY_LEFT && allBtns[key - 1]) {
      key -= 1;
      while (allBtns[key] && allBtns[key].hasAttribute('disabled')) {
        key -= 1;
      }
      if (allBtns[key]) allBtns[key].focus();
    }
  }

  wrapKeyDown(item, idx) {
    const { onKeyDown } = item.props;
    return (event) => {
      this.handleKeyDown(event, idx);

      if (onKeyDown) {
        onKeyDown(event);
      }
    };
  }

  wrapOnClick(item) {
    const { onClick } = item.props;
    return (event) => {
      this.handleOnChange(event, item.key);

      if (onClick) {
        onClick(event);
      }
    };
  }

  render() {
    const {
      children,
      isBlock,
      isMultiSelect,
      onChange,
      selectedKeys,
      ...customProps
    } = this.props;

    const theme = this.context;

    const buttonGroupClassNames = classNames(
      cx(
        'button-group',
        { 'is-block': isBlock },
        theme.className,
      ),
      customProps.className,
    );

    const allButtons = children ? [] : undefined;
    // eslint-disable-next-line no-nested-ternary
    const btnRole = onChange ? isMultiSelect ? 'checkbox' : 'radio' : 'button';

    React.Children.forEach(children, (child, index) => {
      const isSelected = selectedKeys.indexOf(child.key) > -1;
      const cloneChild = React.cloneElement(child, {
        role: btnRole,
        onClick: this.wrapOnClick(child),
        onKeyDown: this.wrapKeyDown(child, index),
        className: cx([{ 'is-selected': isSelected && !child.props.isDisabled }, child.props.className]),
        'aria-pressed': btnRole === 'button' && !child.props.isDisabled ? isSelected : undefined,
        'aria-checked': btnRole !== 'button' && !child.props.isDisabled ? isSelected : undefined,
      });
      allButtons.push(cloneChild);
    });

    return (
      <div {...customProps} ref={(btnGrpRef) => { this.btnGrpRef = btnGrpRef; }} role={btnRole === 'radio' ? 'radiogroup' : 'group'} className={buttonGroupClassNames}>
        {allButtons}
      </div>
    );
  }
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
ButtonGroup.Button = ButtonGroupButton;
ButtonGroup.Utils = ButtonGroupUtils;
ButtonGroup.contextType = ThemeContext;

export default ButtonGroup;
