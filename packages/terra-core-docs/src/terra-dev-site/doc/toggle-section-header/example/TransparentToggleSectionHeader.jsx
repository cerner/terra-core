import React from 'react';
import ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';

const componentProps = {
  title: 'Transparent Example',
  isTransparent: true,
};

const DefaultToggleSectionHeader = () => (
  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>
    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>
  </ToggleSectionHeaderExampleTemplate>
);

export default DefaultToggleSectionHeader;
