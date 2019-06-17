# Terra Responsive Element

The Responsive Element provides a way to conditionally render components during breakpoint or resize changes.

The Responsive Element can be set to be responsive to the parent of the component or the window. By default, event listeners will be bound to the immediate parent of the component and invoke the onChange and onResize callback functions as a result of resize changes to the bound target.

## Additional Notes

For consistency, breakpoint ranges are inherited from [terra-breakpoints](https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about).

The Responsive Element observes the available width. Meaning padding, borders, and margins set on the parent are not included in the calculation. Modifying box-sizing will impact how these properties are used in an elements width calculation. For more details see: <https://css-tricks.com/almanac/properties/b/box-sizing/>

For the uncontrolled version of this component it is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found.

## Getting Started

* Install with [npmjs](https://www.npmjs.com):
  * `npm install terra-responsive-element`
  * `yarn add terra-responsive-element`

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
