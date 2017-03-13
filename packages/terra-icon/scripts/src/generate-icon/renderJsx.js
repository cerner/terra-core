// eslint-disable-next-line import/no-extraneous-dependencies
import template from 'lodash/template';
import fs from 'fs';
import path from 'path';
import ReactIcon from './ReactIcon';

const templatePath = path.join(__dirname, './template.txt');

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
const renderJsx = icon => new Promise((resolve, reject) => {
  fs.readFile(templatePath, 'utf-8', (error, text) => {
    if (error) {
      reject(error);
    } else {
      const compiled = template(text);
      resolve(new ReactIcon(icon.name, compiled({ icon })));
    }
  });
});

export default renderJsx;
