By defining more CSS, authors can control more of the `<Alert />` component through the customColorClass prop.

```css
:root {
  --my-app-alert-help-example-color: #b961cf;
}

.my-app-alert-help-example {
    color: var(--my-app-alert-help-example-color, #b961cf);
}
```
