# Terra Status Documentation

Status component adds a color bar to the left (right in RTL mode) of an content to signify a specific status.

### API Props
| Prop            | Type   | Required   | Description                                                          |
|-----------------|-----------|-----------|----------------------------------------------------------------------|
| color        | String   |  Yes    | The color of indicator. It can be color code in either format (yellow, #00ff00, rgb(255,0,255))       |
| children        | Element   |  Yes  | Component to display next to the indicator |

### Component Usage

```
<Status color='blue' > {component} </Status>;

<Status color='#00ff00' > {component} </Status>;

<Status color='rgb(255,0,255)' > {component} </Status>;
```
