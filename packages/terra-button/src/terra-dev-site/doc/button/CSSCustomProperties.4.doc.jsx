/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
import React from 'react';
import ThemeProperties from '../../../../theme-properties.json';

Object.keys(ThemeProperties).forEach((key) => {
  if (key.includes('terra-button') && key.includes('terra-button-group') === false) {
    console.log(key);
  }
});

const DocPage = () => (
  <ul>
    {Object.keys(ThemeProperties).map((key) => {
      if (key.includes('terra-button')) {
        return (
          <li key={key}>
            <span>{key}</span>
            {' : '}
            <span>{ThemeProperties[key]}</span>
          </li>);
      }

      return null;
    })}
  </ul>
);

export default DocPage;
