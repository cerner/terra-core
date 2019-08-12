/* eslint-disable compat/compat */
import fs from 'fs';

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
const writeIcon = (reactIcon) => new Promise((resolve, reject) => {
  fs.writeFile(reactIcon.file, reactIcon.component, (error) => {
    if (error) {
      reject(error);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Created ${reactIcon.name} at ${reactIcon.file}`);
      resolve(reactIcon.name);
    }
  });
});

export default writeIcon;
/* eslint-enable compat/compat */
