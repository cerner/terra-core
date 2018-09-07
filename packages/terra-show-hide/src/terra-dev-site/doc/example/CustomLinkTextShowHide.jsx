import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ShowHide from 'terra-show-hide/lib/ShowHide';

const sentences = [];
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');

const CustomLinkTextShowHide = () => (
  <ShowHide
    preview={`${sentences[0]} ${sentences[1]} ${sentences[2]}`}
    collapsedButtonText={`Show ${sentences.length - 3} More Sentences`}
    expandedButtonText={`Hide ${sentences.length - 3} Sentences`}
  >
    {sentences.join(' ')}
  </ShowHide>
);

export default CustomLinkTextShowHide;
