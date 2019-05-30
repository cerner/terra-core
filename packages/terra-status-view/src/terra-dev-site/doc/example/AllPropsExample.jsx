import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

class ToggleVariants extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: 'error' };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(event) {
    this.setState({ selected: event.target.value });
  }

  render() {
    return (
      <div>
        <StatusView variant={this.state.selected} />
        <select id="statusViewVariant" name="statusViewVariant" value={this.state.selected} onChange={this.handleOnSelect}>
          <option value="no-data">No Data</option>
          <option value="no-matching-results">No Matching Results</option>
          <option value="not-authorized">Not Authorized</option>
          <option value="error" selected>Error</option>
        </select>
      </div>
    );
  }
}

export default ToggleVariants;
