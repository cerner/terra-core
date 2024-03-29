import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import Arrange from 'terra-arrange';
import styles from './SectionHeader.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Text to be displayed on the SectionHeader.
   */
  text: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * title prop has been deperecated and will be removed on next major version relase. Replace the `title` prop with `text` prop.
   */
  title: PropTypes.string,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: PropTypes.func,
  /**
   * Callback function triggered when the accordion icon is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Whether the accordion icon should be displayed in its 'open' or 'closed' position.
   */
  isOpen: PropTypes.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=2`.
   * `level` should be specified explicitly to allow screen readers to identify headers consistently.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Sets the background of the section header to transparent.
   */
  isTransparent: PropTypes.bool,
  /**
   * @private
   * Specifies whether the section header title position should be fixed
   */
  isTitleFixed: PropTypes.bool,
};

const defaultProps = {
  onClick: undefined,
  isOpen: false,
  isTransparent: false,
  level: 2,
};

const isRecognizedKeyPress = event => ((event.keyCode === KeyCode.KEY_RETURN) || (event.keyCode === KeyCode.KEY_SPACE));

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isActive: false };
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.wrapOnKeyUp = this.wrapOnKeyUp.bind(this);
  }

  wrapOnKeyDown(onKeyDown) {
    return ((event) => {
      if (isRecognizedKeyPress(event) && !this.state.isActive) {
        this.setState({ isActive: true });

        // Call the same function the user provides for a click event
        if (this.props.onClick) {
          this.props.onClick(event);
          event.preventDefault();
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  wrapOnKeyUp(onKeyUp) {
    return ((event) => {
      if (isRecognizedKeyPress(event) && this.state.isActive) {
        this.setState({ isActive: false });
      }

      if (onKeyUp) {
        onKeyUp(event);
      }
    });
  }

  render() {
    const {
      text,
      title,
      refCallback,
      onClick,
      isOpen,
      isTransparent,
      level,
      isTitleFixed,
      ...customProps
    } = this.props;

    const theme = this.context;

    if ((process.env.NODE_ENV !== 'production') && (!onClick && isOpen)) {
      // eslint-disable-next-line no-console
      console.warn('\'isOpen\' are intended to be used only when \'onClick\' is provided.');
    }

    const accordionIcon = (
      <span className={cx('accordion-icon-wrapper')}>
        <span className={cx(['accordion-icon', { 'is-open': isOpen }])} />
      </span>
    );

    const sectionHeaderClassNames = classNames(
      cx(
        'section-header',
        { 'is-interactable': onClick },
        { 'is-active': this.state.isActive },
        { 'is-transparent': isTransparent },
        theme.className,
      ),
      customProps.className,
    );

    if (title) {
      // eslint-disable-next-line no-console
      console.warn('`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.'); // to be removed on next major version release.
    }
    const Element = `h${level}`;
    const headerText = text || title;

    const headerAttributes = { ...customProps };
    const buttonAttributes = {};
    let ArrangeWrapper;

    if (onClick) {
      // Set section header button attributes
      buttonAttributes.ref = refCallback;
      buttonAttributes.type = 'button';
      buttonAttributes['aria-expanded'] = isOpen;
      buttonAttributes['aria-label'] = headerText;
      buttonAttributes.onKeyDown = this.wrapOnKeyDown(headerAttributes.onKeyDown);
      buttonAttributes.onKeyUp = this.wrapOnKeyUp(headerAttributes.onKeyUp);
      buttonAttributes.onClick = onClick;
      if (customProps.isTitleSticky && customProps.boundedWidth) {
        buttonAttributes.style = { width: `${customProps.boundedWidth}px` };
      }

      // Specify button element for header content
      ArrangeWrapper = 'button';
    } else {
      headerAttributes.ref = refCallback;
      if (customProps.isTitleSticky) {
        buttonAttributes.style = { width: 'auto' };
      }

      // Specify span element for header content
      ArrangeWrapper = 'span';
    }

    delete headerAttributes?.boundedWidth;
    delete headerAttributes?.isTitleSticky;

    return (
      <Element {...headerAttributes} className={sectionHeaderClassNames} aria-label={!onClick ? headerText : undefined}>
        <ArrangeWrapper {...buttonAttributes} className={cx('arrange-wrapper', { 'title-fixed': isTitleFixed, 'title-sticky': customProps.isTitleSticky })}>
          <Arrange
            fitStart={onClick && accordionIcon}
            fill={<span aria-hidden={(onClick !== undefined)} className={cx('title')}>{headerText}</span>}
            className={cx('title-arrange')}
          />
        </ArrangeWrapper>
      </Element>
    );

    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;
SectionHeader.contextType = ThemeContext;

export default SectionHeader;
