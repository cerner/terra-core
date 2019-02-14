## Heading Colors

By passing in a className, authors can manually set the text color of any `<Heading />` component.

```css
:root {
  --terra-heading-attention-color: rgb(220, 20, 60);
  --terra-heading-neutral-color: rgb(46, 125, 50);
  --terra-heading-info-color: #304ffe;
  --terra-heading-default-color: #333;
}

.default {
  color: var(--terra-heading-default-color, #333);
}

.attention {
  color: var(--terra-heading-attention-color, rgb(220, 20, 60));
}

.neutral {
  color: var(--terra-heading-neutral-color, rgb(46, 125, 50));
}

.info {
  color: var(--terra-heading-info-color, #304ffe);
}
```
