# Terra Button _(Currently in beta)_

The terra-button component provides users a way to trigger actions in the UI.
It can be modified in color, size, and type, and can optionally display an icon.

## Getting Started

- Install with [npm](https://www.npmjs.com): `npm install terra-button`
- [Download the latest version](https://github.com/cerner/terra-button/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-button.git`

## Themeable Variables

Variables to `theme` the terra-button component.

| Variable Name                        | Default value      | Usage                         |
|--------------------------------------|--------------------|-------------------------------|
| $terra-button-border-radius          | 0.25em             | Set the button border radius  |
| $terra-button-border-style           | solid              | Set the button border style   |
| $terra-button-border-width           | 1px                | Set the button border width   |
| $terra-button-font-family            | $terra-font-family | Set the button font family    |
| $terra-button-font-weight            | 400                | Set the button font weight    |
| $terra-button-margin                 | 0 0.714em 0 0      | Set the button margin         |
| $terra-button-padding                | 0.286em 0.714em    | Set the button padding        |
| $terra-button-text-transform         | none               | Set the button text transform |

### Variable Maps

__$terra-button-font-sizes__

Map Structure

| Name   | Default value | Usage                    |
|--------|---------------|--------------------------|
| tiny   | 0.5rem        | Set the button font size |
| small  | 0.8rem        | Set the button font size |
| medium | 1rem          | Set the button font size |
| large  | 1.4rem        | Set the button font size |
| huge   | 1.7rem        | Set the button font size |

__$terra-button-default-color-scheme__

Map Structure

| Name                      | Default value   | Usage                                             |
|---------------------------|-----------------|---------------------------------------------------|
| active-background-color   | $terra-grey-80  | Set the button active state background color      |
| active-border-color       | $terra-grey-80  | Set the button active state border color          |
| active-color              | $terra-white    | Set the button active state text color            |
| background-color          | $terra-grey-20  | Set the button default state background color     |
| border-color              | $terra-grey-30  | Set the button default state border color         |
| color                     | $terra-grey-90  | Set the button default state text color           |
| disabled-background-color | $terra-grey-10  | Set the button disabled state background color    |
| disabled-border-color     | $terra-grey-20  | Set the button disabled state border color        |
| disabled-color            | $terra-grey-50  | Set the button disabled state text color          |
| hover-background-color    | $terra-grey-30  | Set the button hover/focus state background color |
| hover-color               | $terra-grey-100 | Set the button hover/focus state text color       |
| link-color                | $terra-grey-80  | Set the link button text color                    |
| outline-color             | $terra-grey-80  | Set the outline button text color                 |

__$terra-button-primary-color-scheme__

Map Structure

| Name                      | Default value   | Usage                                                       |
|---------------------------|-----------------|-------------------------------------------------------------|
| active-background-color   | $terra-primary-color-100  | Set the button active state background color      |
| active-border-color       | $terra-grey-90            | Set the button active state border color          |
| active-color              | $terra-white              | Set the button active state text color            |
| background-color          | $terra-primary-color-80   | Set the button default state background color     |
| border-color              | $terra-primary-color-90   | Set the button default state border color         |
| color                     | $terra-white              | Set the button default state text color           |
| disabled-background-color | $terra-primary-color-20   | Set the button disabled state background color    |
| disabled-border-color     | $terra-primary-color-30   | Set the button disabled state border color        |
| disabled-color            | $terra-grey-50            | Set the button disabled state text color          |
| hover-background-color    | $terra-primary-color-90   | Set the button hover/focus state background color |
| hover-color               | $terra-white              | Set the button hover/focus state text color       |
| link-color                | $terra-primary-color-90   | Set the link button text color                    |
| outline-color             | $terra-primary-color-90   | Set the outline button text color                 |

__$terra-button-secondary-color-scheme__

Map Structure

| Name                      | Default value              | Usage                                             |
|---------------------------|----------------------------|---------------------------------------------------|
| active-background-color   | $terra-secondary-color-90  | Set the button active state background color      |
| active-border-color       | $terra-secondary-color-100 | Set the button active state border color          |
| active-color              | $terra-white               | Set the button active state text color            |
| background-color          | $terra-secondary-color-50  | Set the button default state background color     |
| border-color              | $terra-secondary-color-80  | Set the button default state border color         |
| color                     | $terra-black               | Set the button default state text color           |
| disabled-background-color | $terra-secondary-color-20  | Set the button disabled state background color    |
| disabled-border-color     | $terra-secondary-color-30  | Set the button disabled state border color        |
| disabled-color            | $terra-grey-50             | Set the button disabled state text color          |
| hover-background-color    | $terra-secondary-color-60  | Set the button hover/focus state background color |
| hover-color               | $terra-black               | Set the button hover/focus state text color       |
| link-color                | $terra-secondary-color-90  | Set the link button text color                    |
| outline-color             | $terra-secondary-color-90  | Set the outline button text color                 |

__$terra-button-positive-color-scheme__

Map Structure

| Name                      | Default value             | Usage                                             |
|---------------------------|---------------------------|---------------------------------------------------|
| active-background-color   | $terra-positive-color-90  | Set the button active state background color      |
| active-border-color       | $terra-positive-color-100 | Set the button active state border color          |
| active-color              | $terra-white              | Set the button active state text color            |
| background-color          | $terra-positve-color-50   | Set the button default state background color     |
| border-color              | $terra-positve-color-80   | Set the button default state border color         |
| color                     | $terra-black              | Set the button default state text color           |
| disabled-background-color | $terra-positve-color-20   | Set the button disabled state background color    |
| disabled-border-color     | $terra-positve-color-30   | Set the button disabled state border color        |
| disabled-color            | $terra-grey-50            | Set the button disabled state text color          |
| hover-background-color    | $terra-positve-color-60   | Set the button hover/focus state background color |
| hover-color               | $terra-black              | Set the button hover/focus state text color       |
| link-color                | $terra-positve-color-90   | Set the link button text color                    |
| outline-color             | $terra-positve-color-90   | Set the outline button text color                 |

__$terra-button-negative-color-scheme__

Map Structure

| Name                      | Default value              | Usage                                             |
|---------------------------|----------------------------|---------------------------------------------------|
| active-background-color   | $terra-negative-color-90   | Set the button active state background color      |
| active-border-color       | $terra-negative-color-100  | Set the button active state border color          |
| active-color              | $terra-white               | Set the button active state text color            |
| background-color          | $terra-negative-color-70   | Set the button default state background color     |
| border-color              | $terra-negative-color-80   | Set the button default state border color         |
| color                     | $terra-white               | Set the button default state text color           |
| disabled-background-color | $terra-negative-color-20   | Set the button disabled state background color    |
| disabled-border-color     | $terra-negative-color-30   | Set the button disabled state border color        |
| disabled-color            | $terra-grey-50             | Set the button disabled state text color          |
| hover-background-color    | $terra-negative-color-80   | Set the button hover/focus state background color |
| hover-color               | $terra-white               | Set the button hover/focus state text color       |
| link-color                | $terra-negative-color-80   | Set the link button text color                    |
| outline-color             | $terra-negative-color-80   | Set the outline button text color                 |

__$terra-button-warning-color-scheme__

Map Structure

| Name                      | Default value              | Usage                                             |
|---------------------------|----------------------------|---------------------------------------------------|
| active-background-color   | $terra-warning-color-100   | Set the button active state background color      |
| active-border-color       | $terra-warning-color-100   | Set the button active state border color          |
| active-color              | $terra-white               | Set the button active state text color            |
| background-color          | $terra-warning-color-60    | Set the button default state background color     |
| border-color              | $terra-warning-color-100   | Set the button default state border color         |
| color                     | $terra-black               | Set the button default state text color           |
| disabled-background-color | $terra-warning-color-20    | Set the button disabled state background color    |
| disabled-border-color     | $terra-warning-color-30    | Set the button disabled state border color        |
| disabled-color            | $terra-grey-50             | Set the button disabled state text color          |
| hover-background-color    | $terra-warning-color-70    | Set the button hover/focus state background color |
| hover-color               | $terra-black               | Set the button hover/focus state text color       |
| link-color                | $terra-warning-color-100   | Set the link button text color                    |
| outline-color             | $terra-warning-color-100   | Set the outline button text color                 |

__$terra-button-info-color-scheme__

Map Structure

| Name                      | Default value         | Usage                                             |
|---------------------------|-----------------------|---------------------------------------------------|
| active-background-color   | $terra-info-color-100 | Set the button active state background color      |
| active-border-color       | $terra-grey-90        | Set the button active state border color          |
| active-color              | $terra-white          | Set the button active state text color            |
| background-color          | $terra-info-color-80  | Set the button default state background color     |
| border-color              | $terra-info-color-90  | Set the button default state border color         |
| color                     | $terra-white          | Set the button default state text color           |
| disabled-background-color | $terra-info-color-20  | Set the button disabled state background color    |
| disabled-border-color     | $terra-info-color-30  | Set the button disabled state border color        |
| disabled-color            | $terra-grey-50        | Set the button disabled state text color          |
| hover-background-color    | $terra-info-color-90  | Set the button hover/focus state background color |
| hover-color               | $terra-white          | Set the button hover/focus state text color       |
| link-color                | $terra-info-color-90  | Set the link button text color                    |
| outline-color             | $terra-info-color-90  | Set the outline button text color                 |

## Usage

Add the class `terra-Button` to the `button`, `input[type="button"]`, `input[type="submit"]`, or `input[type="reset"]` elements.
There are additional modifier classes for button color, size, and style.
