import React from 'react';
import Button from 'terra-button';
import Hookshot from 'terra-hookshot';

class HookshotStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { open: false };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const hookshotContent = (
      <Hookshot.Content
        {...customProps}
        closeOnEsc
        closeOnOutsideClick
        closeOnResize
        onRequestClose={this.handleRequestClose}
      >
        <div style={{ height: '40px', width: '200px' }}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div>
        <Hookshot
          content={hookshotContent}
          contentAttachment="bottom center"
          isEnabled
          isOpen={this.state.isOpen}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        />
        <Button id="hookshot-standard-button" text="Default Hookshot" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default HookshotStandard;
