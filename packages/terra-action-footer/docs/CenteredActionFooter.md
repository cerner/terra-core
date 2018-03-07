# Terra Centered Action Footer

The Terra Centered Action Footer is a footer bar that contains a single, centered socket to place items in the form of buttons and hyperlinks used to perform actions. If no actions are provided, the footer bar defaults to a 10px equivalent height and maintains the top border.

## Usage

### Centered Action Footer with a Single Action
```jsx
import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

<CenteredActionFooter
  center={<a href="/link/to/somewhere">A link</a>}
/>
```

### Centered Action Footer with mutliple Actions
```jsx
import React from 'react';
import Button from 'terra-button';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

<CenteredActionFooter
  center={
    <div>
      <Button text="Left Center Button"/>
      <Button text="Right Center Button"/>
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
