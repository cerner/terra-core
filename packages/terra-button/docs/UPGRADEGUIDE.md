# Terra Button Upgrade Guide

## Changes from version 2 to version 3

### Changes to CSS Custom Properties

### Added ~3.25.x
* --terra-button-disabled-background-color-neutral
* --terra-button-disabled-background-color-emphasis
* --terra-button-disabled-background-color-ghost
* --terra-button-disabled-background-color-de-emphasis
* --terra-button-disabled-background-color-action
* --terra-button-disabled-background-color-action


#### Removed
* --terra-button-vertical-padding
* --terra-button-text-only-horizontal-margin
* --terra-button-icon-only-horizontal-margin
* --terra-button-text-and-icon-horizontal-margin
* --terra-button-text-and-icon-margin-between

#### Added
* --terra-button-padding-bottom
* --terra-button-padding-top
* --terra-button-text-only-margin-left
* --terra-button-text-only-margin-right
* --terra-button-icon-only-margin-left
* --terra-button-icon-only-margin-right
* --terra-button-text-and-icon-margin-left
* --terra-button-text-and-icon-margin-right
* --terra-button-text-first-margin-right
* --terra-button-icon-first-margin-right

## Changes from version 1 to version 2
With the release of terra-button v2.0.0, the button and
button group components have been updated to align to the One Cerner
Standard Design. With that alignment, there are some noted changes to these
components and components that depend on terra-button and
terra-button-group.

Check out the [CHANGELOG for terra-button](https://github.com/cerner/terra-core/blob/master/packages/terra-button/CHANGELOG.md#200---february-12-2018) to view all the changes in the v2.0.0 release.

## Noted Terra Button Changes
### Variants/Types:

* "Default" got remapped to "Neutral" (gray)
* "Primary" got remapped to "Emphasis" (blue)
* "Link"-style button is now gone, "De-Emphasis" will be your replacement
for the most part in most cases.
  - The de-emphasis button does not include an underline on hover - that
    is a hyperlink and you will need to use hyperlink to achieve that
    styling. But Blue text (a de-decorated button with only a
    "key-color" as the interaction indication) still remains, and while
    apps are in a "hybrid" replacement mode (Orion TRVM, BlueSteel, etc)
    for a period of time where parts are old and parts are new, we won't
    do a hover background treatment but only a dark blue color change so
    there isn't a super noticeable difference. Pressing on the
    de-emphasis button will show what the hover may look like in the
    future. Check with UX for guidance to appropriate usage.
  - The OCS Clinical theme does not include this visual style of button,
    so a future theme switch will need to be evaluated by UX before a
    team does so.
* The secondary variant has been removed.

### New: "Action" variant
  - Mainly added for OCS Consumer (Wellness, Patient Portal, etc), or
    new designs needing "floating" action buttons
  - Check with UX before using them in any existing projects

### New: "Utility" variant
  - Not used except for construction of re-usable components, think of
    the close "X" in a dialog
  - Check with UX before using them

  
**Others not included on initial 2.0 release: "Secondary"(green),
"Outline", "Positive"(green), "Negative"(red)**

These can be added as requested, and made available in Terra even though
they are not OCS standard, mainly to assist in teams doing architecture
replacement (TRVM for React, BlueSteel for React, etc.) or teams in
Hybrid mode (some new React, some original app)

They will be documented as non-OCS, so that is clear teams using them
will require a UX eval before switching to an OCS theme (Clinical or
Consumer) in the future.

### Sizes variant changes:
* "Tiny/Small/Medium/Large/Huge" : all the size varianets have been removed.
* "Compact" : Still available with no change.

  - May be needed for use in Tables, MPages Fusion compatibility, or a
    terra-mpagestyle-theme, reach out to UX if you want to use this.
