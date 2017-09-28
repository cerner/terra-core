import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './PopupOverlay.scss';

const cx = classNames.bind(styles);

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

  componentWillMount() {
    // Disable scrolling on the page when Overlay is displayed
    this.overlayStyle = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = this.overlayStyle;
  }

  render() {
    const { children, ...customProps } = this.props;

    // Delete the closePortal prop that comes from react-portal.
    delete customProps.closePortal;

    return (
      <div {...customProps} className={cx(['popup-overlay', customProps.className])}>
        <div className={cx('inner')} />
        {children}
      </div>
    );
  }
}

PopupOverlay.propTypes = propTypes;
PopupOverlay.defaultProps = defaultProps;

export default PopupOverlay;
