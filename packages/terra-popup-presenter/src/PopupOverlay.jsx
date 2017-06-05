import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './PopupOverlay.scss';

const propTypes = {
  /**
   * The string representation of the index.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

class PopupOverlay extends React.Component {

  componentDidMount() {
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = null;
  }

  render() {
    const { children, ...customProps } = this.props;

    const overlayClassNames = classNames([
      'terra-PopupOverlay',
      customProps.className,
    ]);

    // Delete the closePortal prop that comes from react-portal.
    delete customProps.closePortal;

    return (
      <div {...customProps} className={overlayClassNames}>
        <div className="terra-PopupOverlay-inner" />
        {children}
      </div>
    );
  }
}

PopupOverlay.propTypes = propTypes;
PopupOverlay.defaultProps = defaultProps;

export default PopupOverlay;
