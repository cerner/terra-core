By defining more CSS, authors can control more of the `<ProgressBar />` component through the colorClass prop.

```css
:root {
  --my-app-progress-bar-customized-example-1-bar-background-color: #d3d4d5;
  --my-app-progress-bar-customized-example-1-value-background-color: #8ccc62;
  --my-app-progress-bar-customized-example-1-border-right: 1px solid #fff;
  --my-app-progress-bar-customized-example-1-empty-border-right: 0 solid #fff;
  --my-app-progress-bar-customized-example-2-backup-bar-background-color: rgb(0, 0, 255);
  --my-app-progress-bar-customized-example-2-backup-value-background-color: rgb(255, 0, 0);
  --my-app-progress-bar-customized-example-2-bar-background: linear-gradient(to left, rgb(255, 255, 0), rgb(0, 0, 255));
  --my-app-progress-bar-customized-example-2-value-background: linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0));
  --my-app-progress-bar-customized-example-2-border-right: 3px solid rgb(0, 255, 0);
  --my-app-progress-bar-customized-example-2-empty-border-right: 0 solid rgb(0, 255, 0);
}

.customized-color-bar-example-1 {
  background-color: var(--my-app-progress-bar-customized-example-1-bar-background-color, #d3d4d5);
  border-right: var(--my-app-progress-bar-customized-example-1-border-right, 1px solid #fff);
  color: var(--my-app-progress-bar-customized-example-1-value-background-color, #8ccc62);;
  &[value] {
    &::-webkit-progress-bar { background-color: var(--my-app-progress-bar-customized-example-1-bar-background-color, #d3d4d5); }
    &::-webkit-progress-value {
      background-color: var(--my-app-progress-bar-customized-example-1-value-background-color, #8ccc62);;
      border-right: var(--my-app-progress-bar-customized-example-1-border-right, 1px solid #fff);
    }
    &::-moz-progress-bar {
      background-color: var(--my-app-progress-bar-customized-example-1-value-background-color, #8ccc62);;
      border-right: var(--my-app-progress-bar-customized-example-1-border-right, 1px solid #fff);
    }
    &::-ms-fill {
      background-color: var(--my-app-progress-bar-customized-example-1-value-background-color, #8ccc62);;
      border-right: var(--my-app-progress-bar-customized-example-1-border-right, 1px solid #fff);
    }
  }
  &[value='100'],
  &[value='0'] {
    border-right: var(--my-app-progress-bar-customized-example-1-empty-border-right, 0 solid #fff);
    &::-webkit-progress-value { border-right: var(--my-app-progress-bar-customized-example-1-empty-border-right, 0 solid #fff); }
    &::-moz-progress-bar { border-right: var(--my-app-progress-bar-customized-example-1-empty-border-right, 0 solid #fff); }
    &::-ms-fill { border-right: var(--my-app-progress-bar-customized-example-1-empty-border-right, 0 solid #fff); }
  }

}

.customized-color-bar-example-2 {
  background: var(--my-app-progress-bar-customized-example-2-bar-background, linear-gradient(to left, rgb(255, 255, 0), rgb(0, 0, 255)));
  background-color: var(--my-app-progress-bar-customized-example-2-backup-bar-background-color, rgb(0, 0, 255));
  border-right: var(--my-app-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));
  color: var(--my-app-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));
  &[value] {
    &::-webkit-progress-bar {
      background: var(--my-app-progress-bar-customized-example-2-bar-background, linear-gradient(to left, rgb(255, 255, 0), rgb(0, 0, 255)));
      background-color: var(--my-app-progress-bar-customized-example-2-backup-bar-background-color, rgb(0, 0, 255));
    }
    &::-webkit-progress-value {
      background: var(--my-app-progress-bar-customized-example-2-value-background, linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0)));
      background-color: var(--my-app-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));
      border-right: var(--my-app-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));
    }
    &::-moz-progress-bar {
      background: var(--my-app-progress-bar-customized-example-2-value-background, linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0)));
      background-color: var(--my-app-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));
      border-right: var(--my-app-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));
    }
    &::-ms-fill {
      background: var(--my-app-progress-bar-customized-example-2-value-background, linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0)));
      background-color: var(--my-app-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));
      border-right: var(--my-app-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));
    }
  }
  &[value='100'],
  &[value='0'] {
    border-right: var(--my-app-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0));
    &::-webkit-progress-value { border-right: var(--my-app-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0)); }
    &::-moz-progress-bar { border-right: var(--my-app-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0)); }
    &::-ms-fill { border-right: var(--my-app-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0)); }
  }
}
```
