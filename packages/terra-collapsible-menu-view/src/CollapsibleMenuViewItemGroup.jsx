import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ButtonGroup from 'terra-button-group';
import List from 'terra-list';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Callback function that is called when the group's selection state changes
   */
  onChange: PropTypes.func,
  /**
   * Indicates if the group should be selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * CollapsibleMenuView.Items to be grouped together
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isSelectable: false,
};

const childContextTypes = {
  isCollapsibleGroupItem: PropTypes.bool,
};

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};


class CollapsibleMenuViewItemGroup extends React.Component {
  getChildContext() {
    return { isCollapsibleGroupItem: true };
  }

  render() {
    const {
      isSelectable,
      children,
      ...customProps
    } = this.props;

    const { isCollapsibleMenuItem } = this.context;

    if (isCollapsibleMenuItem && isSelectable) {
      return (
        <Menu.ItemGroup {...customProps}>
          {children}
        </Menu.ItemGroup>
      );
    } else if (isCollapsibleMenuItem) {
      return (
        <List {...customProps}>
          {children}
        </List>
      );
    }

    const buttonGroupClassNames = cx([
      'face-up-item',
      customProps.className,
    ]);

    return (
      <ButtonGroup {...customProps} className={buttonGroupClassNames} isSelectable={isSelectable}>
        {children}
      </ButtonGroup>
    );
  }
}

CollapsibleMenuViewItemGroup.propTypes = propTypes;
CollapsibleMenuViewItemGroup.defaultProps = defaultProps;
CollapsibleMenuViewItemGroup.childContextTypes = childContextTypes;
CollapsibleMenuViewItemGroup.contextTypes = contextTypes;

export default CollapsibleMenuViewItemGroup;
