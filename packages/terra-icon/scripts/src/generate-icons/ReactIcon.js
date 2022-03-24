import { TerraIcon } from '../config';

class ReactIcon {
  constructor(name, component) {
    this.name = name;
    this.file = `${TerraIcon.iconDir}${name}.jsx`;
    this.component = component;
  }
}

export default ReactIcon;
