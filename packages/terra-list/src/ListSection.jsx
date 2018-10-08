import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SelectableUtils from './SelectableUtils';
import ListItem from './ListItem';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the list item has a disclosure indicator presented.
   */
  hasChevron: PropTypes.bool,
  /**
   * Header to be placed within a section list item
   */
  header: PropTypes.element,
  /**
   * Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Function callback for the ref of the li.
   */
  listKey: PropTypes.string.isRequired,
  /**
   * Function callback for the ref of the li.
   */
  onChange: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  refCallback: PropTypes.func,
  /**
   * Array of keys associated to selected list items
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Title to be applied to the section header.
   */
  title: PropTypes.string,
};

const defaultProps = {
  children: [],
  hasChevron: undefined,
  isCollapsed: false,
  isSelected: false,
  isSelectable: undefined,
  selectedKeys: [],
};

class ListSection extends React.Component {
  constructor(props) {
    super(props);
    this.aggregateRef = this.aggregateRef.bind(this);
    this.sendRefs = this.sendRefs.bind(this);
    this.aggregatedRefs = [];
  }

  componentDidMount() {
    this.sendRefs();
  }

  componentDidUpdate() {
    this.sendRefs();
  }

  sendRefs() {
    if (this.props.refCallback) {
      const tempRefs = this.aggregatedRefs;
      this.aggregatedRefs = [];
      this.props.refCallback(tempRefs);
    }
  }

  aggregateRef(node, index) {
    this.aggregatedRefs[index + 1] = node;
  }

  render() {
    const {
      children,
      disableUnselectedItems,
      hasChevron,
      header,
      isCollapsed,
      isSelected,
      isSelectable,
      listKey,
      onChange,
      refCallback,
      selectedKeys,
      ...customProps
    } = this.props;

    let sectionItems;
    if (!isCollapsed) {
      sectionItems = React.Children.map(children, (child, index) => {
        const newProps = SelectableUtils.newPropsForItem(child, onChange, hasChevron, selectedKeys, disableUnselectedItems, isSelectable);
        newProps.refCallback = node => this.aggregateRef(node, index);
        return React.cloneElement(child, newProps);
      });
    } else if (this.aggregatedRefs.length > 1) {
      this.aggregatedRefs = this.aggregatedRefs.slice(0, 1);
    }

    return (
      <React.Fragment>
        <ListItem {...customProps} refCallback={node => this.aggregateRef(node, -1)}>
          {header}
        </ListItem>
        {sectionItems}
      </React.Fragment>
    );
  }
}

ListSection.propTypes = propTypes;
ListSection.defaultProps = defaultProps;

export default ListSection;
