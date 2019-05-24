# Terra Legacy Theme

[![NPM version](https://badgen.net/npm/v/terra-legacy-theme)](https://www.npmjs.org/package/terra-legacy-theme)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.com/cerner/terra-core)


- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Format 1 - Root Theme](#format-1---root-theme)
    - [Format 1 Setup](#format-1-setup)
    - [PostCSS Assets Plugin Webpack Config](#postcss-assets-plugin-webpack-config)
  - [Format 2 - Scoped Theme](#format-2---scoped-theme)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-legacy-theme`

## Usage
This project offers two formats of terra-legacy-theme based around [browsers support for native CSS custom properties](http://caniuse.com/#search=custom%20properties) .

* One that can be used in browsers that support native support for CSS custom properties as well as browsers that lack support for native CSS custom properties.
* One that can only be used in browsers that support native support for CSS custom properties.

It is recommended to use the first format when using terra-legacy-theme as your default theme.

### Format 1 - Root Theme
This theme format can be used to replace terra's default theme variables with custom theme variables and can be compiled turning the themed CSS custom properties into static values. The static values work in both browsers that lack support for native CSS custom properties and browsers that support CSS custom properties.

In your application, import the `terra-legacy-theme` module like so:

```js
// ES6 import
import 'terra-legacy-theme';
```

#### Format 1 Setup

You'll need to set up some PostCSS tools to ensure the terra-legacy-theme can be compiled correctly.

* [postcss-assets-webpack-plugin](https://github.com/klimashkin/postcss-assets-webpack-plugin)
* [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)

`npm install postcss-assets-webpack-plugin --save-dev`

`npm install postcss-custom-properties --save-dev`

The postcss-assets-webpack-plugin gets css, extracted by [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) and applies postcss plugins to it.

This means you should also have extract-text-webpack-plugin setup in your webpack config. We recommend setting up the ExtractTextPlugin as outlined in the [Terra Getting Started Guide](https://terra-ui.herokuapp.com/getting-started#configuring-webpack) which includes a sample webpack config.

Alternatively, if you use [terra-toolkit's provided default webpack config](https://github.com/cerner/terra-toolkit/blob/master/config/webpack/webpack.config.js), it has all of this configured.


#### PostCSS Assets Plugin Webpack Config

In you webpack config, add the following:

```js
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const PostCSSCustomProperties = require('postcss-custom-properties');
```

In the plugins section of your webpack config, add the following:

```js
plugins: [
  new PostCSSAssetsPlugin({
    test: /\.css$/,
    log: false,
    plugins: [
      PostCSSCustomProperties(),
    ],
  }),
],
```

If you want to compile the CSS custom properties to static values while also maintaining them to make dynamic theme changes in browsers that support CSS custom properties, pass the `preserve: true` config option to the `PostCSSCustomProperties` plugin.

```js
plugins: [
 new PostCSSAssetsPlugin({
   test: /\.css$/,
   log: false,
   plugins: [
     PostCSSCustomProperties({ preserve: true }),
   ],
 }),
],
```

This will compile the custom properties in this order:

```
color: #f00; // Compiled static value
color: var(--theme-color, #f00); // CSS custom property
```

### Format 2 - Scoped Theme
This format cannot be used to compile the themed CSS custom properties into static values. It is intended to be used to replace terra's default theme variables with custom theme variables in browsers that have native support for CSS custom properties.

In your application, import the `terra-legacy-theme` module. This will apply the themed CSS custom properties under a class name. This class can be used with the [terra-theme-provider](https://www.npmjs.com/package/terra-theme-provider) component to apply the themed CSS custom properties:

```js
// ES6 import
import React from 'react';
import CernerConsumerTheme from 'terra-legacy-theme/scoped-theme';
import ThemeProvider from 'terra-theme-provider';

<ThemeProvider isGlobalTheme themeName={CernerConsumerTheme.themeName}>
  <App />
</ThemeProvider>
```

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
