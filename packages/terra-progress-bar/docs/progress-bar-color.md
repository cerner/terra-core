## Progress Bar Colors

By passing in a colorClass, authors can manually set the bar color of any `<ProgressBar />` component.

```css
.orange-bar {
  color: orange;

  &::-webkit-progress-value {
    background-color: orange;
  }

  &::-ms-fill {
    background-color: orange;
  }
}

.green-bar {
  color: #8ccc62;

  &::-webkit-progress-value {
    background-color: #8ccc62;
  }

  &::-ms-fill {
    background-color: #8ccc62;
  }
}

.red-bar {
  color: rgb(255, 0, 0);

  &::-webkit-progress-value {
    background-color: rgb(255, 0, 0);
  }

  &::-ms-fill {
    background-color: rgb(255, 0, 0);
  }
}
```
