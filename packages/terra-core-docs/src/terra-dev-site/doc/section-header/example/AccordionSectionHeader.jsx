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
    <AccoordianExampleTemplate title="I can accordion, click me" heading="Accordion Section Header" exampleProps={sectionHeaderProps}>
      <p>Accordion1</p>
      <p>Accordion2</p>
    </AccoordianExampleTemplate>
  );
};

export default AccordionSectionHeader;
