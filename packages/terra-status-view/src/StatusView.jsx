import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { FormattedMessage } from 'react-intl';
import Button from 'terra-button';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import Divider from 'terra-divider';
import styles from './StatusView.module.scss';

const cx = classNamesBind.bind(styles);

const StatusViewVariants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
};

/* eslint-disable react/forbid-foreign-prop-types */
const propTypes = {
  /**
   * An array of objects containing terra-button properties. A key attribute is required for each object.
   * This array is used to render buttons in the bottom section.
   * Example:`[{ text: 'Button 1', key: 1, variant: 'neutral', onClick: onClickFunction}]`
   */
  buttonAttrs: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),

  /**
   * Display a custom glyph. Overrides a variant's default glyph.
   * Set `focusable=false` for svg element used as `customGlyph`.
   */
  customGlyph: PropTypes.node,

  /**
   *  Aligns the component at the top of the container rather than "centered"
   */
  isAlignedTop: PropTypes.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text, displayed under the title.
   */
  message: PropTypes.string,

  /**
   * The title displayed under the glyph. Variants contain default titles that can be overriden by this prop.
   */
  title: PropTypes.string,

  /**
   * Sets the glyph and title using a pre-baked variant. One of the following: `no-data`,
   * `no-matching-results`, `not-authorized`, or `error`
   */
  variant: PropTypes.oneOf(['no-data', 'no-matching-results', 'not-authorized', 'error']),
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func, locale: PropTypes.string }).isRequired,
   /**
    * @private
   * Determines if the status should be changed while clicking Apply button.
   */
   onStatusClick: PropTypes.bool,
};
/* eslint-enable react/forbid-foreign-prop-types */

const defaultProps = {
  buttonAttrs: [],
  customGlyph: undefined,
  isAlignedTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  variant: undefined,
  onStatusClick: false,
};

const generateButtons = (buttonAttrsArray) => {
  if (!buttonAttrsArray.length) {
    return undefined;
  }

  return buttonAttrsArray.map(button => <Button {...button} className={cx(['button', button.className])} />);
};


const StatusView = ({
  buttonAttrs,
  customGlyph,
  isAlignedTop,
  isGlyphHidden,
  message,
  title,
  variant,
  intl,
  onStatusClick,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  let visuallyHiddenComponent = null;

  useEffect(() => {
    if(onStatusClick) {
      visuallyHiddenComponent.innerText = intl.formatMessage({ id: `Terra.status-view.${variant}`});
    }
  },[onStatusClick])


  let glyphSection;
  if (customGlyph && !isGlyphHidden) {
    glyphSection = (
      <div className={cx('glyph')}>
        {customGlyph}
      </div>
    );
  } else if (variant && !isGlyphHidden) {
    glyphSection = (
      <div className={cx('glyph')}>
        <div className={cx(variant, 'glyph-icon')} />
      </div>
    );
  }

  let defaultTitle;
  if (variant) {
    defaultTitle = intl.formatMessage({ id: `Terra.status-view.${variant}`});
  }


  const setVisuallyHiddenComponent = (node) => {
    visuallyHiddenComponent = node;
  };

  // Custom title takes precedence
  let titleSection;
  if (title || defaultTitle) {
    titleSection = (
      <p className={cx('title')}>
        {title || defaultTitle}
      </p>
    );
  }

  let messageSection;
  if (message) {
    messageSection = (
      <p className={cx('message')}>
        {message}
      </p>
    );
  }

  let actionSection;
  const buttons = generateButtons(buttonAttrs);
  if (buttons) {
    actionSection = (
      <div className={cx('actions')}>
        {buttons}
      </div>
    );
  }

  let dividerSection;
  if (titleSection && (messageSection || actionSection)) {
    dividerSection = (
      <div className={cx('divider')}>
        <Divider />
      </div>
    );
  }

  const outerViewClassNames = classNames(
    cx(
      'outer-view',
      { 'is-aligned-top': isAlignedTop },
      theme.className,
    ),
    customProps.className,
  );

  const innerViewClassNames = cx([
    'inner-view',
  ]);

  return (
    <div {...customProps} className={outerViewClassNames}>
      <div className={cx('top-space')} />
      <div className={innerViewClassNames}>
        {glyphSection}
        {titleSection}
        {dividerSection}
        {messageSection}
        {actionSection}
        <VisuallyHiddenText
          refCallback={setVisuallyHiddenComponent}
          aria-atomic="true"
          aria-relevant="all"
          aria-live="polite"
        />
      </div>
      <div className={cx('bottom-space')} />
    </div>
  );
};

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;
export default injectIntl(StatusView);
export { StatusViewVariants };
