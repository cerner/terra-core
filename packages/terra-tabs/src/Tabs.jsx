import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import ResponsiveElement from 'terra-responsive-element';
import 'terra-base/lib/baseStyles';
import TabPane from './TabPane';
import CollapsibleTabs from './_CollapsibleTabs';
import CollapsedTabs from './_CollapsedTabs';
import TabUtils from './TabUtils';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

/**
NOTE: This is being commented out until discussions have been resolved around if modular tabs should be removed.
const variants = {
  MODULAR_CENTERED: 'modular-centered',
  MODULAR_LEFT_ALIGNED: 'modular-left-aligned',
  STRUCTURAL: 'structural',
};
*/

const propTypes = {

  /**
   * Tabs style. One of: Tabs.Opts.Variants.MODULAR_CENTERED, Tabs.Opts.Variants.MODULAR_LEFT_ALIGNED, or Tabs.Opts.Variants.STRUCTURAL.
   * NOTE: This is being commented out until discussions have been resolved around if we want modular tabs.
  variant: PropTypes.oneOf([variants.MODULAR_CENTERED, variants.MODULAR_LEFT_ALIGNED, variants.STRUCTURAL]),
  */

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
   * Tabs.Pane components to be displayed.
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
  tabFill: false,
  fill: false,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.getInitialState = this.getInitialState.bind(this);
    this.getActiveTabIndex = this.getActiveTabIndex.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleTruncationChange = this.handleTruncationChange.bind(this);
    this.wrapPaneOnClick = this.wrapPaneOnClick.bind(this);
    this.state = {
      activeKey: this.getInitialState(),
      isLabelTruncated: false,
    };
  }

  getInitialState() {
    if (this.props.activeKey) {
      return null;
    }
    return TabUtils.initialSelectedTabKey(this.props.children, this.props.defaultActiveKey);
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


  handleOnChange(event, selectedPane) {
    if (!selectedPane.props.isDisabled) {
      if (this.props.onChange) {
        this.props.onChange(event, selectedPane.key);
      }
      if (!this.props.activeKey && TabUtils.shouldHandleSelection(this.state.activeKey, selectedPane.key)) {
        this.setState({ activeKey: selectedPane.key });
      }
    }
  }

  handleTruncationChange(isLabelTruncated) {
    if (this.state.isLabelTruncated !== isLabelTruncated) {
      this.setState({ isLabelTruncated });
    }
  }

  wrapPaneOnClick(pane) {
    return (event) => {
      this.handleOnChange(event, pane);

      if (pane.props.onClick) {
        pane.props.onClick(event);
      }
    };
  }

  render() {
    const {
      tabFill,
      fill,
      onChange,
      children,
      activeKey,
      defaultActiveKey,
      ...customProps
    } = this.props;

    // NOTE: Hardcoding variant to structural until discussions have resolved around if we want modular tabs.
    const variant = 'structural';
    const tabsClassNames = cx([
      'tabs-container',
      { 'tab-fill': tabFill },
      variant,
      customProps.className,
    ]);

    let content = null;
    let isIconOnly = false;
    const clonedPanes = [];
    React.Children.forEach(children, (child) => {
      let isActive = false;
      if (child.key === this.state.activeKey || child.key === activeKey) {
        isActive = true;
        content = child.props.children;
      }

      if (child.props.isIconOnly) {
        isIconOnly = true;
      }

      clonedPanes.push(React.cloneElement(child, {
        className: cx([{ 'is-active': isActive }, child.props.className]),
        'aria-selected': isActive,
        onClick: this.wrapPaneOnClick(child),
      }));
    });

    content = React.Children.map(content, contentItem => (
      React.cloneElement(contentItem, { isLabelHidden: isIconOnly || this.state.isLabelTruncated })
    ));

    const collapsibleTabs = (
      <CollapsibleTabs
        activeKey={activeKey || this.state.activeKey}
        activeIndex={this.getActiveTabIndex()}
        onChange={this.handleOnChange}
        onTruncationChange={this.handleTruncationChange}
        variant={variant}
      >
        {clonedPanes}
      </CollapsibleTabs>
    );

    const collapsedTabs = (
      <CollapsedTabs activeKey={activeKey || this.state.activeKey} onTruncationChange={this.handleTruncationChange}>
        {clonedPanes}
      </CollapsedTabs>
    );

    return (
      <ContentContainer
        {...customProps}
        className={tabsClassNames}
        fill={fill}
        header={(
          <ResponsiveElement
            defaultElement={collapsedTabs}
            tiny={collapsibleTabs}
          />
        )}
      >
        <div
          role="tabpanel"
          className={cx(['pane-content', { 'fill-parent': fill }])}
        >
          {content}
        </div>
      </ContentContainer>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Pane = TabPane;
Tabs.Utils = TabUtils;
/**
Note: This is being commented out until discussions have been resolved around if we want modular tabs.
Tabs.Opts = {
  Variants: variants,
};
*/
export default Tabs;
