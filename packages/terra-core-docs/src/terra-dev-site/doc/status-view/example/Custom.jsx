import React from 'react';
import IconDueSoon from 'terra-icon/lib/icon/IconDueSoon';
import StatusView from 'terra-status-view';

const StatusViewButtons = [
  {
    'aria-label': 'Submit your Timesheet',
    id: 'Submit',
    key: 1,
    text: 'Submit',
    variant: 'emphasis',
  }, {
    'aria-label': 'Cancel your Timesheet Submission',
    id: 'Cancel',
    key: 2,
    text: 'Cancel',
  },
];

const Custom = () => (
  <div>
    <StatusView
      message="Once submitted cannot be revised"
      customGlyph={<IconDueSoon />}
      title="Time Sheet Due Soon"
      buttonAttrs={StatusViewButtons}
    />
    <p>
      Note: We should provide guidance for the action button labels. Those labels should give proper message or title in some way.
      For Accessibility best practice one can use the ARIA attributes like aria-label to provide the context.
    </p>
  </div>
);

export default Custom;
