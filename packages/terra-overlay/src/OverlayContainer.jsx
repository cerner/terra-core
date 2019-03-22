import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * The overlay and the content to be displayed within the overlay.
  */
  overlay: PropTypes.node,
  /**
  * The elements that overlay should hide when overlay isOpen.
  * elements which are not included in overlay will be wrapped within childern for better use of accessibility.
  */
  children: PropTypes.node,
};

const defaultProps = {
  overlay: null,
  children: null,
};

const OverlayContainer = ({ overlay, children, ...customProps }) => {
  const OverlayContainerClassNames = cx([
    'overlay-container',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={OverlayContainerClassNames} tabIndex="-1">
      {overlay}
      <div className={cx('container-content')}>
        {children}
      </div>
    </div>
  );
};

OverlayContainer.propTypes = propTypes;
OverlayContainer.defaultProps = defaultProps;

export default OverlayContainer;
