import React from 'react';
import PopupPresenter from 'terra-popup-presenter';
import Button from 'terra-button';

class PopupPresenterStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = {open: false};
  }

  handleButtonClick(event) {
    this.setState({open: true});
  }

  handleRequestClose(event) {
    this.setState({open: false});
  }

  setButtonNode(node) {
    this._buttonNode = node;
  }

  getButtonNode() {
    return this._buttonNode;
  }

  render() {
    const contentSection = <p style={{height: '200px', width: '400px'}}>i'm popup content, hear me roar!</p>;

    return (
      <div id="durpplustwo" className="terra-Modal" style={{position: 'relative', height: '500px', width: '100%', backgroundColor: '#27de1c', overflow: 'auto'}}>
        <div style={{position: 'relative', height: '1200px', width: '1600px', overflow: 'auto'}}>
          <div style={{top: '300px', left: '400px', position: 'relative', height: '300px', width: '400px', overflow: 'auto', backgroundColor: '#1c1f21'}}>
            <div style={{position: 'relative', height: '1200px', width: '1600px', overflow: 'auto', backgroundColor: '#1a93e4'}}>
              <PopupPresenter 
                content={contentSection}
                contentAttachment="top center"
                isOpen={this.state.open}
                showArrow
                targetRef={this.getButtonNode}
                onRequestClose={this.handleRequestClose}
                zIndex="7000"
              />
              <div style={{display: 'inline-block', position: 'absolute', top: '500px', left: '700px'}} ref={this.setButtonNode}>
                <Button text="popup button launcher" onClick={this.handleButtonClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupPresenterStandard;
