import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import ActionHeaderContainer from './_ActionHeaderContainer';
import styles from './ActionHeader.module.scss';

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
   *
   * *Note: If `onBack` is set the maximize button will not appear and must be provided as a child inside
   * a `Collapsible Menu View`. See examples for an example.*
   */
  onMaximize: PropTypes.func,
  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onMaximize and onMinimize are set.
   *
   * *Note: If `onBack` is set the minimize button will not appear and must be provided as a child inside
   * a `Collapsible Menu View`. See examples for an example.*
   */
  onMinimize: PropTypes.func,
  /**
   * Callback function for when the next button is clicked. The previous-next button group will display if either this or onPrevious is set but the button for the one not set will be disabled.
   */
  onNext: PropTypes.func,
  /**
   * Callback function for when the previous button is clicked. The previous-next button group will display if either this or onNext is set but the button for the one not set will be disabled.
   */
  onPrevious: PropTypes.func,
  /**
   * Displays a single terra `Collapsible Menu View` child element on the right end of the header.
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
      return new Error('Component is internationalized, and must be wrapped in terra-base');
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
  ...customProps
}, {
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

  let expandButton;
  if (!backButton) {
    if (onMaximize) {
      expandButton = <Button isIconOnly icon={<span className={cx(['header-icon', 'maximize'])} />} text={maximizeText} onClick={onMaximize} />;
    } else if (onMinimize) {
      expandButton = <Button isIconOnly icon={<span className={cx(['header-icon', 'minimize'])} />} text={minimizeText} onClick={onMinimize} />;
    }
  }

  const previousNextButtonGroup = (onPrevious || onNext)
    ? (
      <ButtonGroup>
        <ButtonGroup.Button
          icon={<span className={cx(['header-icon', 'previous'])} />}
          text={previousText}
          onClick={onPrevious}
          key="ActionHeaderPrevious"
          isDisabled={onPrevious === undefined}
        />
        <ButtonGroup.Button
          icon={<span className={cx(['header-icon', 'next'])} />}
          text={nextText}
          onClick={onNext}
          key="ActionHeaderNext"
          isDisabled={onNext === undefined}
        />
      </ButtonGroup>
    )
    : null;

  const leftButtons = (backButton || expandButton || previousNextButtonGroup)
    ? (
      <div className={cx('left-buttons')}>
        {backButton}
        {expandButton}
        {previousNextButtonGroup}
      </div>
    )
    : null;

  const rightButtons = closeButton ? <div className={cx('right-buttons')}>{closeButton}</div> : null;

  return (
    <ActionHeaderContainer
      {...customProps}
      startContent={leftButtons}
      title={title}
      endContent={rightButtons}
      level={level}
    >
      {children}
    </ActionHeaderContainer>
  );
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;
ActionHeader.contextTypes = contextTypes;

export default ActionHeader;
