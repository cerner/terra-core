# Terra Menu

The terra-menu component displays grouped navigation actions. It can be used for site wide navigation or for switching between documents in a container.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-menu`
  - `yarn add terra-menu`

## Usage

The menu consists minimally of:

- A container with the class of `terra-Menu`
- Child containers with the class of `terra-Menu-item`

- Active menu items have the class `is-active`

There are additional modifier classes for menu orientation.

#### Orientation

The terra-menu component has two orientation modifiers. The orientation modifier must be either horizontal or vertical.
To change the orientation add the following classes on a header tag:

- `terra-Menu--horizontal`
- `terra-Menu--vertical`
