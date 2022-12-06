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
    <AccoordianExampleTemplate title="Patient Allergy details:" heading="Accordion Section Header" sectionHeaderAttrs={sectionHeaderProps}>
      <p>Allergic to Cats</p>
      <p>Allergic to Dogs</p>
      <p>Allergic to Dust</p>
      <p>Allergic to Mold</p>
      <p>Allergic to Latex</p>
    </AccoordianExampleTemplate>
  );
};

export default AccordionSectionHeader;
