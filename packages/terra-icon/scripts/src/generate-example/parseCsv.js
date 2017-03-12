import csv from 'csvtojson';
import _ from 'lodash';
import { TerraIcon } from '../config';
const csvHeaders = ['name', 'filepath', 'themeable', 'bidi'];

const parseCsv = () => new Promise((resolve, reject) => {
  // Parse the csv file to json
  csv({ noheader: true, headers: csvHeaders }).fromFile(TerraIcon.csvFile)
  .transf((jsonObj)=>{
    // TODO: move transformation into it's own file
    jsonObj.componentName = `Icon${_.upperFirst(_.camelCase(jsonObj.name))}`;
    jsonObj.filepath = `${TerraIcon.iconDir}${jsonObj.componentName}.jsx`;
    jsonObj.themeable = !!jsonObj.themeable;
    jsonObj.bidi = (jsonObj.bidi === 'bi-directional');
    jsonObj.spinner = (jsonObj.name === 'IconSpinner');
    jsonObj.syntaxComponent = `<${jsonObj.componentName} />`;
    jsonObj.syntaxImport = `import { ${jsonObj.componentName} } from '../${TerraIcon.iconExport}';\n`;
  }).on('end_parsed',function(jsonObj){
    resolve(jsonObj);
  }).on('error',(error)=>{
    reject(error);
  })
});

export default parseCsv;
