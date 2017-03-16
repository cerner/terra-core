import htmlToReactAttributes from './htmlToReactAttributes';

/**
 * nodeToJsxNode - Takes a single html element and returns it as
 * a string with its attributes transformed to jsx
 * @param {HTMLElement} htmlNode Html node
 */
const nodeToJsxNode = (htmlNode) => {
  const tag = htmlNode.tagName.toLowerCase();
  let newAttributes = '';

  for (let i = 0; i < htmlNode.attributes.length; i += 1) {
    const attrib = htmlNode.attributes[i];
    const newName = htmlToReactAttributes(attrib.name);

    newAttributes += `${newName}="${attrib.value}" `;
  }

  return `<${tag} ${newAttributes}>${htmlNode.textContent}</${tag}>`;
};

export default nodeToJsxNode;
