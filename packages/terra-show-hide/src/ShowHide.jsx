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
  buttonAlign: PropTypes.node,
  /**
   * Button text that will be displayed.
   */
  buttonText: PropTypes.string,
  /**
   * Allows parent to toggle the component. True for open and false for close.
   */
  isOpen: PropTypes.bool,
  /**
   * Ref to the first hidden child element. The element will get focus once the full content revealed. That allows the assistive technologies to start reading the hidden content from the place where it was cut off.
   */
  focusRef: PropTypes.shape({
    current: PropTypes.element,
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
};

const ShowHide = ((props) => {
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

  React.useEffect(() => {
    if (isOpen) {
      let element = null;
      if (props.focusRef?.current) {
        element = props.focusRef?.current;
      } else if (contentRef?.current) {
        element = contentRef?.current;
      }
      if (element) {
        element.setAttribute('tabIndex', '-1');
        element.setAttribute('data-focus-styles-enabled', isOpen);
        element.setAttribute('role', 'group');
        element.focus();
      }
    }
  }, [isOpen, props.focusRef, contentRef]);

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
});

ShowHide.propTypes = propTypes;
ShowHide.defaultProps = defaultProps;

export default injectIntl(ShowHide);
