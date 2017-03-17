'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeToJsxNode = require('./nodeToJsxNode');

var _nodeToJsxNode2 = _interopRequireDefault(_nodeToJsxNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * transformChildren - Takes an svg element and traverses all of its children
 * to transform their attributes as jsx attributes and returns it as a string.
 * @param {HTMLElement} node html node
 */
var transformChildren = function transformChildren(node) {
  var currentNode = node;
  if (currentNode.hasChildNodes()) {
    var newChildren = '';
    for (var i = 0; i < currentNode.children.length; i += 1) {
      newChildren += transformChildren(currentNode.children[i]);
    }

    if (node.tagName === 'svg') {
      return newChildren;
    }

    currentNode.textContent = newChildren;
  }

  return (0, _nodeToJsxNode2.default)(currentNode);
};

exports.default = transformChildren;