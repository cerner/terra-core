import React, { useState } from 'react';
import AccoordianExampleTemplate from './AccordionExampleTemplate';

const LongTitleAccordionSectionHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const sectionHeaderProps = {
    isOpen,
    onClick: handleClick,
  };

  return (
    <AccoordianExampleTemplate text="Long Title Accordion Section Header that provides data an onClick callback" heading="Long Title Accordion Section Header" sectionHeaderAttrs={sectionHeaderProps}>
      <p>Keystone Accountable Care Organization (ACO), a collaboration between Geisinger Health System and three other health systems, entered the Medicare Shared Savings Program (MSSP) in 2013 and transitioned to an MSSP Track 1+ in 2018, qualifying Keystone ACO as an advanced payment model. According to the Centers for Medicaid and Medicare Services (CMS) benchmark minus expenditures formula, the ACO saved Medicare nearly $10 million in 2018. Hear how Keystone ACO is using the Cerner HealtheIntent® platform to garner insights across more than 72,000 ACO beneficiaries and multiple EHRs.</p>
    </AccoordianExampleTemplate>
  );
};

export default LongTitleAccordionSectionHeader;
