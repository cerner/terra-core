import React from 'react';
import ShowHide, { Paragraph } from 'terra-show-hide';

const previewText = 'Cerner cardiovascular solutions are embedded within the EHR, allowing for a holistic patient record that includes: diagnostic activities, therapeutic interventions and follow-up regimens. Electrocardiogram (ECG) objects are digitized and accessed within the EHR providing physicians';
const focusText = 'in your cardiology department the ability to receive and present ECG data in mere seconds after it is acquired.';
const text = 'This eliminates the necessity for a separate ECG information system.';

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
      <ShowHide focusRef={this.focusRef} preview={<p>{previewText}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        <Paragraph ref={this.focusRef} preview={previewText} firstSentence={focusText} text={text} />
      </ShowHide>
    );
  }
}

export default InitiallyOpenShowHide;
