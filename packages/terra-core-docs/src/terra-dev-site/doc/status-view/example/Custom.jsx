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
      Note: We should provide guidance for the action button labels. Those labels should give proper message or title in some way.
      For Accessibility best practice one can use the ARIA attributes like aria-label to provide the context.
    </p>
  </div>
);

export default Custom;
