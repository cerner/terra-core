import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { IconButton } from 'terra-button';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import uniqueid from 'lodash.uniqueid';
import ActionHeaderContainer from './_ActionHeaderContainer';
import styles from './ActionHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Accessibility label for Back button. To be used with onBack prop.
   */
  backButtonA11yLabel: PropTypes.string,
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
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=1`. This helps screen readers to announce appropriate heading levels.
   * Changing 'level' will not visually change the style of the content.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Accessibility label for Next button. To be used with onNext prop
   */
  nextButtonA11yLabel: PropTypes.string,
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
   * Accessibility label for Previous button. To be used with onPrevious prop.
   */
  prevButtonA11yLabel: PropTypes.string,
  /**
   * Text to be displayed as the title in the header bar.
   */
  text: PropTypes.string,
};

const defaultProps = {
  text: undefined,
  level: undefined,
  onClose: undefined,
  onBack: undefined,
  onMaximize: undefined,
  onMinimize: undefined,
  onNext: undefined,
  onPrevious: undefined,
  children: undefined,
  backButtonA11yLabel: undefined,
  nextButtonA11yLabel: undefined,
  prevButtonA11yLabel: undefined,

};

const ActionHeader = ({
  text,
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
  nextButtonA11yLabel,
  prevButtonA11yLabel,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const buttonId = uniqueid();
  const closeButtonId = `terra-action-header-close-button-${buttonId}`;
  const maximizeButtonId = `terra-action-header-maximize-button-${buttonId}`;
  const minimizeButtonId = `terra-action-header-minimize-button-${buttonId}`;

  const visuallyHiddenComponent = (
    <>
      <VisuallyHiddenText aria-hidden id={closeButtonId} text={intl.formatMessage({ id: 'Terra.actionHeader.close.description' }, { text })} />
      <VisuallyHiddenText aria-hidden id={maximizeButtonId} text={intl.formatMessage({ id: 'Terra.actionHeader.maximize.description' }, { text })} />
      <VisuallyHiddenText aria-hidden id={minimizeButtonId} text={intl.formatMessage({ id: 'Terra.actionHeader.minimize.description' }, { text })} />
    </>
  );

  const closeButton = onClose
    ? (
      <IconButton
        className={cx(['header-button', 'close-button'])}
        data-terra-action-header="close-button"
        isIconOnly
        icon={<span className={cx(['header-icon', 'close'])} />}
        iconType={IconButton.Opts.IconTypes.INFORMATIVE}
        text={intl.formatMessage({ id: 'Terra.actionHeader.close' })}
        onClick={onClose}
        variant={IconButton.Opts.Variants.UTILITY}
        aria-describedby={closeButtonId}
      />
    )
    : null;
  const backButton = onBack
    ? (
      <IconButton
        className={cx(['header-button', 'back-button'])}
        data-terra-action-header="back-button"
        isIconOnly
        icon={<span className={cx(['header-icon', 'back'])} />}
        iconType={IconButton.Opts.IconTypes.INFORMATIVE}
        text={backButtonA11yLabel || intl.formatMessage({ id: 'Terra.actionHeader.back' })}
        onClick={onBack}
        variant={IconButton.Opts.Variants.UTILITY}
      />
    )
    : null;

  let expandButton;
  if (!backButton) {
    if (onMaximize) {
      expandButton = (
        <IconButton
          className={cx(['header-button', 'maximize-button'])}
          data-terra-action-header="maximize-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'maximize'])} />}
          iconType={IconButton.Opts.IconTypes.INFORMATIVE}
          text={intl.formatMessage({ id: 'Terra.actionHeader.maximize' })}
          onClick={onMaximize}
          variant={IconButton.Opts.Variants.UTILITY}
          aria-describedby={maximizeButtonId}
        />
      );
    } else if (onMinimize) {
      expandButton = (
        <IconButton
          className={cx(['header-button', 'minimize-button'])}
          data-terra-action-header="minimize-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'minimize'])} />}
          iconType={IconButton.Opts.IconTypes.INFORMATIVE}
          text={intl.formatMessage({ id: 'Terra.actionHeader.minimize' })}
          onClick={onMinimize}
          variant={IconButton.Opts.Variants.UTILITY}
          aria-describedby={minimizeButtonId}
        />
      );
    }
  }

  const previousNextButtonGroup = (onPrevious || onNext)
    ? (
      <div className={cx('previous-next-button-group')}>
        <IconButton
          className={cx(['header-button', 'previous-button'])}
          data-terra-action-header="previous-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'previous'])} />}
          iconType={IconButton.Opts.IconTypes.INFORMATIVE}
          text={prevButtonA11yLabel || intl.formatMessage({ id: 'Terra.actionHeader.previous' })}
          onClick={onPrevious}
          isDisabled={onPrevious === undefined}
          variant={IconButton.Opts.Variants.UTILITY}
        />
        <IconButton
          className={cx(['header-button', 'next-button'])}
          data-terra-action-header="next-button"
          isIconOnly
          icon={<span className={cx(['header-icon', 'next'])} />}
          iconType={IconButton.Opts.IconTypes.INFORMATIVE}
          text={nextButtonA11yLabel || intl.formatMessage({ id: 'Terra.actionHeader.next' })}
          onClick={onNext}
          isDisabled={onNext === undefined}
          variant={IconButton.Opts.Variants.UTILITY}
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
        {visuallyHiddenComponent}
      </div>
    )
    : null;

  const rightButtons = closeButton ? <div className={cx('right-buttons', theme.className)}>{closeButton}</div> : null;

  return (
    <ActionHeaderContainer
      {...customProps}
      startContent={leftButtons || visuallyHiddenComponent}
      text={text}
      endContent={rightButtons}
      level={level}
    >
      {children}
    </ActionHeaderContainer>
  );
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

export default injectIntl(ActionHeader);
