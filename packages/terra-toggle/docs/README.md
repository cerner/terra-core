# Terra Toggle

Toggle component that transitions content in and out.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-toggle`

## Usage

```jsx
import React from 'react';
import Toggle from 'terra-toggle';
import Button from 'terra-button';

class MyCustomToggle extends React.Component {
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
        <Toggle isOpen={this.state.isOpen} isAnimated>
          Hello World
        </Toggle>
      </div>
    );
  }
}

export default MyCustomToggle;
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
