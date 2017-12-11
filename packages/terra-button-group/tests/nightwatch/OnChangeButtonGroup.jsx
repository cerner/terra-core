import React from 'react';

import ButtonGroup from '../../lib/ButtonGroup';

class buttonGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <div>
        <h3>Selected Button: <span id="selected-index">{this.state.selectedIndex}</span></h3>
        <ButtonGroup
          id="button-group-onchange"
          isSelectable
          onChange={this.handleSelection}
          buttons={[<ButtonGroup.Button text="Compact" key="compact1" />,
            <ButtonGroup.Button text="Compact" key="compact2" />,
            <ButtonGroup.Button text="Compact" key="compact3" />,
            <ButtonGroup.Button text="Compact" key="compact4" />]}
        />
      </div>
    );
  }
}
export default buttonGroupExample;
