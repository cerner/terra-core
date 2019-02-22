By defining more CSS, authors can control more of the `<ProgressBar />` component through the colorClass prop.

```css
:root {
  --my-app-progress-bar-2-colors-example-1-bar-background-color: #e8e8e8;
  --my-app-progress-bar-2-colors-example-1-value-background-color: #8ccc62;
  --my-app-progress-bar-2-colors-example-2-bar-background-color: rgb(0, 0, 0);
  --my-app-progress-bar-2-colors-example-2-value-background-color: rgb(255, 0, 0);
  --my-app-progress-bar-2-colors-example-3-bar-background-color: rgb(0, 0, 139);
  --my-app-progress-bar-2-colors-example-3-value-background-color: rgb(255, 165, 0);
}

.two-colors-bar-2-colors-example-1 {
  background-color: var(--my-app-progress-bar-2-colors-example-1-bar-background-color, #e8e8e8);
  color: var(--my-app-progress-bar-2-colors-example-1-value-background-color, #8ccc62);
  &::-webkit-progress-bar { background-color: var(--my-app-progress-bar-2-colors-example-1-bar-background-color, #e8e8e8); }
  &::-webkit-progress-value { background-color: var(--my-app-progress-bar-2-colors-example-1-value-background-color, #8ccc62); }
  &::-moz-progress-bar { background-color: var(--my-app-progress-bar-2-colors-example-1-value-background-color, #8ccc62); }
  &::-ms-fill { background-color: var(--my-app-progress-bar-2-colors-example-1-value-background-color, #8ccc62); }
}

.two-colors-bar-2-colors-example-2 {
  background-color: var(--my-app-progress-bar-2-colors-example-2-bar-background-color, rgb(0, 0, 0));
  color: var(--my-app-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0));
  &::-webkit-progress-bar { background-color: var(--my-app-progress-bar-2-colors-example-2-bar-background-color, rgb(0, 0, 0)); }
  &::-webkit-progress-value { background-color: var(--my-app-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0)); }
  &::-moz-progress-bar { background-color: var(--my-app-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0)); }
  &::-ms-fill { background-color: var(--my-app-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0)); }
}

.two-colors-bar-2-colors-example-3 {
  background-color: var(--my-app-progress-bar-2-colors-example-3-bar-background-color, rgb(0, 0, 139));
  color: var(--my-app-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0));
  &::-webkit-progress-bar { background-color: var(--my-app-progress-bar-2-colors-example-3-bar-background-color, rgb(0, 0, 139)); }
  &::-webkit-progress-value { background-color: var(--my-app-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0)); }
  &::-moz-progress-bar { background-color: var(--my-app-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0)); }
  &::-ms-fill { background-color: var(--my-app-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0)); }
}
```
