import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import IconMinimize from 'terra-icon/lib/icon/IconMinimize';
import IconMaximize from 'terra-icon/lib/icon/IconMaximize';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
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
   * Callback function for when the expand button is clicked.
   * The expand button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if onMaximize and onMinimize are set.
   */
  onMaximize: PropTypes.func,
  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onMaximize and onMinimize are set.
   */
  onMinimize: PropTypes.func,
  /**
   * Callback function for when the next button is clicked. The previous-next button group will not display if neither this or onPrevious are set.
   */
  onNext: PropTypes.func,
  /**
   * Callback function for when the previous button is clicked. The previous-next button group will not display if neither this or onNext are set.
   */
  onPrevious: PropTypes.func,
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
  onMaximize: undefined,
  onMinimize: undefined,
  onNext: undefined,
  onPrevious: undefined,
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
  onMaximize,
  onMinimize,
  onPrevious,
  onNext,
  children,
  ...customProps }, {
  intl,
}) => {
  const backText = intl.formatMessage({ id: 'Terra.actionHeader.back' });
  const closeText = intl.formatMessage({ id: 'Terra.actionHeader.close' });
  const minimizeText = intl.formatMessage({ id: 'Terra.actionHeader.minimize' });
  const maximizeText = intl.formatMessage({ id: 'Terra.actionHeader.maximize' });
  const previousText = intl.formatMessage({ id: 'Terra.actionHeader.previous' });
  const nextText = intl.formatMessage({ id: 'Terra.actionHeader.next' });

  const closeButton = onClose ? <Button className={cx('header-close-button')} isIconOnly icon={<span className={cx(['header-icon', 'close'])} />} text={closeText} onClick={onClose} /> : null;
  const backButton = onBack ? <Button className={cx('header-back-button')} isIconOnly icon={<span className={cx(['header-icon', 'back'])} />} text={backText} onClick={onBack} /> : null;

  const backButtonSmall = (onClose && !onBack) ? <Button className={cx('header-back-button')} isIconOnly icon={<span className={cx(['header-icon', 'back'])} />} text={backText} onClick={onClose} /> : backButton;
  const closeButtonSmall = (onClose && !onBack) ? null : closeButton;

  const maximizeButton = (!backButton && onMaximize) ? <Button isIconOnly icon={<IconMaximize />} text={maximizeText} onClick={onMaximize} /> : null;
  const minimizeButton = (!backButton && onMinimize) ? <Button isIconOnly icon={<IconMinimize />} text={minimizeText} onClick={onMinimize} /> : null;

  const previousNextButtonGroup = (onPrevious || onNext) ?
    (<ButtonGroup>
      <ButtonGroup.Button icon={<IconChevronUp />} text={previousText} onClick={onPrevious} key="ActionHeaderPrevious" />
      <ButtonGroup.Button icon={<IconChevronDown />} text={nextText} onClick={onNext} key="ActionHeaderNext" />
    </ButtonGroup>) :
    null;

  const leftButtonsDefault = (backButton || maximizeButton || minimizeButton || previousNextButtonGroup) ?
    (<div className={cx('left-buttons')}>
      {backButton}
      {maximizeButton}
      {minimizeButton}
      {previousNextButtonGroup}
    </div>) :
    null;

  const rightButtonsDefault = closeButton ? <div className={cx('right-buttons')}>{closeButton}</div> : null;

  const leftButtonsSmall = (backButtonSmall || previousNextButtonGroup) ?
    (<div className={cx('left-buttons')}>
      {backButtonSmall}
      {previousNextButtonGroup}
    </div>) :
    null;

  const rightButtonsSmall = closeButtonSmall ? <div className={cx('right-buttons')}>{closeButtonSmall}</div> : null;

  const actionHeader = (
    <ActionHeaderContainer
      {...customProps}
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
      {...customProps}
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
