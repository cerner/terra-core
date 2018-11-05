# Terra Centered Action Footer

The terra-centered-action-footer component is a footer bar that contains a single, centered socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border.

## Usage

### Centered Action Footer with a Single Action

```jsx
import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import Hyperlink from 'terra-hyperlink';

<CenteredActionFooter
  center={<Hyperlink href="/link/to/somewhere">A link</Hyperlink>}
/>
```

### Centered Action Footer with Multiple Actions

```jsx
import React from 'react';
import Button from 'terra-button';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import Hyperlink from 'terra-hyperlink';
import Spacer from 'terra-spacer';

<CenteredActionFooter
  center={
    <React.Fragment>
      <Spacer isInlineBlock marginRight="medium">
        <Button text="Action One" />
      </Spacer>
      <Button text="Action Two" />
    </React.Fragment>
  }
/>
```

### Empty Centered Action Footer

```jsx
import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

<CenteredActionFooter />
```