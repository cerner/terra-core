# Terra Mixins _(Currently in beta)_

The terra-mixins component supplies global mixins for use throughout the Terra ecosystem.

## Getting Started

- Install with [npm](https://www.npmjs.com): `npm install terra-mixins`
- [Download the latest version](https://github.com/cerner/terra-mixins/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-mixins.git`

## Usage

### Bidirectionality (bidi) Mixins

Terra leverages the `dir` attribute set on the opening HTML tag for styles to render correctly. 
The dir attribute indicates the directionality of the element's text.

Terra supports the following dir attribute values:

- `ltr`: which means left to right and is used for languages that are written from the left to the right (like English);
- `rtl`: which means right to left and is used for languages that are written from the right to the left (like Arabic);

As the directionality of the text is semantically related to its content and not to its presentation, it is recommended that web developers use this attribute instead of the related CSS properties when possible. That way, the text will display correctly even on a browser that doesn't support CSS or has the CSS deactivated.

The bidi mixins generate styles with directionality in mind if desired.
If not desired, then styles will render assuming `ltr`.

#### Notes

- `start` implies the beginning of the text direction flow (left in ltr)
- `end` implies the end of the text direction flow (right in ltr)
- If a mixin has a `start` option it will have a corresponding `end` option

#### terra-border-color-start / terra-border-color-end
Adds the border color to either the `start` or `end` text direction.

##### Inputs

| Input  | Description                    |
|--------|--------------------------------|
| $color | The desired border color value |

#### terra-border-style-start / terra-border-style-end
Adds the desired border-style to either the `start` or `end` text direction.

##### Inputs

| Input  | Description              |
|--------|--------------------------|
| $style | The desired border style |

#### terra-border-width-start / terra-border-width-end
Adds the desired border width to either the `start` or `end` text direction.

##### Inputs

| Input  | Description              |
|--------|--------------------------|
| $width | The desired border width |

#### terra-border-start / terra-border-end
Adds the desired border style to either the `start` or `end` text direction.

##### Inputs

| Input  | Description              |
|--------|--------------------------|
| $width | The desired border width |
| $style | The desired border style |
| $color | The desired border color |

#### terra-border-top-radius-start / terra-border-top-radius-end
Adds the top border radius styles to either the `start` or `end` text direction.

##### Inputs

| Input   | Description               |
|---------|---------------------------|
| $radius | The desired border radius |

#### terra-border-bottom-radius-start / terra-border-bottom-radius-end
Adds the bottom border radius styles to either the `start` or `end` text direction.

##### Inputs

| Input   | Description               |
|---------|---------------------------|
| $radius | The desired border radius |

#### terra-border-top-radius
Adds both of the top `start` and `end` border radii. This mixin ensures that the necessary specificity is in place when bidi styles are desired.

##### Inputs

| Input   | Description               |
|---------|---------------------------|
| $radius | The desired border radius |

#### terra-border-bottom-radius
Adds both of the bottom `start` and `end` border radii. This mixin ensures that the necessary specificity is in place when bidi styles are desired.

##### Inputs

| Input   | Description               |
|---------|---------------------------|
| $radius | The desired border radius |

#### terra-border-radius-start / terra-border-radius-end
Adds both the top and bottom border radii for the `start` or `end` text direction.

##### Inputs

| Input   | Description               |
|---------|---------------------------|
| $radius | The desired border radius |

#### terra-clear-both
Adds the `clear: both;` style with appropriate specificity for bidi styles when needed.

#### terra-clear-start / terra-clear-start 
Adds clear styles in either the `start` or `end` text direction.

#### terra-float-start / terra-float-end
Adds float styles in either the `start` or `end` text direction.

#### terra-float-none
Adds the `float: none;` style with appropriate specificity for bidi styles when needed.

#### terra-margin-start / terra-margin-end
Adds margin to either the `start` or `end` text direction.

##### Inputs

| Input   | Description                  |
|---------|------------------------------|
| $margin | The desired amount of margin |

#### terra-margin-horizontal
Adds margin to both the `start` and `end` text direction positions.

##### Inputs

| Input         | Description                                                  |
|---------------|--------------------------------------------------------------|
| $margin-start | The desired amount of margin to apply to the `start` direction |
| $margin-end   | The desired amount of margin to apply to the `end` direction   |

#### terra-padding-start / terra-padding-end
Adds padding to either the `start` or `end` text direction.

##### Inputs

| Input    | Description                   |
|----------|-------------------------------|
| $padding | The desired amount of padding |

#### terra-padding-horizontal
Adds padding to both the `start` and `end` text direction positions.

##### Inputs

| Input          | Description                                                   |
|----------------|---------------------------------------------------------------|
| $padding-start | The desired amount of padding to apply to the `start` direction |
| $padding-end   | The desired amount of padding to apply to the `end` direction   |

#### terra-position-start / terra-position-end
Defines how far to move an element from it's current position in the `start` or `end` text direction.

##### Inputs

| Input  | Description                       |
|--------|-----------------------------------|
| $value | How far to push away from the edge |

#### terra-text-align-start / terra-text-align-end
Align the text in the `start` or `end` text direction.

#### terra-text-align-center
Center align text with appropriate specificity for bidi styles when needed.

#### terra-translate
2d translate an element with automatic respect to text direction.


##### Inputs

| Input | Description             |
|-------|-------------------------|
| $x    | Translate x-coordinates |
| $y    | Translate y-coordinates |

#### terra-translate3d
3d translate an element with automatic respect to text direction.

##### Inputs

| Input | Description             |
|-------|-------------------------|
| $x    | Translate x-coordinates |
| $y    | Translate y-coordinates |
| $z    | Translate z-coordinates |
