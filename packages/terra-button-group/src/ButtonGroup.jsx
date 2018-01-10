import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ButtonGroupButton from './ButtonGroupButton';
import styles from './ButtonGroup.scss';

const cx = classNames.bind(styles);

const SelectTypes = {
  'NON-SELECTABLE': 'non-selectable',
  'SINGLE-SELECT': 'single-select',
  'MULTI-SELECT': 'multi-select',
};

const propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node,

  /**
   * A list of keys of the buttons that should be selected initially.
   */
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

  /**
   * Callback function when the state changes. Parameters are (event, key).
   */
  onChange: PropTypes.func,

  /**
   * A list of keys of the buttons that should be selected. Use this prop along with onChange to create a controlled button group.
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),

  /**
   * Sets the select type for toggle-style selectability. One of `SelectTypes['NON-SELECTABLE']`, `SelectTypes['SINGLE-SELECT']`, or `SelectTypes['MULTI-SELECT']`.
   */
  selectType: PropTypes.oneOf([SelectTypes['NON-SELECTABLE'], SelectTypes['SINGLE-SELECT'], SelectTypes['MULTI-SELECT']]),
};

const defaultProps = {
  children: [],
  selectType: SelectTypes['NON-SELECTABLE'],
};

class ButtonGroup extends React.Component {
  static getInitialState(buttons, selectType) {
    const selectedKeys = [];
    if (selectType === SelectTypes['NON-SELECTABLE']) { return selectedKeys; }

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].props.isSelected && !buttons[i].props.isDisabled) {
        selectedKeys.push(buttons[i].key);

        if (selectType === SelectTypes['SINGLE-SELECT']) { return selectedKeys; }
      }
    }

    // A single select button group must have one button selected by default.
    // If non was specified, default to select the first non disabled button in the group.
    if (selectType === SelectTypes['SINGLE-SELECT']) {
      for (let i = 0; i < buttons.length; i += 1) {
        if (!buttons[i].props.isDisabled) {
          selectedKeys.push(buttons[i].key);
          return selectedKeys;
        }
      }
    }

    return selectedKeys;
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      selectedKeys: ButtonGroup.getInitialState(this.props.children, this.props.selectType),
    };
  }

  handleOnClick(event, key) {
    if (this.props.selectType === SelectTypes['NON-SELECTABLE']) { return; }

    const index = this.state.selectedKeys.indexOf(key);

    // No need to re-render if the button clicked is already selected
    if (this.props.selectType === SelectTypes['SINGLE-SELECT'] && index >= 0) { return; }

    event.preventDefault();

    let newKeys = [];
    if (this.props.selectType === SelectTypes['SINGLE-SELECT']) {
      newKeys.push(key);
    } else { // selectType should be 'MULTI-SELECT'
      newKeys = this.state.selectedKeys.slice();
      if (index > -1) {
        newKeys.splice(index, 1);
      } else {
        newKeys.push(key);
      }
    }

    this.setState({ selectedKeys: newKeys });

    if (this.props.onChange) {
      this.props.onChange(event, key);
    }
  }

  wrapOnClick(item) {
    const onClick = item.props.onClick;
    return (event) => {
      this.handleOnClick(event, item.key);

      if (onClick) {
        onClick(event);
      }
    };
  }

  render() {
    const {
      children,
      onChange,
      selectType,
      ...customProps
    } = this.props;

    const buttonGroupClassNames = cx(['button-group',
      customProps.className,
    ]);

    const allButtons = children.map((child) => {
      let onClick;
      if (selectType === SelectTypes['NON-SELECTABLE']) {
        onClick = child.props.onClick;
      } else {
        onClick = this.wrapOnClick(child);
      }

      const isActive = this.state.selectedKeys.indexOf(child.key) > -1;

      return React.cloneElement(child, {
        onClick,
        className: cx({ 'is-active': isActive }),
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

ButtonGroup.Opts = {};
ButtonGroup.Opts.selectTypes = SelectTypes;

export default ButtonGroup;
