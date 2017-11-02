# Terra Flex Box

The flex-box component provides a flexbox based container for aligning its content.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-flex-box`

## Usage

```jsx
import React from 'react';
import FlexBox from 'terra-flex-box';

<FlexBox flexDirection="column">
  <FlexBox order={2} flex="0 0 40%" alignSelf="flex-end">
    <span>3 Test Display 3</span>
  </FlexBox>
  <FlexBox id="child2" order={1} flex="1 1 auto" alignSelf="center">
    <span>2 Test Display 2</span>
  </FlexBox>
  <FlexBox id="child3" order={0} flex="0 0 40%" alignSelf="flex-start">
    <span>1 Test Display 1</span>
  </FlexBox>
</FlexBox>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
