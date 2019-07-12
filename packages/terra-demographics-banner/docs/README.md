# Terra Demographics Banner

The demographics component is used to display demographic information about a person in a condensed, easy to read format. Demographics Banner must be inside the Base component with locale. All related translations are required to be loaded before Demographics Banner renders.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-demographics-banner`
  - `yarn add terra-demographics-banner`

## Implementation Notes:

The Demographics-Banner component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Usage

```jsx
import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from 'terra-demographics-banner';

// DemographicsBanner must be inside the Base component with locale
<DemographicsBanner
  applicationContent={<span className="risk-score">5%</span>}
  age="25 Years"
  dateOfBirth="May 9, 1993"
  gender="Male"
  gestationalAge="April 5, 2016"
  identifiers={{ MRN: 12343, REA: '3JSDA' }}
  photo={<Image alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
  personName="Johnathon Doe"
  postMenstrualAge="April 7, 2016"
  preferredFirstName="John"
/>
```

The demographics banner will display differently depending on the resolution of the browser. If the resolution is less than that of the standard tablet width (767px), then the demographics banner will be stacked, and the profile image will not be displayed. If the resolution is greater than or equal to the tablet width, the banner will display horizontally, and the profile image will be displayed to the user.

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
