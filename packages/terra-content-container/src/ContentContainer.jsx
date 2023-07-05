import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import ThemeContext from 'terra-theme-context';
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
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Sets focus on content when set to `true`. Focus on content helps in scrolling  within container when there is no interactive element to focus within container.
   */
  setFocusOnContainer: PropTypes.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * This prop needs to be set only if `setFocusOnContainer` is set. Based on dark or light background color the border will be white or black respectively to maintain
   * an accessible color contrast ratio.
   */
  backgroundColor: PropTypes.oneOf(['dark', 'light']),
};

const defaultProps = {
  header: undefined,
  footer: undefined,
  children: undefined,
  fill: false,
  scrollRefCallback: undefined,
  setFocusOnContainer: false,
  backgroundColor: undefined,
};

const ContentContainer = ({
  header,
  footer,
  children,
  fill,
  scrollRefCallback,
  setFocusOnContainer,
  backgroundColor,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const contentLayoutClassNames = cx([
    `content-container-${fill ? 'fill' : 'static'}`,
    customProps.className,
  ]);

  // border will only be visible when setFocusOnContainer is set for content-container
  const background = setFocusOnContainer && (backgroundColor || 'light');
  const scrollClassNames = cx(
    'normalizer',
    theme.className,
    { 'content-container-focused-padding': setFocusOnContainer },
    background,
  );

  return (
    <div {...customProps} className={contentLayoutClassNames}>
      {header && <div className={cx('header', { 'content-container-focused-padding': setFocusOnContainer })}>{header}</div>}
      <div className={cx('main')}>
        <Scroll className={scrollClassNames} refCallback={scrollRefCallback} tabIndex={setFocusOnContainer ? '0' : '-1'}>
          {children}
        </Scroll>
      </div>
      {footer && <div className={cx('footer', { 'content-container-focused-padding': setFocusOnContainer })}>{footer}</div>}
    </div>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
