import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SelectableList from './SelectableList';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Whether or not the child list items has a disclosure indicator presented.
   */
  hasChevrons: PropTypes.bool,
  /**
   * Whether or not the child items should be displayed in sections with header and list of elements.
   */
  hasSections: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  children: [],
  isDivided: false,
  hasChevrons: false,
  hasSections: false,
  onChange: undefined,
};

class SingleSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    if (!this.props.hasSections) {
      // if it is not sections, then handle it differently.
      this.state = { selectedIndex: SelectableList.Utils.initialSingleSelectedIndex(this.props.children) };
    } else {
      // hasSections, so handle the index differently.
      this.state = { selectedIndex: SelectableList.Utils.initialSingleSelectedIndexWithSections(this.props.children) };
    }
  }

  handleOnChange(event, index) {
    if (SelectableList.Utils.shouldHandleSingleSelect(this.state.selectedIndex, index)) {
      event.preventDefault();
      this.setState({ selectedIndex: index });
      if (this.props.onChange) {
        this.props.onChange(event, index);
      }
    }
  }

  render() {
    const { children, isDivided, onChange, hasChevrons, hasSections, ...customProps } = this.props;
    return (
      <SelectableList
        {...customProps}
        isDivided={isDivided}
        onChange={this.handleOnChange}
        hasChevrons={hasChevrons}
        hasSections={hasSections}
        selectedIndexes={[this.state.selectedIndex]}
        disableUnselectedItems={false}
      >
        {children}
      </SelectableList>
    );
  }
}

SingleSelectList.propTypes = propTypes;
SingleSelectList.defaultProps = defaultProps;
SingleSelectList.Item = SelectableList.Item;
SingleSelectList.Section = SelectableList.Section;

export default SingleSelectList;
