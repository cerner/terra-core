import fs from 'fs';
import { TerraIcon } from '../config';

const outputfile = fs.createWriteStream(`${TerraIcon.iconExport}.jsx`, { flags: 'w' });

const writeIconExport = reactIconName => new Promise((resolve) => {
  outputfile.write(`export { default as ${reactIconName} } from './icon/${reactIconName}';\n`);

  // eslint-disable-next-line no-console
  resolve(console.log(`export { default as ${reactIconName} } from './icon/${reactIconName}';\n`));
});

export default writeIconExport;
