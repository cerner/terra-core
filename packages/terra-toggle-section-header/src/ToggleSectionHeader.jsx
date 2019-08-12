import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from 'terra-section-header';
import Toggle from 'terra-toggle';

const VALID_LEVELS = [1, 2, 3, 4, 5, 6];

const propTypes = {
  /**
   * Content in the body of the toggle section header component that will be expanded or hidden.
   */
  children: PropTypes.node.isRequired,
  /**
   * Text to be displayed in the section header.
   */
  title: PropTypes.string.isRequired,
  /**
   * Sets the heading level. One of h1, h2, h3, h4, h5, or h6.
   */
  level: PropTypes.oneOf(VALID_LEVELS),
  /**
   * Callback function triggered when toggle-section-header is closed.
   */
  onClose: PropTypes.func,
  /**
   * Callback function triggered when toggle-section-header is opened.
   */
  onOpen: PropTypes.func,
  /**
   * Used to set props and HTML attributes on the underlying section-header.
   */
  // eslint-disable-next-line react/forbid-prop-types
  sectionHeaderAttrs: PropTypes.object,
  /**
   * Sets the toggle-section-header to be animated when it is opened or closed.
   */
  isAnimated: PropTypes.bool,
  /**
   * Sets the toggle-section-header initial state to open.
   */
  isInitiallyOpen: PropTypes.bool,
  /**
   * Sets the background of the section header to transparent.
   */
  isTransparent: PropTypes.bool,
};

const defaultProps = {
  level: 2,
  sectionHeaderAttrs: {},
  isAnimated: false,
  isInitiallyOpen: false,
  isTransparent: false,
};

class ToggleSectionHeader extends React.Component {
  constructor(props) {
    super(props);

    const { isInitiallyOpen = false } = this.props;
    this.state = { isOpen: isInitiallyOpen };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
  }

  handleOnClick(event) {
    event.preventDefault();

    const { onOpen, onClose } = this.props;

    if (onOpen && !this.state.isOpen) {
      onOpen();
    } else if (onClose && this.state.isOpen) {
      onClose();
    }

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  wrapOnClick(onClick) {
    return ((event) => {
      this.handleOnClick(event);

      if (onClick) {
        onClick(event);
      }
    });
  }

  render() {
    const {
      children,
      title,
      level,
      sectionHeaderAttrs,
      isAnimated,
      isInitiallyOpen,
      isTransparent,
      onOpen,
      onClose,
      ...customProps
    } = this.props;

    const sectionHeaderProps = { ...sectionHeaderAttrs };
    sectionHeaderProps.onClick = this.wrapOnClick(sectionHeaderAttrs.onClick);

    return (
      <div {...customProps}>
        <SectionHeader
          {...sectionHeaderProps}
          aria-expanded={this.state.isOpen}
          isOpen={this.state.isOpen}
          level={level}
          title={title}
          isTransparent={isTransparent}
        />
        <Toggle isAnimated={isAnimated} isOpen={this.state.isOpen}>
          {children}
        </Toggle>
      </div>
    );
  }
}

ToggleSectionHeader.propTypes = propTypes;
ToggleSectionHeader.defaultProps = defaultProps;

export default ToggleSectionHeader;
