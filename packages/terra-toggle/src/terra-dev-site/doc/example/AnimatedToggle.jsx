import React from 'react';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Toggle from 'terra-toggle/lib/Toggle';

class ToggleDefault extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <IconInformation onClick={this.handleOnClick} />
        <Toggle isOpen={isOpen} isAnimated>
          <p>
Lorem ipsum dolor sit amet,
            <a href="#test">consectetur</a>
            {' '}
adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Toggle>
      </div>
    );
  }
}


export default ToggleDefault;
