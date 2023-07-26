import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import Toggle from 'terra-toggle';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ShowHide.module.scss';
import Button from './_ShowHideButton';
import Paragraph from './_ShowHideParagraph';

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

  const theme = useContext(ThemeContext);
  const contentRef = useRef(null);
  const [containerIsActive, setContainerIsActive] = useState(false);

  /**
   * Upon showing hidden content, set activeElement to focusRef element if provided, othervise set it to content container.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    if (focusRef?.current) {
      focusRef?.current.focus();
    } else if (contentRef?.current) {
      setContainerIsActive(true);
    }
  }, [isOpen, focusRef, contentRef]);

  useEffect(() => {
    if (containerIsActive && isOpen && contentRef?.current) {
      contentRef?.current?.focus();
    }
  }, [containerIsActive, isOpen]);
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
    if (containerIsActive) {
      setContainerIsActive(false);
    }
  };

  return (
    <div {...customProps}>
      {!isOpen && preview}
      <div
        className={cx(['show-hide', 'show-hide-content', theme.className])}
        ref={contentRef}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={containerIsActive ? '-1' : null}
        role={containerIsActive ? 'group' : null}
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
export { Paragraph };
