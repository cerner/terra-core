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
        <div id="selected-index">
          <h3>Selected Button: {this.state.selectedIndex}</h3>
        </div>
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
