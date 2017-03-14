# Terra Compact Card

The Terra CompactCard component allows displays to be organized into rows and column and themed, while providing means to add accessory elements.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-compact-card`
  - `yarn add terra-compact-card`

## React Usage

The React component can be initialized like so:
```
import CompactCard from 'CompactCard;

<CompactCard
  layout="oneColumn"
  textEmphasis="default"
  isTruncated=true
  accessoryAlignment="top"
  leftAccesory=<img alt="Graphic" />
  displays={[<CompactCard.Display text="display 1" />, <CompactCard.Display text="display 2" />]}
  comment=<Comment text="comment" />
/>

<Display
  text="display text"
  textStyle="attention"
  isTruncated=true
  icon=<img alt="Graphic" />
/>

<Comment
  text="display text"
  style="attention"
  isTruncated=true
/>
```

## React Props

| Prop | Type | Default | Description|
|------|------|---------|------------|
|`layout`|String|`oneColumn`|The number of columns used to layout display. One of `oneColumn` or `twoColumns`.|
|`textEmphasis`|String|`default`|The emphasis of text, left or default right. One of `defaultTheme` or `leftEmphasisTheme`. |
|`isTruncated`|Bool|false|The indicator if text should be truncated by default across the tile.|
|`accessoryAlignment`|String|`alignCenter`|The vertical alignment left and right accessories. One of `alignTop` or `alignCenter`.|
|`leftAccessory`|Element||The left aligned accessory, generally a graphic.|
|`rightAccessory`|Element||The right aligned accessory, generally a graphic.|
|`displays`|Array||An array of Display React elements.|
|`comment`|Element||A Comment React element.|