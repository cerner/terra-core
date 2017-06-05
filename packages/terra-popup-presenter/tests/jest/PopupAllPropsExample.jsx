import React from 'react';
import PopupPresenter from '../../src/PopupPresenter';

class PopupPresenterStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <PopupPresenter
          classNameArrow="test-arrow-class"
          classNameContent="test-content-class"
          classNameOverlay="test-overlay-class"
          contentAttachment="top center"
          contentDimensions="50x 25x"
          isArrowDisplayed
          isHeaderDisabled
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p>this is popup content</p>
        </PopupPresenter>
        <div style={{ height: '20px', width: '20px' }} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default PopupPresenterStandard;
