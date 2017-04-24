import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import ButtonGroupButton from './ButtonGroupButton';
import './ButtonGroup.scss';

const propTypes = {
  /**
   * Button group button components that should be grouped together
   **/
  buttons: PropTypes.arrayOf(PropTypes.element),

  /**
   * Child nodes
   **/
  children: PropTypes.node,

  /**
   * Indicates if the buttons should have reduced top and bottom padding
   **/
  isCompact: PropTypes.bool,

  /**
   * Indicates if the button group should have toggle-style selectability
   **/
  isSelectable: PropTypes.bool,

  /**
   * Callback function when the state changes
   **/
  onChange: PropTypes.func,

  /**
   * Sets the button size. One of tiny, small, medium, large, huge
   **/
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * Sets the button group style variation. One of `defaut` or `secondary`
   **/
  variant: PropTypes.oneOf(['default', 'secondary']),
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
    const newSelectedIndex = ButtonGroup.getInitialState(nextProps.buttons.concat(nextProps.children), nextProps.isSelectable);

    if (newSelectedIndex !== this.state.selectedIndex) {
      this.setState({ selectedIndex: newSelectedIndex });
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
    const { onChange, variant, size, isCompact, isSelectable, buttons, children, ...customProps } = this.props;
    const buttonGroupClassNames = classNames(['terra-ButtonGroup',
      customProps.className,
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
        variant,
        isCompact,
        size,
        isSelected: this.state.selectedIndex === i,
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

export default ButtonGroup;
