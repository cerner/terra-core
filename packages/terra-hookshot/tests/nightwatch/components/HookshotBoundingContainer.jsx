import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

class HookshotBoundingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePositionClick = this.handlePositionClick.bind(this);
    this.state = { position: 'up' };
  }

  handlePositionClick(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    let buttonMarginLeft;
    let buttonMarginRight;
    let buttonMarginTop;
    let targetAttachment;
    let contentAttachment;

    if (this.state.position === 'up') {
      buttonMarginTop = '100px';
    } else if (this.state.position === 'down') {
      buttonMarginTop = '20px';
    } else if (this.state.position === 'left') {
      buttonMarginLeft = '300px';
      buttonMarginRight = '140px';
      targetAttachment = 'middle end';
      contentAttachment = 'middle start';
    } else if (this.state.position === 'right') {
      buttonMarginLeft = '50px';
    }
    return (
      <div>
        <HookshotTemplate
          isOpen={false}
          buttonMarginTop={buttonMarginTop}
          buttonMarginLeft={buttonMarginLeft}
          buttonMarginRight={buttonMarginRight}
          targetAttachment={targetAttachment}
          contentAttachment={contentAttachment}
          id="bounding-container"
        />
        <p> Position should be pushed by bounding container </p>
        <p> Choose position behavior </p>
        <button id="push-up" value="up" onClick={this.handlePositionClick}>Pushed Up</button>
        <button id="push-down" value="down" onClick={this.handlePositionClick}>Pushed Down</button>
        <button id="push-left" value="left" onClick={this.handlePositionClick}>Pushed Left</button>
        <button id="push-right" value="right" onClick={this.handlePositionClick}>Pushed Right</button>
      </div>
    );
  }
}

export default HookshotBoundingContainer;
