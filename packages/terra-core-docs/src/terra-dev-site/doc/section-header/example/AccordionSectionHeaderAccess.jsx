import React, { useState } from 'react';
import Card from 'terra-card';
import AccoordianExampleTemplate from './AccordionExampleTemplate';

const AccordionSectionHeaderAccess = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const sectionHeaderProps = {
    isOpen,
    level: 3,
    onClick: handleClick,
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <AccoordianExampleTemplate title="Patient is Allergic to:" heading="Documented Allergies" sectionHeaderAttrs={sectionHeaderProps}>
            <p>Cats</p>
            <p>Dogs</p>
            <p>Dust</p>
            <p>Mold</p>
            <p>Latex</p>
          </AccoordianExampleTemplate>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AccordionSectionHeaderAccess;
