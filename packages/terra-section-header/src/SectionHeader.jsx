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
  text: PropTypes.string.isRequired,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * title prop has been deperecated and will be removed on next major version relase. Replace the `title` prop with `text` prop.
   */
  title: PropTypes.string.isRequired,
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
};

const defaultProps = {
  onClick: undefined,
  isOpen: false,
  isTransparent: false,
};

const isRecognizedKeyPress = event => ((event.nativeEvent.keyCode === KeyCode.KEY_RETURN) || (event.nativeEvent.keyCode === KeyCode.KEY_SPACE));

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
      onClick,
      isOpen,
      isTransparent,
      level,
      ...customProps
    } = this.props;

    const theme = this.context;

    if ((process.env.NODE_ENV !== 'production') && (!onClick && isOpen)) {
      // eslint-disable-next-line no-console
      console.warn('\'isOpen\' are intended to be used only when \'onClick\' is provided.');
    }

    const attributes = { ...customProps };

    if (onClick) {
      attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
      attributes.onKeyUp = this.wrapOnKeyUp(attributes.onKeyUp);
    }

    const iconClassNames = cx([
      'accordion-icon',
      { 'is-open': onClick && isOpen },
    ]);

    const accordionIcon = (
      <div className={cx('accordion-icon-wrapper')}>
        <span className={iconClassNames} />
      </div>
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

    if (!level) {
      // eslint-disable-next-line no-console
      console.warn('Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.'); // to be removed on next major version release.
    }

    if (title) {
      // eslint-disable-next-line no-console
      console.warn('`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.'); // to be removed on next major version release.
    }
    const Element = `h${level || 2}`;
    const headerText = text || title;

    // allows us to set an onClick on the div
    // We set key events and role conditionally set if onClick is set
    // eslint doesn't know about this and so it marks this as a lint error
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <Element {...attributes} onClick={onClick} className={sectionHeaderClassNames} tabIndex="0">
        <div role="button" aria-expanded={isOpen} tabIndex="-1" aria-label={headerText} className={cx('arrange-wrapper')}>
          <Arrange
            fitStart={onClick && accordionIcon}
            fill={<span aria-hidden={(onClick !== undefined)} className={cx('title')}>{headerText}</span>}
            className={cx('title-arrange')}
          />
        </div>
      </Element>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;
SectionHeader.contextType = ThemeContext;

export default SectionHeader;
