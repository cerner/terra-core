import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from './_Dropdown';
import styles from './DropdownButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  boundingRef: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  })).isRequired,
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
      options,
      isDisabled,
      isBlock,
      ...customProps
    } = this.props;
    const DropdownButtonClassNames = cx([
      'dropdown-button',
      customProps.className,
    ]);

    return (
      <div {...customProps} className={DropdownButtonClassNames}>
        <button
          ref={(buttonRef) => { this.buttonRef = buttonRef; }}
          type="button"
          onClick={this.handleDropdownButtonClick}
        >
          Press me
        </button>
        <Dropdown
          boundingRef={() => boundingRef}
          targetRef={() => this.buttonRef}
          isOpen={this.state.isOpen}
          options={options}
          handleRequestClose={this.handleDropdownButtonClick}
          itemSelectedCallback={DropdownButton.itemSelectedCallback}
        />
      </div>
    );
  }
}

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
