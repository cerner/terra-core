import React from 'react';
import Button from 'terra-button';

const Example = () => (
  <table>
    <thead>
      <th>tabIndex</th>
      <th>isDisabled</th>
      <th>Output</th>
    </thead>
    <tbody>
      <tr>
        <td>undefined</td>
        <td>true</td>
        <td><Button text="button" isDisabled /></td>
      </tr>
      <tr>
        <td>-1</td>
        <td>true</td>
        <td><Button text="button" isDisabled tabIndex="-1" /></td>
      </tr>
      <tr>
        <td>0</td>
        <td>true</td>
        <td><Button text="button" isDisabled tabIndex="0" /></td>
      </tr>
      <tr>
        <td>1</td>
        <td>true</td>
        <td><Button text="button" isDisabled tabIndex="1" /></td>
      </tr>
      <tr>
        <td>undefined</td>
        <td>undefined</td>
        <td><Button text="button" /></td>
      </tr>
      <tr>
        <td>-1</td>
        <td>undefined</td>
        <td><Button text="button" tabIndex="-1" /></td>
      </tr>
      <tr>
        <td>0</td>
        <td>undefined</td>
        <td><Button text="button" tabIndex="0" /></td>
      </tr>
      <tr>
        <td>1</td>
        <td>undefined</td>
        <td><Button text="button" tabIndex="1" /></td>
      </tr>
    </tbody>
  </table >
);

export default Example;

