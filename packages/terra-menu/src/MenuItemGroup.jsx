import React from 'react';
import PropTypes from 'prop-types';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Menu.Items to be grouped together
   */
  children: PropTypes.node.isRequired,

  /**
   * Callback function called when selected index changes
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  children: [],
};

const childContextTypes = {
  isGroupItem: PropTypes.bool,
};

class MenuItemGroup extends React.Component {
  getChildContext() {
    return { isGroupItem: true };
  }
  render() {
    const { children, onChange, ...customProps } = this.props;

    const attributes = Object.assign({}, customProps);

    return (
      <SingleSelectList.Item
        {...attributes}
        content={(
          <SingleSelectList onChange={onChange} >
            {children}
          </SingleSelectList>
        )}
      />
    );
  }
}


MenuItemGroup.propTypes = propTypes;
MenuItemGroup.defaultProps = defaultProps;
MenuItemGroup.childContextTypes = childContextTypes;

export default MenuItemGroup;
