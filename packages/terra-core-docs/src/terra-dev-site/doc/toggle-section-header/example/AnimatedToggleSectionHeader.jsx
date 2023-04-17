import React from 'react';
import ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';

const componentProps = {
  title: 'Animated Example',
  isAnimated: true,
};

const AnimatedToggleSectionHeader = () => (
  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>
    <p>Allergies, also known as allergic diseases, are a number of conditions caused by hypersensitivity of the immune system to typically harmless substances in the environment. These diseases include hay fever, food allergies, atopic dermatitis, allergic asthma, and anaphylaxis. Symptoms may include red eyes, an itchy rash, sneezing, coughing, a runny nose, shortness of breath, or swelling.</p>
  </ToggleSectionHeaderExampleTemplate>
);

export default AnimatedToggleSectionHeader;
