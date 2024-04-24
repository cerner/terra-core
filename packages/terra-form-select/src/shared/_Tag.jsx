import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import styles from './_Tag.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The content of the tag.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function triggered when the tag is deselected.
   */
  onDeselect: PropTypes.func.isRequired,
  /**
   * The value of the tag.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Specifies whether the tag is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Ref object for accessing the underlying input element of the tag component.
   */
  inputRef: PropTypes.shape({
    focus: PropTypes.instanceOf(Element),
  }),
  /**
   * Specifies whether the tag should have aria-hidden attribute set to true or false.
   * Default is false.
   */
  ariaHidden: PropTypes.bool,
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
const Tag = ({
  children, onDeselect, value, disabled, intl, inputRef, ariaHidden,
}) => {
  const theme = React.useContext(ThemeContext);
  const tagRef = useRef(null);

  const handleKeyPress = (event) => {
    if ((event.key === 'Enter' || event.key === 'Backspace') && !disabled) {
      event.stopPropagation();
      onDeselect(value);
      const previousLi = tagRef.current.previousElementSibling;
      if (previousLi) {
        const deselectElement = previousLi.querySelector(':scope > :nth-child(2)');
        if (deselectElement) {
          deselectElement.focus();
        }
      } else {
        const nextLi = tagRef.current.nextElementSibling;
        if (nextLi) {
          const nextFocusableElement = nextLi.querySelector(':scope > :nth-child(2)');
          if (nextFocusableElement) {
            nextFocusableElement.focus();
            return;
          }
        }
        inputRef.focus();
      }
    }
  };
  return (
    <li className={cx('tag', theme.className)} ref={tagRef}>
      <span className={cx('display')}>
        {children}
      </span>
      <span
        id={`terra-tag-deselect-${value}`}
        onKeyDown={handleKeyPress}
        className={cx('deselect')}
        onClick={() => { if (!disabled) onDeselect(value); }}
        tabIndex={!disabled ? 0 : -1}
        role="button"
        aria-label={intl.formatMessage({ id: 'Terra.form.select.deselect' }, { text: children })}
        aria-hidden={ariaHidden}
      >
        <span className={cx('icon')} />
      </span>
    </li>
  );
};

Tag.propTypes = propTypes;

export default injectIntl(Tag);
