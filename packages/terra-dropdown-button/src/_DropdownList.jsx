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
  }

  /**
   * Focus sits on the parent Popup frame so set document listeners to catch keyboard events anyway
   */
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown(event) {
    const { keyCode } = event;
    const { focused } = this.state;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      const item = Util.findByValue(this, focused);
      item.props.onClick();
      this.setState({ active: item.props.label });
      this.props.requestClose();
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_DOWN) {
      this.setState({ focused: Util.findNext(this, focused) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_UP) {
      this.setState({ focused: Util.findPrevious(this, focused) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_HOME) {
      this.setState({ focused: Util.findFirst(this) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_END) {
      this.setState({ focused: Util.findLast(this) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_TAB) {
      this.props.requestClose();
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

  render() {
    return (
      <ul
        className={cx('dropdown-list')}
        // eslint-disable-next-line react/forbid-dom-props
        style={{ width: this.props.width }}
      >
        {this.cloneChildren()}
      </ul>
    );
  }
}

DropdownList.propTypes = propTypes;

export default DropdownList;
