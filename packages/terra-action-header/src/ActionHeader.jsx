import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import { FormattedMessage } from 'react-intl';
import ActionHeaderContainer from './_ActionHeaderContainer';
import styles from './ActionHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Displays a single terra `Collapsible Menu View` (_Not provided by `Action Header`_) child element on the right end of the header.
   */
  children: PropTypes.element,
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
   * *Note: If `onBack` is set, the maximize button will not appear and a custom maximize button must be provided
   * as a child inside a `Collapsible Menu View`.*
   */
  onMaximize: PropTypes.func,
  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onMaximize and onMinimize are set.
   *
   * *Note: If `onBack` is set, the minimize button will not appear and a custom minimize button must be provided
   * as a child inside a `Collapsible Menu View`.*
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
   * Text to be displayed as the title in the header bar.
   */
  title: PropTypes.string,
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
}) => {
  const closeButton = onClose
    ? (
      <FormattedMessage id="Terra.actionHeader.close">
        {closeText => (
          <Button
            className={cx('header-close-button')}
            isIconOnly
            icon={<span className={cx(['header-icon', 'close'])} />}
            text={closeText}
            onClick={onClose}
            variant={ButtonVariants.UTILITY}
          />
        )}
      </FormattedMessage>
    )
    : null;
  const backButton = onBack
    ? (
      <FormattedMessage id="Terra.actionHeader.back">
        {backText => (
          <Button
            className={cx('header-back-button')}
            isIconOnly
            icon={<span className={cx(['header-icon', 'back'])} />}
            text={backText}
            onClick={onBack}
            variant={ButtonVariants.UTILITY}
          />
        )}
      </FormattedMessage>
    )
    : null;

  let expandButton;
  if (!backButton) {
    if (onMaximize) {
      expandButton = (
        <FormattedMessage id="Terra.actionHeader.maximize">
          {maximizeText => (
            <Button
              isIconOnly
              icon={<span className={cx(['header-icon', 'maximize'])} />}
              text={maximizeText}
              onClick={onMaximize}
              variant={ButtonVariants.UTILITY}
            />
          )}
        </FormattedMessage>
      );
    } else if (onMinimize) {
      expandButton = (
        <FormattedMessage id="Terra.actionHeader.minimize">
          {minimizeText => (
            <Button
              isIconOnly
              icon={<span className={cx(['header-icon', 'minimize'])} />}
              text={minimizeText}
              onClick={onMinimize}
              variant={ButtonVariants.UTILITY}
            />
          )}
        </FormattedMessage>
      );
    }
  }

  const previousNextButtonGroup = (onPrevious || onNext)
    ? (
      <div className={cx('previous-next-button-group')}>
        <FormattedMessage id="Terra.actionHeader.previous">
          {previousText => (
            <Button
              isIconOnly
              icon={<span className={cx(['header-icon', 'previous'])} />}
              text={previousText}
              onClick={onPrevious}
              isDisabled={onPrevious === undefined}
              variant={ButtonVariants.UTILITY}
            />
          )}
        </FormattedMessage>
        <FormattedMessage id="Terra.actionHeader.next">
          {nextText => (
            <Button
              isIconOnly
              icon={<span className={cx(['header-icon', 'next'])} />}
              text={nextText}
              onClick={onNext}
              isDisabled={onNext === undefined}
              variant={ButtonVariants.UTILITY}
            />
          )}
        </FormattedMessage>

      </div>
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

export default ActionHeader;
