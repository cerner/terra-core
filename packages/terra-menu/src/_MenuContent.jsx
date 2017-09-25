import React from 'react';
import PropTypes from 'prop-types';
import List from 'terra-list';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import MenuUtils from './_MenuUtils';
import styles from './Menu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Title the should be displayed in header.
   */
  title: PropTypes.string,
  /**
   * Callback function for when back button is clicked.
   */
  onRequestBack: PropTypes.func,
  /**
   * Callback function for when close button is clicked.
   */
  onRequestClose: PropTypes.func,
  /**
   * Callback function that takes the content to be displayed next and is called when an item with nested content is clicked.
   */
  onRequestNext: PropTypes.func.isRequired,
  /**
   * Menu Items/Menu Groups/Menu Dividers to be displayed.
   */
  children: PropTypes.node.isRequired,
  /**
   * Index within the Menu Stack.
   */
  index: PropTypes.number.isRequired,
};

const defaultProps = {
  children: [],
  title: '',
};

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.buildHeader = this.buildHeader.bind(this);
    this.isSelectable = this.isSelectable.bind(this);
    this.onKeyDownBackButton = this.onKeyDownBackButton.bind(this);
  }

  getChildContext() {
    return { isSelectableMenu: this.isSelectable() };
  }

  onKeyDownBackButton(event) {
    if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
      this.props.onRequestBack();
    }
  }

  isSelectable() {
    for (let i = 0; i < this.props.children.length; i += 1) {
      const child = this.props.children[i];
      if (child.props.children || child.props.isSelectable) {
        return true;
      }
    }

    return false;
  }

  wrapOnClick(item) {
    const onClick = item.props.onClick;
    return (event) => {
      this.props.onRequestNext(item);

      if (onClick) {
        onClick(event);
      }
    };
  }

  wrapOnKeyDown(item) {
    const onKeyDown = item.props.onKeyDown;
    return ((event) => {
      if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
        this.props.onRequestNext(item);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  buildHeader() {
    const closeIcon = <IconClose />;
    const closeButton = this.props.onRequestClose ? (
      <button className={cx(['header-button', 'close-button'])} onClick={this.props.onRequestClose}>
        {closeIcon}
      </button>
    ) : <div />;

    const backIcon = <IconLeft />;
    const backButton = this.props.index > 0 ? (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        role="button"
        onClick={this.props.onRequestBack}
        onKeyDown={this.onKeyDownBackButton}
        tabIndex="0"
      >
        <Arrange
          align="center"
          fitStart={(
            <div className={cx(['header-button'])}>
              {backIcon}
            </div>
          )}
          fill={<h1 className={cx(['header-title'])}>{this.props.title}</h1>}
        />
      </div>
    ) : <div />;

    return (
      <Arrange
        className={cx(['header'])}
        fitEnd={closeButton}
        fill={backButton}
        align="center"
      />
    );
  }

  render() {
    const items = React.Children.map(this.props.children, (item) => {
      if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
        return React.cloneElement(item, { onClick: this.wrapOnClick(item), onKeyDown: this.wrapOnKeyDown(item) });
      }

      return item;
    });

    const header = this.buildHeader();

    return (
      <ContentContainer header={header} fill className={cx(['content'])}>
        <List className={cx(['list'])}>
          {items}
        </List>
      </ContentContainer>
    );
  }
}


MenuContent.propTypes = propTypes;
MenuContent.defaultProps = defaultProps;
MenuContent.childContextTypes = childContextTypes;

export default MenuContent;
