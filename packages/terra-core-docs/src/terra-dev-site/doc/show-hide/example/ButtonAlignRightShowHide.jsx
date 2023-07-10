import React from 'react';
import ShowHide from 'terra-show-hide';

const previewText = 'A connected care team starts with an integrated communication strategy. CareAware ConnectTM is a healthcare communication tool that leverages the use of intuitive technology to help associate the right care team members with the right patients and provides a way to effectively ';
const text = 'communicate and collaborate while on the go through a smart, mobile device. Integration with Cerner Millennium® enables care teams to streamline bedside workflows including medication administration, device association, and specimen collection.';

class ButtonAlignRightShowHideTest extends React.Component {
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
        <ShowHide focusRef={this.focusRef} buttonAlign="end" preview={<p>{previewText}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
          <p>
            { previewText }
            <span ref={this.focusRef}>{ text }</span>
          </p>
        </ShowHide>
      </div>
    );
  }
}

export default ButtonAlignRightShowHideTest;
