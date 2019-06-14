import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from './_Dropdown';
import styles from './DropdownButton.module.scss';
import Option from './_Option';

const cx = classNames.bind(styles);

const propTypes = {
  boundingRef: PropTypes.func,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isBlock: PropTypes.bool,
  width: PropTypes.string,
  defaultOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  isDisabled: false,
  isBlock: false,
};

class DropdownButton extends React.Component {
  static itemSelectedCallback(option) {
    option.callback();
  }

  constructor(props) {
    super(props);

    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);

    this.state = { isOpen: false };
  }

  handleDropdownButtonClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const {
      boundingRef,
      children,
      isDisabled,
      isBlock,
      defaultOption,
      width,
      ...customProps
    } = this.props;
    const DropdownButtonClassNames = cx([
      'dropdown-button',
      { block: isBlock || width },
      customProps.className,
    ]);
    if (width && !isBlock) {
      customProps.style = customProps.style || {};
      customProps.style.width = width;
    }

    return (
      <div
        {...customProps}
        className={DropdownButtonClassNames}
      >
        <button
          type="button"
          className={cx('split-button-primary', 'neutral')}
          onClick={defaultOption.callback}
        >
          {defaultOption.label}
        </button>
        <button
          ref={(buttonRef) => { this.buttonRef = buttonRef; }}
          type="button"
          onClick={this.handleDropdownButtonClick}
          className={cx('split-button-chevron', 'neutral')}
        >
          <span className={cx('chevron-icon')} />
        </button>
        <Dropdown
          boundingRef={() => boundingRef}
          targetRef={() => this.buttonRef}
          isOpen={this.state.isOpen}
          handleRequestClose={this.handleDropdownButtonClick}
          itemSelectedCallback={DropdownButton.itemSelectedCallback}
        >
          {children}
        </Dropdown>
      </div>
    );
  }
}

DropdownButton.Option = Option;

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
