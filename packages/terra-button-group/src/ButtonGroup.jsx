import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ButtonGroupButton from './ButtonGroupButton';
import ButtonGroupUtils from './ButtonGroupUtils';
import styles from './ButtonGroup.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node,

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
    const onClick = item.props.onClick;
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
      onChange,
      selectedKeys,
      ...customProps
    } = this.props;

    const buttonGroupClassNames = cx(['button-group',
      customProps.className,
    ]);

    const allButtons = React.Children.map(children, (child) => {
      const isActive = selectedKeys.indexOf(child.key) > -1;

      return React.cloneElement(child, {
        onClick: this.wrapOnClick(child),
        className: cx([{ 'is-active': isActive }, child.props.className]),
        'aria-pressed': isActive,
      });
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

export default ButtonGroup;
