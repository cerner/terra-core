import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconClose from 'terra-icon/lib/icon/IconClose';
import ResponsiveElement from 'terra-responsive-element';
import 'terra-base/lib/baseStyles';
import ActionHeaderContainer from './_ActionHeaderContainer';
import styles from './ActionHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text to be displayed as the title in the header bar.
   */
  title: PropTypes.string,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=1`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Callback function for when the close button is clicked. The back button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button when a separate onBack callback is not set.
   */
  onClose: PropTypes.func,
  /**
   * Callback function for when the back button is clicked. The back button will not display if this is not set.
   */
  onBack: PropTypes.func,
  /**
   * A Boolean indicating if close button should be displayed on small viewports when separate onBack callback is not set.
   */
  keepCloseButton: PropTypes.bool,
  /**
   * Child element to be displayed on the right end of the header.
   */
  children: PropTypes.element,
};

const defaultProps = {
  title: '',
  level: 1,
  onClose: null,
  onBack: null,
  keepCloseButton: false,
  children: null,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const ActionHeader = ({
  title,
  level,
  onClose,
  onBack,
  keepCloseButton,
  children,
  ...customProps }, {
  intl,
}) => {
  const attributes = Object.assign({}, customProps);
  const backText = intl.formatMessage({ id: 'Terra.actionHeader.back' });
  const closeText = intl.formatMessage({ id: 'Terra.actionHeader.close' });

  const closeButton = onClose ? <Button variant="utility" isIconOnly icon={<IconClose />} text={closeText} onClick={onClose} /> : null;
  const backButton = onBack ? <Button variant="utility" isIconOnly icon={<IconLeft />} text={backText} onClick={onBack} /> : null;

  let closeButtonSmall;
  let backButtonSmall;
  if (onClose && !onBack && !keepCloseButton) {
    backButtonSmall = <Button variant="utility" isIconOnly icon={<IconLeft />} text={backText} onClick={onClose} />;
    closeButtonSmall = null;
  } else {
    closeButtonSmall = closeButton;
    backButtonSmall = backButton;
  }

  const leftButtonsDefault = backButton ? <div className={cx('left-buttons')}>{backButton}</div> : null;

  const rightButtonsDefault = closeButton ? <div className={cx('right-buttons')}>{closeButton}</div> : null;

  const leftButtonsSmall = backButtonSmall ? <div className={cx('left-buttons')}>{backButtonSmall}</div> : null;

  const rightButtonsSmall = closeButtonSmall ? <div className={cx('right-buttons')}>{closeButtonSmall}</div> : null;

  const actionHeader = (
    <ActionHeaderContainer
      {...attributes}
      startContent={leftButtonsDefault}
      title={title}
      endContent={rightButtonsDefault}
      level={level}
    >
      {children}
    </ActionHeaderContainer>
  );

  const smallActionHeader = (
    <ActionHeaderContainer
      {...attributes}
      startContent={leftButtonsSmall}
      title={title}
      endContent={rightButtonsSmall}
      level={level}
    >
      {children}
    </ActionHeaderContainer>
  );

  return (
    <ResponsiveElement
      responsiveTo="window"
      defaultElement={smallActionHeader}
      small={actionHeader}
    />
  );
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;
ActionHeader.contextTypes = contextTypes;

export default ActionHeader;
