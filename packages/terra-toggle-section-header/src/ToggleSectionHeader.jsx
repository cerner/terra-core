import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
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
   * Sets the heading level. One of 1, 2, 3, 4, 5, or 6.
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
   * Used to set props and HTML attributes on the toggle-section-header section-header.
   */
  sectionHeaderAttrs: PropTypes.object,
  /**
   * Sets the toggle-section-header to be animated when it is opened or closed.
   */
  isAnimated: PropTypes.bool,
  /**
   * Sets the toggle-section-header initial state to open.
   */
  isInitiallyOpen: PropTypes.bool,
};

const defaultProps = {
  level: 2,
  sectionHeaderAttrs: {},
};

class ToggleSectionHeader extends React.Component {
  constructor(props) {
    super(props);

    const { isInitiallyOpen = false } = this.props;
    this.state = { isOpen: isInitiallyOpen };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isInitiallyOpen !== this.props.isInitiallyOpen) {
      this.setState({ isOpen: this.props.isInitiallyOpen });
    }
  }

  handleOnClick(event) {
    event.preventDefault();

    const { onOpen, onClose } = this.props;

    if (onOpen && !this.state.isOpen) {
      onOpen();
    } else if (onClose && this.state.isOpen) {
      onClose();
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {
      children,
      title,
      level,
      sectionHeaderAttrs,
      isAnimated,
      isInitiallyOpen,
      ...customProps
    } = this.props;

    return (
      <div {...customProps}>
        <SectionHeader
          {...sectionHeaderAttrs}
          aria-expanded={this.state.isOpen}
          isOpen={this.state.isOpen}
          level={level}
          onClick={this.handleOnClick}
          title={title}
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
