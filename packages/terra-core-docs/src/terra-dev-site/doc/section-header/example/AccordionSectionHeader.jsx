import React, { useState } from 'react';
import AccoordianExampleTemplate from './AccordionExampleTemplate';

const AccordionSectionHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const sectionHeaderProps = {
    isOpen,
    onClick: handleClick,
  };

  return (
    <AccoordianExampleTemplate title="Patient is Allergic to:" heading="Accordion Section Header" sectionHeaderAttrs={sectionHeaderProps}>
      <p>Cats</p>
      <p>Dogs</p>
      <p>Dust</p>
      <p>Mold</p>
      <p>Latex</p>
    </AccoordianExampleTemplate>
  );
};

export default AccordionSectionHeader;
