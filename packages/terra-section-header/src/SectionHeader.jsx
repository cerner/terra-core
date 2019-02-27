import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import styles from './SectionHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text to be displayed on the SectionHeader.
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
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=2`.
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
  level: 2,
};

const isRecognizedKeyPress = event => ((event.nativeEvent.keyCode === KeyCode.KEY_ENTER) || (event.nativeEvent.keyCode === KeyCode.KEY_SPACE));

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
      title,
      onClick,
      isOpen,
      isTransparent,
      level,
      ...customProps
    } = this.props;

    if ((process.env.NODE_ENV !== 'production') && (!onClick && isOpen)) {
      // eslint-disable-next-line no-console
      console.warn('\'isOpen\' are intended to be used only when \'onClick\' is provided.');
    }

    const attributes = Object.assign({}, customProps);

    if (onClick) {
      attributes.tabIndex = '0';
      attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
      attributes.onKeyUp = this.wrapOnKeyUp(attributes.onKeyUp);
      attributes.role = 'button';
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

    const sectionHeaderClassNames = cx([
      'section-header',
      { 'is-interactable': onClick },
      { 'is-active': this.state.isActive },
      { 'is-transparent': isTransparent },
      customProps.className,
    ]);

    const Element = `h${level}`;

    // allows us to set an onClick on the div
    // We set key events and role conditionally set if onClick is set
    // eslint doesn't know about this and so it marks this as a lint error
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div {...attributes} onClick={onClick} className={sectionHeaderClassNames}>
        <Arrange
          fitStart={onClick && accordionIcon}
          fill={<Element className={cx('title')}>{title}</Element>}
        />
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
