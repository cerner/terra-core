import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import styles from './_DropdownList.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  handleRequestClose: PropTypes.func.isRequired,
  itemSelectedCallback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  })).isRequired,
};

class DropdownList extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.childRefs = [];

    const { options } = this.props;

    const activeIndex = options.length > 0 ? 0 : -1;
    this.state = { options, activeIndex };
  }

  handleKeyDown(event, option) {
    const { keyCode } = event;
    if (keyCode === KeyCode.KEY_RETURN || keyCode === KeyCode.KEY_SPACE) {
      this.props.itemSelectedCallback(option);
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_DOWN) {
      if (this.state.activeIndex !== -1
          && this.state.activeIndex < this.state.options.length - 1) {
        this.setState((prevState) => {
          const activeIndex = prevState.activeIndex + 1;
          this.childRefs[activeIndex].focus();
          return { activeIndex };
        });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_UP) {
      if (this.state.activeIndex !== -1
          && this.state.activeIndex > 0) {
        this.setState((prevState) => {
          const activeIndex = prevState.activeIndex - 1;
          this.childRefs[activeIndex].focus();
          return { activeIndex };
        });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_HOME) {
      if (this.state.activeIndex !== -1) {
        this.setState({ activeIndex: 0 });
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_END) {
      if (this.state.activeIndex !== -1) {
        this.setState(prevState => ({ activeIndex: prevState.options.length - 1 }));
      }
      event.preventDefault();
    } else if (keyCode === KeyCode.KEY_TAB) {
      // if (this.state.activeIndex !== -1) {
      //   this.setState(prevState => ({ activeIndex: prevState.activeIndex + 1 }));
      // }
      this.props.handleRequestClose();
      event.preventDefault();
    }
  }

  render() {
    const { options, itemSelectedCallback } = this.props;
    const elements = options.map((option, index) => (
      <li
        key={option.label}
      >
        <div
          onClick={() => { itemSelectedCallback(option); }}
          onKeyDown={event => this.handleKeyDown(event, option)}
          ref={(ref) => { this.childRefs[index] = ref; }}
          role="button"
          tabIndex="0"
          className={cx('dropdown-list-element')}
        >
          {option.label}
        </div>
      </li>
    ));
    return <ul className={cx('dropdown-list')}>{elements}</ul>;
  }
}

DropdownList.propTypes = propTypes;

export default DropdownList;
