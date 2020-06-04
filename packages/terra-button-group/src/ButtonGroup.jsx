import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ButtonGroupButton from './ButtonGroupButton';
import ButtonGroupUtils from './ButtonGroupUtils';
import styles from './ButtonGroup.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node,

  /**
   * Allows user to set button group to fill container width.
   */
  isBlock: PropTypes.bool,

  /**
   * Callback function when the state changes. Parameters are (event, key).
   */
  onChange: PropTypes.func,

  /**
   * A list of keys of the buttons that should be selected.
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  children: [],
  isBlock: false,
  selectedKeys: [],
};

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, key) {
    if (this.props.onChange) {
      this.props.onChange(event, key);
    }
  }

  wrapOnClick(item) {
    const { onClick } = item.props;
    return (event) => {
      this.handleOnChange(event, item.key);

      if (onClick) {
        onClick(event);
      }
    };
  }

  render() {
    const {
      children,
      isBlock,
      onChange,
      selectedKeys,
      ...customProps
    } = this.props;

    const theme = this.context;

    const buttonGroupClassNames = classNames(
      cx(
        'button-group',
        { 'is-block': isBlock },
        theme.className,
      ),
      customProps.className,
    );

    const allButtons = children ? [] : undefined;

    React.Children.forEach(children, (child) => {
      const isSelected = selectedKeys.indexOf(child.key) > -1;
      const cloneChild = React.cloneElement(child, {
        onClick: this.wrapOnClick(child),
        className: cx([{ 'is-selected': isSelected && !child.props.isDisabled }, child.props.className]),
        'aria-pressed': isSelected || null,
      });
      allButtons.push(cloneChild);
    });

    return (
      <div {...customProps} className={buttonGroupClassNames}>
        {allButtons}
      </div>
    );
  }
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
ButtonGroup.Button = ButtonGroupButton;
ButtonGroup.Utils = ButtonGroupUtils;
ButtonGroup.contextType = ThemeContext;

export default ButtonGroup;
