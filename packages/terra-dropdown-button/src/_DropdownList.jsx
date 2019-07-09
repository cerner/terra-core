import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import Util from './_DropdownListUtil';
import styles from './_DropdownList.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The Options that should be displayed in the dropdown
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func.isRequired,
  /**
   * @private
   * Width to set the dropdown to. Used when `isBlock` is true. Unset means to autosize.
   */
  width: PropTypes.string,
};

class DropdownList extends React.Component {
  constructor(props) {
    super(props);

    this.cloneChildren = this.cloneChildren.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

    const focused = Util.findFirst(this);
    this.state = { focused, active: undefined };

    this.searchString = '';
    this.pressed = false;
  }

  handleKeyDown(event) {
    const { keyCode } = event;
    const { focused } = this.state;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      /*
        Prevent the callback from being called repeatedly if key is held down
        The close dropdown request had to be moved to handleKeyUp to fix a firefox bug
        where chosing an item with spacebar if the dropdown caret was focused when opening the dropdown
        in firefox would cause the dropdown to reopen itself
      */
      if (!this.pressed) {
        this.pressed = true;
        const item = Util.findByValue(this, focused);
        item.props.onClick();
        this.setState({ active: item.props.label });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_DOWN) {
      if (!this.pressed) {
        this.setState({ focused: Util.findNext(this, focused) });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_UP) {
      if (!this.pressed) {
        this.setState({ focused: Util.findPrevious(this, focused) });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_HOME) {
      if (!this.pressed) {
        this.setState({ focused: Util.findFirst(this) });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_END) {
      if (!this.pressed) {
        this.setState({ focused: Util.findLast(this) });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_TAB) {
      this.props.requestClose();
      event.preventDefault();
    } else if (keyCode >= 48 && keyCode <= 90) {
      this.searchString = this.searchString.concat(String.fromCharCode(keyCode));
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(this.clearSearch, 500);
      this.setState(prevState => ({ focused: Util.findWithStartString(this, this.searchString) || prevState.focused }));
    }
  }

  handleKeyUp(event) {
    const { keyCode } = event;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: undefined });
      event.preventDefault();
      if (this.pressed) {
        this.props.requestClose();
      }
      this.pressed = false;
    }
  }

  /**
   * Clears the default variant keyboard search.
   */
  clearSearch() {
    this.searchString = '';
    clearTimeout(this.searchTimeout);
    this.searchTimeout = null;
  }

  /**
   * Tells children whether or not they are active or focused
   * @return {Array<React.ReactNode>} the array of children
   */
  cloneChildren() {
    return React.Children.map(this.props.children, child => React.cloneElement(child, {
      isFocused: child.props.label === this.state.focused,
      isActive: child.props.label === this.state.active,
      requestClose: this.props.requestClose,
    }));
  }

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  render() {
    return (
      <ul
        className={cx('dropdown-list')}
        // eslint-disable-next-line react/forbid-dom-props
        style={{ width: this.props.width }}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
      >
        {this.cloneChildren()}
      </ul>
    );
  }
}

DropdownList.propTypes = propTypes;

export default DropdownList;
