import fs from 'fs';
import path from 'path';
import template from 'lodash/template';

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
const writeIcon = reactIcon => new Promise((resolve, reject) => {
  fs.writeFile(reactIcon.file, reactIcon.component, (error) => {
    if (error) {
      reject(error);
    } else {
      resolve(console.log(`Created ${reactIcon.name} at ${reactIcon.file}`));
    }
  });
});

export default writeIcon;
