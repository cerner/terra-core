import nodeToJsxNode from './nodeToJsxNode';

/**
 * transformChildren - Takes an svg element and traverses all of its children
 * to transform their attributes as jsx attributes and returns it as a string.
 * @param {HTMLElement} node html node
 */
const transformChildren = (node) => {
  const currentNode = node;
  if (currentNode.hasChildNodes()) {
    let newChildren = '';
    for (let i = 0; i < currentNode.children.length; i += 1) {
      newChildren += transformChildren(currentNode.children[i]);
    }

    if (node.tagName === 'svg') {
      return newChildren;
    }

    currentNode.textContent = newChildren;
  }

  return nodeToJsxNode(currentNode);
};

export default transformChildren;
