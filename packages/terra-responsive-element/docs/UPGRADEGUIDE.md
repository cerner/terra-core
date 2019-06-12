# Terra Responsive Element Upgrade Guide

## Changes from 4.0 to 5.0

### Breaking Changes

* The `breakpoints.scss` file has been removed.
* The `defaultElement` prop has been removed.
* The breakpoint ranges have been changed to align with [terra-breakpoints](https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about).

### New Features

* Added an `onChange` callback function that is invoked when a breakpoint range changes to enable creating controlled ResponsiveElements.
* Added an `onResize` callback function that is invoked when the responsive target triggers a resize event.
* Added `children` as a prop to use in conjunction with `onChange` to create controlled components.

### Breakpoint Changes

The breakpoint ranges have all shifted. This change was made to remove the ambiguous breakpoint range in-between 0 and tiny. Previously tiny started at 544px. The range from 0 to 543px had no associated breakpoint, it was considered the default size. Tiny now starts at 0.

| Breakpoint | Previous | Updated |
|---|---|---|
| tiny | 544 - 767 | 0 - 543 |
| small | 768 - 991 | 544 - 767 |
| medium | 992 - 1215 | 768 - 991 |
| large | 1216 - 1439 | 992 - 1215 |
| huge | 1440 - ∞ | 1216 - 1439 |
| enormous | -- | 1440 - ∞ |

To upgrade, shift all declared breakpoint ranges by one range.

* defaultElement -> tiny
* tiny -> small
* small -> medium
* medium -> large
* large -> huge
* huge -> enormous

The `breakpoints.scss` file has been removed. Any files previously referencing `breakpoints.scss` should import the new values provided by [terra-breakpoints](https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about).

### Examples

```diff
- <ResponsiveElement defaultElement={<div />} large={<div />} />
+ <ResponsiveElement tiny={<div />} huge={<div />} />
```

```diff
- <ResponsiveElement tiny={<div />} huge={<div />} />
+ <ResponsiveElement small={<div />} enormous={<div />} />
```

## Changes from 3.0 to 4.0

### Changes to CSS Custom Properties

The following transitive dependency had breaking changes. See its upgrade guide for more information.
* terra-doc-template
