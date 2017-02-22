import React from 'react';
import Arrange from '../src/Arrange';
import { icon, image, simpleText, ArrangeWrapper, alignLabels, alignOptions } from './examplesetup';

class ArrangeAlignAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fitStart: true,
      fitEnd: true,
      fill: true,
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheckboxChange(event) {
    this.setState({ [event.target.name]: event.target.checked });
  }

  render() {
    return (
      <div>
        <ArrangeWrapper>
          <Arrange
            {...(this.state.fitStart && { fitStart: image })}
            {...(this.state.fill && { fill: simpleText })}
            {...(this.state.fitEnd && { fitEnd: icon })}
            {...(this.state.align && { align: this.state.align })}
          />
        </ArrangeWrapper>
        <br />
        <form>
          <label htmlFor="fitStart">Fit Start: </label>
          <input
            id="fitStart"
            name="fitStart"
            type="checkbox"
            checked={this.state.fitStart}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="fill">Fill: </label>
          <input
            id="fill"
            name="fill"
            type="checkbox"
            checked={this.state.fill}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="fitEnd">Fit End: </label>
          <input
            id="fitEnd"
            name="fitEnd"
            type="checkbox"
            checked={this.state.fitEnd}
            onChange={this.handleCheckboxChange}
          />
          <br />
          <br />
          <label htmlFor="align">{alignLabels.overall}</label>
          <select id="align" name="align" value={this.state.align} onChange={this.handleSelectChange}>
            <option value="">default</option>
            <option value={alignOptions.center}>{alignOptions.center}</option>
            <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
            <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ArrangeAlignAll;
