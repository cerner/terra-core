import React, { useState } from 'react';
import SectionHeader from 'terra-section-header';
import Toggle from 'terra-toggle';

const LongTitleAccordionSectionHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>Long Title Accordion Section Header</h2>
      <SectionHeader
        aria-expanded={isOpen}
        isOpen={isOpen}
        onClick={handleClick}
        text="Long Title Accordion Section Header that provides data an onClick callback. This is an element provides a customizable Accordion Section Header layout with a prominent title options for the elements."
      />
      <Toggle isOpen={isOpen} isAnimated>
        <p>
          Keystone Accountable Care Organization (ACO), a collaboration between Geisinger Health System and three other health systems, entered the Medicare Shared Savings Program (MSSP) in 2013 and transitioned to an MSSP Track 1+ in 2018, qualifying Keystone ACO as an advanced payment model.
          According to the Centers for Medicaid and Medicare Services (CMS) benchmark minus expenditures formula, the ACO saved Medicare nearly $10 million in 2018.
          Hear how Keystone ACO is using the Cerner HealtheIntent® platform to garner insights across more than 72,000 ACO beneficiaries and multiple EHRs.
        </p>
      </Toggle>
    </div>
  );
};

export default LongTitleAccordionSectionHeader;
