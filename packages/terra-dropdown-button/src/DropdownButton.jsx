import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from './_Dropdown';
import styles from './DropdownButton.module.scss';
import Option from './_Option';

const cx = classNames.bind(styles);

const propTypes = {
  boundingRef: PropTypes.func,
  /**
   * The options to display in the dropdown
   */
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isBlock: PropTypes.bool,
  width: PropTypes.string,
  defaultOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  }).isRequired,
  variant: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  isBlock: false,
  variant: 'neutral',
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
      disabled,
      isBlock,
      defaultOption,
      variant,
      width,
      ...customProps
    } = this.props;
    const DropdownButtonClassNames = cx([
      'dropdown-button',
      variant,
      { 'set-width': isBlock || width },
      { disabled },
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
        ref={(ref) => { this.buttonWrapperRef = ref; }}
      >
        <button
          type="button"
          className={cx('split-button-primary')}
          onClick={defaultOption.callback}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
        >
          {defaultOption.label}
        </button>
        <button
          type="button"
          onClick={this.handleDropdownButtonClick}
          className={cx('split-button-chevron', { 'is-active': this.state.isOpen })}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
          aria-label="More Options"
        >
          <span className={cx('chevron-icon')} />
        </button>
        <Dropdown
          boundingRef={boundingRef}
          targetRef={() => this.buttonWrapperRef}
          isOpen={this.state.isOpen}
          handleRequestClose={this.handleDropdownButtonClick}
          itemSelectedCallback={DropdownButton.itemSelectedCallback}
          width={(this.buttonWrapperRef && isBlock) ? `${this.buttonWrapperRef.offsetWidth}px` : width}
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
