import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './SelectOption.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Option value.
   */
  value: PropTypes.string.isRequired,
  /**
   * Option display text.
   */
  display: PropTypes.string,
  /**
   * Indicates if option should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Indicates the option is selected (only one option can be selected at a time).
   */
  isSelected: PropTypes.bool,
  /**
   * This should be used when custom option display content is needed. If both children and display are set, only display will be used.
   */
  children: PropTypes.node,
};

const defaultProps = {
  disabled: false,
  isSelected: false,
};

class SelectOption extends React.Component {
  constructor(props) {
    super(props);

    this.setOptionRef = this.setOptionRef.bind(this);
  }

  componentDidMount() {
    if (this.optionNode && this.props.isSelected) {
      this.optionNode.focus();
    }
  }

  componentDidUpdate() {
    if (this.optionNode && this.props.isSelected) {
      this.optionNode.focus();
    }
  }

  setOptionRef(node) {
    this.optionNode = node;
  }

  render() {
    const { value, display, disabled, isSelected, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);

    attributes['aria-disabled'] = disabled;

    if (disabled) {
      delete attributes.onClick;
      delete attributes.onKeyDown;
    }

    const optionClassNames = cx([
      'option',
      { 'is-disabled': disabled },
      { 'is-selected': isSelected },
      attributes.className,
    ]);

    return (
      <li
        {...attributes}
        tabIndex={disabled ? '-1' : '0'}
        role="option"
        className={optionClassNames}
        data-value={value}
        disabled={disabled}
        ref={this.setOptionRef}
      >
        {display || children}
      </li>
    );
  }
}

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;
export default SelectOption;
