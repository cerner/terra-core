import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from 'terra-section-header';
import Toggle from 'terra-toggle';

const propTypes = {
  /**
   * Content in the body of the section header component that will be expanded or hidden.
   */
  children: PropTypes.node,
  /**
   * Text to be displayed in the section header.
   */
  heading: PropTypes.string,
  /**
   * Text to be displayed in the section header.
   */
  text: PropTypes.string.isRequired,
  /**
   * Used to set props and HTML attributes on the underlying section-header.
   */
  // eslint-disable-next-line react/forbid-prop-types
  sectionHeaderAttrs: PropTypes.object,
  /**
   * Sets the section-header to be animated when it is opened or closed.
   */
  isAnimated: PropTypes.bool,
  /**
   * Programmatically the section-header component.
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  sectionHeaderAttrs: {},
  isAnimated: false,
  isOpen: undefined,
};

class AccoordianExampleTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isOpen !== undefined && prevState.isOpen !== nextProps.isOpen) {
      return { isOpen: nextProps.isOpen };
    }
    return { isOpen: prevState.isOpen };
  }

  handleOnClick(event) {
    event.preventDefault();
    const { isOpen } = this.props;
    if (isOpen === undefined) {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
    }
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
      heading,
      text,
      isAnimated,
      isOpen,
      sectionHeaderAttrs,
      ...customProps
    } = this.props;

    const sectionHeaderProps = { ...sectionHeaderAttrs };
    sectionHeaderProps.onClick = this.wrapOnClick(sectionHeaderAttrs.onClick);

    return (
      <div {...customProps}>
        <h2>{heading}</h2>
        <SectionHeader
          {...sectionHeaderProps}
          aria-expanded={this.state.isOpen}
          isOpen={this.state.isOpen}
          text={text}
        />
        <Toggle isOpen={this.state.isOpen} isAnimated>
          {children}
        </Toggle>
      </div>
    );
  }
}

AccoordianExampleTemplate.propTypes = propTypes;
AccoordianExampleTemplate.defaultProps = defaultProps;

export default AccoordianExampleTemplate;
