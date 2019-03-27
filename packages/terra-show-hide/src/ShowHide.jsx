import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'terra-toggle';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './ShowHide.module.scss';
import Button from './_ShowHideButton';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content in the body of the component that will be shown or hidden.
   */
  children: PropTypes.node.isRequired,
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,
  /**
   * Callback function triggered when the component is expanded or collapsed.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Applies style for which side of the container the button aligns to. Available options are start, center and end
   */
  buttonAlign: PropTypes.string,
  /**
   * Button text that will be displayed.
   */
  buttonText: PropTypes.string,
  /**
   * Allows parent to toggle the component. True for open and false for close.
   */
  isOpen: PropTypes.bool,
  /**
   * Elements(s) that will be visible to the user when component is collapsed
   */
  preview: PropTypes.node,
};

const defaultProps = {
  buttonAlign: 'start',
  isOpen: false,
  preview: undefined,
};

const ShowHide = (props) => {
  const {
    buttonAlign,
    buttonText,
    children,
    onChange,
    preview,
    intl,
    isOpen,
    ...customProps
  } = props;

  const buttonClassName = cx([
    'show-hide',
    'button',
    buttonAlign,
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
    <div {...customProps}>
      {!isOpen && preview}
      <Toggle isOpen={isOpen}>
        {children}
      </Toggle>
      <div className={cx('show-hide')}>
        <Button
          aria-expanded={isOpen}
          text={buttonText || intlButtonText}
          onClick={onChange}
          className={buttonClassName}
        />
      </div>
    </div>
  );
};

ShowHide.propTypes = propTypes;
ShowHide.defaultProps = defaultProps;

export default injectIntl(ShowHide);
