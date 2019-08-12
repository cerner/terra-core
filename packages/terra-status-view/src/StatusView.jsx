import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Button from 'terra-button';
import Divider from 'terra-divider';
import styles from './StatusView.module.scss';

const cx = classNames.bind(styles);

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
   * Example:`[{ text: 'Button 1', key: 1, size: 'medium', variant: 'action', onClick: onClickFunction}]`
   */
  buttonAttrs: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),

  /**
   * Display a custom glyph. Overrides a variant's default glyph.
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
  variant: PropTypes.oneOf(Object.values(StatusViewVariants)),
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
};

const generateButtons = (buttonAttrsArray) => {
  if (!buttonAttrsArray.length) {
    return undefined;
  }

  return buttonAttrsArray.map((button) => <Button {...button} className={cx(['button', button.className])} />);
};

const StatusView = ({
  buttonAttrs,
  customGlyph,
  isAlignedTop,
  isGlyphHidden,
  message,
  title,
  variant,
  ...customProps
}) => {
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
        <svg className={cx(variant)} />
      </div>
    );
  }

  let defaultTitle;
  if (variant) {
    defaultTitle = <FormattedMessage id={`Terra.status-view.${variant}`} />;
  }

  // Custom title takes precedence
  let titleSection;
  if (title || defaultTitle) {
    titleSection = (
      <div className={cx('title')}>
        {title || defaultTitle}
      </div>
    );
  }

  let messageSection;
  if (message) {
    messageSection = (
      <div className={cx('message')}>
        {message}
      </div>
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

  const outerViewClassNames = cx([
    'outer-view',
    { 'is-aligned-top': isAlignedTop },
    customProps.className,
  ]);

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
      </div>
      <div className={cx('bottom-space')} />
    </div>
  );
};

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;
export default StatusView;
export { StatusViewVariants };
