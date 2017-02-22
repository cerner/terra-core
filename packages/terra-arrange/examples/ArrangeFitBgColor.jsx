import React from 'react';
import Arrange from '../src/Arrange';
import { icon, image, simpleText, ArrangeWrapper, IconWrapper, alignLabels, alignOptions } from './examplesetup';

class ArrangeFitBgColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <ArrangeWrapper>
          <Arrange
            fitStart={image}
            fill={simpleText}
            fitEnd={<IconWrapper>{icon}</IconWrapper>}
            {...(this.state.alignFitStart && { alignFitStart: this.state.alignFitStart })}
            {...(this.state.alignFill && { alignFill: this.state.alignFill })}
            {...(this.state.alignFitEnd && { alignFitEnd: this.state.alignFitEnd })}
          />
        </ArrangeWrapper>
        <br />
        <form>
          <label htmlFor="alignFitStart">{alignLabels.alignFitStart}</label>
          <select id="alignFitStart" name="alignFitStart" value={this.state.alignFitStart} onChange={this.handleSelectChange}>
            <option value="">default</option>
            <option value={alignOptions.center}>{alignOptions.center}</option>
            <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
            <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
          </select>
          <br />
          <br />
          <label htmlFor="alignFill">{alignLabels.alignFill}</label>
          <select id="alignFill" name="alignFill" value={this.state.alignFill} onChange={this.handleSelectChange}>
            <option value="">Default</option>
            <option value={alignOptions.center}>{alignOptions.center}</option>
            <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
            <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
          </select>
          <br />
          <br />
          <label htmlFor="alignFitEnd">{alignLabels.alignFitEnd}</label>
          <select id="alignFitEnd" name="alignFitEnd" value={this.state.alignFitEnd} onChange={this.handleSelectChange}>
            <option value="">Default</option>
            <option value={alignOptions.center}>{alignOptions.center}</option>
            <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
            <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ArrangeFitBgColor;
