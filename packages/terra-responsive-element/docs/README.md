# Terra Responsive Element

The Responsive Element provides a way to conditionally render components during breakpoint or resize changes.

The Responsive Element can be set to be responsive to the parent of the component or the window. By default, event listeners will be bound to the immediate parent of the component and invoke the onChange and onResize callback functions as a result of resize changes to the bound target.

## Additional Notes

The Responsive Element observes the total width of the bound container. Padding and borders are included in the calculation to determine the available width. Margins are not included. For breakpoint accuracy it is not recommended to set padding on the parent container when responsiveTo is set to parent. For more details on how box-sizing affects the dom box model see: <https://css-tricks.com/almanac/properties/b/box-sizing/>

For consistency, breakpoint ranges are inherited from [terra-breakpoints](https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about).

For the uncontrolled version of this component it is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found.

## Getting Started

* Install with [npmjs](https://www.npmjs.com):
  * `npm install terra-responsive-element`
  * `yarn add terra-responsive-element`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
