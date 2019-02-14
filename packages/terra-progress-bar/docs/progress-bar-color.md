By passing in a colorClass, authors can manually set the bar color of any `<ProgressBar />` component.

```css
.color-bar-example-1 {
  color: rgb(255, 165, 0);

  &::-webkit-progress-value {
    background-color: rgb(255, 165, 0);
  }

  &::-moz-progress-bar {
    background-color: rgb(255, 165, 0);
  }

  &::-ms-fill {
    background-color: rgb(255, 165, 0);
  }
}

.color-bar-example-2 {
  color: #8ccc62;

  &::-webkit-progress-value {
    background-color: #8ccc62;
  }

  &::-moz-progress-bar {
    background-color: #8ccc62;
  }

  &::-ms-fill {
    background-color: #8ccc62;
  }
}

.color-bar-example-3 {
  color: rgb(255, 0, 0);

  &::-webkit-progress-value {
    background-color: rgb(255, 0, 0);
  }

  &::-moz-progress-bar {
    background-color: rgb(255, 0, 0);
  }

  &::-ms-fill {
    background-color: rgb(255, 0, 0);
  }
}
```
