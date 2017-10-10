import React from 'react';
import Hookshot from '../../src/Hookshot';

class HookshotDefaultExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { isOpen: false };
  }

  handleButtonClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const hookshotContent = (
      <Hookshot.Content onRequestClose={this.handleRequestClose}>
        <div style={{ height: '40px', width: '200px', backgroundColor: 'red' }}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div>
        <Hookshot
          contentAttachment={{ vertical: 'top', horizontal: 'center' }}
          isEnabled
          isOpen={this.state.isOpen}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        >
          {hookshotContent}
        </Hookshot>
        <button id="hookshot-standard-button" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default HookshotDefaultExample;
