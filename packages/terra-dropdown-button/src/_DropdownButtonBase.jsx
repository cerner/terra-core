import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from './_Dropdown';
import styles from './DropdownButton.module.scss';

const cx = classNames.bind(styles);

const Variants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
  GHOST: 'ghost',
};

const propTypes = {
  /**
   * The button or buttons that are the primary option and chevron
   */
  children: PropTypes.node.isRequired,
  /**
   * The options to display in the dropdown. Should be of type `Button`.
   */
  buttons: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  requestClose: PropTypes.func.isRequired,
  /**
   * Determines whether the primary button and expanding the dropdown should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Determines whether the component should have block styles applied. The dropdown will match the component's width.
   */
  isBlock: PropTypes.bool,
  /**
   * Sets the styles of the component.
   * Must be either 'neutral' or 'emphasis'.
   */
  variant: PropTypes.oneOf(Object.values(Variants)),
};

const defaultProps = {
  disabled: false,
  isBlock: false,
  variant: 'neutral',
};

const DropdownButtonBase = ({
  children,
  buttons,
  isOpen,
  requestClose,
  disabled,
  isBlock,
  variant,
  ...customProps
}) => {
  const buttonWrapperRef = useRef(null);

  const DropdownButtonClassNames = cx([
    'dropdown-button',
    variant,
    { 'is-block': isBlock },
    { disabled },
    customProps.className,
  ]);

  return (
    <div
      {...customProps}
      className={DropdownButtonClassNames}
      ref={buttonWrapperRef}
    >
      {children}
      <Dropdown
        targetRef={() => buttonWrapperRef.current}
        isOpen={isOpen}
        requestClose={requestClose}
        width={(buttonWrapperRef.current && isBlock) ? `${buttonWrapperRef.current.offsetWidth}px` : undefined}
      >
        {buttons}
      </Dropdown>
    </div>
  );
};

DropdownButtonBase.propTypes = propTypes;
DropdownButtonBase.defaultProps = defaultProps;

export default DropdownButtonBase;
export { Variants };
