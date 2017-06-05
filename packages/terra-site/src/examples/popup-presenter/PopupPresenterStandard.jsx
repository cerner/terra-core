import React from 'react';
import PopupPresenter from 'terra-popup-presenter';
import Button from 'terra-button';
import ExamplePopupContent from './ExamplePopupContent';

class PopupPresenterStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const contentSection = <ExamplePopupContent />;

    return (
      <div id="durpplustwo" className="terra-Modal" style={{ position: 'relative', height: '500px', width: '100%', backgroundColor: '#27de1c', overflow: 'auto' }}>
        <div style={{ position: 'relative', height: '1200px', width: '1600px', overflow: 'auto' }}>
          <div style={{ top: '300px', left: '400px', position: 'relative', height: '300px', width: '400px', overflow: 'auto', backgroundColor: '#1c1f21' }}>
            <div style={{ position: 'relative', height: '1200px', width: '1600px', overflow: 'auto', backgroundColor: '#1a93e4' }}>
              <PopupPresenter
                contentAttachment="top center"
                contentDimensions="50x 25x"
                isOpen={this.state.open}
                isArrowDisplayed
                targetRef={this.getButtonNode}
                onRequestClose={this.handleRequestClose}
              >
                {contentSection}
              </PopupPresenter>
              <div style={{ display: 'inline-block', position: 'absolute', top: '500px', left: '700px' }} ref={this.setButtonNode}>
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
