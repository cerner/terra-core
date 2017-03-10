'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _htmlToReactAttributes = require('./htmlToReactAttributes');

var _htmlToReactAttributes2 = _interopRequireDefault(_htmlToReactAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * nodeToJsxNode - Takes a single html element and returns it as
 * a string with its attributes transformed to jsx
 * @param {HTMLElement} htmlNode Html node
 */
var nodeToJsxNode = function nodeToJsxNode(htmlNode) {
  var tag = htmlNode.tagName.toLowerCase();
  var newAttributes = '';

  for (var i = 0; i < htmlNode.attributes.length; i += 1) {
    var attrib = htmlNode.attributes[i];
    var newName = (0, _htmlToReactAttributes2.default)(attrib.name);

    newAttributes += newName + '="' + attrib.value + '" ';
  }

  return '<' + tag + ' ' + newAttributes + '>' + htmlNode.textContent + '</' + tag + '>';
};

exports.default = nodeToJsxNode;