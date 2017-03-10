import { CernerOneIcons, TerraIcon } from '../config.js';

class csvObject {
  constructor(name, filepath, themeable, bidi) {
    console.log(themeable);
    this.name = name;
    this.svgSrc = `node_modules/cerner-one-icons/${filepath}`;
    this.svgDest = `${TerraIcon.svgDir}/${name}.svg`;
    this.isThemeable = themeable ? true : false;
    this.isBidi = (bidi === 'bi-directional');
    this.isSpin = (name === 'spinner');
  }
}

export default csvObject;
