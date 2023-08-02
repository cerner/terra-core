import React from 'react';
import ShowHide, { ShowHideFocuser } from 'terra-show-hide';

const focusableText = 'CareAware is Cerners comprehensive enterprise-wide solution for device connectivity. CareAware® is a suite of solutions that enable any area of a hospital to create an environment where all devices are integrated and confocusableTextually aware to ensure the right data is presented in the right format at the right time.';

class NoPreviewShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleShowHide = this.toggleShowHide.bind(this);
    this.focusRef = React.createRef();
  }

  toggleShowHide() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <ShowHide focusRef={this.focusRef} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        <p><ShowHideFocuser ref={this.focusRef} focusableText={focusableText} /></p>
      </ShowHide>
    );
  }
}

export default NoPreviewShowHide;
