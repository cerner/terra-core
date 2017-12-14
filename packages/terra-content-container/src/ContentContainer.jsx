import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ContentContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The header element to be placed within the header area of the container.
   */
  header: PropTypes.node,
  /**
   * The footer element to be placed within the footer area of the container.
   */
  footer: PropTypes.node,
  /**
   * The children to be placed within the main content area of the container.
   */
  children: PropTypes.node,
  /**
   * Whether or not the container should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  header: undefined,
  footer: undefined,
  children: undefined,
  fill: false,
};

const ContentContainer = ({
  header,
  footer,
  children,
  fill,
  ...customProps
  }) => {
  const contentLayoutClassNames = cx([
    'content-container',
    { fill },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={contentLayoutClassNames}>
      {header && <div className={cx('header')}>
        {header}
      </div>}
      <div className={cx('main')}>
        <div className={cx('normalizer')}>
          {children}
        </div>
      </div>
      {footer && <div className={cx('footer')}>
        {footer}
      </div>}
    </div>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
