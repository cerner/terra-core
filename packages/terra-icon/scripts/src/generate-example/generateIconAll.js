// import React from 'react';
// import { IconAdd } from '../src/Icon.jsx';
// import { IconAbnormal} from '../src/Icon.jsx';

// const IconAll = () => (
//   <div>
//     <IconAdd />
//     <IconAbnormal />
//   </div>
// );

// export default IconAll;

import fs from 'fs';
import { TerraIcon } from '../config';
const outputfile = fs.createWriteStream(`./examples/IconAll.jsx`, { flags: 'w' });

const generateIconAll = iconObjs => new Promise((resolve, reject) => {

  outputfile.write(`// This file is autogenerated from scripts/src/generate-example \n`);
  outputfile.write(`import React from 'react';\n`);

  iconObjs.forEach((iconObj) => {
    outputfile.write(iconObj.syntaxImport);
  });

  outputfile.write(`const IconAll = () => (\n`);
  outputfile.write(`<div>\n`);
  iconObjs.forEach((iconObj) => {
    outputfile.write(`  <div>\n`);
    outputfile.write(`    ${iconObj.syntaxComponent}\n`);
    outputfile.write(`    ${iconObj.name}\n`);
    outputfile.write(`  </div>\n`);
  });
  outputfile.write(`</div>\n`);
  outputfile.write(`);\n\n`);

  outputfile.write(`export default IconAll;`);

  resolve(iconObjs);
});

export default generateIconAll;

