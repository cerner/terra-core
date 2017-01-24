### Button Outline

Buttons can be styled to display with a transparent background and outline by placing any of the following classes on the `terra-Button` component:

| Class Name                       | Behavior                                                                                                                                               |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `terra-Button--outlineDefault`   | Sets the style of the button to display with a transparent background and outline with colors of the button based on the default button color scheme   |
| `terra-Button--outlinePrimary`   | Sets the style of the button to display with a transparent background and outline with colors of the button based on the primary button color scheme   |
| `terra-Button--outlineSecondary` | Sets the style of the button to display with a transparent background and outline with colors of the button based on the secondary button color scheme |
| `terra-Button--outlinePositive`  | Sets the style of the button to display with a transparent background and outline with colors of the button based on the positive button color scheme  |
| `terra-Button--outlineNegative`  | Sets the style of the button to display with a transparent background and outline with colors of the button based on the negative button color scheme  |
| `terra-Button--outlineWarning`   | Sets the style of the button to display with a transparent background and outline with colors of the button based on the warning button color scheme   |
| `terra-Button--outlineInfo`      | Sets the style of the button to display with a transparent background and outline with colors of the button based on the info button color scheme      |

### React Variant

| Prop            | Type      | Default   | Description                                                                                                                                                                                                                                                                                                 |
|-----------------|-----------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `variant`       | String    |           | Sets the button variant. One of `link` or `outline`                                                                                                  |

### React Usage

```
<Button intent="primary" variant="outline" />
```
