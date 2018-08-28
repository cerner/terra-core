import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ShowHide from 'terra-show-hide/lib/ShowHide';

const fullText = "This is the example text for the ShowHide component. The preview section of this text will be the text passed into the 'preview prop'. The complete set of text will be passed as a child node. You have the option to change the default icon to another Terra icon. You also have the ability to change the font size. TODO add the font size functionality- I probably won't need to add all the sizes that are used int the header component.";
const previewText = fullText.substring(0, 100);

const SizeMiniShowHide = () => (
  <ShowHide preview={previewText} size="mini">
    {fullText}
  </ShowHide>
);

export default SizeMiniShowHide;
