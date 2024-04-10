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
  const deselectRef = useRef(null);

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' && !disabled) {
      onDeselect(value);
      const parentUl = deselectRef.current.closest('ul');
      // Filtering out hidden children
      const visibleChildrenLis = Array.from(parentUl.children).filter(child => child.tagName === 'LI' && !/visually-hidden-component/.test(child.className));
      if (visibleChildrenLis.length >= 2) {
        const secondLastLi = visibleChildrenLis[visibleChildrenLis.length - 2];
        if (secondLastLi) {
          const spanChildren = secondLastLi.children;
          if (spanChildren[1]) {
            spanChildren[1].focus();
          }
        }
      } else {
        parentUl.click();
      }
    }
  };
  return (
    <li className={cx('tag', theme.className)}>
      <span className={cx('display')}>
        {children}
      </span>
      <span
        ref={deselectRef}
        onKeyDown={handleEnterKeyPress}
        className={cx('deselect')}
        onClick={() => { if (!disabled) onDeselect(value); }}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={!disabled ? 0 : null}
        role={!disabled ? 'button' : null}
        aria-label={!disabled ? `${intl.formatMessage({ id: 'Terra.form.select.deselect' })} ${children}` : null}
      >
        <span className={cx('icon')} />
      </span>
    </li>
  );
};

Tag.propTypes = propTypes;

export default injectIntl(Tag);
