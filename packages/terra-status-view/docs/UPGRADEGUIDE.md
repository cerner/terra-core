# Terra Status View Upgrade Guide

## Changes from version 3 to version 4

### Props
* **Removed** children prop. This is **replaced** by `buttonAttrs`. This prop accepts an array of objects containing terra-button properties. Remember that React requires a unique key to be attached to each element in an array. Example:

```jsx
const buttons = [
  {
    key: 1,
    text: 'Action 1',
    size: 'medium',
    onClick: handleOnAction1,
  }, {
    key: 2,
    text: 'Action 2',
    size: 'medium',
    onClick: handeOnAction2,
  },
];

<StatusView buttonAttrs={buttons} />
```

* **Removed** default behaviour of rendering an error view. Please provide props.
* **Removed** the `custom` variant. Use first class props `title`, `message`, or `customGlyph` to render respective sections or override a variant's sections.

### Resizing
* Use `isGlyphHidden` to show or hide the glyph. The `onComponentMount` logic to do this has been removed.
* Status view defaults to a "centered" alignment, based on available size and remaining space. The top will contain `40%` of space, while the remaining `60%` is delegated to the bottom. Use `setAlignTop` to remove this distribution and render the status view at the top of the container.

### Changes to CSS Custom Properties

#### Added
--terra-status-view-actions-button-margin-bottom

## Changes from version 2 to version 3

### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-status-view-glyph-no-data | --terra-status-view-glyph-no-data-background |
| --terra-status-view-glyph-no-matching-results | --terra-status-view-glyph-no-matching-results-background |
| --terra-status-view-glyph-not-authorized | --terra-status-view-glyph-not-authorized-background |
| --terra-status-view-glyph-error | --terra-status-view-glyph-error-background |
| --terra-status-view-actions-flex-direction-small-width | --terra-status-view-actions-small-width-flex-direction |
