import React from 'react';

class ExamplePopupContent extends React.Component {
  componentDidMount() {
    this.durp = true;
  }

  componentDidUpdate() {
    this.durp = true;
  }

  componentWillUnmount() {
    this.durp = false;
  }

  render() {
    return (
      <div>
        <p style={{ height: '600px', width: '400px' }}>im popup content, hear me roar!</p>
      </div>
    );
  }
}

export default ExamplePopupContent;
