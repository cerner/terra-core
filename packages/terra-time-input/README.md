# Terra Time Input

[![NPM version](http://img.shields.io/npm/v/terra-time-input.svg)](https://www.npmjs.org/package/terra-time-input)
[![Build Status](https://travis-ci.org/cerner/terra-core.svg?branch=master)](https://travis-ci.org/cerner/terra-core)

The terra-time-input component is a controlled input component for entering time. It is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

The currently supported time format is the 24-hour format (hh:mm). The time input enforces the entry that masks to the format. The hour input only accepts values between 00 and 23 and the minute input only accepts values between 00 and 59. For example, a time of 25:65 cannot be entered. A 0 will automatically be prepended to the hour if the entered hour is greater than 2. Likewise, a 0 will automatically be prepended to the minute if the entered minute is greater than 5.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-time-input/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-time-input`

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
