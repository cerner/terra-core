# Terra Demographics Banner

The demographics component is used to display demographic information about a person in a condensed, easy to read format.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-demographics-banner`
  - `yarn add terra-demographics-banner`

## Usage

```jsx
import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';

<DemographicsBanner
  applicationContent={<span className="risk-score">5%</span>}
  age="25 Years"
  dateOfBirth="May 9, 1993"
  dateOfBirthLabel="DOB"
  gender="Male"
  gestationalAge="April 5, 2016"
  gestationalAgeLabel="GA"
  identifiers={{ MRN: 12343, REA: '3JSDA' }}
  photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
  personName="Johnathon Doe"
  postMenstrualAge="April 7, 2016"
  postMenstrualAgeLabel="PMA"
  preferredFirstName="John"
/>
```

The demographics banner will display differently depending on the resolution of the browser. If the resolution is less than that of the standard tablet width (767px), then the demographics banner will be stacked, and the profile image will not be displayed. If the resolution is greater than or equal to the tablet width, the banner will display horizontally, and the profile image will be displayed to the user.
