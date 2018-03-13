# Terra Centered Action Footer

The terra-centered-action-footer component is a footer bar that contains a single, centered socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border.

## Usage

### Centered Action Footer with a Single Action
```jsx
import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

<CenteredActionFooter
  center={<a href="/link/to/somewhere">A link</a>}
/>
```

### Centered Action Footer with Mutliple Actions
```jsx
import React from 'react';
import Button from 'terra-button';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

<CenteredActionFooter
  center={
    <div>
      <Button text="First Action"/>
      <Button text="Second Action"/>
    </div>
  }
/>
```

### Empty Centered Action Footer
```jsx
import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

<CenteredActionFooter />
```
