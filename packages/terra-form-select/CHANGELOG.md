ChangeLog
=========

Unreleased
----------
### Fixed
* Additional null check added to private menu to prevent error from empty query

### Changed
* Added `required` prop
* Added `isSelect` type on Select component to help with component identity

5.16.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore
* Removed vendor style rule added to fade placeholder text. Since Autoprefixer V9 resolves vendor prefix issue.

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

5.15.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump
* Added 'disabled' prop to FormSelectField component

### Fixed
* Add vendor style rule for IE11 to fade placeholder text.

5.14.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

5.13.0 - (April 9, 2019)
------------------
### Fixed
* Issue with input element wrapping to new line too soon in multiple and tag variants
* Unintended height increase
* Null checks added to private Menu to prevent errors from empty queries

5.12.0 - (April 2, 2019)
------------------
### Changed
* Minor dependency version bump

5.11.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release
* Improved experience using the select component with JAWS, VoiceOver, and VoiceOver on iOS

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

5.10.0 - (March 21, 2019)
------------------
### Fixed
* Checked for undefined and null for defaultValue
* Fixed passed in onClick event not firing depending on click position on terra-form-select

### Added
* Added new translation strings
* Added logic to enable accessible mapping of InputField and it's related error and help text messages
* Added new EN translation strings

### Changed
* Replaced local keyCode values with keycode-js npm package
* Update Jest tests to use terra-enzyme-intl

5.9.0 - (March 6th, 2019)
------------------
### Added
* Added option to limit the maximum number of selection count for multi-select variants.
* Introduce an option to allow clearing the currently selected item

5.8.0 - (March 5th, 2019)
------------------
### Fixed
* Race condition where timeout would update after the component is not mounted
* 'Unable to get property 'getInstance' of undefined or null reference' error in IE

5.7.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* New CSS custom property: `--terra-form-select-disabled-placeholder-color`
* New CSS custom property: `--terra-form-select-disabled-placeholder-font-style`

### Fixed
* Added en-AU translations
* Fixed issue preventing the input from inheriting the base font family
* Fixed a Select Menu jest test that was broken with the release of enzyme-3.9.0

5.6.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

5.5.0 - (February 5, 2019)
------------------
### Added
* Dropdown that announces no search results to screen reader

### Changed
* Made it easier for screen readers to read disabled state to users
* Minor dependency version bump

5.4.0 - (January 28, 2019)
------------------
### Changed
* Minor dependency version bump

5.3.0 - (January 26, 2019)
------------------
### Fixed
* Increased terra-form-select default text color contrast for accessibility

5.2.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

5.1.0 - (January 22, 2019)
------------------
### Fixed
* Fixed Dropdown closing issue on Hold and Scroll in IE
* Updated Frame to remove isAbove styling when selecting item in single select list
* Changed browser.execute functions in wdio spec to be strings for IE and FF driver compatibility

### Changed
* Updated Option prop documentation

5.0.0 - (January 8, 2019)
------------------
### Changed
* Updated theme variables

4.26.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added missing ar translations
* maxWidth prop added to pass through to terra-form-field

4.25.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

4.25.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

4.24.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

4.23.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

4.22.0 - (October 30, 2018)
------------------
### Changed
* Update mixin import to be more explicit

4.21.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

4.20.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Theme variable for input height

### Fixed
* Normalized duplicate padding theme variable

4.19.0 - (October 8, 2018)
------------------
### Added
* First class prop support and documentation for onBlur, onFocus, and onClick

4.18.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

4.17.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

4.17.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

4.16.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

4.15.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

4.14.0 - (August 8, 2018)
------------------
### Changed
* Updated component internationalization error message

4.13.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

4.12.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations

4.11.1 - (July 20, 2018)
------------------
### Changed
* Clean up double .module extension on SCSS files

4.11.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

4.10.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Added tabIndex="0" to role="listbox"
* Reordered react methods to match preferred linter order

4.9.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump
### Added
* A maxHeight prop for setting a custom max height of the dropdown

4.8.0 - (July 3, 2018)
------------------
### Added
* Added CSS style to display the select box-shadow over the toggle border
* Added CSS custom property to enable theming of disabled state arrow icon

### Fixed
* Null check the active state before performing findByValue

4.7.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

4.6.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency
* Input text color to inherit base text color

4.5.0 - (June 19, 2018)
------------------
### Added
* CSS variable for placeholder font size
* Upgrade Guide and Changelog to terra-dev-site
* Non-breaking character for empty placeholders

### Fixed
* Renamed duplicate CSS variables

4.4.0 - (June 13, 2018)
------------------
### Changed
* Minor dependency version bump

4.3.0 - (June 12, 2018)
------------------
### Changed
* Updated defaultPlaceholder typo
* Updated field documentation to be more inline with other examples
* Updated "test:jest" script to work on windows.
* Updated to allow a custom onBlur

4.2.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

4.1.0 - (May 25, 2018)
------------------
### Added
* SelectField - A convenience component that wraps a select within a field.

4.0.0 - (May 23, 2018)
------------------
### Breaking Changes - [Upgrade Guide](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select/docs/UPGRADEGUIDE.md)
* Removed `boundingRef`
* Removed `isPlaceholderHidden` - A placeholder option is no longer added by default.
* Removed `name` - Terra recommends handling validations with [react-final-form](https://github.com/final-form/react-final-form).
* Removed `required` - Terra recommends handling validations with [react-final-form](https://github.com/final-form/react-final-form).
* Removed `releaseFocus` - Focus no longer needs to be managed.
* Removed `requestFocus` - Focus no longer needs to be managed.
* The `onChange` callback returns the value as the only parameter.
  * `onChange(event, value, name)` -> `onChange(value)`


### Added
* `dropdownAttrs` - Spreads custom attributes onto the dropdown.
* `noResultContent` - Displays when no search results are found.
* `onDeselect` - Callback invoked when an option is deselected.
* `onSelect` - Callback invoked when an option is selected.
* `onSearch` - Callback invoked when the search has changed.
* `optionFilter` - Custom callback filter invoked for each option during filtering.
* `placeholder` - A text placeholder.
* `variant` - Added new behavior variants. default, combobox, multiple, search, or tag.
* `Select.OptGroup` - Groups options into sections.

3.1.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

3.0.0 - (May 9, 2018)
------------------
### Major Change
* Updated to use terra-popup v4.0.0

2.8.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

### Changed
* Updated dependency on terra-popup.

2.7.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

2.6.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (March 30, 2018)
------------------
### Added
* Add variable with default for background-color of select and border of select-menu

2.3.0 - (March 14, 2018)
------------------
### Changed
* Minor dependency version bump

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Added
* Added functionality to hide placeholder

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.4.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (January 18, 2018)
------------------
### Added
* Added name helper param to onChange callback

1.2.0 - (January 5, 2018)
------------------
### Changed
* Minor dependency version bump

1.1.0 - (December 5, 2017)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (November 28, 2017)
------------------
Initial stable release
