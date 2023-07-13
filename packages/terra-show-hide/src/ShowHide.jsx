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
  * Returns true if element is NOT normally interactive element like button and has no negative tabindex added by user.
  * Considers following options:
  *
  * (1) Focusable BUTTON element would have:
  * element.tabIndex:  0
  * element.hasAttribute():  false
  *
  * (2) Not focusable SPAN element with no tabindex set would have:
  * element.tabIndex:  -1
  * element.hasAttribute():  false
  *
  * (3) Focusable SPAN element with tabindex set to -1 would have:
  * element.tabIndex:  -1
  * element.hasAttribute():  true
  */
const checkIfAddTabindex = (element) => element?.tabIndex === -1 && !element?.hasAttribute('tabindex');

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
  const [activeElement, setActiveElement] = React.useState(null);
  const focusRefClassName = 'show-hide-ref-focusable';

  /**
   * Upon showing hidden content, set activeElement to focusRef element if provided, othervise set it to content container.
   */
  React.useEffect(() => {
    let newActiveElement = null;
    if (isOpen) {
      if (focusRef?.current) {
        if (checkIfAddTabindex(focusRef?.current)) {
          // not focusable element with no tabindex set, safe to temporary add tabindex that will later be removed on blur
          focusRef?.current.setAttribute('tabIndex', '-1');
          focusRef?.current.setAttribute('role', 'group');
          focusRef?.current.classList.add(focusRefClassName); // needed for onBlur cleanup
        }
        newActiveElement = focusRef?.current;
      } else if (contentRef?.current) {
        newActiveElement = contentRef?.current;
      }
    }
    setActiveElement(newActiveElement);
  }, [isOpen, focusRef, contentRef]);

  /**
  * Set focus to active element allows assistive technologies to read the newly revealed content.
  */
  React.useEffect(() => {
    if (activeElement && isOpen) {
      activeElement.focus();
    }
  }, [activeElement, isOpen]);

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

  const onBlur = () => {
    if (activeElement === focusRef?.current && focusRef?.current?.classList?.contains(focusRefClassName)) {
      focusRef?.current.removeAttribute('tabindex');
      focusRef?.current.removeAttribute('role');
      focusRef?.current.classList.remove(focusRefClassName);
    }
    // There should be no activeElement anymore, the nex time an activeElement shows up is when isOpen changes to true.
    setActiveElement(null);
  };

  const isActiveElement = activeElement === contentRef?.current;

  return (
    <div {...customProps}>
      {!isOpen && preview}
      <div
        className={cx(['show-hide', 'show-hide-content', theme.className])}
        ref={contentRef}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={isActiveElement ? '-1' : null}
        onBlur={onBlur}
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
