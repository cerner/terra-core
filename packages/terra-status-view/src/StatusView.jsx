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
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * An array of actionable buttons to display.
   */
  children: PropTypes.node,

  /**
   * The glyph that is to be displayed for the `custom` variant.
   */
  customGlyph: PropTypes.node,

  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,

  /**
   *  Determines if the content should be aligned vertically at the top of the container rather than in the middle.
   */
  isAlignedTop: PropTypes.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text to display.
   */
  message: PropTypes.string,

  /**
   * The status view's title to display. Status views with variants of type `no-data`,
   * `no-matching-results`, `not-authorized`,
   * `error` will have defaulted values unless overridden with this prop.
   */
  title: PropTypes.string,

  /**
   * Determines the glyph to display, one of the following: `no-data`,
   * `no-matching-results`, `not-authorized`,
   * `error`, or `custom`.
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
  variant: StatusViewVariants.ERROR,
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
    if (variant === StatusViewVariants.CUSTOM) {
      glyphSection = (
        <div className={cx('glyph')} >
          {customGlyph}
        </div>
      );
    } else {
      glyphSection = (
        <div className={cx('glyph')} >
          <svg className={cx(variant)} />
        </div>
      );
    }
  }

  let messageSection;
  if (message) {
    messageSection = (
      <div className={cx('message')} >
        {message}
      </div>
    );
  }

  let actionSection;
  if (React.Children.count(children) > 0) {
    actionSection = (
      <div className={cx('actions')} >
        {children}
      </div>
    );
  }

  let defaultTitle = title;
  if (!defaultTitle) {
    defaultTitle = (variant === StatusViewVariants.CUSTOM) ? '' : intl.formatMessage({ id: `Terra.status-view.${variant}` });
  }

  let dividerSection;
  if (messageSection || actionSection) {
    dividerSection = (
      <div className={cx('divider')} >
        <Divider />
      </div>
    );
  }

  const titleSection = (
    <div className={cx('title')} >
      {defaultTitle}
    </div>
  );

  const statusViewClassNames = cx([
    'outer-view',
    customProps.className,
  ]);

  return (
    <div
      {...customProps}
      className={statusViewClassNames}
    >
      <div
        className={cx('inner-view')}
      >
        {glyphSection}
        <div className={cx('message-content-group')}>
          {titleSection}
          {dividerSection}
          {messageSection}
        </div>
        {actionSection}
      </div>
    </div>
  );
}

StatusView.Opts = {};
StatusView.Opts.variants = StatusViewVariants;
StatusView.propTypes = propTypes;
StatusView.contextTypes = contextTypes;
StatusView.defaultProps = defaultProps;
export default injectIntl(StatusView);
export { StatusViewVariants };
