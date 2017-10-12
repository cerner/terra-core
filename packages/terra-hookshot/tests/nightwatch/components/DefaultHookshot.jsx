import React from 'react';
import Hookshot from '../../../lib/Hookshot';

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
        onEsc={this.handleRequestClose}
        onOutsideClick={this.handleRequestClose}
        onResize={this.handleRequestClose}
        id="testDefaultContent"
      >
        <div style={{ height: '40px', width: '200px' }}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div>
        <Hookshot
          contentAttachment={{ vertical: 'bottom', horizontal: 'center' }}
          isEnabled
          isOpen={this.state.open}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        >
          {hookshotContent}
        </Hookshot>
        <button id="hookshot-standard-button" onClick={this.handleButtonClick}>Default Hookshot</button>
      </div>
    );
  }
}

export default HookshotStandard;
