# Terra Card

Card is a basic container with some base styling to help seperate elements with different content

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-card`

## Usage

```jsx
import React from 'react';
import Card from 'terra-card';

Just a Default Card
<Card>
	...
</Card>

Or we can selectively add padding to child elements
<Card>
	<Card.Body hasPaddingVertical>
		...
	</Card.Body>
	...
	<Card.Body hasPaddingVertical>
		...
	</Card.Body>
</Card>



```

## Expected Use

The expected use for a card would be to keep elements seperated from each other with different content, for example one card could contain a graph while another could have text. Another use would be to help make some elements stand out on the screen with the use of the base styling.


## Component Features


 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

