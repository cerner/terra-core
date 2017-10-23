import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import 'terra-base/lib/baseStyles';
import CollapsibleMenuViewItem from './CollapsibleMenuViewItem';
import CollapsibleMenuViewItemGroup from './CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewToggle from './CollapsibleMenuViewToggle';
import CollapsibleMenuViewDivider from './CollapsibleMenuViewDivider';
import styles from './CollapsibleMenuView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Item/ItemGroup/Divider elements to display in the view. Items that will fit in the space available will
   * display face-up the remainder will be rolled into a menu
   */
  children: PropTypes.node.isRequired,

  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: PropTypes.oneOf(Object.keys(CollapsibleMenuViewItem.Opts.widths)),

  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
};

class CollapsibleMenuView extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.setMenuButton = this.setMenuButton.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      hiddenStartIndex: -1,
      menuHidden: false,
      isCalculating: true,
    };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      // Resetting the state so that all elements will be rendered face-up for width calculations
      this.setState({ hiddenStartIndex: -1, menuHidden: false, isCalculating: true });
      this.handleResize(entries[0].contentRect.width);
    });
    this.resizeObserver.observe(this.container);
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setMenuButton(node) {
    if (node === null) { return; }
    this.menuButton = node;
  }

  handleResize(width) {
    const menuButtonWidth = this.menuButton.getBoundingClientRect().width;
    const availableWidth = width - menuButtonWidth;
    let hiddenStartIndex = -1;
    let calcWidth = 0;
    let menuHidden = true;

    for (let i = 0; i < this.props.children.length; i += 1) {
      const child = this.container.children[i];
      calcWidth += child.getBoundingClientRect().width;
      if (calcWidth > availableWidth) {
        hiddenStartIndex = i;
        menuHidden = false;
        break;
      }
    }

    this.setState({ menuHidden, hiddenStartIndex, isCalculating: false });
  }

  render() {
    const { children, boundingRef, menuWidth, ...customProps } = this.props;
    const visibleChildren = React.Children.toArray(children);
    let hiddenChildren = null;
    if (this.state.hiddenStartIndex >= 0) {
      hiddenChildren = visibleChildren.splice(this.state.hiddenStartIndex);
    }

    const collapsibleMenuViewClassName = cx([
      'collapsible-menu-view',
      { 'is-calculating': this.state.isCalculating },
      customProps.className,
    ]);
    const menuButtonClassName = cx([
      'menu-button',
      { hidden: this.state.menuHidden },
    ]);

    return (
      <div {...customProps} className={collapsibleMenuViewClassName} ref={this.setContainer}>
        {visibleChildren}
        <div className={menuButtonClassName} ref={this.setMenuButton}>
          <CollapsibleMenuViewItem
            icon={<IconEllipses />}
            subMenuItems={hiddenChildren}
            boundingRef={boundingRef}
            menuWidth={menuWidth}
          />
        </div>
      </div>
    );
  }
}

CollapsibleMenuView.Item = CollapsibleMenuViewItem;
CollapsibleMenuView.ItemGroup = CollapsibleMenuViewItemGroup;
CollapsibleMenuView.Toggle = CollapsibleMenuViewToggle;
CollapsibleMenuView.Divider = CollapsibleMenuViewDivider;

CollapsibleMenuView.propTypes = propTypes;

export default CollapsibleMenuView;
