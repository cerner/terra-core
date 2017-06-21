import React from 'react';
import Toggler from '../../lib/Toggler';

class OpenToggler extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: true });

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Open Toggler</button>
        <Toggler isOpen={this.state.isOpen}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Toggler>
      </div>
    );
  }
}


export default OpenToggler;
