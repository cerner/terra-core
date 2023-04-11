import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import uniqueid from 'lodash.uniqueid';
import ActionHeaderContainer from './_ActionHeaderContainer';
import styles from './ActionHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Displays a single terra `Collapsible Menu View` (_Not provided by `Action Header`_) child element on the right end of the header.
   */
  children: PropTypes.element,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=1`. This helps screen readers to announce appropriate heading levels.
   * Changing 'level' will not visually change the style of the content.
   * `level` should be specified explicitly to allow screen readers to identify headers consistently.
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
   * Accessibility label for Back button. To be used with onBack prop.
   */
  backButtonA11yLabel: PropTypes.string,
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
   * Accessibility label for Next button. To be used with onNext prop
   */
  nextButtonA11yLabel: PropTypes.string,
  /**
   * Callback function for when the previous button is clicked. The previous-next button group will display if either this or onNext is set but the button for the one not set will be disabled.
   */
  onPrevious: PropTypes.func,
  /**
   * Accessibility label for Previous button. To be used with onPrevious prop.
   */
  prevButtonA11yLabel: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Text to be displayed as the title in the header bar.
   */
  text: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * title prop has been deperecated and will be removed on next major version relase. Replace the `title` prop with `text` prop.
   */
  title: PropTypes.string,
};

const defaultProps = {
  text: undefined,
  onClose: undefined,
  onBack: undefined,
  onMaximize: undefined,
  onMinimize: undefined,
  onNext: undefined,
  onPrevious: undefined,
  children: undefined,
  backButtonA11yLabel: undefined,
  prevButtonA11yLabel: undefined,
  nextButtonA11yLabel: undefined,
};

const ActionHeader = ({
  text,
  title,
  intl,
  level,
  onClose,
  onBack,
  onMaximize,
  onMinimize,
  onPrevious,
  onNext,
  children,
  backButtonA11yLabel,
  prevButtonA11yLabel,
  nextButtonA11yLabel,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const buttonId = uniqueid();
  const closeButtonId = `terra-action-header-close-button-${buttonId}`;
  const maximizeButtonId = `terra-action-header-maximize-button-${buttonId}`;
  const minimizeButtonId = `terra-action-header-minimize-button-${buttonId}`;

  const closeButton = onClose
    ? (
      <Button
        className={cx(['header-button', 'close-button'])}
        data-terra-action-header="close-button"
        isIconOnly
        icon={<span className={cx(['header-icon', 'close'])} />}
        text={intl.formatMessage({ id: 'Terra.actionHeader.close' })}
        onClick={onClose}
        variant={ButtonVariants.UTILITY}
        aria-describedby={closeButtonId}
      />
    )
    : null;
  const backButton = onBack
    ? (
      <Button
        className={cx(['header-button', 'back-button'])}
        data-terra-action-header="back-button"
        isIconOnly
        icon={<span className={cx(['header-icon', 'back'])} />}
        text={backButtonA11yLabel || intl.formatMessage({ id: 'Terra.actionHeader.back' })}
        onClick={onBack}
        variant={ButtonVariants.UTILITY}
      />
    )
    : null;

  let expandButton;
  if (!backButton) {
    if (onMaximize) {
      expandButton = (
        <Button
          className={cx(['header-button', 'maximize-button'])}
          data-terra-action-header="maximize-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'maximize'])} />}
          text={intl.formatMessage({ id: 'Terra.actionHeader.maximize' })}
          onClick={onMaximize}
          variant={ButtonVariants.UTILITY}
          aria-describedby={maximizeButtonId}
        />
      );
    } else if (onMinimize) {
      expandButton = (
        <Button
          className={cx(['header-button', 'minimize-button'])}
          data-terra-action-header="minimize-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'minimize'])} />}
          text={intl.formatMessage({ id: 'Terra.actionHeader.minimize' })}
          onClick={onMinimize}
          variant={ButtonVariants.UTILITY}
          aria-describedby={minimizeButtonId}
        />
      );
    }
  }

  const previousNextButtonGroup = (onPrevious || onNext)
    ? (
      <div className={cx('previous-next-button-group')}>
        <Button
          className={cx(['header-button', 'previous-button'])}
          data-terra-action-header="previous-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'previous'])} />}
          text={prevButtonA11yLabel || intl.formatMessage({ id: 'Terra.actionHeader.previous' })}
          onClick={onPrevious}
          isDisabled={onPrevious === undefined}
          variant={ButtonVariants.UTILITY}
        />
        <Button
          className={cx(['header-button', 'next-button'])}
          data-terra-action-header="next-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'next'])} />}
          text={nextButtonA11yLabel || intl.formatMessage({ id: 'Terra.actionHeader.next' })}
          onClick={onNext}
          isDisabled={onNext === undefined}
          variant={ButtonVariants.UTILITY}
        />
      </div>
    )
    : null;

  const leftButtons = (backButton || expandButton || previousNextButtonGroup)
    ? (
      <div className={cx('left-buttons', theme.className)}>
        {backButton}
        {expandButton}
        {previousNextButtonGroup}
      </div>
    )
    : null;

  const rightButtons = closeButton ? <div className={cx('right-buttons', theme.className)}>{closeButton}</div> : null;
  if (title) {
    // eslint-disable-next-line no-console
    console.warn('`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.'); // to be removed on next major version release.
  }
  if (!level) {
    // eslint-disable-next-line no-console
    console.warn('Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.'); // to be removed on next major version release.
  }
  return (
    <ActionHeaderContainer
      {...customProps}
      startContent={leftButtons}
      text={text || title}
      endContent={rightButtons}
      level={level || 1}
      id={buttonId}
    >
      {children}
    </ActionHeaderContainer>
  );
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

export default injectIntl(ActionHeader);
