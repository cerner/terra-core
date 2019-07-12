# Terra Props Table


[![NPM version](https://badgen.net/npm/v/terra-props-table)](https://www.npmjs.org/package/terra-props-table)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.com/cerner/terra-core)

React component to render a table view for the props metadata of another react component.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-props-table/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-props-table`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## CLI
Props table is also a command utility used to generate markdown tables. The CLI accepts multiple files as input and has a single output directory.

### Usage
```
props-table src/Status.jsx --out-dir ./docs
```



```js
const propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the status indicator. Accepts a CSS color value.
   */
  color: PropTypes.string,
};

const Status = ({ color, children }) => {
  return (
    <div style={{ borderColor: color }} >
      {children}
    </div>
  );
};

Status.propTypes = propTypes;
```

The status react component (above) will generate the markdown table (below).

| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| children| `node`| `required`| | Child node. Component to display next to the status indicator.|
| color| `string`| optional| | The color of the status indicator. Accepts a CSS color value.|

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
