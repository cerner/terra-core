import React from 'react';
import Toggler from 'terra-toggler/src/Toggler';
import Button from 'terra-button';

class TogglerDefault extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOnClick}>{'Click Me!'}</Button>
        <Toggler isOpen={this.state.isOpen} isAnimated>
          Hello World
        </Toggler>
      </div>
    );
  }
}


export default TogglerDefault;
