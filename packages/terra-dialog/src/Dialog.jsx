import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-clinical-action-header';
import styles from './Dialog.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text string to be placed within the header area of the dialog.
   */
  header: PropTypes.string.isRequired,
  /**
   * The footer element to be placed within the footer area of the dialog.
   */
  footer: PropTypes.node.isRequired,
  /**
   * The children to be placed within the main content area of the dialog.
   */
  children: PropTypes.node,
  /**
   * Callback function for when the close button is clicked. The close button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button.
   */
  onClose: PropTypes.func,
};

const defaultProps = {
  onClose: null,
  children: null,
};

const Dialog = ({ header, footer, onClose, children, ...customProps }) => {
  const dialogClassNames = cx([
    'dialog',
  ]);

  const actionHeader = <div className={cx('dialog-header')}><ActionHeader title={header} onClose={onClose} /></div>;

  return (
    <div className={dialogClassNames} {...customProps}>
      <ContentContainer fill header={actionHeader} footer={<div className={cx('dialog-footer')}>{footer}</div>}>
        <div className={cx('dialog-body')}>{children}</div>
      </ContentContainer>
    </div>
  );
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
