import React from 'react';

import ToggleButton from 'terra-toggle-button';

const LiveRegionsExampleCode = () => {
  const temp = `
    import Alert from 'terra-alert';

        <>
            // This less critical notification should be in polite aria-live region so screen reader users are notified.
            <div aria-live="polite">
                {isOpen && (
                    <Alert type="success">
                        This notification is a less critical and should be polite.
                    </Alert>
                )}
            </div>

            // Alert notifications are implicitly assertive, no aria-live needed
            // It is recommended to keep these separate from polite aria-live regions.
            <div>
                {isOpen && (
                    <Alert type="alert">
                        This notification is a critical alert that is interruptive.
                    </Alert>
                )}
            </div>
        </>
    `;

  return (
    <ToggleButton
      closedButtonText="Show live region example code"
      openedButtonText="Hide live region example code"
    >
      <pre>{temp}</pre>
    </ToggleButton>
  );
};

export default LiveRegionsExampleCode;
