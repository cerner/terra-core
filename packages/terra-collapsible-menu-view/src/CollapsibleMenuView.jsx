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
   * Width for the menu
   */
  menuWidth: PropTypes.oneOf(['160', '240', '320', '640', '960', '1280', '1760']),

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
    this.visibleChildComponents = this.visibleChildComponents.bind(this);
    this.hiddenChildComponents = this.hiddenChildComponents.bind(this);
    this.state = {
      hiddenIndexes: [],
      menuHidden: false,
    };
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => {
        // Resetting the state so that all elements will be rendered face-up for width calculations
        this.setState({ hiddenIndexes: [], menuHidden: false });
        this.handleResize(entries[0].contentRect.width);
      });
      this.resizeObserver.observe(this.container);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    }
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
    const hiddenIndexes = [];
    let calcWidth = 0;
    let menuHidden = true;

    for (let i = 0; i < this.props.children.length; i += 1) {
      const child = this.container.children[i];
      if (menuHidden) {
        calcWidth += child.getBoundingClientRect().width;
        if (i === this.props.children.length - 1 && calcWidth <= width) {
          menuHidden = true;
        } else if (calcWidth > availableWidth) {
          hiddenIndexes.push(i);
          menuHidden = false;
        }
      // Once it has been determined that the menu button is needed there is no need to continue calculations, the rest of the items should be hidden
      } else {
        hiddenIndexes.push(i);
      }
    }

    this.setState({ menuHidden, hiddenIndexes });
  }

  visibleChildComponents(children) {
    const visibleChildren = [];
    for (let i = 0; i < children.length; i += 1) {
      if (this.state.hiddenIndexes.indexOf(i) < 0) {
        visibleChildren.push(children[i]);
      }
    }
    return visibleChildren;
  }

  hiddenChildComponents(children) {
    const indexes = this.state.hiddenIndexes;
    const hiddenChildren = [];
    for (let i = 0; i < indexes.length; i += 1) {
      hiddenChildren.push(children[indexes[i]]);
    }
    return hiddenChildren;
  }

  render() {
    const { children, boundingRef, ...customProps } = this.props;
    const visibleChildren = this.visibleChildComponents(children);
    const hiddenChildren = this.hiddenChildComponents(children);
    const collapsibleMenuViewClassName = cx([
      'collapsible-menu-view',
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
