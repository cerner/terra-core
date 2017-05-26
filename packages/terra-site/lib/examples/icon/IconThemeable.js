'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

var _IconAdd = require('terra-icon/lib/icon/IconAdd');

var _IconAdd2 = _interopRequireDefault(_IconAdd);

var _IconSearch = require('terra-icon/lib/icon/IconSearch');

var _IconSearch2 = _interopRequireDefault(_IconSearch);

var _IconCommit = require('terra-icon/lib/icon/IconCommit');

var _IconCommit2 = _interopRequireDefault(_IconCommit);

var _IconCheckmark = require('terra-icon/lib/icon/IconCheckmark');

var _IconCheckmark2 = _interopRequireDefault(_IconCheckmark);

var _IconTrash = require('terra-icon/lib/icon/IconTrash');

var _IconTrash2 = _interopRequireDefault(_IconTrash);

var _IconPaperFolded = require('terra-icon/lib/icon/IconPaperFolded');

var _IconPaperFolded2 = _interopRequireDefault(_IconPaperFolded);

var _IconPrinter = require('terra-icon/lib/icon/IconPrinter');

var _IconPrinter2 = _interopRequireDefault(_IconPrinter);

var _IconComment = require('terra-icon/lib/icon/IconComment');

var _IconComment2 = _interopRequireDefault(_IconComment);

var _IconBookmark = require('terra-icon/lib/icon/IconBookmark');

var _IconBookmark2 = _interopRequireDefault(_IconBookmark);

var _IconModified = require('terra-icon/lib/icon/IconModified');

var _IconModified2 = _interopRequireDefault(_IconModified);

var _IconFirst = require('terra-icon/lib/icon/IconFirst');

var _IconFirst2 = _interopRequireDefault(_IconFirst);

var _IconFolder = require('terra-icon/lib/icon/IconFolder');

var _IconFolder2 = _interopRequireDefault(_IconFolder);

var _IconAttachment = require('terra-icon/lib/icon/IconAttachment');

var _IconAttachment2 = _interopRequireDefault(_IconAttachment);

var _IconSend = require('terra-icon/lib/icon/IconSend');

var _IconSend2 = _interopRequireDefault(_IconSend);

var _IconPill = require('terra-icon/lib/icon/IconPill');

var _IconPill2 = _interopRequireDefault(_IconPill);

var _IconVisualization = require('terra-icon/lib/icon/IconVisualization');

var _IconVisualization2 = _interopRequireDefault(_IconVisualization);

var _IconLightbulb = require('terra-icon/lib/icon/IconLightbulb');

var _IconLightbulb2 = _interopRequireDefault(_IconLightbulb);

var _IconForward = require('terra-icon/lib/icon/IconForward');

var _IconForward2 = _interopRequireDefault(_IconForward);

var _IconProjects = require('terra-icon/lib/icon/IconProjects');

var _IconProjects2 = _interopRequireDefault(_IconProjects);

var _IconReplyAll = require('terra-icon/lib/icon/IconReplyAll');

var _IconReplyAll2 = _interopRequireDefault(_IconReplyAll);

var _IconFlag = require('terra-icon/lib/icon/IconFlag');

var _IconFlag2 = _interopRequireDefault(_IconFlag);

var _IconCalculator = require('terra-icon/lib/icon/IconCalculator');

var _IconCalculator2 = _interopRequireDefault(_IconCalculator);

var _IconCaretRight = require('terra-icon/lib/icon/IconCaretRight');

var _IconCaretRight2 = _interopRequireDefault(_IconCaretRight);

var _IconCaretLeft = require('terra-icon/lib/icon/IconCaretLeft');

var _IconCaretLeft2 = _interopRequireDefault(_IconCaretLeft);

var _IconCaretUp = require('terra-icon/lib/icon/IconCaretUp');

var _IconCaretUp2 = _interopRequireDefault(_IconCaretUp);

var _IconCaretDown = require('terra-icon/lib/icon/IconCaretDown');

var _IconCaretDown2 = _interopRequireDefault(_IconCaretDown);

var _IconTrophy = require('terra-icon/lib/icon/IconTrophy');

var _IconTrophy2 = _interopRequireDefault(_IconTrophy);

var _IconChevronLeft = require('terra-icon/lib/icon/IconChevronLeft');

var _IconChevronLeft2 = _interopRequireDefault(_IconChevronLeft);

var _IconPrevious = require('terra-icon/lib/icon/IconPrevious');

var _IconPrevious2 = _interopRequireDefault(_IconPrevious);

var _IconChevronRight = require('terra-icon/lib/icon/IconChevronRight');

var _IconChevronRight2 = _interopRequireDefault(_IconChevronRight);

var _IconNext = require('terra-icon/lib/icon/IconNext');

var _IconNext2 = _interopRequireDefault(_IconNext);

var _IconChevronUp = require('terra-icon/lib/icon/IconChevronUp');

var _IconChevronUp2 = _interopRequireDefault(_IconChevronUp);

var _IconExpandLess = require('terra-icon/lib/icon/IconExpandLess');

var _IconExpandLess2 = _interopRequireDefault(_IconExpandLess);

var _IconChevron = require('terra-icon/lib/icon/IconChevron');

var _IconChevron2 = _interopRequireDefault(_IconChevron);

var _IconChevronDown = require('terra-icon/lib/icon/IconChevronDown');

var _IconChevronDown2 = _interopRequireDefault(_IconChevronDown);

var _IconExpandMore = require('terra-icon/lib/icon/IconExpandMore');

var _IconExpandMore2 = _interopRequireDefault(_IconExpandMore);

var _IconClock = require('terra-icon/lib/icon/IconClock');

var _IconClock2 = _interopRequireDefault(_IconClock);

var _IconAway = require('terra-icon/lib/icon/IconAway');

var _IconAway2 = _interopRequireDefault(_IconAway);

var _IconSortAscending = require('terra-icon/lib/icon/IconSortAscending');

var _IconSortAscending2 = _interopRequireDefault(_IconSortAscending);

var _IconSortDescending = require('terra-icon/lib/icon/IconSortDescending');

var _IconSortDescending2 = _interopRequireDefault(_IconSortDescending);

var _IconTreemap = require('terra-icon/lib/icon/IconTreemap');

var _IconTreemap2 = _interopRequireDefault(_IconTreemap);

var _IconGlasses = require('terra-icon/lib/icon/IconGlasses');

var _IconGlasses2 = _interopRequireDefault(_IconGlasses);

var _IconImage = require('terra-icon/lib/icon/IconImage');

var _IconImage2 = _interopRequireDefault(_IconImage);

var _IconDoorOpen = require('terra-icon/lib/icon/IconDoorOpen');

var _IconDoorOpen2 = _interopRequireDefault(_IconDoorOpen);

var _IconEllipses = require('terra-icon/lib/icon/IconEllipses');

var _IconEllipses2 = _interopRequireDefault(_IconEllipses);

var _IconExclamation = require('terra-icon/lib/icon/IconExclamation');

var _IconExclamation2 = _interopRequireDefault(_IconExclamation);

var _IconItalicI = require('terra-icon/lib/icon/IconItalicI');

var _IconItalicI2 = _interopRequireDefault(_IconItalicI);

var _IconMinus = require('terra-icon/lib/icon/IconMinus');

var _IconMinus2 = _interopRequireDefault(_IconMinus);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

var _IconClear = require('terra-icon/lib/icon/IconClear');

var _IconClear2 = _interopRequireDefault(_IconClear);

var _IconNotMet = require('terra-icon/lib/icon/IconNotMet');

var _IconNotMet2 = _interopRequireDefault(_IconNotMet);

var _IconIncomplete = require('terra-icon/lib/icon/IconIncomplete');

var _IconIncomplete2 = _interopRequireDefault(_IconIncomplete);

var _IconPerson = require('terra-icon/lib/icon/IconPerson');

var _IconPerson2 = _interopRequireDefault(_IconPerson);

var _IconLeft = require('terra-icon/lib/icon/IconLeft');

var _IconLeft2 = _interopRequireDefault(_IconLeft);

var _IconRight = require('terra-icon/lib/icon/IconRight');

var _IconRight2 = _interopRequireDefault(_IconRight);

var _IconUp = require('terra-icon/lib/icon/IconUp');

var _IconUp2 = _interopRequireDefault(_IconUp);

var _IconDown = require('terra-icon/lib/icon/IconDown');

var _IconDown2 = _interopRequireDefault(_IconDown);

var _IconSettings = require('terra-icon/lib/icon/IconSettings');

var _IconSettings2 = _interopRequireDefault(_IconSettings);

var _IconEdit = require('terra-icon/lib/icon/IconEdit');

var _IconEdit2 = _interopRequireDefault(_IconEdit);

var _IconCalendar = require('terra-icon/lib/icon/IconCalendar');

var _IconCalendar2 = _interopRequireDefault(_IconCalendar);

var _IconLookback = require('terra-icon/lib/icon/IconLookback');

var _IconLookback2 = _interopRequireDefault(_IconLookback);

var _IconRefresh = require('terra-icon/lib/icon/IconRefresh');

var _IconRefresh2 = _interopRequireDefault(_IconRefresh);

var _IconProvider = require('terra-icon/lib/icon/IconProvider');

var _IconProvider2 = _interopRequireDefault(_IconProvider);

var _IconPadlock = require('terra-icon/lib/icon/IconPadlock');

var _IconPadlock2 = _interopRequireDefault(_IconPadlock);

var _IconFeatured = require('terra-icon/lib/icon/IconFeatured');

var _IconFeatured2 = _interopRequireDefault(_IconFeatured);

var _IconFeaturedOutline = require('terra-icon/lib/icon/IconFeaturedOutline');

var _IconFeaturedOutline2 = _interopRequireDefault(_IconFeaturedOutline);

var _IconArchive = require('terra-icon/lib/icon/IconArchive');

var _IconArchive2 = _interopRequireDefault(_IconArchive);

var _IconFunnel = require('terra-icon/lib/icon/IconFunnel');

var _IconFunnel2 = _interopRequireDefault(_IconFunnel);

var _IconDocuments = require('terra-icon/lib/icon/IconDocuments');

var _IconDocuments2 = _interopRequireDefault(_IconDocuments);

var _IconUnknown = require('terra-icon/lib/icon/IconUnknown');

var _IconUnknown2 = _interopRequireDefault(_IconUnknown);

var _IconHouse = require('terra-icon/lib/icon/IconHouse');

var _IconHouse2 = _interopRequireDefault(_IconHouse);

var _IconSave = require('terra-icon/lib/icon/IconSave');

var _IconSave2 = _interopRequireDefault(_IconSave);

var _IconHospital = require('terra-icon/lib/icon/IconHospital');

var _IconHospital2 = _interopRequireDefault(_IconHospital);

var _IconPending = require('terra-icon/lib/icon/IconPending');

var _IconPending2 = _interopRequireDefault(_IconPending);

var _IconAnalytics = require('terra-icon/lib/icon/IconAnalytics');

var _IconAnalytics2 = _interopRequireDefault(_IconAnalytics);

var _IconAnnouncement = require('terra-icon/lib/icon/IconAnnouncement');

var _IconAnnouncement2 = _interopRequireDefault(_IconAnnouncement);

var _IconCamera = require('terra-icon/lib/icon/IconCamera');

var _IconCamera2 = _interopRequireDefault(_IconCamera);

var _IconBriefcase = require('terra-icon/lib/icon/IconBriefcase');

var _IconBriefcase2 = _interopRequireDefault(_IconBriefcase);

var _IconLink = require('terra-icon/lib/icon/IconLink');

var _IconLink2 = _interopRequireDefault(_IconLink);

var _IconList = require('terra-icon/lib/icon/IconList');

var _IconList2 = _interopRequireDefault(_IconList);

var _IconMenu = require('terra-icon/lib/icon/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconChecklist = require('terra-icon/lib/icon/IconChecklist');

var _IconChecklist2 = _interopRequireDefault(_IconChecklist);

var _IconUnlock = require('terra-icon/lib/icon/IconUnlock');

var _IconUnlock2 = _interopRequireDefault(_IconUnlock);

var _IconDue = require('terra-icon/lib/icon/IconDue');

var _IconDue2 = _interopRequireDefault(_IconDue);

var _IconSpinner = require('terra-icon/lib/icon/IconSpinner');

var _IconSpinner2 = _interopRequireDefault(_IconSpinner);

var _IconTile = require('terra-icon/lib/icon/IconTile');

var _IconTile2 = _interopRequireDefault(_IconTile);

var _IconUsers = require('terra-icon/lib/icon/IconUsers');

var _IconUsers2 = _interopRequireDefault(_IconUsers);

var _IconKnurling = require('terra-icon/lib/icon/IconKnurling');

var _IconKnurling2 = _interopRequireDefault(_IconKnurling);

var _IconAddPerson = require('terra-icon/lib/icon/IconAddPerson');

var _IconAddPerson2 = _interopRequireDefault(_IconAddPerson);

var _IconUpload = require('terra-icon/lib/icon/IconUpload');

var _IconUpload2 = _interopRequireDefault(_IconUpload);

var _IconDownload = require('terra-icon/lib/icon/IconDownload');

var _IconDownload2 = _interopRequireDefault(_IconDownload);

var _IconCancel = require('terra-icon/lib/icon/IconCancel');

var _IconCancel2 = _interopRequireDefault(_IconCancel);

var _IconMaximize = require('terra-icon/lib/icon/IconMaximize');

var _IconMaximize2 = _interopRequireDefault(_IconMaximize);

var _IconMinimize = require('terra-icon/lib/icon/IconMinimize');

var _IconMinimize2 = _interopRequireDefault(_IconMinimize);

var _IconReply = require('terra-icon/lib/icon/IconReply');

var _IconReply2 = _interopRequireDefault(_IconReply);

var _IconTable = require('terra-icon/lib/icon/IconTable');

var _IconTable2 = _interopRequireDefault(_IconTable);

var _IconRequired = require('terra-icon/lib/icon/IconRequired');

var _IconRequired2 = _interopRequireDefault(_IconRequired);

var _IconGapChecking = require('terra-icon/lib/icon/IconGapChecking');

var _IconGapChecking2 = _interopRequireDefault(_IconGapChecking);

var _IconPersonHospital = require('terra-icon/lib/icon/IconPersonHospital');

var _IconPersonHospital2 = _interopRequireDefault(_IconPersonHospital);

var _IconPersonnelPerson = require('terra-icon/lib/icon/IconPersonnelPerson');

var _IconPersonnelPerson2 = _interopRequireDefault(_IconPersonnelPerson);

var _IconLeftPane = require('terra-icon/lib/icon/IconLeftPane');

var _IconLeftPane2 = _interopRequireDefault(_IconLeftPane);

var _IconFlowsheet = require('terra-icon/lib/icon/IconFlowsheet');

var _IconFlowsheet2 = _interopRequireDefault(_IconFlowsheet);

var _IconNotification = require('terra-icon/lib/icon/IconNotification');

var _IconNotification2 = _interopRequireDefault(_IconNotification);

var _IconLast = require('terra-icon/lib/icon/IconLast');

var _IconLast2 = _interopRequireDefault(_IconLast);

var _IconDevice = require('terra-icon/lib/icon/IconDevice');

var _IconDevice2 = _interopRequireDefault(_IconDevice);

var _IconPaperPencil = require('terra-icon/lib/icon/IconPaperPencil');

var _IconPaperPencil2 = _interopRequireDefault(_IconPaperPencil);

var _IconClipboard = require('terra-icon/lib/icon/IconClipboard');

var _IconClipboard2 = _interopRequireDefault(_IconClipboard);

var _IconZoomOut = require('terra-icon/lib/icon/IconZoomOut');

var _IconZoomOut2 = _interopRequireDefault(_IconZoomOut);

var _IconZoomIn = require('terra-icon/lib/icon/IconZoomIn');

var _IconZoomIn2 = _interopRequireDefault(_IconZoomIn);

var _IconEnvelope = require('terra-icon/lib/icon/IconEnvelope');

var _IconEnvelope2 = _interopRequireDefault(_IconEnvelope);

var _IconAllergy = require('terra-icon/lib/icon/IconAllergy');

var _IconAllergy2 = _interopRequireDefault(_IconAllergy);

var _IconPhone = require('terra-icon/lib/icon/IconPhone');

var _IconPhone2 = _interopRequireDefault(_IconPhone);

var _IconPanelLeft = require('terra-icon/lib/icon/IconPanelLeft');

var _IconPanelLeft2 = _interopRequireDefault(_IconPanelLeft);

var _IconPanelRight = require('terra-icon/lib/icon/IconPanelRight');

var _IconPanelRight2 = _interopRequireDefault(_IconPanelRight);

var _IconTag = require('terra-icon/lib/icon/IconTag');

var _IconTag2 = _interopRequireDefault(_IconTag);

var _IconIPass = require('terra-icon/lib/icon/IconIPass');

var _IconIPass2 = _interopRequireDefault(_IconIPass);

var _IconScratchPad = require('terra-icon/lib/icon/IconScratchPad');

var _IconScratchPad2 = _interopRequireDefault(_IconScratchPad);

var _IconPharmacyReview = require('terra-icon/lib/icon/IconPharmacyReview');

var _IconPharmacyReview2 = _interopRequireDefault(_IconPharmacyReview);

var _IconBusy = require('terra-icon/lib/icon/IconBusy');

var _IconBusy2 = _interopRequireDefault(_IconBusy);

var _IconUnavailable = require('terra-icon/lib/icon/IconUnavailable');

var _IconUnavailable2 = _interopRequireDefault(_IconUnavailable);

var _IconImplant = require('terra-icon/lib/icon/IconImplant');

var _IconImplant2 = _interopRequireDefault(_IconImplant);

var _IconProtocol = require('terra-icon/lib/icon/IconProtocol');

var _IconProtocol2 = _interopRequireDefault(_IconProtocol);

var _IconVideoCamera = require('terra-icon/lib/icon/IconVideoCamera');

var _IconVideoCamera2 = _interopRequireDefault(_IconVideoCamera);

var _IconNoSignal = require('terra-icon/lib/icon/IconNoSignal');

var _IconNoSignal2 = _interopRequireDefault(_IconNoSignal);

var _IconReload = require('terra-icon/lib/icon/IconReload');

var _IconReload2 = _interopRequireDefault(_IconReload);

var _IconRecurringEvent = require('terra-icon/lib/icon/IconRecurringEvent');

var _IconRecurringEvent2 = _interopRequireDefault(_IconRecurringEvent);

var _IconSeparate = require('terra-icon/lib/icon/IconSeparate');

var _IconSeparate2 = _interopRequireDefault(_IconSeparate);

var _IconMerge = require('terra-icon/lib/icon/IconMerge');

var _IconMerge2 = _interopRequireDefault(_IconMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is autogenerated from scripts/src/generate-example
/* eslint-disable */
var IconAll = function IconAll() {
  return _react2.default.createElement(
    'div',
    null,
    '  ',
    _react2.default.createElement(
      _terraTable2.default,
      { isStriped: false },
      _react2.default.createElement(
        _terraTable2.default.Header,
        null,
        _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'SVG', key: 'svg' }),
        _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Concept', key: 'concept' }),
        _react2.default.createElement(_terraTable2.default.HeaderCell, { content: 'Code', key: 'code' })
      ),
      _react2.default.createElement(
        _terraTable2.default.Rows,
        null,
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAdd2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'add'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAdd from \'terra-icon/lib/icon/IconAdd\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSearch2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'search'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSearch from \'terra-icon/lib/icon/IconSearch\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCommit2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'commit'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCommit from \'terra-icon/lib/icon/IconCommit\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCheckmark2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'checkmark'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCheckmark from \'terra-icon/lib/icon/IconCheckmark\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconTrash2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'trash'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconTrash from \'terra-icon/lib/icon/IconTrash\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPaperFolded2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'paperFolded'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPaperFolded from \'terra-icon/lib/icon/IconPaperFolded\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPrinter2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'printer'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPrinter from \'terra-icon/lib/icon/IconPrinter\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconComment2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'comment'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconComment from \'terra-icon/lib/icon/IconComment\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconBookmark2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'bookmark'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconBookmark from \'terra-icon/lib/icon/IconBookmark\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconModified2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'modified'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconModified from \'terra-icon/lib/icon/IconModified\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconFirst2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'first'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconFirst from \'terra-icon/lib/icon/IconFirst\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconFolder2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'folder'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconFolder from \'terra-icon/lib/icon/IconFolder\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAttachment2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'attachment'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAttachment from \'terra-icon/lib/icon/IconAttachment\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSend2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'send'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSend from \'terra-icon/lib/icon/IconSend\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPill2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'pill'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPill from \'terra-icon/lib/icon/IconPill\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconVisualization2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'visualization'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconVisualization from \'terra-icon/lib/icon/IconVisualization\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconLightbulb2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'lightbulb'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconLightbulb from \'terra-icon/lib/icon/IconLightbulb\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconForward2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'forward'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconForward from \'terra-icon/lib/icon/IconForward\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconProjects2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'projects'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconProjects from \'terra-icon/lib/icon/IconProjects\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconReplyAll2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'replyAll'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconReplyAll from \'terra-icon/lib/icon/IconReplyAll\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconFlag2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'flag'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconFlag from \'terra-icon/lib/icon/IconFlag\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCalculator2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'calculator'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCalculator from \'terra-icon/lib/icon/IconCalculator\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCaretRight2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'caretRight'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCaretRight from \'terra-icon/lib/icon/IconCaretRight\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCaretLeft2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'caretLeft'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCaretLeft from \'terra-icon/lib/icon/IconCaretLeft\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCaretUp2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'caretUp'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCaretUp from \'terra-icon/lib/icon/IconCaretUp\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCaretDown2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'caretDown'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCaretDown from \'terra-icon/lib/icon/IconCaretDown\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconTrophy2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'trophy'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconTrophy from \'terra-icon/lib/icon/IconTrophy\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconChevronLeft2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'chevronLeft'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconChevronLeft from \'terra-icon/lib/icon/IconChevronLeft\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPrevious2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'previous'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPrevious from \'terra-icon/lib/icon/IconPrevious\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconChevronRight2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'chevronRight'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconChevronRight from \'terra-icon/lib/icon/IconChevronRight\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconNext2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'next'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconNext from \'terra-icon/lib/icon/IconNext\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconChevronUp2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'chevronUp'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconChevronUp from \'terra-icon/lib/icon/IconChevronUp\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconExpandLess2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'expandLess'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconExpandLess from \'terra-icon/lib/icon/IconExpandLess\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconChevron2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'chevron'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconChevron from \'terra-icon/lib/icon/IconChevron\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconChevronDown2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'chevronDown'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconChevronDown from \'terra-icon/lib/icon/IconChevronDown\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconExpandMore2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'expandMore'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconExpandMore from \'terra-icon/lib/icon/IconExpandMore\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconClock2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'clock'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconClock from \'terra-icon/lib/icon/IconClock\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAway2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'away'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAway from \'terra-icon/lib/icon/IconAway\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSortAscending2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'sortAscending'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSortAscending from \'terra-icon/lib/icon/IconSortAscending\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSortDescending2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'sortDescending'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSortDescending from \'terra-icon/lib/icon/IconSortDescending\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconTreemap2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'treemap'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconTreemap from \'terra-icon/lib/icon/IconTreemap\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconGlasses2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'glasses'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconGlasses from \'terra-icon/lib/icon/IconGlasses\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconImage2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'image'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconImage from \'terra-icon/lib/icon/IconImage\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDoorOpen2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'doorOpen'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDoorOpen from \'terra-icon/lib/icon/IconDoorOpen\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconEllipses2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'ellipses'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconEllipses from \'terra-icon/lib/icon/IconEllipses\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconExclamation2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'exclamation'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconExclamation from \'terra-icon/lib/icon/IconExclamation\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconItalicI2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'italic-i'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconItalicI from \'terra-icon/lib/icon/IconItalicI\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconMinus2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'minus'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconMinus from \'terra-icon/lib/icon/IconMinus\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconClose2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'close'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconClose from \'terra-icon/lib/icon/IconClose\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconClear2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'clear'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconClear from \'terra-icon/lib/icon/IconClear\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconNotMet2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'notMet'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconNotMet from \'terra-icon/lib/icon/IconNotMet\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconIncomplete2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'incomplete'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconIncomplete from \'terra-icon/lib/icon/IconIncomplete\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPerson2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'person'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPerson from \'terra-icon/lib/icon/IconPerson\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconLeft2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'left'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconLeft from \'terra-icon/lib/icon/IconLeft\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconRight2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'right'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconRight from \'terra-icon/lib/icon/IconRight\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconUp2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'up'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconUp from \'terra-icon/lib/icon/IconUp\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDown2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'down'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDown from \'terra-icon/lib/icon/IconDown\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSettings2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'settings'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSettings from \'terra-icon/lib/icon/IconSettings\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconEdit2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'edit'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconEdit from \'terra-icon/lib/icon/IconEdit\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCalendar2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'calendar'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCalendar from \'terra-icon/lib/icon/IconCalendar\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconLookback2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'lookback'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconLookback from \'terra-icon/lib/icon/IconLookback\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconRefresh2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'refresh'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconRefresh from \'terra-icon/lib/icon/IconRefresh\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconProvider2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'provider'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconProvider from \'terra-icon/lib/icon/IconProvider\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPadlock2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'padlock'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPadlock from \'terra-icon/lib/icon/IconPadlock\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconFeatured2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'featured'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconFeatured from \'terra-icon/lib/icon/IconFeatured\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconFeaturedOutline2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'featuredOutline'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconFeaturedOutline from \'terra-icon/lib/icon/IconFeaturedOutline\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconArchive2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'archive'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconArchive from \'terra-icon/lib/icon/IconArchive\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconFunnel2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'funnel'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconFunnel from \'terra-icon/lib/icon/IconFunnel\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDocuments2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'documents'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDocuments from \'terra-icon/lib/icon/IconDocuments\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconUnknown2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'unknown'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconUnknown from \'terra-icon/lib/icon/IconUnknown\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconHouse2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'house'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconHouse from \'terra-icon/lib/icon/IconHouse\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSave2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'save'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSave from \'terra-icon/lib/icon/IconSave\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconHospital2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'hospital'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconHospital from \'terra-icon/lib/icon/IconHospital\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPending2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'pending'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPending from \'terra-icon/lib/icon/IconPending\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAnalytics2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'analytics'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAnalytics from \'terra-icon/lib/icon/IconAnalytics\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAnnouncement2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'announcement'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAnnouncement from \'terra-icon/lib/icon/IconAnnouncement\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCamera2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'camera'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCamera from \'terra-icon/lib/icon/IconCamera\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconBriefcase2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'briefcase'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconBriefcase from \'terra-icon/lib/icon/IconBriefcase\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconLink2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'link'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconLink from \'terra-icon/lib/icon/IconLink\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconList2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'list'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconList from \'terra-icon/lib/icon/IconList\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconMenu2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'menu'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconMenu from \'terra-icon/lib/icon/IconMenu\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconChecklist2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'checklist'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconChecklist from \'terra-icon/lib/icon/IconChecklist\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconUnlock2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'unlock'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconUnlock from \'terra-icon/lib/icon/IconUnlock\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDue2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'due'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDue from \'terra-icon/lib/icon/IconDue\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSpinner2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'spinner'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSpinner from \'terra-icon/lib/icon/IconSpinner\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconTile2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'tile'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconTile from \'terra-icon/lib/icon/IconTile\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconUsers2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'users'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconUsers from \'terra-icon/lib/icon/IconUsers\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconKnurling2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'knurling'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconKnurling from \'terra-icon/lib/icon/IconKnurling\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAddPerson2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'addPerson'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAddPerson from \'terra-icon/lib/icon/IconAddPerson\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconUpload2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'upload'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconUpload from \'terra-icon/lib/icon/IconUpload\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDownload2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'download'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDownload from \'terra-icon/lib/icon/IconDownload\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCancel2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'cancel'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCancel from \'terra-icon/lib/icon/IconCancel\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconMaximize2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'maximize'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconMaximize from \'terra-icon/lib/icon/IconMaximize\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconMinimize2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'minimize'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconMinimize from \'terra-icon/lib/icon/IconMinimize\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconReply2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'reply'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconReply from \'terra-icon/lib/icon/IconReply\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconTable2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'table'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconTable from \'terra-icon/lib/icon/IconTable\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconRequired2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'required'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconRequired from \'terra-icon/lib/icon/IconRequired\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconGapChecking2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'gap checking'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconGapChecking from \'terra-icon/lib/icon/IconGapChecking\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPersonHospital2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'personHospital'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPersonHospital from \'terra-icon/lib/icon/IconPersonHospital\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPersonnelPerson2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'personnelPerson'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPersonnelPerson from \'terra-icon/lib/icon/IconPersonnelPerson\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconLeftPane2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'leftPane'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconLeftPane from \'terra-icon/lib/icon/IconLeftPane\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconFlowsheet2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'flowsheet'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconFlowsheet from \'terra-icon/lib/icon/IconFlowsheet\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconNotification2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'notification'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconNotification from \'terra-icon/lib/icon/IconNotification\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconLast2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'last'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconLast from \'terra-icon/lib/icon/IconLast\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDevice2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'device'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDevice from \'terra-icon/lib/icon/IconDevice\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPaperPencil2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'paperPencil'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPaperPencil from \'terra-icon/lib/icon/IconPaperPencil\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconClipboard2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'clipboard'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconClipboard from \'terra-icon/lib/icon/IconClipboard\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconZoomOut2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'zoomOut'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconZoomOut from \'terra-icon/lib/icon/IconZoomOut\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconZoomIn2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'zoomIn'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconZoomIn from \'terra-icon/lib/icon/IconZoomIn\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconEnvelope2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'envelope'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconEnvelope from \'terra-icon/lib/icon/IconEnvelope\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAllergy2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'allergy'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAllergy from \'terra-icon/lib/icon/IconAllergy\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPhone2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'phone'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPhone from \'terra-icon/lib/icon/IconPhone\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPanelLeft2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'panelLeft'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPanelLeft from \'terra-icon/lib/icon/IconPanelLeft\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPanelRight2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'panelRight'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPanelRight from \'terra-icon/lib/icon/IconPanelRight\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconTag2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'tag'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconTag from \'terra-icon/lib/icon/IconTag\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconIPass2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'iPass'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconIPass from \'terra-icon/lib/icon/IconIPass\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconScratchPad2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'scratchPad'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconScratchPad from \'terra-icon/lib/icon/IconScratchPad\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPharmacyReview2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'pharmacyReview'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPharmacyReview from \'terra-icon/lib/icon/IconPharmacyReview\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconBusy2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'busy'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconBusy from \'terra-icon/lib/icon/IconBusy\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconUnavailable2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'unavailable'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconUnavailable from \'terra-icon/lib/icon/IconUnavailable\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconImplant2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'implant'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconImplant from \'terra-icon/lib/icon/IconImplant\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconProtocol2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'protocol'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconProtocol from \'terra-icon/lib/icon/IconProtocol\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconVideoCamera2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'videoCamera'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconVideoCamera from \'terra-icon/lib/icon/IconVideoCamera\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconNoSignal2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'noSignal'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconNoSignal from \'terra-icon/lib/icon/IconNoSignal\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconReload2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'reload'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconReload from \'terra-icon/lib/icon/IconReload\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconRecurringEvent2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'recurringEvent'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconRecurringEvent from \'terra-icon/lib/icon/IconRecurringEvent\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSeparate2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'separate'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSeparate from \'terra-icon/lib/icon/IconSeparate\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconMerge2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'merge'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconMerge from \'terra-icon/lib/icon/IconMerge\';'
          )
        )
      )
    )
  );
};

exports.default = IconAll;