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
  },
  {
    svg: IconScheduled,
    meaning: 'scheduled',
    sets: ['General Use'],
    isAction: false,
    isStatus: false,
    isToggle: false,
    labelRequired: true,
    colorResponsiveElements: '',
    needsDarkBackground: false,
    searchTerms: 'scheduled scheduling schedule calendar green circle check hybrid themable',
  },
  {
    svg: IconTrash,
    meaning: 'send item to trash',
    sets: ['General Use'],
    isAction: false,
    isStatus: false,
    isToggle: false,
    labelRequired: true,
    colorResponsiveElements: '',
    needsDarkBackground: false,
    searchTerms: 'trash garbage junk delete refuse themable',
  },
  {
    svg: IconNotMet,
    meaning: 'clear, remove',
    sets: ['General Use'],
    isAction: true,
    isStatus: true,
    isToggle: false,
    labelRequired: true,
    colorResponsiveElements: '',
    needsDarkBackground: false,
    searchTerms: 'not met clear remove x circle themable',
  },
];

export default icons;
