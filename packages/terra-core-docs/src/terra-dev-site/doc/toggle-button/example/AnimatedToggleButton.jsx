import React from 'react';
import ToggleButton from 'terra-toggle-button';

const AnimatedToggleButton = () => (
  <ToggleButton isAnimated closedButtonText="Patient Profile">
    <p>
      <h2>Medical History</h2>
      <div>
        <ul>
          <li>Previous Surgeries: Appendectomy (2015)</li>
          <li>Allergies: Pencillin</li>
          <li>Chronic conditions :Asthma</li>
        </ul>
      </div>
    </p>
  </ToggleButton>
);

export default AnimatedToggleButton;
