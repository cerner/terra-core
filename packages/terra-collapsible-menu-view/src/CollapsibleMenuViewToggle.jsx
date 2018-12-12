import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Control from 'terra-form/lib/Control';
import 'terra-base/lib/baseStyles';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Sets the item's text
   */
  text: PropTypes.string.isRequired,
  /**
   * Indicates if the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Callback function for when selection state changes. Is called with event and isSelected parameters
   */
  onChange: PropTypes.func,
  /**
   *  Indicates that the toggle should be selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * Indicates if the toggle should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Indicates that clicking on this item while displayed inside a menu should close the menu
   */
  shouldCloseOnClick: PropTypes.bool,
};

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
  isSelectable: true,
  shouldCloseOnClick: true,
};

class CollapsibleMenuViewToggle extends React.Component {
  constructor(props) {
    super(props);
    this.wrappedOnChange = this.wrappedOnChange.bind(this);
  }


  // Wrapping onChange event so that the same parameters will be given when the display is a checkbox and a menu.item
  wrappedOnChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.checked);
    }
  }

  render() {
    const {
      text,
      isSelected,
      isSelectable,
      isDisabled,
      onChange,
      shouldCloseOnClick,
      ...customProps
    } = this.props;

    const { isCollapsibleMenuItem } = this.context;

    const controllClassName = cx([
      'control',
      { 'is-disabled': isDisabled || !isSelectable },
      customProps.className,
    ]);

    if (isCollapsibleMenuItem) {
      return (
        <Menu.Item
          {...customProps}
          text={text}
          isSelected={isSelected}
          isSelectable={isSelectable}
          isDisabled={isDisabled}
          onChange={onChange}
        />
      );
    }

    return (
      <div className={cx(['face-up-item'])}>
        <Control
          {...customProps}
          className={controllClassName}
          type="checkbox"
          labelText={text}
          defaultChecked={isSelected}
          onChange={this.wrappedOnChange}
          inputAttrs={{ disabled: isDisabled || !isSelectable }}
        />
      </div>
    );
  }
}

CollapsibleMenuViewToggle.propTypes = propTypes;
CollapsibleMenuViewToggle.defaultProps = defaultProps;
CollapsibleMenuViewToggle.contextTypes = contextTypes;

export default CollapsibleMenuViewToggle;
