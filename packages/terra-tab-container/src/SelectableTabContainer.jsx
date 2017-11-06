import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import SelectableUtils from './SelectableUtils';
import Tab from './Tab';
import TabPanel from './_TabPanel';
import styles from './TabContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Tab style. One of: "modular" or "structural"
   */
  variant: PropTypes.oneOf(['modular', 'structural']),

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected tab's key
   */
  onChange: PropTypes.func,

  /**
   * Tab components to be displayed
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  variant: 'modular',
};

class SelectableTabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.wrapTabOnClick = this.wrapTabOnClick.bind(this);
    this.wrapTabOnKeyDown = this.wrapTabOnKeyDown.bind(this);
  }

  wrapTabOnKeyDown(tab, index) {
    return (event) => {
      if (tab.props.onKeyDown) {
        tab.props.onKeyDown(event);
      }

      if (event.nativeEvent.keyCode === SelectableUtils.KEYCODES.LEFT_ARROW) {
        // TODO: Find previous tab
      } else if (event.nativeEvent.keyCode === SelectableUtils.KEYCODES.RIGHT_ARROW) {
        // TODO: Find next tab and call onChange or focus menuToggle
      }
    };
  }

  wrapTabOnClick(tab) {
    return (event) => {
      if (this.props.onChange) {
        this.props.onChange(event, tab.key);
      }
      if (tab.props.onClick) {
        tab.props.onClick(event);
      }
    };
  }

  render() {
    const { variant, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    const tabContainerClassNames = cx([
      'tab-container',
      variant,
      attributes.className,
    ]);

    let content = null;
    const clonedTabs = [];
    React.Children.forEach(children, (child, index) => {
      if (child.props.isSelected) {
        content = child.props.children;
      }
      clonedTabs.push(React.cloneElement(child, {
        onClick: this.wrapTabOnClick(child),
        onKeyDown: this.wrapTabOnKeyDown(child, index),
      }));
    });

    return (
      <div className={tabContainerClassNames}>
        <TabPanel>
          {clonedTabs}
        </TabPanel>
        <div className={cx('tab-content')}>
          {content}
        </div>
      </div>
    );
  }
}

SelectableTabContainer.propTypes = propTypes;
SelectableTabContainer.defaultProps = defaultProps;
SelectableTabContainer.Tab = Tab;
SelectableTabContainer.Utils = SelectableUtils;

export default SelectableTabContainer;
