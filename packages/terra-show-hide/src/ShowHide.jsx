import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'terra-toggle';
import { injectIntl, intlShape } from 'terra-base';
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
  onChange: PropTypes.func.isRequired,
  /**
   * Elements(s) that will be visible to the user when component is collapsed
   */
  preview: PropTypes.node,
  /**
   * Button text that will be displayed.
   */
  buttonText: PropTypes.string,
  /**
   * Allows parent to toggle the component. True for open and false for close.
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
  preview: <div />,
};

injectIntl(({ intl }) => {
  if (intl === undefined) {
    return new Error('Component is internationalized, and must be wrapped in terra-base');
  }
  return intl;
});

const ShowHide = (props) => {
  const {
    buttonText,
    children,
    onChange,
    preview,
    intl,
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
      <Toggle isOpen={isOpen}>
        {children}
      </Toggle>
      <Button
        aria-expanded={isOpen}
        text={buttonText || intlButtonText}
        onClick={onChange}
      />
    </div>
  );
};

ShowHide.propTypes = propTypes;
ShowHide.defaultProps = defaultProps;

export default injectIntl(ShowHide);
