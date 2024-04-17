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
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
const Tag = ({
  children, onDeselect, value, disabled, intl,
}) => {
  const theme = React.useContext(ThemeContext);
  const tagRef = useRef(null);

  const handleEnterKeyPress = (event) => {
    if ((event.key === 'Enter' || event.key === 'Backspace') && !disabled) {
      event.stopPropagation();
      onDeselect(value);
      const previousLi = tagRef.current.previousElementSibling;

      if (previousLi) {
        const deselectElement = previousLi.children[1];
        if (deselectElement) {
          deselectElement.focus();
        }
      } else {
        const nextLi = tagRef.current.nextElementSibling;
        const parentUl = tagRef.current.closest('ul');
        if (nextLi) {
          const deselectElement = nextLi.children[1];
          if (deselectElement) {
            deselectElement.focus();
          } else {
            parentUl.click();
          }
        } else {
          parentUl.click();
        }
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
        onKeyDown={handleEnterKeyPress}
        className={cx('deselect')}
        onClick={() => { if (!disabled) onDeselect(value); }}
        tabIndex={!disabled ? 0 : -1}
        role="button"
        aria-label={intl.formatMessage({ id: 'Terra.form.select.deselect' }, { text: children })}
      >
        <span className={cx('icon')} />
      </span>
    </li>
  );
};

Tag.propTypes = propTypes;

export default injectIntl(Tag);
