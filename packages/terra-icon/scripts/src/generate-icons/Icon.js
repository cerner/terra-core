// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import transformChildren from './transformChildren';
import htmlToReactAttributes from './htmlToReactAttributes';
import classNamesToAttributes from './classNamesToAttributes';

const Icon = (node) => ({
  children: transformChildren(node),
  attributes: classNamesToAttributes(Array.prototype.slice.call(node.attributes)
    .map(x => ({ name: htmlToReactAttributes(x.name), value: x.value }))
    .reduce((attrs, x) => ({ [x.name]: x.value, ...attrs }), {}))
});

export default Icon;
