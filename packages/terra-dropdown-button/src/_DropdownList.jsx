import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import Util from './_DropdownListUtil';
import styles from './_DropdownList.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
  itemSelectedCallback: PropTypes.func.isRequired,
  width: PropTypes.string,
};

class DropdownList extends React.Component {
  constructor(props) {
    super(props);

    this.cloneChildren = this.cloneChildren.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    const focused = Util.findFirst(this);
    this.state = { focused, active: undefined };
  }

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
      this.props.itemSelectedCallback({ label: item.props.label, callback: item.props.callback });
      this.setState({ active: item.props.label });
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
      this.props.handleRequestClose();
      // event.preventDefault();
    }
  }

  handleKeyUp(event) {
    const { keyCode } = event;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: undefined });
      event.preventDefault();
    }
  }

  cloneChildren() {
    return React.Children.map(this.props.children, child => React.cloneElement(child, {
      isFocused: child.props.label === this.state.focused,
      isActive: child.props.label === this.state.active,
      itemSelectedCallback: this.props.itemSelectedCallback,
    }));
  }

  render() {
    return (
      <ul
        role="listbox"
        className={cx('dropdown-list')}
        style={{ width: this.props.width }}
      >
        {this.cloneChildren()}
      </ul>
    );
  }
}

DropdownList.propTypes = propTypes;

export default DropdownList;
