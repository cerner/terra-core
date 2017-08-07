import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import CheckIcon from 'terra-icon/lib/icon/IconCheckmark';
import ChevronIcon from 'terra-icon/lib/icon/IconChevronRight';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './MenuItem.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const contextTypes = {
  isGroupItem: PropTypes.bool,
  isSelectableMenu: PropTypes.bool,
};

const propTypes = {
  /**
   * Sets the item's text
   */
  text: PropTypes.string,

  /**
   * Indicates if the item is selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Indicates if the item should be toggle-able
  */
  isSelectable: PropTypes.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   */
  subMenuItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Callback function for when item is clicked
   */
  onClick: PropTypes.func,
};

const defaultProps = {
  text: '',
  isSelected: false,
  isSelectable: undefined,
  subMenuItems: [],
};

class MenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = { isSelected: props.isSelected && props.isSelectable && !context.isGroupItem };
  }

  handleSelection() {
    event.preventDefault();
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
  }

  wrapOnClick(event) {
    this.handleSelection();

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  wrapOnKeyDown(onKeyDown) {
    return ((event) => {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
        this.handleSelection();
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  render() {
    const {
      text,
      isSelected,
      isSelectable,
      subMenuItems,
      ...customProps
    } = this.props;

    const { isGroupItem, isSelectableMenu } = this.context;

    const attributes = Object.assign({}, customProps);
    attributes.tabIndex = '0';
    // This is passed down by the single select list in group item and not needed
    delete attributes.hasChevron;

    if (isSelectable && !isGroupItem) {
      attributes.onClick = this.wrapOnClick;
      attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
    }

    const itemClassNames = cx([
      'item',
      { selected: this.state.isSelected || (isGroupItem && isSelected) },
      attributes.className,
    ]);

    const content = <div className={cx(['title'])}>{text}</div>;
    const hasChevron = subMenuItems.length > 0;

    if (hasChevron || isSelectableMenu) {
      return (
        <li {...attributes} className={itemClassNames}>
          <Arrange
            fitStart={isSelectableMenu ? <CheckIcon className={cx(['checkmark'])} /> : null}
            fill={content}
            fitEnd={hasChevron ? <ChevronIcon className={cx(['chevron'])} /> : null}
            align={'center'}
          />
        </li>
      );
    }

    return (
      <li {...attributes} className={itemClassNames}>
        {content}
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.contextTypes = contextTypes;

export default MenuItem;
