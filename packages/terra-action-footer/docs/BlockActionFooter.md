# Terra Block Action Footer

The terra-block-action-footer component is a footer bar that contains a single socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border.

## Usage

### Block Action Footer with a Single Action

```jsx
import React from 'react';
import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';

<BlockActionFooter>
  <a href="/link/to/somewhere">A link</a>
</BlockActionFooter>
```

### Block Action Footer with Multiple Actions

```jsx
import React from 'react';
import Button from 'terra-button';
import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';

<BlockActionFooter>
  <Button text="First Action"/>
  <Button text="Second Action"/>
</BlockActionFooter>
```

### Empty Block Action Footer

```jsx
import React from 'react';
import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';

<BlockActionFooter />
```
