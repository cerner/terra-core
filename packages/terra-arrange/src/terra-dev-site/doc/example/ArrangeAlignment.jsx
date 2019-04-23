import React from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Arrange from 'terra-arrange/lib/Arrange';
import { ArrangeWrapper, alignLabels, alignOptions } from '../common/examplesetup';

const propTypes = {
  /**
   * This is used to align across all elements in the container.
   */
  align: PropTypes.oneOf(alignOptions),
  /**
   * This determines the alignment of the center element.
   */
  alignFill: PropTypes.oneOf(alignOptions),
  /**
   * This determines the alignment of the starting element.
   */
  alignFitStart: PropTypes.oneOf(alignOptions),
  /**
   * This determines the alignment of the ending element.
   */
  alignFitEnd: PropTypes.oneOf(alignOptions),
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


  render() {

    return (
      <div>
        <ArrangeWrapper>
          <Arrange
            fitStart={this.props.fitStart}
            fill={this.props.fill}
            fitEnd={this.props.fitEnd}
            align={this.props.align}
            alignFitStart={this.props.alignFitStart}
            alignFitEnd={this.props.alignFitEnd}
            alignFill={this.props.alignFill}
            style={{ height: '100%' }}
          />
        </ArrangeWrapper>
      </div>
    );
  }
}

ArrangeAlignment.propTypes = propTypes;

export default ArrangeAlignment;
