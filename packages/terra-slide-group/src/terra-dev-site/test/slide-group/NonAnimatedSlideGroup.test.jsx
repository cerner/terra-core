import React from 'react';
import SlideGroup from '../../../SlideGroup';

const containerStyles = {
  height: '200px',
  width: '400px',
  overflow: 'hidden',
  position: 'relative',
};

class SlideGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  decrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  render() {
    const slides = [];
    for (let i = 1; i <= this.state.counter; i += 1) {
      slides.push((
        <div key={i}>
          <h2>
            Slide
            {' '}
            {i}
          </h2>
          <br />
          {i !== 4 ? <button type="button" id={`increment-${i}`} style={{ backgroundColor: 'lightgrey' }} onClick={this.increment}>Increment</button> : null}
          {i !== 1 ? <button type="button" id={`decrement-${i}`} style={{ backgroundColor: 'lightgrey' }} onClick={this.decrement}>Decrement</button> : null}
        </div>
      ));
    }

    return (
      <div style={containerStyles}>
        <SlideGroup items={slides} id="SlideGroup" />
      </div>
    );
  }
}

export default SlideGroupExample;
