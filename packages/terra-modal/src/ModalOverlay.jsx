import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import styles from './ModalOverlay.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * If set to true, the modal is to be presented at the appropriate z-index for notification dialogs.
   */
  isNotificationDialog: PropTypes.bool,
};

const defaultProps = {
  isNotificationDialog: false,
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
    const { isNotificationDialog, ...customProps } = this.props;
    return <div {...customProps} className={cx(['overlay', { notification: isNotificationDialog }, customProps.className])} />;
  }
}

ModalOverlay.propTypes = propTypes;
ModalOverlay.defaultProps = defaultProps;

export default ModalOverlay;
