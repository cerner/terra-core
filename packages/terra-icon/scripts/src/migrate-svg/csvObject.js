import { TerraIcon } from '../config';

class csvObject {
  constructor(name, filepath, themeable, bidi) {
    this.name = name;
    this.svgSrc = `node_modules/one-cerner-style-icons/${filepath}`;
    this.svgDest = `${TerraIcon.svgDir}${name}.svg`;
    this.isThemeable = !!themeable;
    this.isBidi = (bidi === 'bi-directional');
    this.isSpin = (name === 'spinner');
  }
}

export default csvObject;
