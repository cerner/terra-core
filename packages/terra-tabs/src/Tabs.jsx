import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import 'terra-base/lib/baseStyles';
import TabPane from './TabPane';
import CollapsibleTabs from './_CollapsibleTabs';
import styles from './Tabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Tabs style. One of: "modular" or "structural"
   */
  variant: PropTypes.oneOf(['modular', 'structural']),
  /**
   * Indicates if tabs should fill the width available in the tab bar.
   */
  tabFill: PropTypes.bool,
  /**
   * Indicates if the pane content should fill to the height of the parent container.
   */
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
    this.getInitialState = this.getInitialState.bind(this);
    this.getActiveTabIndex = this.getActiveTabIndex.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.wrapPaneOnClick = this.wrapPaneOnClick.bind(this);
    this.state = {
      activeKey: this.getInitialState(),
    };
  }

  getInitialState() {
    if (this.props.activeKey) {
      return null;
    } else if (this.props.defaultActiveKey) {
      return this.props.defaultActiveKey;
    } else if (this.props.children.length) {
      return this.props.children[0].key;
    }

    return this.props.children.key;
  }

  getActiveTabIndex() {
    let activeIndex = -1;
    React.Children.forEach(this.props.children, (child, index) => {
      if (child.key === this.state.activeKey || child.key === this.props.activeKey) {
        activeIndex = index;
      }
    });

    return activeIndex;
  }


  handleOnChange(event, selectedKey) {
    if (this.props.onChange) {
      this.props.onChange(event, selectedKey);
    } else if (this.state.activeKey !== selectedKey) {
      this.setState({ activeKey: selectedKey });
    }
  }

  wrapPaneOnClick(pane) {
    return (event) => {
      this.handleOnChange(event, pane.key);

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
      if (child.key === this.state.activeKey || child.key === activeKey) {
        isActive = true;
        content = child.props.children;
      }
      clonedPanes.push(React.cloneElement(child, {
        className: cx({ 'is-active': isActive }),
        'aria-selected': isActive,
        onClick: this.wrapPaneOnClick(child),
      }));
    });

    return (
      <ContentContainer
        className={tabsClassNames}
        fill={fill}
        header={(
          <CollapsibleTabs
            activeKey={activeKey || this.state.activeKey}
            activeIndex={this.getActiveTabIndex()}
            onChange={this.handleOnChange}
            variant={variant}
          >
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
