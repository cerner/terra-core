# Terra Arrange

The arrange component provides content containers with a fit (start and/or end region) and fill (middle region).

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-arrange`
  - `yarn add terra-arrange`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app to properly function as designed.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |

<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

```jsx
<Arrange
  fitStart={<React component>}
  fill={<React component>}
/>

<Arrange
  fill={<React component>}
  fitEnd={<React component>}
/>

<Arrange
  fitStart={<React component>}
  fill={<React component>}
  fitEnd={<React component>}
  align="center"
/>

<Arrange
  fitStart={<React component>}
  fill={<React component>}
  fitEnd={<React component>}
  alignFitStart="center"
  alignFill="bottom"
  alignFitEnd="stretch"
  fitStartAttributes={{ style: { maxWidth: '10px' } }}
  fillAttributes={{ style: { maxWidth: '20px' } }}
  fitEndAttributes={{ style: { maxWidth: '30%' } }}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
