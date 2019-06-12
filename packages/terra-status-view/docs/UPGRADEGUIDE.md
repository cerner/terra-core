# Terra Status View Upgrade Guide

## Changes from version 3 to version 4

### Props
* **Removed** children prop. This has been replaced by `buttonAttrs`. Please provide an array of objects that contain terra-button properties to `buttonAttrs`. Example:
```
const StatusViewButtons = [
  {
    text: 'Action 1',
    key: 1,
    size: 'medium',
    variant: 'action',
  }, {
    text: 'Action 2',
    key: 2,
    size: 'medium',
    variant: 'action',
  },
];

<StatusView buttonAttrs={StatusViewButtons} />
```
* **Removed** default behaviour of rendering an error view. Please provide props.
* **Removed** the `custom` variant. Use first class props `title`, `message`, or `customGlyph` to render the respective sockets, or override a variant's sockets.

### Resizing
* Use `isGlyphHidden` to show or hide the glyph. The `onComponentMount` logic to do this has been removed.
* Status view defaults to a "top centering", based on available size and remaining space. The top will contain `40%` of space, while the remaining `60%` is delegated to the bottom. Use `setAlignTop` to remove this distribution and render the status view at the top of the page.

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
