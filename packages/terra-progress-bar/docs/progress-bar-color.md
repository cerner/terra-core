By passing in a colorClass, authors can manually set the bar color of any `<ProgressBar />` component.

```css
:root {
  --my-app-progress-bar-example-1-background-color: rgb(255, 165, 0);
  --my-app-progress-bar-example-2-background-color: #8ccc62;
  --my-app-progress-bar-example-3-background-color: rgb(255, 0, 0);
}

.color-bar-example-1 {
  color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0));
  &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }
  &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }
  &::-ms-fill { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }
}

.color-bar-example-2 {
  color: var(--my-app-progress-bar-example-2-background-color, #8ccc62);
  &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }
  &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }
  &::-ms-fill { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }
}

.color-bar-example-3 {
  color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0));
  &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }
  &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }
  &::-ms-fill { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }
}
```
