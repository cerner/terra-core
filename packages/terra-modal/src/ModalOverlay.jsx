import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ModalOverlay.scss';

const cx = classNames.bind(styles);

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
    const { ...customProps } = this.props;
    return <div {...customProps} className={cx('overlay', customProps.className)} />;
  }
}

export default ModalOverlay;
