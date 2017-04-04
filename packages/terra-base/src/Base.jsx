import React, { PropTypes } from 'react';
import './Base.scss';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: PropTypes.node.isRequired,
};

class Base extends React.Component {

  componentDidMount() {
    // Checks to run when not in production
    if (process.env.NODE_ENV !== 'production') {
      // Check to ensure terra-Base class is set on html element
      if (!new RegExp('(^|\\s)terra-Base(\\s|$)').test(document.documentElement.className)) {
        // eslint-disable-next-line
        console.warn('The html element is missing the terra-Base class.');
      }

      // Check to ensure dir attribute is set on html element
      if (!document.documentElement.hasAttribute('dir')) {
        // eslint-disable-next-line
        console.warn('The html element is missing the dir attribute. For terra directionality based styles to render correctly, add dir="ltr" or dir="rtl" to the html element.');
      }
    }
  }

  render() {
    const { children, ...customProps } = this.props;
    return <div {...customProps}>{children}</div>;
  }
}

Base.propTypes = propTypes;

export default Base;
