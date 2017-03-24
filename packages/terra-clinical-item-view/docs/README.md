# Terra Clinical Item View

The Terra ClinicalItemView component allows displays to be organized into rows and column and themed, while providing means to add accessory elements.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-item-view`
  - `yarn add terra-clinical-item-view`

## React Usage

The React component can be initialized like so:
```
import ClinicalItemView from 'terra-clinical-item-view';

<ClinicalItemView
  layout="oneColumn"
  textEmphasis="default"
  isTruncated
  accessoryAlignment="top"
  leftAccesory=<img alt="Graphic" />
  displays={[<ClinicalItemView.Display text="display 1" />, <ClinicalItemView.Display text="display 2" />]}
  comment=<ClinicalItemView.Comment text="comment" />
/>

<Display
  text="display text"
  textStyle="attention"
  isTruncated
  icon=<img alt="Graphic" />
/>

<Comment
  text="display text"
  textStyle="attention"
  isTruncated
/>
```

## React Props

| Prop | Type | Default | Description|
|------|------|---------|------------|
|`layout`|String|`oneColumn`|The number of columns used to layout display. One of `oneColumn` or `twoColumns`.|
|`textEmphasis`|String|`default`|The emphasis of text, left or default right. One of `default` or `start`. |
|`isTruncated`|Bool|false|The indicator if text should be truncated by default across the tile.|
|`accessoryAlignment`|String|`alignCenter`|The vertical alignment left and right accessories. One of `alignTop` or `alignCenter`.|
|`startAccessory`|Element||The start aligned accessory, generally a graphic.|
|`endAccessory`|Element||The end aligned accessory, generally a graphic.|
|`displays`|Array||An array of Display React elements.|
|`comment`|Element||A Comment React element.|