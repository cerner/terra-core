'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

var _IconSuccess = require('terra-icon/lib/icon/IconSuccess');

var _IconSuccess2 = _interopRequireDefault(_IconSuccess);

var _IconSuccessInverse = require('terra-icon/lib/icon/IconSuccessInverse');

var _IconSuccessInverse2 = _interopRequireDefault(_IconSuccessInverse);

var _IconAvailable = require('terra-icon/lib/icon/IconAvailable');

var _IconAvailable2 = _interopRequireDefault(_IconAvailable);

var _IconComplete = require('terra-icon/lib/icon/IconComplete');

var _IconComplete2 = _interopRequireDefault(_IconComplete);

var _IconCritical = require('terra-icon/lib/icon/IconCritical');

var _IconCritical2 = _interopRequireDefault(_IconCritical);

var _IconScheduled = require('terra-icon/lib/icon/IconScheduled');

var _IconScheduled2 = _interopRequireDefault(_IconScheduled);

var _IconHighPriority = require('terra-icon/lib/icon/IconHighPriority');

var _IconHighPriority2 = _interopRequireDefault(_IconHighPriority);

var _IconAlert = require('terra-icon/lib/icon/IconAlert');

var _IconAlert2 = _interopRequireDefault(_IconAlert);

var _IconWarning = require('terra-icon/lib/icon/IconWarning');

var _IconWarning2 = _interopRequireDefault(_IconWarning);

var _IconInformation = require('terra-icon/lib/icon/IconInformation');

var _IconInformation2 = _interopRequireDefault(_IconInformation);

var _IconInformationInverse = require('terra-icon/lib/icon/IconInformationInverse');

var _IconInformationInverse2 = _interopRequireDefault(_IconInformationInverse);

var _IconError = require('terra-icon/lib/icon/IconError');

var _IconError2 = _interopRequireDefault(_IconError);

var _IconDoNotDisturb = require('terra-icon/lib/icon/IconDoNotDisturb');

var _IconDoNotDisturb2 = _interopRequireDefault(_IconDoNotDisturb);

var _IconHelp = require('terra-icon/lib/icon/IconHelp');

var _IconHelp2 = _interopRequireDefault(_IconHelp);

var _IconHelpInverse = require('terra-icon/lib/icon/IconHelpInverse');

var _IconHelpInverse2 = _interopRequireDefault(_IconHelpInverse);

var _IconDueSoon = require('terra-icon/lib/icon/IconDueSoon');

var _IconDueSoon2 = _interopRequireDefault(_IconDueSoon);

var _IconOverDue = require('terra-icon/lib/icon/IconOverDue');

var _IconOverDue2 = _interopRequireDefault(_IconOverDue);

var _IconHigh = require('terra-icon/lib/icon/IconHigh');

var _IconHigh2 = _interopRequireDefault(_IconHigh);

var _IconLow = require('terra-icon/lib/icon/IconLow');

var _IconLow2 = _interopRequireDefault(_IconLow);

var _IconMax = require('terra-icon/lib/icon/IconMax');

var _IconMax2 = _interopRequireDefault(_IconMax);

var _IconMin = require('terra-icon/lib/icon/IconMin');

var _IconMin2 = _interopRequireDefault(_IconMin);

var _IconAbnormal = require('terra-icon/lib/icon/IconAbnormal');

var _IconAbnormal2 = _interopRequireDefault(_IconAbnormal);

var _IconDeviceCheck = require('terra-icon/lib/icon/IconDeviceCheck');

var _IconDeviceCheck2 = _interopRequireDefault(_IconDeviceCheck);

var _IconDeviceAlert = require('terra-icon/lib/icon/IconDeviceAlert');

var _IconDeviceAlert2 = _interopRequireDefault(_IconDeviceAlert);

var _IconDiamond = require('terra-icon/lib/icon/IconDiamond');

var _IconDiamond2 = _interopRequireDefault(_IconDiamond);

var _IconPharmacyReject = require('terra-icon/lib/icon/IconPharmacyReject');

var _IconPharmacyReject2 = _interopRequireDefault(_IconPharmacyReject);

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
            _react2.default.createElement(_IconSuccess2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'success'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSuccess from \'terra-icon/lib/icon/IconSuccess\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconSuccessInverse2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'success_inverse'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconSuccessInverse from \'terra-icon/lib/icon/IconSuccessInverse\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAvailable2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'available'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAvailable from \'terra-icon/lib/icon/IconAvailable\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconComplete2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'complete'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconComplete from \'terra-icon/lib/icon/IconComplete\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconCritical2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'critical'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconCritical from \'terra-icon/lib/icon/IconCritical\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconScheduled2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'scheduled'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconScheduled from \'terra-icon/lib/icon/IconScheduled\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconHighPriority2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'highPriority'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconHighPriority from \'terra-icon/lib/icon/IconHighPriority\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAlert2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'alert'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAlert from \'terra-icon/lib/icon/IconAlert\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconWarning2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'warning'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconWarning from \'terra-icon/lib/icon/IconWarning\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconInformation2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'information'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconInformation from \'terra-icon/lib/icon/IconInformation\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconInformationInverse2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'information_inverse'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconInformationInverse from \'terra-icon/lib/icon/IconInformationInverse\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconError2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'error'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconError from \'terra-icon/lib/icon/IconError\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDoNotDisturb2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'doNotDisturb'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDoNotDisturb from \'terra-icon/lib/icon/IconDoNotDisturb\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconHelp2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'help'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconHelp from \'terra-icon/lib/icon/IconHelp\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconHelpInverse2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'help_inverse'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconHelpInverse from \'terra-icon/lib/icon/IconHelpInverse\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDueSoon2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'dueSoon'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDueSoon from \'terra-icon/lib/icon/IconDueSoon\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconOverDue2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'overDue'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconOverDue from \'terra-icon/lib/icon/IconOverDue\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconHigh2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'high'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconHigh from \'terra-icon/lib/icon/IconHigh\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconLow2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'low'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconLow from \'terra-icon/lib/icon/IconLow\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconMax2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'max'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconMax from \'terra-icon/lib/icon/IconMax\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconMin2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'min'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconMin from \'terra-icon/lib/icon/IconMin\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconAbnormal2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'abnormal'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconAbnormal from \'terra-icon/lib/icon/IconAbnormal\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDeviceCheck2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'deviceCheck'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDeviceCheck from \'terra-icon/lib/icon/IconDeviceCheck\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDeviceAlert2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'deviceAlert'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDeviceAlert from \'terra-icon/lib/icon/IconDeviceAlert\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconDiamond2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'diamond'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconDiamond from \'terra-icon/lib/icon/IconDiamond\';'
          )
        ),
        _react2.default.createElement(
          'tr',
          { style: { backgroundColor: '#EEEEEE' } },
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_IconPharmacyReject2.default, { height: '2em', width: '2em' })
          ),
          _react2.default.createElement(
            'td',
            null,
            'pharmacyReject'
          ),
          _react2.default.createElement(
            'td',
            null,
            'import IconPharmacyReject from \'terra-icon/lib/icon/IconPharmacyReject\';'
          )
        )
      )
    )
  );
};

exports.default = IconAll;