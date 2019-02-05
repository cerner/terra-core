## Progress Bar Customized Colors

By defining more CSS, authors can control more of the `<ProgressBar />` component through the colorClass prop.

```css
.green-bar-grey-background-white-border {
  background-color: #d3d4d5;
  border-right: 1px solid #fff;
  color: #8ccc62;

  &[value] {
    &::-webkit-progress-bar {
      background-color: #d3d4d5;
    }

    &::-webkit-progress-value {
      background-color: #8ccc62;
      border-right: 1px solid #fff;
    }

    &::-ms-fill {
      background-color: #8ccc62;
      border-right: 1px solid #fff;
    }
  }

  &[value='100'],
  &[value='0'] {
    border-right: 0 solid #fff;

    &::-webkit-progress-value {
      border-right: 0 solid #fff;
    }

    &::-ms-fill {
      border-right: 0 solid #fff;
    }
  }

}

.pink-to-red-bar-blue-to-yellow-background-green-border {
  background: linear-gradient(to left, yellow, blue);
  background-color: blue;
  border-right: 3px solid lime;
  color: rgb(255, 0, 0);

  &[value] {
    &::-webkit-progress-bar {
      background: linear-gradient(to left, yellow, blue);
      background-color: blue;
    }

    &::-webkit-progress-value {
      background: linear-gradient(to left, rgb(255, 0, 0), pink);
      background-color: rgb(255, 0, 0);
      border-right: 3px solid lime;
    }

    &::-ms-fill {
      background: linear-gradient(to left, rgb(255, 0, 0), pink);
      background-color: rgb(255, 0, 0);
      border-right: 3px solid lime;
    }
  }

  &[value='100'],
  &[value='0'] {
    border-right: 0 solid lime;

    &::-webkit-progress-value {
      border-right: 0 solid lime;
    }

    &::-ms-fill {
      border-right: 0 solid lime;
    }
  }
}
```
