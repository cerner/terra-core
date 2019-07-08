import React from 'react';
import LoadingOverlay from '../../../../LoadingOverlay';

class CustomMessageLoadingOverlay extends React.Component {
  constructor() {
    super();

    this.state = { show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  render() {
    return (
      <LoadingOverlay isOpen={this.state.show} message="Custom Loading Message (Overlay will close in 5 seconds)" id="terra-LoadingOverlay" />
    );
  }
}

export default CustomMessageLoadingOverlay;
