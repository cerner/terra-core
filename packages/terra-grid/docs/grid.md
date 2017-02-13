# Terra Grid

The Terra Grid component provides a flexbox based grid system.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-grid`
  - `yarn install terra-grid`
- [Download the latest version](https://github.com/cerner/terra-grid/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-grid.git`
- Run the project with: `npm run start`

## React Usage

The React component can be initialized like so:
```
import Grid from 'terra-grid';

<Grid>
  <Grid.Row>
    <Grid.Column tiny={6} small={5} medium={4} large={3} huge={2}>
      <p> First Column content </p>
    </Grid.Column>
    <Grid.Column col={3}>
      <p> Second Column content </p>
    </Grid.Column>
  </Grid.Row>
</Grid>

```

## React Props

### Grid Props

| Prop       | Type    | Required  | Description                                        |
| ------     | ------  | --------- | ------------                                       |
| `children` | Element | Yes       | The component that will be displayed at row level. |

### Grid.Row Props

| Prop       | Type    | Required  | Description                                           |
| ------     | ------  | --------- | ------------                                          |
| `children` | Element | Yes       | The component that will be displayed at column level. |

### Grid.Column Props

| Prop       | Type    | Required  | Description                                                                  |
| ------     | ------  | --------- | ------------                                                                 |
| `children` | Element | No        | The component that will be displayed in cell level.                          |
| `col`      | Number  | No        | The number of columns across all breakpoints. From 1-12(inclusively).        |
| `tiny`     | Number  | No        | The number of columns starts from tiny breakpoint. From 1-12(inclusively).   |
| `small`    | Number  | No        | The number of columns starts from small breakpoint. From 1-12(inclusively).  |
| `medium`   | Number  | No        | The number of columns starts from medium breakpoint. From 1-12(inclusively). |
| `large`    | Number  | No        | The number of columns starts from large breakpoint. From 1-12(inclusively).  |
| `huge`     | Number  | No        | The number of columns starts from huge breakpoint. From 1-12(inclusively).   |
