# Terra Legacy Theme

The legacy-theme component sets global variables for the entire application. Global variables are included for responsive breakpoints, colors, and typography.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-legacy-theme`
  - `yarn add terra-legacy-theme`

## Usage

In your webpack config, add the following:

```js
module: {
  loaders: [
    {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
    },
  ],
},
sassLoader: {
  data: `@import "${path.resolve(path.join(__dirname, 'node_modules/terra-legacy-theme/src/LegacyTheme.scss'))}";`,
},
```
