import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-clinical-action-header';
import DialogBody from './DialogBody';
import DialogFooter from './DialogFooter';
import styles from './Dialog.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text string to be placed within the header area of the dialog.
   */
  header: PropTypes.string.isRequired,
  /**
   * The footer element to be placed within the footer area of the dialog.
   * The footer content area will not display if this prop is not provided. UNDER EVALUATION
   */
  footer: PropTypes.node.isRequired,
  /**
   * The children to be placed within the main content area of the dialog.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function for when the close button is clicked. The close button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button.
   */
  onClose: PropTypes.func,
};

const defaultProps = {
  header: null,
  footer: null,
  children: null,
  onClose: null,
};

const Dialog = ({ header, footer, onClose, children }) => {
  const DialogClassNames = cx([
    'dialog',
  ]);

  const actionHeader = <ActionHeader title={header} onClose={onClose} />;

  return (
    <div className={DialogClassNames}>
      <ContentContainer fill header={actionHeader} footer={<div className={cx('footer')}>{footer}</div>}>
        <div className={cx('body')}>{children}</div>
      </ContentContainer>
    </div>
  );
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;
