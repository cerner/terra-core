import React, { useState } from 'react';
import SectionHeader from 'terra-section-header';
import Toggle from 'terra-toggle';

const AccordionSectionHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>Accordion Section Header</h2>
      <SectionHeader
        aria-expanded={isOpen}
        isOpen={isOpen}
        onClick={handleClick}
        text="Patient Allergy details"
      />
      <Toggle isOpen={isOpen} isAnimated>
        <p>Allergic to Cats</p>
        <p>Allergic to Dogs</p>
        <p>Allergic to Dust</p>
        <p>Allergic to Mold</p>
        <p>Allergic to Latex</p>
      </Toggle>
    </div>
  );
};

export default AccordionSectionHeader;
