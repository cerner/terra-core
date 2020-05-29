import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from 'terra-hookshot';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './_Dropdown.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The content of the dropdown.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether the dropdown is presented above the target.
   */
  isAbove: PropTypes.bool,
  /**
   * Whether the dropdown is visible.
   */
  isEnabled: PropTypes.bool,
  /**
   * Ensures touch accessibility by rendering the dropdown inline without a portal.
   *
   * Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.
   * The dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor.
   */
  isTouchAccessible: PropTypes.bool,
  /**
   * Callback function triggered when the dropdown resizes.
   */
  onResize: PropTypes.func.isRequired,
  /**
   * Callback function triggered for setting a ref to the dropdown.
   */
  refCallback: PropTypes.func.isRequired,
  /**
   * The attachment target.
   */
  // eslint-disable-next-line react/forbid-prop-types
  target: PropTypes.object.isRequired,
};

const defaultProps = {
  isAbove: false,
  isTouchAccessible: false,
};

const AboveAttachment = {
  vertical: 'bottom',
  horizontal: 'start',
};

const BelowAttachment = {
  vertical: 'top',
  horizontal: 'start',
};

const Dropdown = ({
  children,
  isAbove,
  isEnabled,
  isTouchAccessible,
  onResize,
  refCallback,
  target,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  /**
   * Prevents default events from removing the focus from the target.
   * @param {event} event - The event invoking the callback.
   */
  const preventDefault = React.useCallback((event) => {
    event.preventDefault();
  }, []);

  const dropdownClasses = classNames(
    cx([
      'dropdown',
      { 'is-above': isAbove },
      { 'is-touch-accessible': isTouchAccessible },
      theme.className,
    ]),
    customProps.className,
  );

  if (isTouchAccessible) {
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        {...customProps}
        className={dropdownClasses}
        onMouseDown={preventDefault}
        ref={refCallback}
      >
        {children}
      </div>
    );
  }

  return (
    <Hookshot
      isOpen
      isEnabled={isEnabled}
      targetRef={() => target}
      attachmentBehavior="none"
      contentAttachment={isAbove ? AboveAttachment : BelowAttachment}
      targetAttachment={isAbove ? BelowAttachment : AboveAttachment}
    >
      <Hookshot.Content
        {...customProps}
        disableOnClickOutside
        className={dropdownClasses}
        onResize={onResize}
        onMouseDown={preventDefault}
        refCallback={refCallback}
      >
        {children}
      </Hookshot.Content>
    </Hookshot>
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
