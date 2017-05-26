import React from 'react';
import Button from 'terra-button';

class ManagedContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
  }

  handleButtonClick(event) {
    if (this.props.presentPopup) {
      const contentSection = <p style={{height: '200px', width: '400px'}}>i'm popup content, hear me roar!</p>;
      const popupData = {
        targetRef: this.getButtonNode,
        content: contentSection,
        contentAttachment: 'top center',
        showArrow: true,
      };
      this.props.presentPopup(popupData);
    }
  }

  setButtonNode(node) {
    this._buttonNode = node;
  }

  getButtonNode() {
    return this._buttonNode;
  }

  render() {
    return (
      <div style={{position: 'relative', height: '500px', width: '100%', overflow: 'auto'}}>
        <div style={{position: 'relative', height: '1500px', width: '1800px', backgroundColor: '#27de1c'}}>
          <div style={{display: 'inline-block', position: 'absolute', top: '500px', left: '700px'}} ref={this.setButtonNode}>
            <Button
              text="popup button launcher"
              onClick={this.handleButtonClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ManagedContent;
