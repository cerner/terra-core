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
   * An example of type number markup.
   */
  number: PropTypes.number,
  /**
   * An example of type boolean markup.
   * ```This component contains a very long preformatted section in it's description column. This component contains a very long preformatted section in it's description column.```
   */
  bool: PropTypes.bool,
  /**
   * An example of type element markup.
   */
  element: PropTypes.element,
  /**
   * An example of type node markup.
   */
  node: PropTypes.node,
  /**
   * An example of type array markup.
   */
  // eslint-disable-next-line react/forbid-prop-types
  array: PropTypes.array,
  /**
   * A default example of type arrayOf markup.
   */
  arrayOfDefault: PropTypes.arrayOf(PropTypes.element),
  /**
   * An example of type arrayOf(shapes)  markup.
   */
  arrayOfShapes: PropTypes.arrayOf(PropTypes.shape({
    stringProp: PropTypes.string,
  })),
  /**
   * An example of type oneOfType markup with the option of a string, number or shape type.
   */
  oneOfType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      stringProp: PropTypes.string,
    }),
  ]),
  /**
   * An example of type shape markup.
   */
  shape: PropTypes.shape({
    stringProp: PropTypes.string,
    numberProp: PropTypes.number,
  }),
};
/* eslint-enable react/no-unused-prop-types */

const MockComponent = props => (
  React.createElement('span', JSON.stringify({ props }))
);

MockComponent.propTypes = propTypes;

export default MockComponent;
