import React, { PropTypes } from 'react';
import ResponsiveElement from '../src/ResponsiveElement';

const propTypes = {
  /**
   * The viewport the element will be responsive to, one of `window` or `parent`
   */
  responsiveTo: PropTypes.oneOf(['window', 'parent']),
};

const defaultProps = {
  responsiveTo: 'parent',
};

class AnimatedResponsiveElement extends React.Component {
  constructor() {
    super();
    this.state = { width: '20%' };
    this.interval = null;
  }

  componentDidMount() {
    setTimeout(() => this.setState({ width: '100%' }), 1000);
    this.interval = setInterval(() => { this.setState({ width: (this.state.width === '100%' ? '20%' : '100%') }); }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const tiny = <div>Tiny</div>;
    const small = <div>Small</div>;
    const medium = <div>Medium</div>;
    const large = <div>Large</div>;
    const huge = <div>Huge</div>;
    const defaultElement = <div>Default</div>;
    return (
      <div style={{ width: this.state.width, border: '1px dashed grey', padding: '5px', transition: 'all 5.0s ease-in-out' }}>
        <ResponsiveElement
          responsiveTo={this.props.responsiveTo}
          tiny={tiny}
          small={small}
          medium={medium}
          large={large}
          huge={huge}
          defaultElement={defaultElement}
        />
      </div>
    );
  }
}

AnimatedResponsiveElement.propTypes = propTypes;
AnimatedResponsiveElement.defaultProps = defaultProps;

export default AnimatedResponsiveElement;
