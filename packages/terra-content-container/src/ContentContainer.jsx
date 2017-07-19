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
  children: undefined,
  fill: false,
};

const ContentContainer = ({
  header,
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
      <div className={cx('header')}>
        {header}
      </div>
      <div className={cx('main')}>
        <div className={cx('normalizer')}>
          {children}
        </div>
      </div>
    </div>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
