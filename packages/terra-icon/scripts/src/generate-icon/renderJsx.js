/* eslint-disable import/no-extraneous-dependencies, compat/compat */
import template from 'lodash/template';
import fs from 'fs';
import path from 'path';
import ReactIcon from './ReactIcon';
import iconData from '../../../src/icon-data.json';
/* eslint-enable import/no-extraneous-dependencies */

const staticIconTemplatePath = path.join(__dirname, './staticIcontemplate.txt');
const themeIconTemplatePath = path.join(__dirname, './template.txt');
// template path for Icons that supports Tooltip
const themeIconWithTooltipTemplatePath = path.join(__dirname, './themeIconWithTooltipTemplate.txt');
const themeIconsWithTooltip = ['IconConsultInstructionsForUse'];

// Generate list of static color icon names
const staticIcons = iconData
  .filter(icon => !icon.themeable && !icon.deprecated)
  .map(icon => icon.componentName);

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
const renderJsx = icon => new Promise((resolve, reject) => {
  let templatePath;
  if (staticIcons.includes(icon.name)) {
    templatePath = staticIconTemplatePath;
  } else {
    templatePath = (themeIconsWithTooltip.includes(icon.name)) ? themeIconWithTooltipTemplatePath : themeIconTemplatePath;
  }

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
/* eslint-enable compat/compat */
