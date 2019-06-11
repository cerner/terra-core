import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Divider from 'terra-divider';
import styles from './StatusView.module.scss';

const cx = classNames.bind(styles);

const StatusViewVariants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
};

const propTypes = {
  /**
   * An array of actionable buttons to display.
   */
  children: PropTypes.node,

  /**
   * Display a custom glyph. Overrides a variant's default glyph.
   */
  customGlyph: PropTypes.node,

  /**
   * @private The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,

  /**
   *  Aligns the component at the top of the container rather than "top middle."
   */
  isAlignedTop: PropTypes.bool,

  /**
   *  Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text, displayed under the title.
   */
  message: PropTypes.string,

  /**
   * The status view's title. Variants contain default titles that can be overriden by this prop.
   */
  title: PropTypes.string,

  /**
   * Sets the glyph and title of the specified variant. One of the following: `no-data`,
   * `no-matching-results`, `not-authorized`, or `error`
   */
  variant: PropTypes.oneOf(Object.values(StatusViewVariants)),
};

const defaultProps = {
  children: [],
  customGlyph: undefined,
  isAlignedTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  variant: undefined,
};

const checkVariantExistence = (variant) => {
  const variantArr = Object.values(StatusViewVariants);
  return variantArr.includes(variant);
};

const StatusView = ({
  children,
  customGlyph,
  intl,
  isAlignedTop,
  isGlyphHidden,
  message,
  title,
  variant,
  ...customProps
}) => {
  let glyphSection;
  if (!isGlyphHidden) {
    if (customGlyph) {
      glyphSection = (
        <div className={cx('glyph')}>
          {customGlyph}
        </div>
      );
    } else {
      glyphSection = (
        <div className={cx('glyph')}>
          <svg className={cx(variant)} />
        </div>
      );
    }
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
  if (React.Children.count(children) > 0) {
    actionSection = (
      <div className={cx('actions')}>
        {children}
      </div>
    );
  }

  let dividerSection;
  if (messageSection || actionSection) {
    dividerSection = (
      <div className={cx('divider')}>
        <Divider />
      </div>
    );
  }

  let defaultTitle;
  if (checkVariantExistence(variant)) {
    defaultTitle = intl.formatMessage({ id: `Terra.status-view.${variant}` });
  } else {
    defaultTitle = '';
  }

  // Custom title takes precedence
  const titleSection = (
    <div className={cx('title')}>
      {title || defaultTitle}
    </div>
  );

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
export default injectIntl(StatusView);
export { StatusViewVariants };
