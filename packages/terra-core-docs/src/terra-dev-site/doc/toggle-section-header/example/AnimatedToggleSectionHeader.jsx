import React from 'react';
import ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';

const componentProps = {
  title: 'Patient Responsibilities',
  isAnimated: true,
};

const AnimatedToggleSectionHeader = () => (
  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>
    <p>Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations.</p>
    <p>Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff.</p>
    <p>
      Strictly follow the
      <a href="#visitors-policy">Hospitals Visitors Policy</a>
      {' '}
      and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records.
    </p>
  </ToggleSectionHeaderExampleTemplate>
);

export default AnimatedToggleSectionHeader;
