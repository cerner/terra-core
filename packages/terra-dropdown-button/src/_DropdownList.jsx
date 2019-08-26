import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
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
    this.handleFocus = this.handleFocus.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.changeFocusState = this.changeFocusState.bind(this);

    this.state = { focused: 0, active: -1 };

    this.searchString = '';
    this.pressed = false;
    this.listRef = null;
  }

  changeFocusState(index) {
    // the div inside the li is what is actually focusable so need to go 2 layers down
    this.listRef.childNodes[index].childNodes[0].focus();

    this.setState({ focused: index });
  }

  handleKeyDown(event) {
    const { keyCode } = event;
    const { focused } = this.state;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      /*
        Prevent the callback from being called repeatedly if key is held down.
        The close dropdown request had to be moved to handleKeyUp to fix a firefox bug
        where choosing an item with spacebar if the dropdown caret was focused when opening the dropdown
        would cause the dropdown to reopen itself.
      */
      if (!this.pressed) {
        this.pressed = true;
        this.setState({ active: focused });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_DOWN) {
      if (!this.pressed) {
        this.changeFocusState(Util.findNext(this, this.state.focused));
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_UP) {
      if (!this.pressed) {
        this.changeFocusState(Util.findPrevious(this, this.state.focused));
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_HOME) {
      if (!this.pressed) {
        this.changeFocusState(0);
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_END) {
      if (!this.pressed) {
        this.changeFocusState(Util.getChildArray(this).length - 1);
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_TAB) {
      this.props.requestClose();
      event.preventDefault();
    } else if (keyCode >= 48 && keyCode <= 90) {
      this.searchString = this.searchString.concat(String.fromCharCode(keyCode));
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(this.clearSearch, 500);
      let newFocused = Util.findWithStartString(this, this.searchString);

      if (newFocused === -1) {
        newFocused = this.state.focused;
      }
      this.changeFocusState(newFocused);
    }
    event.stopPropagation();
  }

  handleKeyUp(event) {
    const { keyCode } = event;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: undefined });
      event.preventDefault();
      if (this.pressed) {
        const item = Util.findByIndex(this, this.state.focused);
        this.props.requestClose(item.props.onSelect);
      }
      this.pressed = false;
    }
  }

  /**
   * Keeps internal state synced with what is focused on the page incase
   * something such as a screen reader moves focus
   * @param {React.FocusEvent} event the focus event
   */
  handleFocus(event) {
    const index = Util.findIndexByValue(this, event.target.innerText);

    if (index !== -1) {
      this.setState({ focused: index });
    }
  }

  /**
   * Clears the keyboard search.
   */
  clearSearch() {
    this.searchString = '';
    clearTimeout(this.searchTimeout);
    this.searchTimeout = null;
  }

  /**
   * Tells children whether or not they are active and gives them a function to close the dropdown
   * @return {Array<React.ReactNode>} the array of children
   */
  cloneChildren() {
    return React.Children.map(this.props.children, (child, index) => React.cloneElement(child, {
      isActive: index === this.state.active,
      requestClose: this.props.requestClose,
    }));
  }

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  render() {
    return (
      <ul
        className={cx('dropdown-list')}
        // eslint-disable-next-line react/forbid-dom-props
        style={{ width: this.props.width }}
        ref={(ref) => { this.listRef = ref; }}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        role="menu"
      >
        {this.cloneChildren()}
      </ul>
    );
  }
}

DropdownList.propTypes = propTypes;

export default DropdownList;
