import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

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
   * String that labels the current element. If 'aria-label' is present,
   * role is set to 'img' and aria-hidden is removed.
   */
  ariaLabel: PropTypes.string,
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
  ariaLabel: null,
  focusable: 'false',
};

class IconBase extends React.Component {
  constructor(props) {
    super(props);
    this.addAnimationStyles();
  }

  addAnimationStyles() {
    const { isSpin } = this.props;

    if (isSpin) {
      const css = '@-webkit-keyframes tui-spin-ltr{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes tui-spin-ltr{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes tui-spin-rtl{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-359deg);transform:rotate(-359deg)}}@keyframes tui-spin-rtl{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-359deg);transform:rotate(-359deg)}}[dir=ltr] .tui-Icon.is-spin {-webkit-animation: tui-spin-ltr 2s infinite linear;animation: tui-spin-ltr 2s infinite linear;}[dir=rtl] .tui-Icon.is-spin {-webkit-animation: tui-spin-rtl 2s infinite linear;animation: tui-spin-rtl 2s infinite linear;}';
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.type = 'text/css';
      style.id = 'terra-icon-animation';
      // If we haven't written the styles to the DOM yet, add them, otherwise don't do this for subsequent spinner icons.
      if (!document.getElementById(style.id)) {
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
      }
    }
  }

  render() {
    const {
      isBidi,
      isSpin,
      children,
      height,
      width,
      ariaLabel,
      focusable,
      ...customProps
    } = this.props;

    const attributes = Object.assign({}, customProps);

    // append to existing classNames
    const classes = cx(
      'tui-Icon', // Namespaced class since it will be global, needed for global spin animation
      'icon',
      { 'is-bidi': isBidi },
      { 'is-spin': isSpin },
      attributes.className,
    );

    // aria-label is present, remove aria-hidden, set role to img
    if (ariaLabel) {
      attributes['aria-label'] = ariaLabel;
      attributes.role = 'img';
      attributes['aria-hidden'] = null;
    } else {
      attributes['aria-hidden'] = 'true';
    }

    attributes.height = height;
    attributes.width = width;
    attributes.focusable = focusable;

    return <svg {...attributes} className={classes}>{children}</svg>;
  }
}

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

export default IconBase;
