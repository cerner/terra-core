import React from 'react';
import classNames from 'classnames/bind';
import {
  IconAbnormal,
  IconAbnormalLowLight,
  IconAdd,
  IconAddPerson,
  IconAlert,
  IconAlertLowLight,
  IconAllergy,
  IconAnalytics,
  IconAnnouncement,
  IconArchive,
  IconAttachment,
  IconAudio,
  IconAutoText,
  IconAvailable,
  IconAway,
  IconBedAssigned,
  IconBedAssignedLowLight,
  IconBedRequested,
  IconBluetooth,
  IconBluetoothSlash,
  IconBookmark,
  IconBriefcase,
  IconBrokenImage,
  IconBrokenLinkUnlink,
  IconBusy,
  IconCalculator,
  IconCalendar,
  IconCamera,
  IconCancel,
  IconCaretDown,
  IconCaretLeft,
  IconCaretRight,
  IconCaretUp,
  IconCatalogueNumber,
  IconCaution,
  IconChecklist,
  IconCheckmark,
  IconChevron,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCircleLinesSymbol,
  IconCircleSymbol,
  IconCircleSymbolLight,
  IconClear,
  IconClipboard,
  IconClock,
  IconClose,
  IconCollapseRow,
  IconComment,
  IconCommit,
  IconComplete,
  IconCompose,
  IconConfidential,
  IconConsultInstructionsForUse,
  IconCritical,
  IconCriticalInverse,
  IconCriticalInverseLowLight,
  IconCriticalLowLight,
  IconDateOfManufacture,
  IconDevice,
  IconDeviceAlert,
  IconDeviceAlertLowLight,
  IconDeviceCheck,
  IconDeviceCheckLowLight,
  IconDiamond,
  IconDiamondLowLight,
  IconDiamondSymbol,
  IconDiamondSymbolLight,
  IconDischargeComingDue,
  IconDischargeComingDueLowLight,
  IconDischargeComplete,
  IconDischargeCompleteLowLight,
  IconDischargeOverDue,
  IconDischargeOverDueLowLight,
  IconDoNotDisturb,
  IconDocumentPlus,
  IconDocuments,
  IconDoorOpen,
  IconDoubleChevronLeft,
  IconDoubleChevronRight,
  IconDown,
  IconDownload,
  IconDrugDrug,
  IconDrugDrugLowLight,
  IconDue,
  IconDueSoon,
  IconDueSoonLowLight,
  IconEcRep,
  IconEdit,
  IconEllipses,
  IconEnvelope,
  IconEnvelopeFill,
  IconError,
  IconErrorDark,
  IconErrorLowLight,
  IconExclamation,
  IconExpandLess,
  IconExpandMore,
  IconExpandRow,
  IconExtensions,
  IconExternalLink,
  IconFeatured,
  IconFeaturedOff,
  IconFeaturedOutline,
  IconFeaturedOutlineYellow,
  IconFirst,
  IconFitHeight,
  IconFitScale,
  IconFitWidth,
  IconFlag,
  IconFlipHorizontal,
  IconFlipVertical,
  IconFlowsheet,
  IconFolder,
  IconForward,
  IconFunnel,
  IconGapChecking,
  IconGlasses,
  IconGroup,
  IconHalfRating,
  IconHazardLow,
  IconHelp,
  IconHelpInverse,
  IconHelpInverseLowLight,
  IconHelpLowLight,
  IconHelpStatic,
  IconHelpThemeable,
  IconHide,
  IconHigh,
  IconHighInverse,
  IconHighInverseLowLight,
  IconHighLowLight,
  IconHighPriority,
  IconHold,
  IconHospital,
  IconHouse,
  IconIPass,
  IconImage,
  IconImplant,
  IconIncomingCall,
  IconIncomplete,
  IconIncompleteInverse,
  IconIncompleteInverseLowLight,
  IconInformation,
  IconInformationInverse,
  IconInformationInverseLowLight,
  IconInformationLowLight,
  IconInformationStatic,
  IconInformationThemeable,
  IconItalicI,
  IconKeyboard,
  IconKnurling,
  IconLast,
  IconLeft,
  IconLeftPane,
  IconLightbulb,
  IconLink,
  IconList,
  IconLocationPin,
  IconLookback,
  IconLow,
  IconLowLowLight,
  IconLowRisk,
  IconLowRiskLowLight,
  IconManufacturer,
  IconMax,
  IconMaximize,
  IconMediaFastForward,
  IconMediaPause,
  IconMediaPlay,
  IconMediaRecord,
  IconMediaRewind,
  IconMediaStop,
  IconMedicationTablet,
  IconMedicationTabletOutline,
  IconMedicationTabletHalf,
  IconMedicationTabletHalfOutline,
  IconMedicationTabletQuarter,
  IconMedicationTabletQuarterOutline,
  IconMenu,
  IconMerge,
  IconMicrophone,
  IconMicrophoneDisabled,
  IconMin,
  IconMinimize,
  IconMinus,
  IconMissedCall,
  IconModerate,
  IconModerateLowLight,
  IconModified,
  IconMultipleResultsCorner,
  IconMultipleResultsCritical,
  IconMultipleResultsNormal,
  IconMultipleResultsNotNormal,
  IconNavStackUp,
  IconNext,
  IconNoResults,
  IconNoRisk,
  IconNoRiskLowLight,
  IconNoSignal,
  IconNotMet,
  IconNotification,
  IconNotificationDisabled,
  IconNotificationOff,
  IconOutOfNetwork,
  IconOutgoingCall,
  IconOverDue,
  IconOverDueLowLight,
  IconPadlock,
  IconPager,
  IconPanelLeft,
  IconPanelRight,
  IconPaperFolded,
  IconPaperPencil,
  IconPartiallyMet,
  IconPatientSearch,
  IconPending,
  IconPerson,
  IconPersonConnection,
  IconPersonDoor,
  IconPersonHospital,
  IconPersonnelPerson,
  IconPharmacyReject,
  IconPharmacyRejectLowLight,
  IconPharmacyReview,
  IconPharmacyVerification,
  IconPhone,
  IconPhoneDown,
  IconPill,
  IconPinDiagonal,
  IconPinDown,
  IconPlusSymbol,
  IconPlusSymbolLight,
  IconPrevious,
  IconPrinter,
  IconProjects,
  IconProtocol,
  IconProvider,
  IconQuestion,
  IconQuestionOutline,
  IconRectangleSymbol,
  IconRectangleSymbolLight,
  IconRecurringEvent,
  IconRedo,
  IconRefresh,
  IconRefusedSlot,
  IconReload,
  IconReply,
  IconReplyAll,
  IconRequired,
  IconRight,
  IconRollup,
  IconRotateLeft,
  IconRotateRight,
  IconSave,
  IconScheduled,
  IconScheduledLowLight,
  IconScratchPad,
  IconSearch,
  IconSecondaryProvider,
  IconSend,
  IconSeparate,
  IconSettings,
  IconSharedSchedules,
  IconSimulation,
  IconSortAscending,
  IconSortDescending,
  IconSpinner,
  IconSquareSymbol,
  IconSquareSymbolLight,
  IconStartPresenting,
  IconStatusPositive,
  IconStatusPositiveLowLight,
  IconStatusPositiveWhite,
  IconStatusPositiveWhiteLowLight,
  IconStopPresenting,
  IconSuccess,
  IconSuccessInverse,
  IconSuccessInverseLowLight,
  IconSuccessLowLight,
  IconSwap,
  IconTable,
  IconTag,
  IconTeardropSymbol,
  IconTeardropSymbolLight,
  IconTeardropUpSymbol,
  IconTeardropUpSymbolLight,
  IconThinDiamondSymbol,
  IconThinDiamondSymbolLight,
  IconTile,
  IconTrash,
  IconTreemap,
  IconTrendingDown,
  IconTrendingUp,
  IconTriangleDownSymbol,
  IconTriangleDownSymbolLight,
  IconTriangleSymbol,
  IconTriangleSymbolLight,
  IconTrophy,
  IconUnavailable,
  IconUndo,
  IconUnexpected,
  IconUnexpectedLowLight,
  IconUnknown,
  IconUnlock,
  IconUnread,
  IconUnspecified,
  IconUp,
  IconUpload,
  IconUsers,
  IconVideoCamera,
  IconVideoCameraDisabled,
  IconVisualization,
  IconVolumeSetDecrease,
  IconVolumeSetDefault,
  IconVolumeSetIncrease,
  IconVolumeSetMute,
  IconWarning,
  IconWarningLowLight,
  IconWaveform,
  IconWifi,
  IconWifiSlash,
  IconXSymbol,
  IconZoomIn,
  IconZoomOut,
} from 'terra-icon';
import styles from './IconAll.module.scss';

const cx = classNames.bind(styles);

const IconAll = () => (
  <div>
    <IconAbnormal className={cx(['icon'])} />
    <IconAbnormalLowLight className={cx(['icon'])} />
    <IconAdd className={cx(['icon'])} />
    <IconAddPerson className={cx(['icon'])} />
    <IconAlert className={cx(['icon'])} />
    <IconAlertLowLight className={cx(['icon'])} />
    <IconAllergy className={cx(['icon'])} />
    <IconAnalytics className={cx(['icon'])} />
    <IconAnnouncement className={cx(['icon'])} />
    <IconArchive className={cx(['icon'])} />
    <IconAttachment className={cx(['icon'])} />
    <IconAudio className={cx(['icon'])} />
    <IconAutoText className={cx(['icon'])} />
    <IconAvailable className={cx(['icon'])} />
    <IconAway className={cx(['icon'])} />
    <IconBedAssigned className={cx(['icon'])} />
    <IconBedAssignedLowLight className={cx(['icon'])} />
    <IconBedRequested className={cx(['icon'])} />
    <IconBluetooth className={cx(['icon'])} />
    <IconBluetoothSlash className={cx(['icon'])} />
    <IconBookmark className={cx(['icon'])} />
    <IconBriefcase className={cx(['icon'])} />
    <IconBrokenImage className={cx(['icon'])} />
    <IconBrokenLinkUnlink className={cx(['icon'])} />
    <IconBusy className={cx(['icon'])} />
    <IconCalculator className={cx(['icon'])} />
    <IconCalendar className={cx(['icon'])} />
    <IconCamera className={cx(['icon'])} />
    <IconCancel className={cx(['icon'])} />
    <IconCaretDown className={cx(['icon'])} />
    <IconCaretLeft className={cx(['icon'])} />
    <IconCaretRight className={cx(['icon'])} />
    <IconCaretUp className={cx(['icon'])} />
    <IconCatalogueNumber className={cx(['icon'])} />
    <IconCaution className={cx(['icon'])} />
    <IconChecklist className={cx(['icon'])} />
    <IconCheckmark className={cx(['icon'])} />
    <IconChevron className={cx(['icon'])} />
    <IconChevronDown className={cx(['icon'])} />
    <IconChevronLeft className={cx(['icon'])} />
    <IconChevronRight className={cx(['icon'])} />
    <IconChevronUp className={cx(['icon'])} />
    <IconCircleLinesSymbol className={cx(['icon'])} />
    <IconCircleSymbol className={cx(['icon'])} />
    <IconCircleSymbolLight className={cx(['icon'])} />
    <IconClear className={cx(['icon'])} />
    <IconClipboard className={cx(['icon'])} />
    <IconClock className={cx(['icon'])} />
    <IconClose className={cx(['icon'])} />
    <IconCollapseRow className={cx(['icon'])} />
    <IconComment className={cx(['icon'])} />
    <IconCommit className={cx(['icon'])} />
    <IconComplete className={cx(['icon'])} />
    <IconCompose className={cx(['icon'])} />
    <IconConfidential className={cx(['icon'])} />
    <IconConsultInstructionsForUse className={cx(['icon'])} />
    <IconCritical className={cx(['icon'])} />
    <IconCriticalInverse className={cx(['icon', 'icon-inverse'])} />
    <IconCriticalInverseLowLight className={cx(['icon'])} />
    <IconCriticalLowLight className={cx(['icon'])} />
    <IconDateOfManufacture className={cx(['icon'])} />
    <IconDevice className={cx(['icon'])} />
    <IconDeviceAlert className={cx(['icon'])} />
    <IconDeviceAlertLowLight className={cx(['icon'])} />
    <IconDeviceCheck className={cx(['icon'])} />
    <IconDeviceCheckLowLight className={cx(['icon'])} />
    <IconDiamond className={cx(['icon'])} />
    <IconDiamondLowLight className={cx(['icon'])} />
    <IconDiamondSymbol className={cx(['icon'])} />
    <IconDiamondSymbolLight className={cx(['icon'])} />
    <IconDischargeComingDue className={cx(['icon'])} />
    <IconDischargeComingDueLowLight className={cx(['icon'])} />
    <IconDischargeComplete className={cx(['icon'])} />
    <IconDischargeCompleteLowLight className={cx(['icon'])} />
    <IconDischargeOverDue className={cx(['icon'])} />
    <IconDischargeOverDueLowLight className={cx(['icon'])} />
    <IconDocumentPlus className={cx(['icon'])} />
    <IconDocuments className={cx(['icon'])} />
    <IconDoNotDisturb className={cx(['icon'])} />
    <IconDoorOpen className={cx(['icon'])} />
    <IconDoubleChevronLeft className={cx(['icon'])} />
    <IconDoubleChevronRight className={cx(['icon'])} />
    <IconDown className={cx(['icon'])} />
    <IconDownload className={cx(['icon'])} />
    <IconDrugDrug className={cx(['icon'])} />
    <IconDrugDrugLowLight className={cx(['icon'])} />
    <IconDue className={cx(['icon'])} />
    <IconDueSoon className={cx(['icon'])} />
    <IconDueSoonLowLight className={cx(['icon'])} />
    <IconEcRep className={cx(['icon'])} />
    <IconEdit className={cx(['icon'])} />
    <IconEllipses className={cx(['icon'])} />
    <IconEnvelope className={cx(['icon'])} />
    <IconEnvelopeFill className={cx(['icon'])} />
    <IconError className={cx(['icon'])} />
    <IconErrorDark className={cx(['icon'])} />
    <IconErrorLowLight className={cx(['icon'])} />
    <IconExclamation className={cx(['icon'])} />
    <IconExpandLess className={cx(['icon'])} />
    <IconExpandMore className={cx(['icon'])} />
    <IconExpandRow className={cx(['icon'])} />
    <IconExtensions className={cx(['icon'])} />
    <IconExternalLink className={cx(['icon'])} />
    <IconFeatured className={cx(['icon'])} />
    <IconFeaturedOff className={cx(['icon'])} />
    <IconFeaturedOutline className={cx(['icon'])} />
    <IconFeaturedOutlineYellow className={cx(['icon'])} />
    <IconFirst className={cx(['icon'])} />
    <IconFitHeight className={cx(['icon'])} />
    <IconFitScale className={cx(['icon'])} />
    <IconFitWidth className={cx(['icon'])} />
    <IconFlag className={cx(['icon'])} />
    <IconFlipHorizontal className={cx(['icon'])} />
    <IconFlipVertical className={cx(['icon'])} />
    <IconFlowsheet className={cx(['icon'])} />
    <IconFolder className={cx(['icon'])} />
    <IconForward className={cx(['icon'])} />
    <IconFunnel className={cx(['icon'])} />
    <IconGapChecking className={cx(['icon'])} />
    <IconGlasses className={cx(['icon'])} />
    <IconGroup className={cx(['icon'])} />
    <IconHalfRating className={cx(['icon'])} />
    <IconHazardLow className={cx(['icon'])} />
    <IconHelp className={cx(['icon'])} />
    <IconHelpInverse className={cx(['icon', 'icon-inverse'])} />
    <IconHelpInverseLowLight className={cx(['icon'])} />
    <IconHelpLowLight className={cx(['icon'])} />
    <IconHelpStatic className={cx(['icon'])} />
    <IconHelpThemeable className={cx(['icon'])} />
    <IconHide className={cx(['icon'])} />
    <IconHigh className={cx(['icon'])} />
    <IconHighInverse className={cx(['icon', 'icon-inverse'])} />
    <IconHighInverseLowLight className={cx(['icon'])} />
    <IconHighLowLight className={cx(['icon'])} />
    <IconHighPriority className={cx(['icon'])} />
    <IconHold className={cx(['icon'])} />
    <IconHospital className={cx(['icon'])} />
    <IconHouse className={cx(['icon'])} />
    <IconImage className={cx(['icon'])} />
    <IconImplant className={cx(['icon'])} />
    <IconIncomingCall className={cx(['icon'])} />
    <IconIncomplete className={cx(['icon'])} />
    <IconIncompleteInverse className={cx(['icon', 'icon-inverse'])} />
    <IconIncompleteInverseLowLight className={cx(['icon'])} />
    <IconInformation className={cx(['icon'])} />
    <IconInformationInverse className={cx(['icon', 'icon-inverse'])} />
    <IconInformationInverseLowLight className={cx(['icon'])} />
    <IconInformationLowLight className={cx(['icon'])} />
    <IconInformationStatic className={cx(['icon'])} />
    <IconInformationThemeable className={cx(['icon'])} />
    <IconIPass className={cx(['icon'])} />
    <IconItalicI className={cx(['icon'])} />
    <IconKeyboard className={cx(['icon'])} />
    <IconKnurling className={cx(['icon'])} />
    <IconLast className={cx(['icon'])} />
    <IconLeft className={cx(['icon'])} />
    <IconLeftPane className={cx(['icon'])} />
    <IconLightbulb className={cx(['icon'])} />
    <IconLink className={cx(['icon'])} />
    <IconList className={cx(['icon'])} />
    <IconLocationPin className={cx(['icon'])} />
    <IconLookback className={cx(['icon'])} />
    <IconLow className={cx(['icon'])} />
    <IconLowLowLight className={cx(['icon'])} />
    <IconLowRisk className={cx(['icon'])} />
    <IconLowRiskLowLight className={cx(['icon'])} />
    <IconManufacturer className={cx(['icon'])} />
    <IconMax className={cx(['icon'])} />
    <IconMaximize className={cx(['icon'])} />
    <IconMediaFastForward className={cx(['icon'])} />
    <IconMediaPause className={cx(['icon'])} />
    <IconMediaPlay className={cx(['icon'])} />
    <IconMediaRecord className={cx(['icon'])} />
    <IconMediaRewind className={cx(['icon'])} />
    <IconMediaStop className={cx(['icon'])} />
    <IconMedicationTablet className={cx(['icon'])} />
    <IconMedicationTabletOutline className={cx(['icon'])} />
    <IconMedicationTabletHalf className={cx(['icon'])} />
    <IconMedicationTabletHalfOutline className={cx(['icon'])} />
    <IconMedicationTabletQuarter className={cx(['icon'])} />
    <IconMedicationTabletQuarterOutline className={cx(['icon'])} />
    <IconMenu className={cx(['icon'])} />
    <IconMerge className={cx(['icon'])} />
    <IconMicrophone className={cx(['icon'])} />
    <IconMicrophoneDisabled className={cx(['icon'])} />
    <IconMin className={cx(['icon'])} />
    <IconMinimize className={cx(['icon'])} />
    <IconMinus className={cx(['icon'])} />
    <IconMissedCall className={cx(['icon'])} />
    <IconModerate className={cx(['icon'])} />
    <IconModerateLowLight className={cx(['icon'])} />
    <IconModified className={cx(['icon'])} />
    <IconMultipleResultsCorner className={cx(['icon'])} />
    <IconMultipleResultsNormal className={cx(['icon'])} />
    <IconMultipleResultsNotNormal className={cx(['icon'])} />
    <IconMultipleResultsCritical className={cx(['icon'])} />
    <IconNavStackUp className={cx(['icon'])} />
    <IconNext className={cx(['icon'])} />
    <IconNoRisk className={cx(['icon'])} />
    <IconNoResults className={cx(['icon'])} />
    <IconNoRiskLowLight className={cx(['icon'])} />
    <IconNoSignal className={cx(['icon'])} />
    <IconNotification className={cx(['icon'])} />
    <IconNotificationDisabled className={cx(['icon'])} />
    <IconNotificationOff className={cx(['icon'])} />
    <IconNotMet className={cx(['icon'])} />
    <IconOutgoingCall className={cx(['icon'])} />
    <IconOutOfNetwork className={cx(['icon'])} />
    <IconOverDue className={cx(['icon'])} />
    <IconOverDueLowLight className={cx(['icon'])} />
    <IconPadlock className={cx(['icon'])} />
    <IconPager className={cx(['icon'])} />
    <IconPanelLeft className={cx(['icon'])} />
    <IconPanelRight className={cx(['icon'])} />
    <IconPaperFolded className={cx(['icon'])} />
    <IconPaperPencil className={cx(['icon'])} />
    <IconPartiallyMet className={cx(['icon'])} />
    <IconPatientSearch className={cx(['icon'])} />
    <IconPending className={cx(['icon'])} />
    <IconPerson className={cx(['icon'])} />
    <IconPersonConnection className={cx(['icon'])} />
    <IconPersonDoor className={cx(['icon'])} />
    <IconPersonHospital className={cx(['icon'])} />
    <IconPersonnelPerson className={cx(['icon'])} />
    <IconPharmacyReject className={cx(['icon'])} />
    <IconPharmacyRejectLowLight className={cx(['icon'])} />
    <IconPharmacyReview className={cx(['icon'])} />
    <IconPharmacyVerification className={cx(['icon'])} />
    <IconPhone className={cx(['icon'])} />
    <IconPhoneDown className={cx(['icon'])} />
    <IconPill className={cx(['icon'])} />
    <IconPinDiagonal className={cx(['icon'])} />
    <IconPinDown className={cx(['icon'])} />
    <IconPlusSymbol className={cx(['icon'])} />
    <IconPlusSymbolLight className={cx(['icon'])} />
    <IconPrevious className={cx(['icon'])} />
    <IconPrinter className={cx(['icon'])} />
    <IconProjects className={cx(['icon'])} />
    <IconProtocol className={cx(['icon'])} />
    <IconProvider className={cx(['icon'])} />
    <IconQuestion className={cx(['icon'])} />
    <IconQuestionOutline className={cx(['icon'])} />
    <IconRectangleSymbol className={cx(['icon'])} />
    <IconRectangleSymbolLight className={cx(['icon'])} />
    <IconRecurringEvent className={cx(['icon'])} />
    <IconRedo className={cx(['icon'])} />
    <IconRefresh className={cx(['icon'])} />
    <IconRefusedSlot className={cx(['icon'])} />
    <IconReload className={cx(['icon'])} />
    <IconReply className={cx(['icon'])} />
    <IconReplyAll className={cx(['icon'])} />
    <IconRequired className={cx(['icon'])} />
    <IconRight className={cx(['icon'])} />
    <IconRollup className={cx(['icon'])} />
    <IconRotateLeft className={cx(['icon'])} />
    <IconRotateRight className={cx(['icon'])} />
    <IconSave className={cx(['icon'])} />
    <IconScheduled className={cx(['icon'])} />
    <IconScheduledLowLight className={cx(['icon'])} />
    <IconScratchPad className={cx(['icon'])} />
    <IconSearch className={cx(['icon'])} />
    <IconSecondaryProvider className={cx(['icon'])} />
    <IconSend className={cx(['icon'])} />
    <IconSeparate className={cx(['icon'])} />
    <IconSettings className={cx(['icon'])} />
    <IconSharedSchedules className={cx(['icon'])} />
    <IconSimulation className={cx(['icon'])} />
    <IconSortAscending className={cx(['icon'])} />
    <IconSortDescending className={cx(['icon'])} />
    <IconSpinner className={cx(['icon'])} isSpin={false} />
    <IconSquareSymbol className={cx(['icon'])} />
    <IconSquareSymbolLight className={cx(['icon'])} />
    <IconStatusPositive className={cx(['icon'])} />
    <IconStatusPositiveWhite className={cx(['icon'])} />
    <IconStatusPositiveLowLight className={cx(['icon'])} />
    <IconStatusPositiveWhiteLowLight className={cx(['icon'])} />
    <IconStartPresenting className={cx(['icon'])} />
    <IconStopPresenting className={cx(['icon'])} />
    <IconSuccess className={cx(['icon'])} />
    <IconSuccessInverse className={cx(['icon', 'icon-inverse'])} />
    <IconSuccessInverseLowLight className={cx(['icon'])} />
    <IconSuccessLowLight className={cx(['icon'])} />
    <IconSwap className={cx(['icon'])} />
    <IconTable className={cx(['icon'])} />
    <IconTag className={cx(['icon'])} />
    <IconTeardropSymbol className={cx(['icon'])} />
    <IconTeardropSymbolLight className={cx(['icon'])} />
    <IconTeardropUpSymbol className={cx(['icon'])} />
    <IconTeardropUpSymbolLight className={cx(['icon'])} />
    <IconThinDiamondSymbol className={cx(['icon'])} />
    <IconThinDiamondSymbolLight className={cx(['icon'])} />
    <IconTile className={cx(['icon'])} />
    <IconTrash className={cx(['icon'])} />
    <IconTreemap className={cx(['icon'])} />
    <IconTrendingDown className={cx(['icon'])} />
    <IconTrendingUp className={cx(['icon'])} />
    <IconTriangleDownSymbol className={cx(['icon'])} />
    <IconTriangleDownSymbolLight className={cx(['icon'])} />
    <IconTriangleSymbol className={cx(['icon'])} />
    <IconTriangleSymbolLight className={cx(['icon'])} />
    <IconTrophy className={cx(['icon'])} />
    <IconUnavailable className={cx(['icon'])} />
    <IconUndo className={cx(['icon'])} />
    <IconUnexpected className={cx(['icon'])} />
    <IconUnexpectedLowLight className={cx(['icon'])} />
    <IconUnknown className={cx(['icon'])} />
    <IconUnlock className={cx(['icon'])} />
    <IconUnread className={cx(['icon'])} />
    <IconUnspecified className={cx(['icon'])} />
    <IconUp className={cx(['icon'])} />
    <IconUpload className={cx(['icon'])} />
    <IconUsers className={cx(['icon'])} />
    <IconVideoCamera className={cx(['icon'])} />
    <IconVideoCameraDisabled className={cx(['icon'])} />
    <IconVisualization className={cx(['icon'])} />
    <IconVolumeSetDefault className={cx(['icon'])} />
    <IconVolumeSetMute className={cx(['icon'])} />
    <IconVolumeSetIncrease className={cx(['icon'])} />
    <IconVolumeSetDecrease className={cx(['icon'])} />
    <IconWarning className={cx(['icon'])} />
    <IconWarningLowLight className={cx(['icon'])} />
    <IconWaveform className={cx(['icon'])} />
    <IconWifi className={cx(['icon'])} />
    <IconWifiSlash className={cx(['icon'])} />
    <IconXSymbol className={cx(['icon'])} />
    <IconZoomIn className={cx(['icon'])} />
    <IconZoomOut className={cx(['icon'])} />
  </div>
);

export default IconAll;
