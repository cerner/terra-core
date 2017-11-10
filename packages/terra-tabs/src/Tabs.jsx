import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import 'terra-base/lib/baseStyles';
import TabUtils from './TabUtils';
import TabPane from './TabPane';
import CollapsibleTabs from './_CollapsibleTabs';
import styles from './Tabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Tabs style. One of: "modular" or "structural"
   */
  variant: PropTypes.oneOf(['modular', 'structural']),

  tabFill: PropTypes.bool,

  fill: PropTypes.bool,

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: PropTypes.func,

  /**
   * Tabs.Pane components to be displayed
   */
  children: PropTypes.node.isRequired,

  /**
   * Key of the pane that should be active. Use this prop along with onChange to create controlled tabs.
   */
  activeKey: PropTypes.string,

  /**
   * Key of the pane that should be open initially.
   */
  defaultActiveKey: PropTypes.string,
};

const defaultProps = {
  variant: 'modular',
  tabFill: false,
  fill: false,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.wrapPaneOnClick = this.wrapPaneOnClick.bind(this);
    this.wrapPaneOnKeyDown = this.wrapPaneOnKeyDown.bind(this);
    this.state = {
      activeKey: this.props.defaultActiveKey,
    };
  }

  handleOnChange(event, selectedKey) {
    if (this.props.onChange) {
      this.props.onChange(event, selectedKey);
    } else if (this.state.activeKey !== selectedKey) {
      this.setState({ activeKey: selectedKey });
    }
  }

  // TODO: Determine how keyboard navigation should work
  handleOnKeyDown(event) {
    const tabCount = React.Children.count(this.props.children);

    // If we have less than 2 tabs we don't need to worry about arrow key presses
    if (tabCount < 2) {
      return;
    }

    let currentActiveIndex = -1;
    React.Children.forEach(this.props.children, (child, index) => {
      if (child.key === this.state.activeKey) {
        currentActiveIndex = index;
      }
    });

    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.LEFT_ARROW) {
      if (currentActiveIndex > 0) {
        this.handleOnChange(event, this.props.children[currentActiveIndex - 1].key);
      }
    } else if (event.nativeEvent.keyCode === TabUtils.KEYCODES.RIGHT_ARROW) {
      if (currentActiveIndex === tabCount - 1) {
        // TODO: Focus menu
      } else {
        this.handleOnChange(event, this.props.children[currentActiveIndex + 1].key);
      }
    }
  }

  wrapPaneOnKeyDown(pane, index) {
    return (event) => {
      if (pane.props.onKeyDown) {
        pane.props.onKeyDown(event);
      }

      // If length is not defined then there is only one child element and we do not need to handle arrow key presses.
      if (!this.props.children.length) {
        return;
      }

      if (event.nativeEvent.keyCode === TabUtils.KEYCODES.LEFT_ARROW) {
        if (index > 0) {
          this.handleOnChange(event, this.props.children[index - 1].key);
        }
      } else if (event.nativeEvent.keyCode === TabUtils.KEYCODES.RIGHT_ARROW) {
        if (index === this.props.children.length - 1) {
          // TODO: Focus menu
        } else {
          this.handleOnChange(event, this.props.children[index + 1].key);
        }
      }
    };
  }

  wrapPaneOnClick(pane) {
    return (event) => {
      if (this.props.onChange) {
        this.props.onChange(event, pane.key);
      } else {
        this.handleOnChange(event, pane.key);
      }
      if (pane.props.onClick) {
        pane.props.onClick(event);
      }
    };
  }

  render() {
    const {
      variant,
      tabFill,
      fill,
      onChange,
      children,
      activeKey,
      defaultActiveKey,
      ...customProps
    } = this.props;
    const attributes = Object.assign({}, customProps);
    const tabsClassNames = cx([
      'tabs-container',
      { 'tab-fill': tabFill },
      variant,
      attributes.className,
    ]);

    let content = null;
    const clonedPanes = [];
    React.Children.forEach(children, (child) => {
      let isActive = false;
      if (child.key === this.state.activeKey || child.key === this.props.activeKey) {
        isActive = true;
        content = child.props.children;
      }
      clonedPanes.push(React.cloneElement(child, {
        className: cx({ 'is-active': isActive }),
        onClick: this.wrapPaneOnClick(child),
      }));
    });

    return (
      <ContentContainer
        className={tabsClassNames}
        fill={fill}
        header={(
          <CollapsibleTabs activeKey={activeKey || this.state.activeKey} onKeyDown={this.handleOnKeyDown}>
            {clonedPanes}
          </CollapsibleTabs>
        )}
      >
        <div className={cx('tab-content')}>
          {content}
        </div>
      </ContentContainer>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Pane = TabPane;

export default Tabs;
