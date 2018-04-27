# Terra Doc Template

The terra-doc-template component provides an adjustable template for documentation pages.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-doc-template`

## Usage

```jsx
import React from 'react';
import DocTemplate from 'terra-doc-template';
import readme from 'README.md'

import ComponentSrc from '!rawloader!./Component';

import Example from './Example'
import ExampleSrc from '!rawloader!./Example';

const propsTables = [
  { componentSrc: ComponentSrc, componentName: 'Example Component' },
];

const examples = [
  { title: 'Example Component Example 1', description: 'Description of the examples', example: Example, source: ExampleSrc }
];

<DocTemplate packageName="terra-doc-template" readme={readme} examples={examples} propsTables={propsTables} />
```
