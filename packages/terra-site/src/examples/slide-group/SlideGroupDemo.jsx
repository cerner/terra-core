import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import SlideGroup from 'terra-clinical-slide-group';

const containerStyles = {
  height: '250px',
  width: '400px',
  overflow: 'hidden',
  position: 'relative',
};

const slideStyles = {
  backgroundColor: 'lightblue',
  height: '100%',
  padding: '5px',
};

class SlideGroupDemo extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      counter: 1,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    const slides = [];
    for (let i = 0; i < this.state.counter; i += 1) {
      slides.push((
        <div
          key={`Slide ${i}`}
          style={slideStyles}
        >
          <h2>Slide {i}</h2>
          <br />
          <button onClick={this.increment}>Increment</button>
          {i !== 0 ? <button onClick={this.decrement}>Decrement</button> : null}
        </div>
      ));
    }

    return (
      <div style={containerStyles}>
        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />
      </div>
    );
  }
}

SlideGroupDemo.propTypes = {
  isAnimated: PropTypes.bool,
};

export default SlideGroupDemo;
