import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import { injectIntl, intlShape } from 'react-intl';
import styles from './Dialog.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children to be placed within the main content area of the dialog.
   */
  children: PropTypes.node,
  /**
   * React node to be placed within the footer area of the dialog.
   * Content exceeding the available space will be hidden.
   */
  footer: PropTypes.node.isRequired,
  /**
   * React node to be placed within the header area of the dialog.
   */
  header: PropTypes.node.isRequired,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
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

const Dialog = ({
  children, footer, header, intl, onClose, ...customProps
}) => {
  const dialogClassNames = cx([
    'dialog',
    customProps.className,
  ]);

  const closeText = intl.formatMessage({ id: 'Terra.dialog.close' });
  const closeButton = onClose ? <div className={cx('dialog-header-close')}><Button variant="utility" text={closeText} onClick={onClose} isIconOnly icon={<span className={cx('close-icon')} />} /></div> : null;

  const dialogHeader = (
    <div className={cx('dialog-header')}>
      <div className={cx('dialog-header-title')}>{header}</div>
      {closeButton}
    </div>
  );

  return (
    <div {...customProps} className={dialogClassNames}>
      <ContentContainer fill header={dialogHeader} footer={<div className={cx('dialog-footer')}>{footer}</div>}>
        <div className={cx('dialog-body')}>{children}</div>
      </ContentContainer>
    </div>
  );
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default injectIntl(Dialog);
