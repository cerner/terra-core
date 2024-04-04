import React, { useState } from 'react';
import Card from 'terra-card';
import SectionHeader from 'terra-section-header';
import Toggle from 'terra-toggle';

const AccordionSectionHeaderAccess = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h2>Documented Allergies</h2>
          <SectionHeader
            aria-expanded={isOpen}
            isOpen={isOpen}
            level={3}
            onClick={handleClick}
            text="Patient is Allergic to:"
          />
          <Toggle isOpen={isOpen} isAnimated>
            <p>Cats</p>
            <p>Dogs</p>
            <p>Dust</p>
            <p>Mold</p>
            <p>Latex</p>
          </Toggle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AccordionSectionHeaderAccess;
