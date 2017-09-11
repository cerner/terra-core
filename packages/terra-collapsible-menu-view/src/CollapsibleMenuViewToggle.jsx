import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Control from 'terra-form/lib/Control';
import 'terra-base/lib/baseStyles';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.scss';

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
  text: '',
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
      onChange,
      shouldCloseOnClick,
      ...customProps
    } = this.props;

    const { isCollapsibleMenuItem } = this.context;

    const attributes = Object.assign({}, customProps);
    const controllClassName = cx([
      'control',
      attributes.className,
    ]);

    if (isCollapsibleMenuItem) {
      return (
        <Menu.Item
          {...attributes}
          text={text}
          isSelected={isSelected}
          isSelectable={isSelectable}
          onChange={onChange}
        />
      );
    }

    return (
      <div className={cx(['face-up-item'])}>
        <Control
          {...attributes}
          className={controllClassName}
          type="checkbox"
          labelText={text}
          defaultChecked={isSelected}
          onChange={this.wrappedOnChange}
          disabled={!isSelectable}
        />
      </div>
    );
  }
}

CollapsibleMenuViewToggle.propTypes = propTypes;
CollapsibleMenuViewToggle.defaultProps = defaultProps;
CollapsibleMenuViewToggle.contextTypes = contextTypes;

export default CollapsibleMenuViewToggle;
