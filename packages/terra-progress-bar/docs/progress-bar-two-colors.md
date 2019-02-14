By defining more CSS, authors can control more of the `<ProgressBar />` component through the colorClass prop.

```css
.two-colors-bar-example-1 {
  background-color: #e8e8e8;
  color: #8ccc62;

  &::-webkit-progress-bar {
    background-color: #e8e8e8;
  }

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

.two-colors-bar-example-2 {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 0, 0);

  &::-webkit-progress-bar {
    background-color: rgb(0, 0, 0);
  }

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

.two-colors-bar-example-3 {
  background-color: rgb(0, 0, 139);
  color: rgb(255, 165, 0);

  &::-webkit-progress-bar {
    background-color: rgb(0, 0, 139);
  }

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
```
