import React from 'react';

const CustomizedPropsTable = () => (
  <table>
    <thead>
      <tr>
        <th>Prop Name</th>
        <th>Type</th>
        <th>Is Required</th>
        <th>Default Value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>text</td>
        <td>string</td>
        <td>optional</td>
        <td>null</td>
        <td>
          <p>A text string to be rendered in the component.</p>
        </td>
      </tr>
    </tbody>
  </table>
);

export default CustomizedPropsTable;
