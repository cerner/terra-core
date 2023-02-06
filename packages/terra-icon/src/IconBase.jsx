import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';

// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
import styles from './Icon.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: PropTypes.bool,
  /**
   * Should the SVG rotate.
   */
  isSpin: PropTypes.bool,
  /**
   * Child nodes.
   */
  children: PropTypes.node,
  /**
   * Height of SVG.
   */
  height: PropTypes.string,
  /**
   * Width of SVG.
   */
  width: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * String that labels the current element.
   * a11yLabel is required for informative icons to convey meaning of icon to screenreaders.
   */
  a11yLabel: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * ariaLabel has been deprecated and will be removed on next major version release.
   * rename the `ariaLabel` prop to `a11yLabel`.
   */
  ariaLabel: PropTypes.string, // to be removed on next major version release.
  /**
   * Focusable attribute. IE 10/11 are focusable without this attribute.
   */
  focusable: PropTypes.string,
};

const defaultProps = {
  isBidi: false,
  isSpin: false,
  children: null,
  height: '1em',
  width: '1em',
  focusable: 'false',
};

const IconBase = ({
  isBidi,
  isSpin,
  children,
  height,
  width,
  ariaLabel,
  a11yLabel,
  focusable,
  ...customProps
}) => {
  const attributes = { ...customProps };

  // append to existing classNames
  const classes = classNames(
    cx(
      'tui-Icon',
      'icon',
      { 'is-bidi': isBidi },
      { 'is-spin': isSpin },
    ),
    attributes.className,
  );

  let svgTitleTag;
  if (a11yLabel || ariaLabel) {
    svgTitleTag = React.createElement('title', {}, a11yLabel || ariaLabel);
    if (ariaLabel) {
    // eslint-disable-next-line no-console
      console.warn('`ariaLabel` prop has been renamed to `a11yLabel`. please update all the refernces of ariaLabel prop to a11yLabel.'); // to be removed on next major version release.
    }
  } else {
    // removes Aria attributes, role and title from customProps
    Object.keys(attributes).forEach(prop => {
      if (prop.includes('aria') || prop === 'title' || prop === 'role') {
        delete attributes[prop];
      }
    });
    attributes.role = 'presentation';
  }

  attributes.height = height;
  attributes.width = width;
  attributes.focusable = focusable;

  return (
    <svg {...attributes} className={classes}>
      {svgTitleTag}
      {children}
    </svg>
  );
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
