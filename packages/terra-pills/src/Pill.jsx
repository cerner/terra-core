import React, { useRef, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import {
  KEY_SPACE,
  KEY_RETURN,
  KEY_DELETE,
  KEY_BACK_SPACE,
} from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The label text for the pill. (Required)
   */
  label: PropTypes.string.isRequired,
  /**
   * The html `id` attribute for the pill.
   */
  id: PropTypes.string,
  /**
   * A callback function to execute when the pill is removed. If specified, the pill will be removable.
   */
  onRemove: PropTypes.func,
  /**
   * A callback function to execute when the pill is selected. If specified, the pill label will be selectable.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Design-Standards/blue) Intended to only be used to disclose a popup.
   */
  onSelect: PropTypes.func,
  /**
   * Callback to expose pill element's ref for popup placement.
   */
  refCallback: PropTypes.func,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) Consumers need to set the `aria-haspopup`
   * attribute to `true` when using a popup via 'onSelect'. Only applies when used along with the 'onSelect' prop.
   */
  ariaHasPopup: PropTypes.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) Consumers need to set the `aria-expanded` attribute to `true`
   * when using a popup via 'onSelect' and the popup is visible. Only applies when used along with the 'onSelect' prop.
   */
  ariaExpanded: PropTypes.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) Consumers need to provide the string of the ID for the
   * html element containing the popup content, so the `aria-controls` attribute can correctly be associated to the pill.
   * Only applies when used along with the 'onSelect' prop.
   */
  ariaControls: PropTypes.string,
  /**
   * Tooltip to display if the pill label does not have enough space to display and will show as truncated, to be used
   * in addition to a popup. Only applies when used along with the 'onSelect' prop.
   */
  title: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  id: undefined,
  onRemove: undefined,
  onSelect: undefined,
  refCallback: undefined,
  ariaHasPopup: false,
  ariaExpanded: false,
  ariaControls: undefined,
  title: undefined,
};

const Pill = (props) => {
  const {
    label,
    id,
    onRemove,
    onSelect,
    refCallback,
    ariaHasPopup,
    ariaExpanded,
    ariaControls,
    title,
    intl,
    ...customProps
  } = props;

  const pillRef = useRef();

  useEffect(() => {
    if (refCallback) {
      refCallback(pillRef.current);
    }
  }, [refCallback]);

  const handleOnClick = () => {
    onSelect();
  };

  const handleOnRemove = () => {
    onRemove();
  };

  const handleOnKeyDown = (event) => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if ((event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) && onSelect) {
      onSelect();
    } else if ((event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && onRemove) {
      onRemove();
    }
  };

  const handleOnMouseDown = () => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
  };

  const pillProps = {};
  if (onSelect || onRemove) {
    pillProps.tabIndex = '0';
    pillProps.onKeyDown = handleOnKeyDown;
    pillProps.onMouseDown = handleOnMouseDown;
    pillProps.role = 'button';
  }

  const pillButtonProps = {};
  if (onSelect) {
    pillButtonProps.title = title;
    pillButtonProps.onClick = handleOnClick;
  }

  const removeButtonProps = {};
  if (onRemove) {
    removeButtonProps.onClick = handleOnRemove;
  }

  let pillInteractionHint;
  if (onSelect && onRemove) {
    pillInteractionHint = intl.formatMessage({ id: 'Terra.pills.pillHint.selectableAndRemovable' });
  } else if (onSelect) {
    pillInteractionHint = intl.formatMessage({ id: 'Terra.pills.pillHint.selectable' });
  } else if (onRemove) {
    pillInteractionHint = intl.formatMessage({ id: 'Terra.pills.pillHint.removable' });
  }

  const theme = React.useContext(ThemeContext);

  const pillClassNames = classNames(
    cx([
      'pill-container',
      { 'is-focusable': !!onSelect || !!onRemove },
      { 'is-selectable': !!onSelect },
      { 'is-selectable-and-removable': !!onSelect && !!onRemove },
      theme.className,
    ]),
    customProps.className,
  );

  const pillLabelClassNames = cx([
    'pill-label',
    { 'is-selectable': !!onSelect },
    { 'is-removable': !!onRemove },
    { 'is-selectable-and-removable': !!onSelect && !!onRemove },
  ]);

  const removeButtonClassNames = cx([
    'pill-remove-button',
  ]);

  return (
    <div
      {...customProps}
      {...pillProps}
      id={id}
      ref={pillRef}
      aria-haspopup={!!onSelect && ariaHasPopup ? true : undefined}
      aria-expanded={!onSelect ? undefined : ariaExpanded}
      aria-controls={!onSelect ? undefined : ariaControls}
      data-terra-pills-show-focus-styles="true"
      className={pillClassNames}
    >
      <div
        {...pillButtonProps}
        className={pillLabelClassNames}
      >
        {label}
      </div>
      {onRemove && (
        <div
          {...removeButtonProps}
          className={removeButtonClassNames}
        >
          <span className={cx('clear-icon')} />
        </div>
      )}
      {pillInteractionHint && <VisuallyHiddenText text={pillInteractionHint} />}
    </div>
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default injectIntl(Pill);
