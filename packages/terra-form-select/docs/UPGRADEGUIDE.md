# Terra From Select Upgrade Guide

## Changes from 3.0 to 4.0

### Breaking Changes

* Removed `boundingRef`
* Removed `isPlaceholderHidden`
* Removed `name`
* Removed `required`
* Removed `releaseFocus`
* Removed `requestFocus`
* Removed the event and name from `onChange` callback
* Removed `isSelected` from `Select.Option`
* Removed `children` from `Select.Option`
* Removed and renamed specific CSS Custom Properties

### New props
* Added `dropdownAttrs`
* Added `noResultContent`
* Added `onDeselect`
* Added `onSelect`
* Added `onSearch`
* Added `optionFilter`
* Added `placeholder`
* Added `variant`
* Added `Select.OptGroup`

### Changes to onChange

The onChange callback has been changed to return only the value. To uplift remove the event and name parameter from the callback.

`onChange(event, value, name`) -> `onChange(value)`

```diff
import React from 'react';
import Select from 'terra-form-select';

class Default extends React.Component {
  constructor() {
    super();

    this.state = { value: 'blue' };
    this.handleChange = this.handleChange.bind(this);
  }

-  handleChange(event, value, name) {
+  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <Select onChange={this.handleChange} value={this.state.value}>
        <Select.Option value="blue" display="Blue" />
        <Select.Option value="green" display="Green" />
        <Select.Option value="purple" display="Purple" />
      </Select>
    );
  }
}

export default Default;
```

### Changes to isPlaceholderHidden

The isPlaceholderHidden hidden prop has been removed. To uplift remove this prop declaration.

```diff
- <Select isPlaceholderHidden>
+ <Select>
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
  </Select>
```


If a placeholder option is necessary it can be added to the list of options.

```
<Select>
  <Select.Option value="" display="-- Select --" />
  <Select.Option value="blue" display="Blue" />
  <Select.Option value="green" display="Green" />
  <Select.Option value="purple" display="Purple" />
</Select>
```

### Changes to name and required

The name and required props have been removed. Terra recommends handling form submissions and validations with [react-final-form](https://github.com/final-form/react-final-form).
To uplift remove these prop declarations.

### Changes to releaseFocus and releaseFocus

The releaseFocus and releaseFocus props have been removed. It is no longer necessary for the consumer to manage the focus state. To uplift remove these prop declarations.

### Changes to boundingRef

The boundingRef prop has been removed. The dropdown has been updated to never expand outside of the available window space. To uplift remove these prop declarations.

### Changes to Select.Option

The children and isSelected props have been removed. To uplift remove isSelected prop declarations and move children into display.

Children should be placed inside of display.

```diff
- <Select.Option value="value">Display</Select.Option>
+ <Select.Option value="value" display="Display" />
```

The selection state of each option is managed by the Select. The selected option values should be supplied to the Select's `defaultValue` or `value`.

### Changes to CSS Custom Properties

CSS Custom Properties have been updated to follow naming conventions. A CSS property should define the component, state, and property it controls.

Select icons have been updated to be theme-able in CSS. This means the entire icon will need to be changed to alter color.

#### Renamed

| Previous | Updated |
|-|-|
| --terra-select-disabled-font-color | --terra-select-disabled-color |
| --terra-select-focus-animation-background | --terra-select-focus-background-image |
| --terra-select-focus-background-start | --terra-select-background-size |
| --terra-select-focus-transition-timing | --terra-select-focus-transition-timing-function |
| --terra-select-focus-animation-size | --terra-select-focus-background-size |
| --terra-select-focus-box-shadow-rtl | --terra-select-focus-box-shadow |
| --terra-select-focus-box-shadow-ltr | --terra-select-focus-box-shadow |
| --terra-select-input-border-color | --terra-select-border-color |
| --terra-select-input-hover-border-color | --terra-select-hover-border-color |
|  --terra-select-input-focus-border-color |  --terra-select-focus-border-color |
| --terra-select-default-option-color | --terra-select-option-color |
| --terra-select-default-option-font-style | --terra-select-option-font-style |
| --terra-select-input-text-color | --terra-select-color |
| --terra-select-invalid-focus-animation-background | --terra-select-invalid-background-image |
| --terra-select-invalid-focus-animation-size | --terra-select-invalid-focus-background-size |
| --terra-select-invalid-focus-box-shadow-ltr | --terra-select-invalid-focus-box-shadow |
| --terra-select-invalid-focus-box-shadow-rtl | --terra-select-invalid-focus-box-shadow |
| --terra-select-option-font-color | --terra-select-option-color |
| --terra-select-option-selected-font-color | --terra-select-option-selected-color |
| --terra-select-option-selected-color | --terra-select-option-selected-background-color |
| --terra-select-option-hover-color | --terra-select-option-active-color |

#### Removed

* --terra-select-arrow-margin
* --terra-select-arrow-color
* --terra-select-disabled-arrow-color
* --terra-select-input-border-color
* --terra-select-input-padding
* --terra-select-invalid-arrow-color
* --terra-select-menu-blur-background-color
* --terra-select-menu-bottom-padding
* --terra-select-menu-background-color
* --terra-select-menu-border-raidus
* --terra-select-menu-blur
* --terra-select-menu-box-shadow-ltr
* --terra-select-menu-box-shadow-rtl

### Added
* --terra-select-border
* --terra-select-bottom-padding
* --terra-select-left-padding
* --terra-select-right-padding
* --terra-select-top-padding
* --terra-select-arrow-background
* --terra-select-invalid-arrow-background
* --terra-select-menu-padding
* --terra-select-menu-margin
* --terra-select-arrow-background
* --terra-select-dropdown-background-color
* --terra-select-dropdown-border
* --terra-select-dropdown-border-radius
* --terra-select-dropdown-box-shadow
* --terra-select-dropdown-above-box-shadow
* --terra-select-option-icon-background
* --terra-select-option-icon-active-background
* --terra-select-option-icon-pressed-background
* --terra-select-option-selected-active-background-color
* --terra-select-option-icon-height
* --terra-select-tag-background
* --terra-select-tag-border-radius
* --terra-select-tag-font-size
* --terra-select-tag-line-height
* --terra-select-tag-margin-right
* --terra-select-tag-margin-top
* --terra-select-tag-display-border-bottom
* --terra-select-tag-display-padding
* --terra-select-tag-deselect-background
* --terra-select-tag-deselect-border-bottom
* --terra-select-tag-deselect-font-size
* --terra-select-tag-deselect-padding
* --terra-select-tag-deselect-hover-background
* --terra-select-tag-deselect-hover-border-bottom-hover
* --terra-select-tag-icon-background
* --terra-select-tag-icon-height
* --terra-select-tag-icon-width

### New dropdownAttrs

The new prop for `dropdownAttrs` spreads custom html attributes onto the dropdown menu. Examples include classnames and inline styles.

```
<Select dropdownAttrs={{ style: { maxHeight: '300px' } }}>
  <Select.Option value="blue" display="Blue" />
  <Select.Option value="green" display="Green" />
  <Select.Option value="purple" display="Purple" />
</Select>
```

### New noResultContent

The `noResultContent` prop displays custom content when no search results are found.

```
<Select noResultContent="No colors were found.">
  <Select.Option value="blue" display="Blue" />
  <Select.Option value="green" display="Green" />
  <Select.Option value="purple" display="Purple" />
</Select>
```


### New onDeselect

The `onDeselect` prop is called when an option is deselected. The callback will return the value of the deselected option.

### New onSelect

The `onSelect` prop is called when an option is selected. The callback will return the value of the selected option.

### New onSearch

The `onSearch` prop is called when a search is invoked. The callback will return the value of the search input.

### New optionFilter

The `optionFilter` prop is called for each option when the search input changes allowing a custom filter.

By default the Select filters all options that contain the search string within the display. In the following example the Select is instead filtered by options that start with the string.

```
<Select optionFilter={(input, option) => option.props.display.startsWith(input)}>
  <Select.Option value="blue" display="Blue" />
  <Select.Option value="green" display="Green" />
  <Select.Option value="purple" display="Purple" />
</Select>
```

### New placeholder

The `placeholder` prop sets the placeholder text.

```
<Select placeholder="Select a color">
  <Select.Option value="blue" display="Blue" />
  <Select.Option value="green" display="Green" />
  <Select.Option value="purple" display="Purple" />
</Select>
```

### New variant

The `variant` prop sets the display and behavior of the Select. Options include:

| Variant | Description |
|-|-|
| default | Allows only a single selection. |
| search | Allows only a single selection. Provides a searchable list of options. |
| combobox | Allows only a single selection or free text entry. The select will act as a standard input with a drop down menu that provides an optional set of selections to choose from. The options will filter as a user types into the input. Selecting a preexisting option from the dropdown is optional; the user can enter a new value. |
| multiple | Allows multiple selections. The user may choose multiple options from the dropdown. Each selected option can be deselected either by clicking the option again in the drop down or by clicking the x icon next to the option in the list of selected options. |
| tag | Allows multiple selections or free text entries. The user may choose multiple options from the dropdown or enter a custom free text entry.|

### New Select.OptGroup

An OptGroup creates a grouping of options into a labeled section.

```
<Select>
  <Select.OptGroup label="Shade of blue">
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="cyan" display="Cyan" />
    <Select.Option value="teal" display="Teal" />
    <Select.Option value="azul" display="Azul" />
    <Select.Option value="aqua" display="Aqua" />
  </Select.OptGroup>
</Select>
```
