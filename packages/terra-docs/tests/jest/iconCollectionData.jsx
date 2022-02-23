import React from 'react';
import IconComplete from 'terra-icon/lib/icon/IconComplete';

const bareMinimum = [
  {
    iconSvg: <IconComplete />,
    description: 'white check mark in solid green circle',
    importNames: ['IconAvailable'],
  },
];

const twoBareMinimums = [
  {
    iconSvg: <IconComplete />,
    description: 'solid green circle containing a white check mark',
    importNames: ['IconAvailable'],
  },
  {
    iconSvg: <IconComplete />,
    description: 'white check mark in solid green circle',
    importNames: ['IconAvailable'],
  },
];

const bareMaximum = [
  {
    iconSvg: <IconComplete />,
    description: 'white check mark in solid green circle',
    meaning: 'completed, met, available, successful, yes, positive',
    isAction: true,
    isStatus: true,
    isToggle: true,
    isInteraction: true,
    isDecoration: true,
    labelRequired: true,
    isBidi: true,
    sets: ['Status'],
    importNames: ['IconAvailable', 'IconSuccess', 'IconComplete'],
    themableElements: 'party',
    searchTerms: 'white check mark solid green circle completed met available successful yes positive status iconavailable iconsuccess iconcomplete success checkmark static',
    hfFeedback: 'this icon rules',
    needsDarkBackground: false,
  },
];

export {
  bareMinimum,
  twoBareMinimums,
  bareMaximum,
};
