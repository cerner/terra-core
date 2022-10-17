import React, { useState } from 'react';
import Card from 'terra-card';
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
    <div>
      <Card>
        <Card.Body>
          <AccoordianExampleTemplate title="Patient List" heading="Accordion Section Header" level={3} exampleProps={sectionHeaderProps}>
            <p>Patient List 1</p>
            <p>Patient List 2</p>
          </AccoordianExampleTemplate>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AccordionSectionHeader;
