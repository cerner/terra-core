const fs = require('fs');

const outputfile = fs.createWriteStream(`src/Icon.jsx`, { flags: 'w' });

const writeIconExport = reactIconName => new Promise((resolve, reject) => {
  outputfile.write(`export { default as ${reactIconName} } from './icon/${reactIconName}.jsx';\n`);
  resolve('matt');
});

export default writeIconExport;
