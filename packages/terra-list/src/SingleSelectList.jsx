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
    // state gets updated when getDerivedStateFromProps gets called right before each render.
    this.state = {
      selectedIndex: props.hasSections ?
        SelectableList.Utils.initialSingleSelectedIndexWithSections(props.children) :
        SelectableList.Utils.initialSingleSelectedIndex(props.children),
      hasSections: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.hasSections !== state.hasSections) {
      return {
        hasSections: props.hasSections,
      };
    }
    return null;
  }

  handleOnChange(event, index) {
    if (SelectableList.Utils.shouldHandleSingleSelect(this.state.selectedIndex, index)) {
      event.preventDefault();
      this.setState(prevState => ({
        ...prevState,
        selectedIndex: index,
      }));
      if (this.props.onChange) {
        this.props.onChange(event, index);
      }
    }
  }

  render() {
    const {
      children,
      isDivided,
      onChange,
      hasChevrons,
      hasSections,
      ...customProps
    } = this.props;
    return (
      <SelectableList
        {...customProps}
        isDivided={isDivided}
        onChange={this.handleOnChange}
        hasChevrons={hasChevrons}
        hasSections={this.state.hasSections}
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
