import React from 'react';
import PropTypes from 'prop-types';

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

  render () {
    const { onRequestClose } = this.props;

    return (
      <div onClick={onRequestClose}>
        <p style={{height: '600px', width: '400px'}}>i'm popup content, hear me roar!</p>
      </div>
    );
  }
}

export default ExamplePopupContent;
