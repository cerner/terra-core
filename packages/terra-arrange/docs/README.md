# Terra Arrange Documentation

### Arrange containers
The arrange component provides content containers with a fit (start and/or end region) and fill (middle region)

### API Props
| Prop            | Type   | Default   | Description                                                          |
|-----------------|-----------|-----------|----------------------------------------------------------------------|
| fitStart        | ReactComponent   |      | The content to display in the body of the fitStart        |
| fill        | ReactComponent   |    | The content to display in the body of the fill (required)       |
| fitEnd        | ReactComponent   |      | The content to display in the body of the fitEnd        |
| align        | String  | top  | The vertical orientation of all three containers. It will  override the aligment of alignFitStart, alignFill and alignFitEnd if given. One of: center/bottom/stretch.|
| alignFitStart| String  | top  | The vertical orientation of fitStart. One of: center/bottom/stretch. |
| alignFill   | String   | top   | The vertical orientation of fill. One of: center/bottom/stretch.|
| alignFitEnd | String   | top   | The vertical orientation of fitEnd. One of: center/bottom/stretch.|
Note: At least one of the props: [fitStart, fitEnd] should be supplied.

### Component Usage

```
<Arrange
  fitStart=<React component>
  fill=<React component>
/>

<Arrange
  fill=<React component>
  fitEnd=<React component>
/>

<Arrange
  fitStart=<React component>
  fill=<React component>
  fitEnd=<React component>
  align="center"
/>

<Arrange
  fitStart=<React component>
  fill=<React component>
  fitEnd=<React component>
  alignFitStart="center"
  alignFill="bottom"
  alignFitEnd="stretch"
/>
```
