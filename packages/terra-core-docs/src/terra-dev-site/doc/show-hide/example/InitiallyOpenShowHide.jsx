import React from 'react';
import ShowHide, { ShowHideFocuser } from 'terra-show-hide';

const prefix = 'Cerner cardiovascular solutions are embedded within the EHR, allowing for a holistic patient record that includes: diagnostic activities, therapeutic interventions and follow-up regimens. Electrocardiogram (ECG) objects are digitized and accessed within the EHR providing physicians';
const focusableText = 'in your cardiology department the ability to receive and present ECG data in mere seconds after it is acquired. This eliminates the necessity for a separate ECG information system.';

class InitiallyOpenShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };
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
      <ShowHide focusRef={this.focusRef} preview={<p>{prefix}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        <p>
          <ShowHideFocuser ref={this.focusRef} prefix={prefix} focusableText={focusableText} />
        </p>
      </ShowHide>
    );
  }
}

export default InitiallyOpenShowHide;
