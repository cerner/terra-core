import SVGO from 'svgo';
import optimizeConfig from './optimizeConfig';


const optimizeSvg = csvObject => new Promise((resolve, reject) => {
  const config = optimizeConfig(csvObject);
  const svgo = new SVGO(config);

  svgo.optimize(csvObject.svg, (result) => {
    if (result.error) {
      reject(result.error);
    } else {
      csvObject.svg = result.data;
      resolve(csvObject);
    }
  });
  resolve(svgo);
});

export default optimizeSvg;
