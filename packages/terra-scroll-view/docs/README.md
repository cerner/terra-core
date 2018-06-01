# Terra Scroll View

The terra-scroll-view is a content view that hides data accessible with scrolling and provides a refCallback. The expectation is that any consumer needing to provide a scrollable area within their implementation should be using this component, or one of our other terra components that implements ScrollView.

ScrollView provides a menthod to access the node managing scrolling, so values such as scrollTop can be easily set, as well as the correct prefixes to consistently sytle scrolling across supported browsers.

The terra-scroll-view expands to fill it's parent container, so parent nodes are expected to have an explicit height set.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-scroll-view`
  - `yarn add terra-scroll-view`

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
