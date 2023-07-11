import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'terra-toggle';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ShowHide.module.scss';
import Button from './_ShowHideButton';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content in the body of the component that will be shown or hidden.
   */
  children: PropTypes.node.isRequired,
  /**
   * @private
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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
   * Ref to the first hidden child element that will receive focus when the full content is revealed. This allows assistive technologies to start reading the hidden content from where it left off.
   */
  focusRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  /**
   * Elements(s) that will be visible to the user when component is collapsed
   */
  preview: PropTypes.node,
};

const defaultProps = {
  buttonAlign: 'start',
  isOpen: false,
  preview: undefined,
  focusRef: null,
};

/**
 * Disables focus styles for normally unfocusable elements.
 */
const disableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

/**
 * Remove attributes that makes element focusable.
 */
const removeAttributes = (event) => {
  event.currentTarget.removeAttribute('tabindex');
  event.currentTarget.removeAttribute('role');
};

/**
 * Focus element.
 */
const focusElement = (element) => {
  element.setAttribute('data-focus-styles-enabled', 'true');
  element.addEventListener('blur', disableFocusStyles);
  // try to focus the element.
  element.focus();
  // if element is not focusable, add atributes that make it focusable, then focus again.
  if (document.activeElement !== element) {
    element.setAttribute('tabIndex', '-1');
    element.setAttribute('role', 'group');
    element.addEventListener('blur', (event) => {
      disableFocusStyles(event);
      removeAttributes(event);
    });
    element.focus();
  }
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
    focusRef,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const contentRef = React.useRef(null);

  /**
   * Upon showing hidden content, set focus to the child element if focusRef provided, othervise set focus to the content container.
   * That would allow assistive technologies to read the newly revealed content.
   */
  React.useEffect(() => {
    if (isOpen) {
      let element = null;
      if (focusRef?.current) {
        element = focusRef?.current;
      } else if (contentRef?.current) {
        element = contentRef?.current;
      }
      if (element) {
        focusElement(element);
      }
    }
  }, [isOpen, focusRef, contentRef]);

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
      <div
        className={cx(['show-hide', 'show-hide-content', theme.className])}
        ref={contentRef}
      >
        <Toggle isOpen={isOpen}>
          {children}
        </Toggle>
      </div>
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
