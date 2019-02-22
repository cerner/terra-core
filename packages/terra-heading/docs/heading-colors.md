## Heading Colors

By passing in a className, authors can manually set the text color of any `<Heading />` component.

```css
:root {
  --my-app-heading-attention-color: rgb(220, 20, 60);
  --my-app-heading-success-color: rgb(46, 125, 50);
  --my-app-heading-info-color: #304ffe;
  --my-app-heading-default-color: #333;
}

.default {
  color: var(--my-app-heading-default-color, #333);
}

.attention {
  color: var(--my-app-heading-attention-color, rgb(220, 20, 60));
}

.success {
  color: var(--my-app-heading-success-color, rgb(46, 125, 50));
}

.info {
  color: var(--my-app-heading-info-color, #304ffe);
}
```
