## Text Colors

By passing in a className, authors can manually set the text color of any `<Text />` component.

```css
:root {
  --my-app-text-attention-color: rgb(220, 20, 60);
  --my-app-text-neutral-color: rgb(46, 125, 50);
  --my-app-text-info-color: #304ffe;
  --my-app-text-default-color: #333;
}

.default {
  color: var(--my-app-text-default-color, #333);
}

.attention {
  color: var(--my-app-text-attention-color, rgb(220, 20, 60));
}

.neutral {
  color: var(--my-app-text-neutral-color, rgb(46, 125, 50));
}

.info {
  color: var(--my-app-text-info-color, #304ffe);
}
```
