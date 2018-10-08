import React from 'react';
import PropTypes from 'prop-types';
import SelectableList from 'terra-list/lib/SelectableList';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Menu.Items to be grouped together.
   */
  children: PropTypes.node.isRequired,

  /**
   * Callback function called when selected index changes.
   */
  onChange: PropTypes.func,
};

const childContextTypes = {
  isGroupItem: PropTypes.bool,
};

class MenuItemGroup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedKey: null };
  }

  getChildContext() {
    return { isGroupItem: true };
  }

  handleOnChange(event, response) {
    if (SelectableList.Utils.shouldHandleSingleSelect(this.state.selectedKey, response.key)) {
      event.preventDefault();
      this.setState({ selectedKey: response.key });
      if (this.props.onChange) {
        this.props.onChange(event, response);
      }
    }
  }

  render() {
    const { children, onChange, ...customProps } = this.props;

    return (
      <SelectableList {...customProps} onChange={this.handleOnChange} role="group" selectedKeys={[this.state.selectedKey]}>
        {children}
      </SelectableList>
    );
  }
}

MenuItemGroup.propTypes = propTypes;
MenuItemGroup.childContextTypes = childContextTypes;

export default MenuItemGroup;
