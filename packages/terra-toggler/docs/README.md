# Terra Toggler

Toggler component that transitions content in and out.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-toggler`

## Usage

```jsx
import React from 'react';
import Toggler from 'terra-toggler';
import Button from 'terra-button';

class MyCustomToggler extends React.Component {
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
        <Button onClick={this.handleOnClick}>Click Me!</Button>
        <Toggler isOpen={this.state.isOpen} isAnimated>
          Hello World
        </Toggler>
      </div>
    );
  }
}

export default MyCustomToggler;
```
