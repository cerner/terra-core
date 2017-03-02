# Terra Arrange

The arrange component provides content containers with a fit (start and/or end region) and fill (middle region).

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-arrange`
  - `yarn install terra-arrange`

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
