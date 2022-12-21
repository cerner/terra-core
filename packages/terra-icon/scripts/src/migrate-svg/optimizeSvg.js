/* eslint-disable import/no-extraneous-dependencies, compat/compat */
import SVGO from 'svgo';
import config from './optimizeConfig';
/* eslint-enable import/no-extraneous-dependencies */

const optimizeSvg = svgInput => new Promise((resolve, reject) => {
  const svgo = new SVGO(config);

  svgo.optimize(svgInput).then((result) => {
    if (result.error) {
      reject(result.error);
    } else {
      resolve(result.data);
    }
  });
});

export default optimizeSvg;
/* eslint-enable compat/compat */
