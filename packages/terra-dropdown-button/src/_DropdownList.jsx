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

    const active = Util.findFirst(this);
    this.state = { active };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { keyCode } = event;
    const { active } = this.state;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      const item = Util.findByValue(this, active);
      this.props.itemSelectedCallback({ label: item.props.label, callback: item.props.callback });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_DOWN) {
      this.setState({ active: Util.findNext(this, active) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_UP) {
      this.setState({ active: Util.findPrevious(this, active) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_HOME) {
      this.setState({ active: Util.findFirst(this) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_END) {
      this.setState({ active: Util.findLast(this) });
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_TAB) {
      this.props.handleRequestClose();
      // event.preventDefault();
    }
  }

  cloneChildren() {
    return React.Children.map(this.props.children, child => React.cloneElement(child, {
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
