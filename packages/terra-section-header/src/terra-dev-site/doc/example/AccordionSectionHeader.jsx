import React, { useState } from 'react';
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate';

const AccordionSectionHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const sectionHeaderProps = {
    title: 'I can accordion, click me',
    isOpen,
    onClick: handleClick,
  };

  return (
    <SectionHeaderExampleTemplate title="Accordion Section Header" exampleProps={sectionHeaderProps} />
  );
};

export default AccordionSectionHeader;
