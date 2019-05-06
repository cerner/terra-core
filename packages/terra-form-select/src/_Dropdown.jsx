import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from 'terra-hookshot';
import classNames from 'classnames/bind';
import styles from './_Dropdown.module.scss';
import SharedUtil from './_SharedUtil';

const cx = classNames.bind(styles);

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
  children, isAbove, isEnabled, onResize, target, refCallback, ...customProps
}) => {
  /**
   * Prevents default events from removing the focus from the target.
   * @param {event} event - The event invoking the callback.
   */
  const preventDefault = (event) => {
    event.preventDefault();
  };

  const dropdownClasses = cx([
    'dropdown',
    { 'is-above': isAbove },
    customProps.className,
  ]);

  /**
   * Visually hidden dropdown allows for more intuitive dropdown navigation when using gestures to navigate
   * the dropdown options while using VoiceOver on iOS.
   */
  let visuallyHiddenDropdown;
  if (SharedUtil.isSafari() && ('ontouchstart' in window)) {
    visuallyHiddenDropdown = (
      <div className={styles['visually-hidden-dropdown']}>
        {children}
      </div>
    );
  }

  return (
    <React.Fragment>
      {visuallyHiddenDropdown}
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
          <div aria-hidden="true">
            {children}
          </div>
        </Hookshot.Content>
      </Hookshot>
    </React.Fragment>
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
