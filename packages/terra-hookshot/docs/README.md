# Terra Hookshot

The Terra Hookshot componenet positions content according to a targeted attachment, ensuring they stay connected.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-hookshot`
  - `yarn add terra-hookshot`

## Usage

```jsx
import React from 'react';
import Hookshot from 'terra-hookshot';


render() {
  return (
    <Hookshot
      attachmentBehavior="auto"
      attachmentMargin={10}
      boundingRef={boundingRef}
      content=<Hookshot.Content />
      contentAttachment="bottom center"
      contentOffset="10 10"
      isEnabled
      isOpen={this.state.isOpen}
      onPosition={this.handleOnPosition}
      targetRef={this.getTargetRef}
      targetAttachment="top center"
    />
  );
}

```
