import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import styles from './ContentContainer.module.scss';

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
  /**
   * Ref callback for the scrollable area of the content container.
   */
  scrollRefCallback: PropTypes.func,
};

const defaultProps = {
  header: undefined,
  footer: undefined,
  children: undefined,
  fill: false,
  scrollRefCallback: undefined,
};

const ContentContainer = ({
  header,
  footer,
  children,
  fill,
  scrollRefCallback,
  ...customProps
}) => {
  const contentLayoutClassNames = cx([
    `content-container-${fill ? 'fill' : 'static'}`,
    customProps.className,
  ]);

  return (
    <div {...customProps} className={contentLayoutClassNames}>
      {header && <div className={cx('header')}>{header}</div>}
      <div className={cx('main')}>
        <Scroll tabIndex={fill ? 0 : -1} className={cx('normalizer')} refCallback={scrollRefCallback}>
          {children}
        </Scroll>
      </div>
      {footer && <div className={cx('footer')}>{footer}</div>}
    </div>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
