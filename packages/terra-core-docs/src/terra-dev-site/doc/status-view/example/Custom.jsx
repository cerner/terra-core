import React from 'react';
import IconDueSoon from 'terra-icon/lib/icon/IconDueSoon';
import StatusView from 'terra-status-view';
import VisuallyHiddenText from 'terra-visually-hidden-text';

const StatusViewButtons = [
  {
    'aria-describedby': 'submittimesheet',
    id: 'Submit',
    key: 1,
    text: 'Submit',
    variant: 'emphasis',
  }, {
    'aria-describedby': 'canceltimesheet',
    id: 'Cancel',
    key: 2,
    text: 'Cancel',
  },
];

const Custom = () => (
  <div>
    <VisuallyHiddenText aria-hidden id="submittimesheet" text="Select to Submit Timesheet" />
    <VisuallyHiddenText aria-hidden id="canceltimesheet" text="Select to Cancel Timesheet" />
    <StatusView
      message="Once submitted cannot be revised"
      customGlyph={<IconDueSoon />}
      title="Timesheet"
      buttonAttrs={StatusViewButtons}
    />
    <p>
      Note: Action button labels should provide a proper message or title. To meet accessibility guidelines, use ARIA attributes (such as `aria-label`) to provide context.
    </p>
  </div>
);

export default Custom;
