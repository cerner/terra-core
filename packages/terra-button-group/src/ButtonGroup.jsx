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
   * Indicates if the button group should have toggle-style selectability
   */
  isSelectable: PropTypes.bool,

  /**
   * Callback function when the state changes. Parameters are (event, key).
   */
  onChange: PropTypes.func,

  /**
   * Sets the select type. One of `SelectTypes['NON-SELECTABLE']`, `SelectTypes['SINGLE-SELECT']`, or `SelectTypes['MULTI-SELECT']`.
   */
  selectType: PropTypes.oneOf([SelectTypes['NON-SELECTABLE'], SelectTypes['SINGLE-SELECT'], SelectTypes['MULTI-SELECT']]),
};

const defaultProps = {
  isSelectable: false,
  children: [],
  selectType: SelectTypes['NON-SELECTABLE'],
};

class ButtonGroup extends React.Component {
  static getInitialState(buttons, isSelectable) {
    if (!isSelectable) { return null; }

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].props.isSelected && !buttons[i].props.isDisabled) {
        return buttons[i].key;
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      selectedKey: ButtonGroup.getInitialState(this.props.children, this.props.isSelectable),
    };
  }

  handleOnClick(event, key) {
    // No need to re-render if the button clicked is already selected
    if (this.state.selectedKey !== key) {
      event.preventDefault();
      this.setState({ selectedKey: key });

      if (this.props.onChange) {
        this.props.onChange(event, key);
      }
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
      isSelectable,
      selectType,
      ...customProps
    } = this.props;

    const buttonGroupClassNames = cx(['button-group',
      customProps.className,
    ]);

    const allButtons = children.map((child) => {
      let onClick;
      if (isSelectable) {
        onClick = this.wrapOnClick(child);
      } else {
        onClick = child.props.onClick;
      }

      debugger;

      return React.cloneElement(child, {
        onClick,
        isSelected: this.state.selectedKey === child.key,
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
