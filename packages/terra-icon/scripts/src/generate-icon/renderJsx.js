/* eslint-disable import/no-extraneous-dependencies, compat/compat */
import template from 'lodash/template';
import fs from 'fs';
import path from 'path';
import ReactIcon from './ReactIcon';
import iconData from '../../../src/icon-data.json';
/* eslint-enable import/no-extraneous-dependencies */

const staticIconTemplatePath = path.join(__dirname, './staticIcontemplate.txt');
const themeIconTemplatePath = path.join(__dirname, './template.txt');

// Generate list of static color icon names
const staticIcons = iconData
  .filter((icon) => !icon.themeable && !icon.deprecated)
  .map((icon) => icon.componentName);

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
const renderJsx = (icon) => new Promise((resolve, reject) => {
  if (staticIcons.includes(icon.name)) {
    fs.readFile(staticIconTemplatePath, 'utf-8', (error, text) => {
      if (error) {
        reject(error);
      } else {
        const compiled = template(text);
        resolve(new ReactIcon(icon.name, compiled({ icon })));
      }
    });
  } else {
    fs.readFile(themeIconTemplatePath, 'utf-8', (error, text) => {
      if (error) {
        reject(error);
      } else {
        const compiled = template(text);
        resolve(new ReactIcon(icon.name, compiled({ icon })));
      }
    });
  }
});

export default renderJsx;
/* eslint-enable compat/compat */
