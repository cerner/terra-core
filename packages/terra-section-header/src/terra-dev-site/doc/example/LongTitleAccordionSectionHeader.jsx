import React, { useState } from 'react';
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate';

const LongTitleAccordionSectionHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const sectionHeaderProps = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu',
    isOpen,
    onClick: handleClick,
  };

  return (
    <SectionHeaderExampleTemplate title="Long Title Accordion Section Header" exampleProps={sectionHeaderProps} />
  );
};

export default LongTitleAccordionSectionHeader;
