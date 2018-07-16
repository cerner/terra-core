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
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  children: [],
  isDivided: false,
  hasChevrons: false,
  onChange: undefined,
};

class SingleSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedIndex: SelectableList.Utils.initialSingleSelectedIndex(this.props.children) };
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
    const {
      children, isDivided, onChange, hasChevrons, ...customProps
    } = this.props;
    return (
      <SelectableList
        {...customProps}
        isDivided={isDivided}
        onChange={this.handleOnChange}
        selectedIndexes={[this.state.selectedIndex]}
        hasChevrons={hasChevrons}
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

export default SingleSelectList;
