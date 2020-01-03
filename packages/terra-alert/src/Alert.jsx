import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import Button from 'terra-button';
import { FormattedMessage } from 'react-intl';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames/bind';
import styles from './Alert.module.scss';

const cx = classNames.bind(styles);

const AlertTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * An action element to be added to the action section of the alert.
   */
  action: PropTypes.element,
  /**
   * Child Nodes providing the message content for the alert. Can contain text and HTML.
   */
  children: PropTypes.node,
  /**
   * The icon to be used for an alert of type custom. This will not be used for any other alert types.
   */
  customIcon: PropTypes.element,
  /**
   * Sets an author-defined class, to control the status bar color to be used for an alert of type custom.
   *
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/CSS?icon=github)
   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.
   */
  customColorClass: PropTypes.string,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the alert.
   */
  onDismiss: PropTypes.func,
  /**
   * The title for the alert which will be bolded.
   */
  title: PropTypes.string,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `advisory`,
   * `info`, `success`, `custom`.
   */
  type: PropTypes.oneOf([
    AlertTypes.ALERT,
    AlertTypes.ERROR,
    AlertTypes.WARNING,
    AlertTypes.ADVISORY,
    AlertTypes.INFO,
    AlertTypes.SUCCESS,
    AlertTypes.CUSTOM,
  ]),
};

const defaultProps = {
  action: null,
  children: '',
  customIcon: null,
  customColorClass: 'custom-default-color',
  onDismiss: null,
  title: '',
  type: AlertTypes.ALERT,
};

const getAlertIcon = (type, customIcon) => {
  switch (type) {
    case AlertTypes.ALERT:
      return (<span className={cx('icon')}><IconAlert /></span>);
    case AlertTypes.ERROR:
      return (<span className={cx('icon')}><IconError /></span>);
    case AlertTypes.WARNING:
      return (<span className={cx('icon')}><IconWarning /></span>);
    case AlertTypes.ADVISORY:
      return null;
    case AlertTypes.INFO:
      return (<span className={cx('icon')}><IconInformation /></span>);
    case AlertTypes.SUCCESS:
      return (<span className={cx('icon')}><IconSuccess /></span>);
    case AlertTypes.CUSTOM:
      return (<span className={cx('icon')}>{customIcon}</span>);
    default:
      return null;
  }
};

const Alert = ({
  action,
  children,
  customIcon,
  customColorClass,
  onDismiss,
  title,
  type,
  ...customProps
}) => {
  const [isNarrow, setIsNarrow] = useState();
  const defaultTitle = type === AlertTypes.CUSTOM ? '' : <FormattedMessage id={`Terra.alert.${type}`} />;
  const attributes = { ...customProps };
  const alertClassNames = cx([
    'alert-base',
    type,
    { narrow: isNarrow },
    { wide: !isNarrow },
    attributes.className,
    { [`${customColorClass}`]: type === AlertTypes.CUSTOM },
  ]);

  const bodyClassNameForParent = cx([
    'body',
    { 'body-std': !isNarrow || (isNarrow && !onDismiss && !action) },
    { 'body-narrow': isNarrow && (onDismiss || action) },
  ]);
  let actionsSection = '';
  let dismissButton = '';
  const alertSectionClassName = cx(['section', { 'section-custom': type === AlertTypes.CUSTOM }]);
  const actionsClassName = cx(['actions', { 'actions-custom': type === AlertTypes.CUSTOM }]);

  if (onDismiss) {
    dismissButton = (
      <FormattedMessage id="Terra.alert.dismiss">
        {buttonText => (
          <Button text={buttonText} onClick={onDismiss} />
        )}
      </FormattedMessage>
    );
  }
  if (onDismiss || action) {
    actionsSection = (
      <div className={actionsClassName}>
        {action}
        {dismissButton}
      </div>
    );
  }

  const alertMessageContent = (
    <div className={alertSectionClassName}>
      {(title || defaultTitle) && <strong className={cx('title')}>{title || defaultTitle}</strong>}
      {children}
    </div>
  );

  return (
    <ResponsiveElement
      onChange={(value) => {
        const showNarrowAlert = value === 'tiny';
        if (showNarrowAlert !== isNarrow) {
          setIsNarrow(showNarrowAlert);
        }
      }}
    >
      <div {...attributes} className={alertClassNames}>
        <div className={bodyClassNameForParent}>
          {getAlertIcon(type, customIcon)}
          {alertMessageContent}
        </div>
        {actionsSection}
      </div>
    </ResponsiveElement>

  );
};
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
Alert.Opts = {};
Alert.Opts.Types = AlertTypes;

export default Alert;
