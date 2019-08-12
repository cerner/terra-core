// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import transformChildren from './transformChildren';
import htmlToReactAttributes from './htmlToReactAttributes';
import classNamesToAttributes from './classNamesToAttributes';

class Icon {
  constructor(name, node) {
    this.name = `Icon${_.upperFirst(_.camelCase(name))}`;
    this.children = transformChildren(node);
    this.attributes = classNamesToAttributes(Array.prototype.slice.call(node.attributes)
      .map((x) => ({ name: htmlToReactAttributes(x.name), value: x.value }))
      .reduce((attrs, x) => ({ [x.name]: x.value, ...attrs }), {}));
  }
}

export default Icon;
