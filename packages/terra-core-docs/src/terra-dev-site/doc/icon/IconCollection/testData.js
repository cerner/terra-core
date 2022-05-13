import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import IconSuccessInverse from 'terra-icon/lib/icon/IconSuccessInverse';
import IconAvailable from 'terra-icon/lib/icon/IconAvailable';
import IconScheduled from 'terra-icon/lib/icon/IconScheduled';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import IconNotMet from 'terra-icon/lib/icon/IconNotMet';

const icons = [
  {
    svg: IconSuccess,
    meaning: 'success',
    sets: ['General Use'],
    isAction: false,
    isStatus: true,
    isToggle: false,
    labelRequired: false,
    colorResponsiveElements: '',
    needsDarkBackground: false,
    searchTerms: 'success status check checkmark green circle static',
    hfGuidance: 'This is where my HF guidance would go... IF I HAD ANY.',
    terraAlias: 'IconSuccess',
    // note: the following value is mutated by the resultsFromSearchString function
    matchingWords: [],
  },
  {
    svg: IconSuccessInverse,
    meaning: 'success',
    sets: ['General Use'],
    isAction: false,
    isStatus: true,
    isToggle: false,
    labelRequired: false,
    colorResponsiveElements: '',
    needsDarkBackground: true,
    searchTerms: 'success status check checkmark white circle static',
    hfGuidance: 'This is where my HF guidance would go... IF I HAD ANY.',
    terraAlias: 'IconSuccessInverse',
    // note: the following value is mutated by the resultsFromSearchString function
    matchingWords: [],
  },
  {
    svg: IconAvailable,
    meaning: 'available',
    sets: ['General Use'],
    isAction: false,
    isStatus: true,
    isToggle: false,
    labelRequired: false,
    colorResponsiveElements: '',
    needsDarkBackground: false,
    searchTerms: 'available status check checkmark green circle static',
    hfGuidance: 'This is where my HF guidance would go... IF I HAD ANY.',
    terraAlias: 'IconAvailable',
    // note: the following value is mutated by the resultsFromSearchString function
    matchingWords: [],
  },
  {
    svg: IconScheduled,
    meaning: 'scheduled',
    sets: ['General Use'],
    isAction: false,
    isStatus: false,
    isToggle: false,
    labelRequired: true,
    colorResponsiveElements: 'calendar',
    needsDarkBackground: false,
    searchTerms: 'scheduled scheduling schedule calendar green circle check hybrid themable',
    hfGuidance: 'This is where my HF guidance would go... IF I HAD ANY.',
    terraAlias: 'IconScheduled',
    // note: the following value is mutated by the resultsFromSearchString function
    matchingWords: [],
  },
  {
    svg: IconTrash,
    meaning: 'send item to trash',
    sets: ['General Use'],
    isAction: false,
    isStatus: false,
    isToggle: false,
    labelRequired: true,
    colorResponsiveElements: 'entire icon',
    needsDarkBackground: false,
    searchTerms: 'trash garbage junk delete refuse themable',
    hfGuidance: 'This is where my HF guidance would go... IF I HAD ANY.',
    terraAlias: 'IconTrash',
    // note: the following value is mutated by the resultsFromSearchString function
    matchingWords: [],
  },
  {
    svg: IconNotMet,
    meaning: 'clear, remove',
    sets: ['General Use'],
    isAction: true,
    isStatus: true,
    isToggle: false,
    labelRequired: true,
    colorResponsiveElements: 'entire icon',
    needsDarkBackground: false,
    searchTerms: 'not met clear remove x circle themable',
    hfGuidance: 'This is where my HF guidance would go... IF I HAD ANY.',
    terraAlias: 'IconNotMet',
    // note: the following value is mutated by the resultsFromSearchString function
    matchingWords: [],
  },
];

export default icons;
