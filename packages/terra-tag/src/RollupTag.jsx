import React, { useRef } from 'react';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { injectIntl } from 'react-intl';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import { v4 as uuidv4 } from 'uuid';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Tag.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Determines if the Tag List is rolled up or not.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Callback function triggered on click/key press of the roll-up tag
   */
  onSelectRollUp: PropTypes.func,
  /**
   * Number of tags that are rolled up.
   */
  rollupCount: PropTypes.number,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const RollUpTag = (props) => {
  const {
    isCollapsed, onSelectRollUp, intl, rollupCount,
  } = props;
  const rollUpTagRef = useRef();
  const theme = React.useContext(ThemeContext);

  const handleOnSelectRollUp = (event) => {
    rollUpTagRef.current.setAttribute('data-terra-rollup-tag-show-focus-styles', 'true');
    event.preventDefault();
    event.stopPropagation();
    onSelectRollUp(event);
  };

  const handleRollUpTagKeyDown = (event) => {
    rollUpTagRef.current.setAttribute('data-terra-rollup-tag-show-focus-styles', 'true');
    if (event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelectRollUp(event);
    }
  };

  const handleRollUpTagMouseDown = () => {
    rollUpTagRef.current.setAttribute('data-terra-rollup-tag-show-focus-styles', 'false');
  };

  const handleOnBlur = () => {
    rollUpTagRef.current.setAttribute('data-terra-rollup-tag-show-focus-styles', 'true');
  };

  const rollUpLabel = isCollapsed && rollupCount > 0 ? intl.formatMessage({ id: 'Terra.tags.label.rollupTag' }, { tagsNotVisibleCount: rollupCount }) : intl.formatMessage({ id: 'Terra.tags.label.showLess' });
  const rollUpHint = isCollapsed ? intl.formatMessage({ id: 'Terra.tags.hint.rollupTag' }, { tagsNotVisibleCount: rollupCount }) : intl.formatMessage({ id: 'Terra.tags.hint.showLess' });
  const rollUpTagId = `terra-rollup-tag-${uuidv4()}`;
  const visuallyHiddenContentId = `terra-rollup-tag-${uuidv4()}`;
  return (
    <div
      role="button"
      className={cx('tag-list-item')}
    >
      <button
        id={rollUpTagId}
        className={cx(['rollup-tag', theme.className])}
        onClick={handleOnSelectRollUp}
        onKeyDown={handleRollUpTagKeyDown}
        onMouseDown={handleRollUpTagMouseDown}
        onBlur={handleOnBlur}
        ref={rollUpTagRef}
        tabIndex="0"
        type="button"
        aria-describedby={visuallyHiddenContentId}
        data-terra-rollup-tag-show-focus-styles
        data-terra-rollup-tag
      >
        <span className={cx('rollup-tag-label')}>{rollUpLabel}</span>
      </button>
      <VisuallyHiddenText id={visuallyHiddenContentId} text={rollUpHint} aria-hidden="true" />
    </div>
  );
};

RollUpTag.propTypes = propTypes;
export default injectIntl(RollUpTag);
