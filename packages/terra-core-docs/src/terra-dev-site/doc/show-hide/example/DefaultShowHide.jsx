import React from 'react';
import ShowHide from 'terra-show-hide';

const previewText = 'Patients are requesting greater affordability and efficiency in healthcare. With procedures performed in an ambulatory surgery center costing up to 60% less compared to a hospital outpatient department (1), the demand for these facilities is increasing. ';
const text = 'In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care. Healthcare IT products can help improve clinician efficiency and patient outcomes, as well as enhance communication and data exchange between ambulatory surgery center providers and patients.';

class DefaultShowHide extends React.Component {
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
      <div>
        <ShowHide focusRef={this.focusRef} preview={<p>{previewText}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
          <p>
            { previewText }
            <span ref={this.focusRef}>{ text }</span>
          </p>
        </ShowHide>
      </div>
    );
  }
}

export default DefaultShowHide;
