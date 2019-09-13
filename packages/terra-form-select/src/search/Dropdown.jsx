import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from 'terra-hookshot';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

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
  children,
  isAbove,
  isEnabled,
  onResize,
  target,
  refCallback,
  ...customProps
}) => {
  const dropdownClasses = cx([
    'dropdown',
    customProps.className,
  ]);

  const attachment = isAbove ? AboveAttachment : BelowAttachment;

  return (
    <Hookshot
      isOpen
      isEnabled={isEnabled}
      targetRef={() => target}
      attachmentBehavior="none"
      contentAttachment={attachment}
      targetAttachment={attachment}
    >
      <Hookshot.Content
        {...customProps}
        disableOnClickOutside
        className={dropdownClasses}
        onResize={onResize}
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
