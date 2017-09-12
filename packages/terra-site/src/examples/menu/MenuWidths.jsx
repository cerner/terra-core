import React from 'react';
import BasicMenu from './BasicMenu';

class MenuWidths extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = { menuWidth: undefined };
  }

  handleSelectChange(event) {
    this.setState({ menuWidth: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="menuWidth">Select menu width </label>
          <select id="menuWidth" name="menuWidth" value={this.state.menuWidth} onChange={this.handleSelectChange}>
            <option value={undefined}>Default</option>
            <option key="160" value="160">160</option>
            <option key="240" value="240">240</option>
            <option key="320" value="320">320</option>
            <option key="640" value="640">640</option>
            <option key="960" value="960">960</option>
            <option key="1280" value="1280">1280</option>
            <option key="1760" value="1760">1760</option>
          </select>
          <br />
          <br />
        </form>

        <BasicMenu contentWidth={this.state.menuWidth} />
      </div>
    );
  }
}

export default MenuWidths;
