# Terra Scroll

The terra-scroll is a content view that hides data accessible with scrolling and provides a refCallback. The expectation is that any consumer needing to provide a scrollable area within their implementation should be using this component, or one of our other terra components that implements Scroll.

Scroll provides a menthod to access the node managing scrolling, so values such as scrollTop can be easily set, as well as the correct prefixes to consistently sytle scrolling across supported browsers.

The terra-scroll expands to fill it's parent container, so parent nodes are expected to have an explicit height set.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-scroll`
  - `yarn add terra-scroll`

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
