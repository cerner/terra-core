import fs from 'fs';

const outputfile = fs.createWriteStream('../../packages/terra-site/src/examples/icon/IconAll.jsx', { flags: 'w' });

const generateIconAll = iconObjs => new Promise((resolve) => {
  outputfile.write('// This file is autogenerated from scripts/src/generate-example\n');
  outputfile.write('/* eslint-disable import/no-duplicates */\n');
  outputfile.write('import React from \'react\';\n');
  outputfile.write('import Table from \'terra-table\';\n');
  iconObjs.forEach((iconObj) => {
    outputfile.write(iconObj.syntaxImport);
  });
  outputfile.write('/* eslint-enable import/no-duplicates */\n');

  outputfile.write('const IconAll = () => (\n');
  outputfile.write('  <Table isStriped={false} >\n');

  outputfile.write('     <Table.Header>\n');
  outputfile.write(`     <Table.HeaderCell content={'SVG'} key={'svg'} />\n`);
  outputfile.write(`     <Table.HeaderCell content={'Concept'} key={'concept'}/>\n`);
  outputfile.write(`     <Table.HeaderCell content={'Code'} key={'code'}/>\n`);
  outputfile.write('     </Table.Header>\n');
  outputfile.write('      <Table.Rows>\n');

  iconObjs.forEach((iconObj) => {
    outputfile.write(`    <tr style={{backgroundColor: '#EEEEEE'}}>\n`);
    outputfile.write('    <td>\n');
    outputfile.write(`      ${iconObj.syntaxComponent}\n`);
    outputfile.write('    </td><td>\n');
    outputfile.write(`      ${iconObj.name}\n`);
    outputfile.write('    </td><td>\n');
    outputfile.write(`      ${iconObj.syntaxImport}\n`);
    outputfile.write('    </td>\n');
    outputfile.write('    </tr>\n');
  });
  outputfile.write('      </Table.Rows>\n');
  outputfile.write('  </Table>\n');
  outputfile.write(');\n\n');

  outputfile.write('export default IconAll;\n');

  resolve(iconObjs);
});

export default generateIconAll;
