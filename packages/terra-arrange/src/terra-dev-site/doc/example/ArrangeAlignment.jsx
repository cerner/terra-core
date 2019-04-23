import React from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Arrange from 'terra-arrange/lib/Arrange';
import { ArrangeWrapper, alignLabels, alignOptions } from '../common/examplesetup';

const alignmentTypes = ['all', 'individual'];

const propTypes = {
  /**
   * Alignment behavior.
   * This is used to determine which form to load to change alignment in the examples
   */
  alignment: PropTypes.oneOf(alignmentTypes).isRequired,
  /**
   * The content to display in the body of the fitStart
   * This is passed on to the arrange component
   */
  fitStart: PropTypes.element,
  /**
   * The content to display in the body of the fill
   * This is passed on to the arrange component
   */
  fill: PropTypes.element.isRequired,
  /**
   * The content to display in the body of the fitEnd
   * This is passed on to the arrange component
   */
  fitEnd: PropTypes.element,
};

class ArrangeAlignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueid(),
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  getId(name) {
    return name + this.state.id;
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderAllAlignmentForm() {
    return (
      <div>
        <label htmlFor={this.getId('align')}>{alignLabels.overall}</label>
        <select id={this.getId('align')} name="align" value={this.state.align} onChange={this.handleSelectChange}>
          <option value="">default</option>
          <option value={alignOptions.center}>{alignOptions.center}</option>
          <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
          <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
        </select>
      </div>
    );
  }

  renderIndividualAlignmentForm() {
    return (
      <div>
        <label htmlFor={this.getId('alignFitStart')}>{alignLabels.alignFitStart}</label>
        <select id={this.getId('alignFitStart')} name="alignFitStart" value={this.state.alignFitStart} onChange={this.handleSelectChange}>
          <option value="">default</option>
          <option value={alignOptions.center}>{alignOptions.center}</option>
          <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
          <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
        </select>
        <br />
        <br />
        <label htmlFor={this.getId('alignFill')}>{alignLabels.alignFill}</label>
        <select id={this.getId('alignFill')} name="alignFill" value={this.state.alignFill} onChange={this.handleSelectChange}>
          <option value="">Default</option>
          <option value={alignOptions.center}>{alignOptions.center}</option>
          <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
          <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
        </select>
        <br />
        <br />
        <label htmlFor={this.getId('alignFitEnd')}>{alignLabels.alignFitEnd}</label>
        <select id={this.getId('alignFitEnd')} name="alignFitEnd" value={this.state.alignFitEnd} onChange={this.handleSelectChange}>
          <option value="">Default</option>
          <option value={alignOptions.center}>{alignOptions.center}</option>
          <option value={alignOptions.bottom}>{alignOptions.bottom}</option>
          <option value={alignOptions.stretch}>{alignOptions.stretch}</option>
        </select>
      </div>
    );
  }

  render() {
    const allAlignmentForm = this.renderAllAlignmentForm();
    const individualAlignmentForm = this.renderIndividualAlignmentForm();


    return (
      <div>
        <ArrangeWrapper>
          <Arrange
            fitStart={this.props.fitStart}
            fill={this.props.fill}
            fitEnd={this.props.fitEnd}
            {...(this.state.align && { align: this.state.align })}
            {...(this.state.alignFitStart && { alignFitStart: this.state.alignFitStart })}
            {...(this.state.alignFill && { alignFill: this.state.alignFill })}
            {...(this.state.alignFitEnd && { alignFitEnd: this.state.alignFitEnd })}
            style={{ height: '100%' }}
          />
        </ArrangeWrapper>
        <br />
        {this.props.alignment === 'individual' && individualAlignmentForm}
        {this.props.alignment === 'all' && allAlignmentForm}
      </div>
    );
  }
}

ArrangeAlignment.propTypes = propTypes;

export default ArrangeAlignment;
