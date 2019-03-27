import React from 'react';
import Base from '../../../Base';

const BaseDefault = () => (
  <Base locale="en">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
          <li>Nested ordered list item</li>
        </ol>
      </li>
      <li>Ordered list item</li>
    </ol>
    <ul id="bottom-section">
      <li>Unordered list item</li>
      <li>
Unordered list item
        <ol>
          <li>Nested unordered list item</li>
          <li>Nested unordered list item</li>
        </ol>
      </li>
      <li> Unordered list item</li>
    </ul>
    <p id="bottom">Bottom sample paragraph</p>
  </Base>
);

export default BaseDefault;
