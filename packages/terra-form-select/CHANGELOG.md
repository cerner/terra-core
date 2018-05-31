ChangeLog
=========

Unreleased
----------
### Changed
* Updated field documentation to be more inline with other examples

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
