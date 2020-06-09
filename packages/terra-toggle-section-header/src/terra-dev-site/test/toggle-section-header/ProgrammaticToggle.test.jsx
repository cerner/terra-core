import React from 'react';
import Button from 'terra-button';
import ToggleSectionHeader from '../../../ToggleSectionHeader';

class ProgrammaticToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div>
        <Button id="toggle" text="Trigger Toggle" onClick={this.toggle} />
        <ToggleSectionHeader isOpen={this.state.isOpen} title="Default Toggle Section Header">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </ToggleSectionHeader>
      </div>
    );
  }
}

export default ProgrammaticToggle;

