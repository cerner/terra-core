import React from 'react';
import ShowHide from 'terra-show-hide';

const fullText = 'Cerner cardiovascular solutions are embedded within the EHR, allowing for a holistic patient record that includes: diagnostic activities, therapeutic interventions and follow-up regimens. Electrocardiogram (ECG) objects are digitized and accessed within the EHR providing physicians in your cardiology department the ability to receive and present ECG data in mere seconds after it is acquired. This eliminates the necessity for a separate ECG information system.';
const previewText = fullText.substring(0, 280);

class InitiallyOpenShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }

  toggleShowHide() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <ShowHide preview={<p>{previewText}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        <p>{fullText}</p>
      </ShowHide>
    );
  }
}

export default InitiallyOpenShowHide;
