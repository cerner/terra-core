# Terra Detail View

The Detail View component allows you to create a view with text at different levels of importance. A detail view can contain a title, subtitles, a data visualization, and a list of elements that can display information at a more detailed level.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-detail-view`
  - `yarn add terra-detail-view`

## Usage

```jsx
import React from 'react';
import DetailView from 'terra-detail-view';

<DetailView {
  title={<div className="terra-Title terra-Title--large">Header</div>}
  subtitles={[<DetailView.Subtitle text="Subtitle 1" key="Subtitle1" />, <DetailView.Subtitle text="Subtitle 2" key="Subtitle2" />]}
  graph={<div> This is where a graph would go </div>}
  details={[<Grid />]}
  footer="Footer text"
  isDivided
} />
```
