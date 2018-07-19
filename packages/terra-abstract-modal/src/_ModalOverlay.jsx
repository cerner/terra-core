import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import styles from './ModalOverlay.module.scss';

const cx = classNames.bind(styles);

const zIndexes = ['6000', '7000', '8000', '9000'];

const propTypes = {
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: PropTypes.oneOf(zIndexes),
};

const defaultProps = {
  zIndex: '6000',
};

class ModalOverlay extends React.Component {
  componentDidMount() {
    this.overflow = document.documentElement.style.overflow;
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = this.overflow;
  }

  render() {
    const { zIndex, ...customProps } = this.props;
    let zIndexLayer = '6000';
    if (zIndexes.indexOf(zIndex) >= 0) {
      zIndexLayer = zIndex;
    }
    return <div {...customProps} className={cx(['overlay', `layer-${zIndexLayer}`, customProps.className])} />;
  }
}

ModalOverlay.propTypes = propTypes;
ModalOverlay.defaultProps = defaultProps;

export default ModalOverlay;
