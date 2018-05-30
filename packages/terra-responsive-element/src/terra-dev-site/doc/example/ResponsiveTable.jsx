/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';

const ResponsiveTableExample = () => {
  const mobileView = (
    <ul>
      <li>John Smith, 22</li>
      <li>David Johnson, 25</li>
      <li>Leeroy Jenkins, 31</li>
    </ul>
  );

  const desktopView = (
    <table style={{ width: '100%', textAlign: 'left' }}>
      <tbody>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>John</td>
          <td>Smith</td>
          <td>22</td>
        </tr>
        <tr>
          <td>David</td>
          <td>Johnson</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Leeroy</td>
          <td>Jenkins</td>
          <td>31</td>
        </tr>
      </tbody>
    </table>
  );

  return <ResponsiveElement defaultElement={mobileView} medium={desktopView} />;
};

export default ResponsiveTableExample;
