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
   * Whether or not the child items should be displayed in sections with header and list of elements.
   */
  hasSections: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * The maximum number of list items that can be selected.
   */
  maxSelectionCount: PropTypes.number,
};

const defaultProps = {
  children: [],
  isDivided: false,
  hasSections: false,
  onChange: undefined,
  maxSelectionCount: undefined,
};

class MultiSelectList extends React.Component {

  static getDerivedStateFromProps(props, state) {
    if (props.hasSections !== state.hasSections) {
      return {
        hasSections: props.hasSections,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    // state gets updated when getDerivedStateFromProps gets called right before each render.
    this.state = {
      selectedIndexes: props.hasSections ?
        SelectableList.Utils.initialMultiSelectedIndexesWithSections(props.children, props.maxSelectionCount) :
        SelectableList.Utils.initialMultiSelectedIndexes(props.children, props.maxSelectionCount),
      hasSections: false,
    };
  }

  handleOnChange(event, index) {
    const { children, maxSelectionCount } = this.props;
    if (SelectableList.Utils.shouldHandleMultiSelect(children, maxSelectionCount, this.state.selectedIndexes, index, this.props.hasSections)) {
      event.preventDefault();
      const newIndexes = SelectableList.Utils.updatedMultiSelectedIndexes(this.state.selectedIndexes, index);
      this.setState(prevState => ({
        ...prevState,
        selectedIndexes: newIndexes,
      }));
      if (this.props.onChange) {
        this.props.onChange(event, newIndexes);
      }
    }
  }

  render() {
    const { children, isDivided, onChange, maxSelectionCount, hasSections, ...customProps } = this.props;
    let maxCount = 0;
    if (!this.state.hasSections) {
      maxCount = SelectableList.Utils.validatedMaxCount(children, maxSelectionCount);
    } else {
      maxCount = SelectableList.Utils.validatedMaxCountForSections(children, maxSelectionCount);
    }
    return (
      <SelectableList
        {...customProps}
        isDivided={isDivided}
        onChange={this.handleOnChange}
        selectedIndexes={this.state.selectedIndexes}
        hasSections={this.state.hasSections}
        disableUnselectedItems={this.state.selectedIndexes.length >= maxCount}
      >
        {children}
      </SelectableList>
    );
  }
}

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;
MultiSelectList.Item = SelectableList.Item;
MultiSelectList.Section = SelectableList.Section;

export default MultiSelectList;
