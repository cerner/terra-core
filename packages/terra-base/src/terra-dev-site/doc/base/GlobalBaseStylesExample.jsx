import React from 'react';

const BaseExample = () => (
  <div>
    <h1>Global BaseStyles example</h1>
    <p>Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquant.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <dl>
      <dt>Description name</dt>
      <dd>Description value</dd>
      <dt>Description name</dt>
      <dd>Description value</dd>
    </dl>
    <ol>
      <li>Ordered list item</li>
      <li>
Ordered list item
        <ol>
          <li>Nested ordered list item</li>
        </ol>
      </li>
      <li>Ordered list item</li>
    </ol>
    <ul>
      <li>Unordered list item</li>
      <li>
Unordered list item
        <ol>
          <li>Nested unordered list item</li>
        </ol>
      </li>
      <li>Unordered list item</li>
    </ul>
  </div>
);

export default BaseExample;
