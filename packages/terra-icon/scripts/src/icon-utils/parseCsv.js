/* eslint-disable import/no-extraneous-dependencies, compat/compat */
import csv from 'csvtojson';
import _ from 'lodash';
import { TerraIcon } from '../config';
/* eslint-enable import/no-extraneous-dependencies */

const csvHeaders = ['name', 'filepath', 'themeable', 'bidi'];

const parseCsv = () => new Promise((resolve) => {
  // Parse the csv file to json
  csv({ noheader: true, headers: csvHeaders }).fromFile(TerraIcon.csvFile)
    .subscribe((jsonObj) => {
      // TODO: move transformation into it's own file
      /* eslint-disable  no-param-reassign */
      jsonObj.componentName = `Icon${_.upperFirst(_.camelCase(jsonObj.name))}`;
      jsonObj.filepath = `${TerraIcon.iconDir}${jsonObj.componentName}.jsx`;
      jsonObj.themeable = !!jsonObj.themeable;
      jsonObj.bidi = (jsonObj.bidi === 'bi-directional');
      jsonObj.spinner = (jsonObj.name === 'IconSpinner');
      jsonObj.syntaxComponent = `<${jsonObj.componentName} height='2em' width='2em' />`;
      jsonObj.syntaxImport = `import ${jsonObj.componentName} from 'terra-icon/lib/icon/${jsonObj.componentName}';\n`;
      /* eslint-enable  no-param-reassign */
    }).then(jsonObj => resolve(jsonObj));
});

export default parseCsv;
/* eslint-enable compat/compat */
