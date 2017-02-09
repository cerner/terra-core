# Terra Badge

The Terra Badge component displays content classification

## Getting Started

- Install with [npmjs](https://www.npmjs.com): 
  - `npm install terra-badge` 
  - `yarn install terra-badge` 
- [Download the latest version](https://github.com/cerner/terra-badge/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-badge.git`

## Usage

Add the class `terra-Badge` to the `span` element.
There are additional modifier classes for badge intent and size.
Badge can optionally have icons. 

## React Props
Prop         | Type           | Default         | Description
------------ | -------------- | --------------- | -----------
`text` | String | | The text content to be  displayed on the badge
`size` | String | `small` | Sets the size of the badge from the following values; `tiny`, `small`, `medium`, `large` and `huge`
`intent` | String | `default(Grey)` | Sets a color to the badge, which can be `default`, `primary`, `secondary`, `warning`, `info`, `positive`, `negative`
`icon` | Icon component | | The image content to be  displayed on the badge.
`isReversed` | Boolean | false | Flag to reverse the placement of content and icon. Default is false, content will be placed after the icon