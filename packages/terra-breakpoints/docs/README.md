# Terra Breakpoints

`terra-breakpoints` contains components and utilities related to Terra's supported responsive breakpoints.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-breakpoints`

## Usage

### Breakpoints 

An object containing the named breakpoint values is the default export of the `terra-breakpoints` package. These named breakpoints are defined as minimum values.

|Breakpoint Name|Minimum Value|Media Query|Description|
|---|---|---|---|
|`tiny`|0px|`@media screen and (min-width: 0px)`| Active from viewport width 0px and up |
|`small`|544px|`@media screen and (min-width: 544px)`|Active from viewport width 544px and up|
|`medium`|768px|`@media screen and (min-width: 768px)`|Active from viewport width 768px and up|
|`large`|992px|`@media screen and (min-width: 992px)`|Active from viewport width 992px and up|
|`huge`|1216px|`@media screen and (min-width: 1216px)`|Active from viewport width 1216 and up|
|`enormous`|1440px|`@media screen and (min-width: 1440px)`|Active from viewport width 1440px and up|

Utility functions are also provided to help determine what breakpoint is active for a given value.

#### `activeBreakpointForSize(widthValue)`

`activeBreakpointForSize` will return the closest active breakpoint that matches the given width value.

```jsx
import { activeBreakpointForSize } from 'terra-breakpoints';

console.log(activeBreakpointForSize(300));  // 'tiny'
console.log(activeBreakpointForSize(544));  // 'small'
console.log(activeBreakpointForSize(800));  // 'medium'
console.log(activeBreakpointForSize(1000)); // 'large'
console.log(activeBreakpointForSize(1300)); // 'huge'
console.log(activeBreakpointForSize(1500)); // 'enormous'
```

#### `isBreakpointActiveForSize(breakpointName, widthValue)`

`isBreakpointActiveForSize` will return a boolean value indicating whether or not the given breakpoint name is active for the width value.

> Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active if the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint's range.

```jsx
import { isBreakpointActiveForSize } from 'terra-breakpoints';

console.log(isBreakpointActiveForSize('tiny', 300));      // true
console.log(isBreakpointActiveForSize('tiny', 544));      // true
console.log(isBreakpointActiveForSize('tiny', 800));      // true
console.log(isBreakpointActiveForSize('tiny', 1000));     // true

console.log(isBreakpointActiveForSize('medium', 300));    // false
console.log(isBreakpointActiveForSize('medium', 544));    // false
console.log(isBreakpointActiveForSize('medium', 800));    // true
console.log(isBreakpointActiveForSize('medium', 1500));   // true

console.log(isBreakpointActiveForSize('enormous', 300));  // false
console.log(isBreakpointActiveForSize('enormous', 544));  // false
console.log(isBreakpointActiveForSize('enormous', 800));  // false
console.log(isBreakpointActiveForSize('enormous', 1500)); // true
```

### ActiveBreakpointProvider

`terra-breakpoints` also provides `<ActiveBreakpointProvider>`. a component that provides the current active breakpoint to child components using a Context-based API. This can be used to minimize the number of required resize event listeners and ensure consistency across the component hierarchy.

A component generator called `withActiveBreakpoint()` is included to provide simple interfacing with the ActiveBreakpointProvider. However, the ActiveBreakpointContext can also be imported and used directly, if needed.

```jsx
import React from 'react';
import { ActiveBreakpointProvider, withActiveBreakpoint, ActiveBreakpointContext } from 'terra-breakpoints';

const ActiveBreakpointConsumer1 = withActiveBreakpoint(({ activeBreakpoint }) => (
  <div>
    <p>This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider.</p>
    <p>
      The active breakpoint is:
      {' '}
      {activeBreakpoint}
    </p>
  </div>
));

const ActiveBreakpointConsumer2 = () => (
  <ActiveBreakpointContext.Consumer>
    {
      activeBreakpoint => (
        <div>
          <p>This component interfaces with the ActiveBreakpointContext directly.</p>
          <p>
            The active breakpoint is:
            {' '}
            {activeBreakpoint}
          </p>
        </div>
      )
    }
  </ActiveBreakpointContext.Consumer>
);

const ActiveBreakpointProviderExample = () => (
  <ActiveBreakpointProvider>
    <ActiveBreakpointConsumer1 />
    <hr />
    <ActiveBreakpointConsumer2 />
  </ActiveBreakpointProvider>
);
```

### Media Queries

`terra-breakpoints` includes `_media-queries.scss`, which contains a set of SASS mixins that define media queries for the supported breakpoints.

```scss
@import 'terra-breakpoints/media-queries';

.example {
  color: blue;

  @include terra-mq-small-up {
    color: red;
  }
  
  @include terra-mq-medium-up {
    color: purple;
  }

  @include terra-mq-large-up {
    color: green;
  }

  @include terra-mq-huge-up {
    color: yellow;
  }

  @include terra-mq-enormous-up {
    color: orange;
  }
}
```

## Component Features
* [Cross-Browser Support](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
