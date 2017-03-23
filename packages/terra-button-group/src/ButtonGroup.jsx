import React, { PropTypes } from 'react';
import classNames from 'classnames';

import ButtonGroupButton from './ButtonGroupButton';
import './ButtonGroup.scss';

const propTypes = {
  /**
   * Callback function when the state changes
   **/
  onChange: PropTypes.func,

  /**
   * Sets the button group style variation. One of `defaut` or `secondary`
   **/
  variant: PropTypes.oneOf(['default', 'secondary']),

  /**
   * Sets the button size. One of tiny, small, medium, large, huge
   **/
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * Indicates if the buttons should have reduced top and bottom padding
   **/
  isCompact: PropTypes.bool,

  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isSelectable: PropTypes.bool,

  /**
   * Button group button components that should be grouped together
   **/
  buttons: PropTypes.arrayOf(PropTypes.element),

  /**
   * Child nodes
   **/
  children: PropTypes.node,
};

const defaultProps = {
  variant: 'default',
  isCompact: false,
  isSelectable: false,
  buttons: [],
  children: [],
};

class ButtonGroup extends React.Component {
  static getInitialState(buttons, isSelectable) {
    if (!isSelectable) { return null; }

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].props.isSelected) {
        return i;
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      selectedIndex: ButtonGroup.getInitialState(this.props.buttons.concat(this.props.children), this.props.isSelectable),
    };
  }

  componentWillReceiveProps(nextProps) {
    const newState = ButtonGroup.getInitialState(nextProps.buttons.concat(nextProps.children), nextProps.isSelectable);

    if (newState !== this.state.selectedIndex) {
      this.setState({ selectedIndex: newState });
    }
  }

  handleOnClick(event, index) {
    // No need to re-render if the button clicked is already selected
    if (this.state.selectedIndex !== index) {
      this.setState({ selectedIndex: index });

      if (this.props.onChange) {
        this.props.onChange(this.state.selectedIndex);
      }
    }
  }

  wrapOnClick(item, index) {
    const onClick = item.props.onClick;
    return (event) => {
      this.handleOnClick(event, index);

      if (onClick) {
        onClick(event);
      }
    };
  }

  render() {
    const { onChange, variant, size, isCompact, isSelectable, buttons, children, ...extraProps } = this.props;
    const buttonGroupClassNames = classNames(['terra-ButtonGroup',
      extraProps.className,
    ]);

    let allButtons = buttons.concat(children);

    allButtons = allButtons.map((button, i) => {
      let onClick;
      if (isSelectable) {
        onClick = this.wrapOnClick(button, i);
      } else {
        onClick = button.props.onClick;
      }

      return React.cloneElement(button, {
        onClick,
        isSelected: this.state.selectedIndex === i,
        size: this.props.size,
        variant: this.props.variant,
        compact: this.props.isCompact,
      });
    });

    return (
      <div {...extraProps} className={buttonGroupClassNames}>
        {allButtons}
      </div>
    );
  }
}

ButtonGroup.propTypes = propTypes;

ButtonGroup.defaultProps = defaultProps;

ButtonGroup.Button = ButtonGroupButton;

export default ButtonGroup;

