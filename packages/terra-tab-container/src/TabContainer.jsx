import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SelectableTabContainer from './SelectableTabContainer';
import Tab from './Tab';
import SelectableUtils from './SelectableUtils';

const propTypes = {
  /**
   * Tab style. One of: "modular" or "structural"
   */
  variant: PropTypes.oneOf(['modular', 'structural']),

  /**
   * Tab components to be displayed
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  variant: 'modular',
};

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      selectedKey: SelectableUtils.initialSelectedKey(props.children),
    };
  }

  handleOnChange(event, selectedKey) {
    if (SelectableUtils.shouldHandleSelection(this.state.selectedKey, selectedKey)) {
      this.setState({ selectedKey });
    }
  }

  render() {
    const { children, ...customProps } = this.props;
    const clonedTabs = [];
    React.Children.forEach(children, (child) => {
      let isSelected = false;
      if (child.key === this.state.selectedKey) {
        isSelected = true;
      }

      clonedTabs.push(React.cloneElement(child, { isSelected }));
    });

    return (
      <SelectableTabContainer
        {...customProps}
        onChange={this.handleOnChange}
      >
        {clonedTabs}
      </SelectableTabContainer>
    );
  }
}

TabContainer.propTypes = propTypes;
TabContainer.defaultProps = defaultProps;
TabContainer.Tab = Tab;

export default TabContainer;
