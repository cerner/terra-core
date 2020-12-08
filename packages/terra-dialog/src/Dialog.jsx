import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import { injectIntl } from 'react-intl';
import styles from './Dialog.module.scss';

const cx = classNamesBind.bind(styles);

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
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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
  const theme = React.useContext(ThemeContext);

  const dialogClassNames = classNames(
    cx(
      'dialog',
      theme.className,
    ),
    customProps.className,
  );

  const closeButton = onClose
    ? (
      <div className={cx('dialog-header-close')}>
        <Button
          variant="utility"
          text={intl.formatMessage({ id: 'Terra.dialog.close' })}
          onClick={onClose}
          isIconOnly
          icon={<span className={cx('close-icon')} />}
        />
      </div>
    )
    : null;

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
