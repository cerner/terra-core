/* eslint-disable import/no-extraneous-dependencies, compat/compat */
import SVGO from 'svgo';
import optimizeConfig from './optimizeConfig';
/* eslint-enable import/no-extraneous-dependencies */

const optimizeSvg = csvObject => new Promise((resolve, reject) => {
  const objectCsv = Object.assign({}, csvObject);
  const config = optimizeConfig(objectCsv);
  const svgo = new SVGO(config);

  svgo.optimize(objectCsv.svg).then((result) => {
    if (result.error) {
      reject(result.error);
    } else {
      objectCsv.svg = result.data;
      resolve(objectCsv);
    }
  });
});

export default optimizeSvg;
/* eslint-enable compat/compat */
