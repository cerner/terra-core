import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
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
   * Callback function for when the close button is clicked.
   * On small viewports, this will be triggered by a back button if onBack is not set.
   */
  onClose: PropTypes.func,
  /**
   * Callback function for when the back button is clicked. The back button will not display if this is not set.
   */
  onBack: PropTypes.func,
  /**
   * Child element to be displayed on the right end of the header.
   */
  children: PropTypes.element,
};

const defaultProps = {
  title: undefined,
  level: 1,
  onClose: undefined,
  onBack: undefined,
  children: undefined,
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
  children,
  ...customProps }, {
  intl,
}) => {
  const backText = intl.formatMessage({ id: 'Terra.actionHeader.back' });
  const closeText = intl.formatMessage({ id: 'Terra.actionHeader.close' });

  const closeButton = onClose ? <Button className={cx('header-close-button')} isIconOnly icon={<span className={cx(['header-icon', 'close'])} />} text={closeText} onClick={onClose} /> : null;
  const backButton = onBack ? <Button className={cx('header-back-button')} isIconOnly icon={<span className={cx(['header-icon', 'back'])} />} text={backText} onClick={onBack} /> : null;

  const backButtonSmall = (onClose && !onBack) ? <Button className={cx('header-back-button')} isIconOnly icon={<span className={cx(['header-icon', 'back'])} />} text={backText} onClick={onClose} /> : backButton;
  const closeButtonSmall = (onClose && !onBack) ? null : closeButton;

  const actionHeader = (
    <ActionHeaderContainer
      {...customProps}
      startContent={backButton}
      title={title}
      endContent={closeButton}
      level={level}
    >
      {children}
    </ActionHeaderContainer>
  );

  const smallActionHeader = (
    <ActionHeaderContainer
      {...customProps}
      startContent={backButtonSmall}
      title={title}
      endContent={closeButtonSmall}
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
