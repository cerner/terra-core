import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import ThemeContext from 'terra-theme-context';
import styles from './ContentContainer.module.scss';
import BorderColor from './BorderColor';

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
   * set the border color to white or not to match the color contast ratios if the content has dark background (only to be used when setFocusOnContainer is used),
   * when borderColor is not defined or prop is not used, it will used the default border color according to the theme.
   */
  borderColor: PropTypes.oneOf(['dark-border', 'light-border']),
};

const defaultProps = {
  header: undefined,
  footer: undefined,
  children: undefined,
  fill: false,
  scrollRefCallback: undefined,
  setFocusOnContainer: false,
  borderColor: '',
};

const ContentContainer = ({
  header,
  footer,
  children,
  fill,
  scrollRefCallback,
  setFocusOnContainer,
  borderColor,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const contentLayoutClassNames = cx([
    `content-container-${fill ? 'fill' : 'static'}`,
    customProps.className,
  ]);

  let borderColorStyle = '';
  if (borderColor) {
    switch (borderColor) {
      case BorderColor.Darkborder:
        borderColorStyle = 'dark-border';
        break;
      case BorderColor.Lightborder:
        borderColorStyle = 'light-border';
        break;
      default:
        borderColorStyle = 'default-border';
    }
  } else {
    borderColorStyle = 'default-border';
  }

  return (
    <div {...customProps} className={contentLayoutClassNames}>
      {header && <div className={cx('header', { focusoncontainer: setFocusOnContainer })}>{header}</div>}
      <div className={cx('main')}>
        <Scroll className={cx('normalizer', { focusoncontainer: setFocusOnContainer }, theme.className, borderColorStyle)} refCallback={scrollRefCallback} tabIndex={setFocusOnContainer ? '0' : '-1'}>
          {children}
        </Scroll>
      </div>
      {footer && <div className={cx('footer', { focusoncontainer: setFocusOnContainer })}>{footer}</div>}
    </div>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
