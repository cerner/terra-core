# Terra Arrange

The arrange component provides content containers with a fit (start and/or end region) and fill (middle region).

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-arrange`
  - `yarn add terra-arrange`

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
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

