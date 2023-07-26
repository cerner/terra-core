import React from 'react';
import ShowHide, { Paragraph } from 'terra-show-hide';

const splittedText = ['Patients are requesting greater affordability and efficiency in healthcare. With procedures performed in an ambulatory surgery center costing up to 60% less compared to a hospital outpatient department (1), the demand for these facilities is increasing.', 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care. Healthcare IT products can help improve clinician efficiency and patient outcomes, as well as enhance communication and data exchange between ambulatory surgery center providers and patients.'];

const sentences = [
  'Key Benefits of Cerner Cardiovascular Solutions',
  'Eliminates silos of information and the resulting inefficiencies with a unified EHR and cardiovascular system.',
  'Creates efficient diagnostic workflows, image management and analysis.',
  'Enhances clinical, financial and performance outcomes with comprehensive procedural documentation.',
  'Promotes cardiac disease management through health maintenance protocols.',
];

const text2 = 'Cerner cardiovascular solutions are embedded within the EHR, allowing for a holistic patient record that includes: diagnostic activities, therapeutic interventions and follow-up regimens. Electrocardiogram (ECG) objects are digitized and accessed within the EHR providing physicians in your cardiology department the ability to receive and present ECG data in mere seconds after it is acquired. This eliminates the necessity for a separate ECG information system.';


const preview = [
  <h3>{sentences[0]}</h3>,
  <ul>
    <li>{sentences[1]}</li>
    <li>{sentences[2]}</li>
    <li>{sentences[3]}</li>
    <li>{sentences[4]}</li>
  </ul>,
  <p>{splittedText[0]}</p>,
];

class MultipleChildrenShowHide extends React.Component {
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
      <ShowHide focusRef={this.focusRef} preview={<div>{ preview }</div>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        <h3>{sentences[0]}</h3>
        <ul>
          <li>{sentences[1]}</li>
          <li>{sentences[2]}</li>
          <li>{sentences[3]}</li>
          <li>{sentences[4]}</li>
        </ul>
        <p><Paragraph ref={this.focusRef} previewText={splittedText[0]} text={splittedText[1]} /></p>
        <p>{text2}</p>
      </ShowHide>
    );
  }
}

export default MultipleChildrenShowHide;
