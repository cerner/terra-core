import React from 'react';
import IconSuccessInverse from 'terra-icon/lib/icon/IconSuccessInverse';
import IconComplete from 'terra-icon/lib/icon/IconComplete';
import IconDeviceCheck from 'terra-icon/lib/icon/IconDeviceCheck';
import IconCommit from 'terra-icon/lib/icon/IconCommit';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import IconPaperFolded from 'terra-icon/lib/icon/IconPaperFolded';

const bareMinimum = [{
  iconSvg: <IconComplete/>,
  description: 'white check mark in solid green circle',
  importNames: ['IconAvailable'],
}]

const twoBareMinimums = [
  {
    iconSvg: <IconComplete/>,
    description: 'solid green circle containing a white check mark',
    importNames: ['IconAvailable'],
  },
  {
    iconSvg: <IconComplete/>,
    description: 'white check mark in solid green circle',
    importNames: ['IconAvailable'],
  },
]

const all = [
  {
    iconSvg: <IconSuccessInverse/>,
    description: 'transparent check mark in solid white circle',
    meaning: 'completed, met, available, successful, yes, positive',
    isAction: false,
    isStatus: true,
    isToggle: false,
    isInteraction: false,
    isDecoration: false,
    labelRequired: false,
    isBidi: false,
    sets: ['Status'],
    importNames: ['IconSuccessInverse'],
    themableElements: '',
    searchTerms: 'transparent check mark solid white circle completed met available successful yes positive status iconsuccessinverse success checkmark static',
    hfFeedback: '',
    needsDarkBackground: true,
  },
  {
    iconSvg: <IconComplete/>,
    description: 'white check mark in solid green circle',
    meaning: 'completed, met, available, successful, yes, positive',
    isAction: false,
    isStatus: true,
    isToggle: false,
    isInteraction: false,
    isDecoration: false,
    labelRequired: false,
    isBidi: false,
    sets: ['Status'],
    importNames: ['IconAvailable', 'IconSuccess', 'IconComplete'],
    themableElements: '',
    searchTerms: 'white check mark solid green circle completed met available successful yes positive status iconavailable iconsuccess iconcomplete success checkmark static',
    hfFeedback: '',
    needsDarkBackground: false,
  },
  {
    iconSvg: <IconDeviceCheck/>,
    description: 'mobile device with secondary indicator: white check mark in solid green circle',
    meaning: 'device associated',
    isAction: false,
    isStatus: true,
    isToggle: false,
    isInteraction: false,
    isDecoration: false,
    labelRequired: false,
    isBidi: false,
    sets: ['Device Pairing'],
    importNames: ['IconDeviceCheck'],
    themableElements: 'device frame',
    searchTerms: 'mobile device secondary indicator white check mark solid green circle associated status icondevicecheck pairing frame compound mobile cell smart phone checkmark smartphone pairing pair paired connected connect static',
    hfFeedback: '',
    needsDarkBackground: false,
  },
  {
    iconSvg: <IconCommit/>,
    description: 'check mark',
    meaning: 'selected, commit',
    isAction: false,
    isStatus: false,
    isToggle: true,
    isInteraction: false,
    isDecoration: false,
    labelRequired: false,
    isBidi: false,
    sets: ['General Use'],
    importNames: ['IconCommit', 'IconCheckmark'],
    themableElements: 'all',
    searchTerms: 'check mark selected commit toggle general use iconcommit iconcheckmark themable',
    hfFeedback: '',
  },
  {
    iconSvg: <IconTrash/>,
    description: 'trash can with lid',
    meaning: 'send items to trash',
    isAction: true,
    isStatus: false,
    isToggle: false,
    isInteraction: false,
    isDecoration: false,
    labelRequired: false,
    isBidi: false,
    sets: ['General Use'],
    importNames: ['IconTrash'],
    themableElements: 'all',
    searchTerms: 'trash can lid send items action general use icontrash themable garbage refuse waste delete deleted',
    hfFeedback: '',
  },
  {
    iconSvg: <IconPaperFolded/>,
    description: 'single sheet of paper with top right corner folded down',
    meaning: 'document',
    isAction: false,
    isStatus: false,
    isToggle: false,
    isInteraction: false,
    isDecoration: false,
    labelRequired: false,
    isBidi: false,
    sets: ['General Use'],
    importNames: ['IconPaperFolded'],
    themableElements: 'all',
    searchTerms: 'single sheet paper top right corner folded down document general use iconpaperfolded themable',
    hfFeedback: '',
  },
]

export {
  bareMinimum,
  twoBareMinimums,
}
