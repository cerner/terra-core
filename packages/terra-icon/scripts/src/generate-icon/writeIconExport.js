const fs = require('fs');
import { TerraIcon } from '../config';

const outputfile = fs.createWriteStream(TerraIcon.iconExport, { flags: 'w' });

const writeIconExport = reactIconName => new Promise((resolve, reject) => {
  outputfile.write(`export { default as ${reactIconName} } from './icon/${reactIconName}.jsx';\n`);

  resolve(console.log(`export { default as ${reactIconName} } from './icon/${reactIconName}.jsx';\n`));
});

export default writeIconExport;
