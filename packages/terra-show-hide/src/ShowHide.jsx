import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'terra-toggle';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ShowHide.module.scss';
import Button from './_ShowHideButton';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content in the body of the component that will be shown or hidden.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function triggered when the component is expanded or collapsed.
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Text that will be visible to the user while the component is collapsed.
   */
  preview: PropTypes.node.isRequired,
  /**
   * Button text that will be displayed.
   */
  buttonText: PropTypes.string,
  /**
   * Icon displayed next to the button text.
   */
  icon: PropTypes.element,
  /**
   * Sets the animation for the component when it is expanded or collapsed.
   */
  isAnimated: PropTypes.bool,
  /**
   * Allows parent to toggle the component. True for open and false for close.
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  icon: <IconChevronDown />,
  isAnimated: false,
  isOpen: false,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

const ShowHide = (props, { intl }) => {
  const {
    buttonText,
    children,
    icon,
    isAnimated,
    onToggle,
    preview,
    isOpen,
    ...customProps
  } = props;

  const showHideClassName = cx([
    'button',
    { 'is-open': isOpen },
    customProps.className,
  ]);

  let intlButtonText = '';

  if (!buttonText) {
    if (isOpen) {
      intlButtonText = intl.formatMessage({ id: 'Terra.showhide.hide' });
    } else {
      intlButtonText = intl.formatMessage({ id: 'Terra.showhide.showmore' });
    }
  }

  return (
    <div {...customProps} className={showHideClassName}>
      {!isOpen && preview}
      <Toggle isOpen={isOpen} isAnimated={isAnimated} className={cx([{ animated: isAnimated }])}>
        {children}
      </Toggle>
      <Button
        icon={<span className={cx('icon')}>{icon}</span>}
        aria-expanded={isOpen}
        text={buttonText || intlButtonText}
        onClick={onToggle}
      />
    </div>
  );
};

ShowHide.contextTypes = contextTypes;
ShowHide.propTypes = propTypes;
ShowHide.defaultProps = defaultProps;

export default ShowHide;
