# Terra Legacy Theme

The legacy-theme component sets global variables for the entire application. Global variables are included for responsive breakpoints, colors, and typography.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-legacy-theme`
  - `yarn add terra-legacy-theme`

## Usage

In your webpack v2 config, add the following:

```js
module: {
  loaders: [
    {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                Autoprefixer({
                  browsers: [
                    'ie >= 10',
                    'last 2 versions',
                    'last 2 android versions',
                    'last 2 and_chr versions',
                    'iOS >= 8',
                  ],
                }),
              ];
            },
          },
        }, {
          loader: 'sass-loader',
          options: {
            data: `@import "${path.resolve(path.join(__dirname, 'node_modules/terra-legacy-theme/lib/LegacyTheme.scss'))}"; $terra-bidi: true;`,
          },
        }],
      }),
    },
  ],
},
plugins: [
  new ExtractTextPlugin('[name].css'),
]
```
