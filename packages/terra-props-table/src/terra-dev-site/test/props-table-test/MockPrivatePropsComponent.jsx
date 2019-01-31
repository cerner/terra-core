import React from 'react';
import PropTypes from 'prop-types';
// These props are used to test react-doc-gen, but they only need to be mocked
/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * An example of type string markup.
   * `This component contains a very long section of code in it's description column. This component contains a very long section of code in it's description column.`
   */
  string: PropTypes.string.isRequired,
  /**
   * @private
   * A private prop that should not show up in the rendered markup.
   */
  privateProp: PropTypes.string,
  /**
   * @private Testing inline private declaration
   */
  anotherPrivateProp: PropTypes.string,
};
/* eslint-enable react/no-unused-prop-types */

const MockComponent = props => (
  React.createElement('span', JSON.stringify({ props }))
);

MockComponent.propTypes = propTypes;

export default MockComponent;
