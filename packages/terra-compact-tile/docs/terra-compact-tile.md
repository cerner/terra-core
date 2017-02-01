# Terra CompactTile

The Terra CompactTile component allows displays to be organized into rows and column and themed, while providing means to add accessory elements.

## Getting Started

- Install with [npmjs](https://www.npmjs.com): 
  - `npm install terra-compact-tile` 
  - `yarn install terra-compact-tile` 
- [Download the latest version](https://github.com/cerner/terra-compact-tile/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-compact-tile.git`
- Run the project with: `npm run start`

## React Usage

The React component can be initialized like so:
```
import CompactTile from 'terra-compact-tile';

<CompactTile
  layout="oneColumn"
  theme="defaultTheme"
  isTruncated=true
  accessoryAlignment="top"
  leftAccesory=<img alt="Graphic" />
  displays={[<Display text="display 1" />, <Display text="display 2" />]}
  comment=<Comment text="comment" />
/>

<Display
  text="display text"
  style="attention"
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
|`layout`|String|`oneColumn`|The number of columns used to layout display, one or two.|
|`theme`|String|`defaultTheme`|The emphasis of text, left or default right.|
|`isTruncated`|Bool|false|The indicator if text should be truncated by default across the tile.|
|`accessoryAlignment`|String|`center`|The vertical alignment left and right accessories.|
|`leftAccessory`|Element||The left aligned accessory, generally a graphic.|
|`rightAccessory`|Element||The right aligned accessory, generally a graphic.|
|`displays`|Array||An array of Display React elements.|
|`comment`|Element||A Comment React element.|