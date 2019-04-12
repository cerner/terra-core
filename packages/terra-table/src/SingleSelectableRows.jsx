import React from 'react';
import PropTypes from 'prop-types';
import SelectableTableRows from './SelectableTableRows';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * A callback function triggered when a row is selected or unselected. Passes the following parameters:
   *
   * - the event triggering the onChange
   * - the index of the selected item
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  onChange: undefined,
};

const screenReaderUpdateOnSelected = (liveRegion, intl) => {
  const liveElement = liveRegion.current;
  liveElement.innerText = '';

  // The isSelected value here actually refers to the previous state of the row since
  // isSelected is not actually geting updated inside this listener
  setTimeout(() => {
    liveElement.innerText = intl.formatMessage({ id: 'Terra.table.rowSelected' });
  }, 250);
};

class SingleSelectableRows extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedIndex: SelectableTableRows.Utils.initialSingleSelectRowIndex(this.props.children) };
  }

  handleOnChange(event, index) {
    // Check if the selectedIndex state should update before updating
    if (SelectableTableRows.Utils.shouldHandleSingleSelectRowSelection(this.state.selectedIndex, index)) {
      event.preventDefault();
      this.setState({ selectedIndex: index });

      if (this.props.onChange) {
        this.props.onChange(event, index);
      }
    }
  }

  render() {
    const { children, onChange, ...customProps } = this.props;
    return (
      <SelectableTableRows
        {...customProps}
        onChange={this.handleOnChange}
        selectedIndexes={[this.state.selectedIndex]}
        screenReaderUpdateOnSelected={screenReaderUpdateOnSelected}
      >
        {children}
      </SelectableTableRows>
    );
  }
}

SingleSelectableRows.propTypes = propTypes;
SingleSelectableRows.defaultProps = defaultProps;
SingleSelectableRows.Row = SelectableTableRows.Row;

export default SingleSelectableRows;
