import React from 'react';
import ShowHide, { Paragraph } from 'terra-show-hide';

const previewText = 'According to the Journal of Healthcare Management/American College of Healthcare Executives, a 500-bed hospital loses over $4 million annually due to clinical communication inefficiencies. A unified clinical communication strategy can help health systems begin to close the gap';
const text = 'and improve efficiency at every level. Enable your clinical care team with real-time health communication tools and workflows that help them to collaborate more effectively on the go and provide a quality patient care experience. A unified strategy and improved communication tools can help address many challenges including identification of patient care team members, mobile clinical workflows, secure and timely critical alerts, and more.';

class ButtonAlignCenterShowHide extends React.Component {
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
        <ShowHide focusRef={this.focusRef} buttonAlign="center" preview={<p>{previewText}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
          <p><Paragraph ref={this.focusRef} previewText={previewText} text={text} /></p>
        </ShowHide>
      </div>
    );
  }
}

export default ButtonAlignCenterShowHide;
