Changelog
=========

Unreleased
----------

4.2.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

4.1.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

4.0.0 - (January 8, 2019)
------------------
### Changed
* Updated theme variables

3.29.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump
* Removed usage of componentWillReceiveProps
* Make menu item outline on focus themeable and provide browser default fallback.
* Updated site examples to be more accessible.

3.28.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

3.28.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

3.27.0 - (November 14, 2018)
------------------
### Changed
* Menu now shifts focus to first interactable item in menu when opened
* Menu now allows shifting focus to first or last menu item on arrow key down / arrow key up on initial focus.

3.26.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

3.25.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

3.24.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

3.23.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

3.22.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

3.21.0 - (October 2, 2018)
------------------
### Changed
* Minor dependency version bump

3.20.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

3.19.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

3.19.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

3.18.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

3.17.0 - (August 30, 2018)
------------------
### Changed
* Minor dependency version bump

3.16.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

3.15.0 - (August 21, 2018)
------------------
### Changed
* Minor dependency version bump

3.14.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

3.13.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations

3.12.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

3.11.0 - (July 17, 2018)
------------------
### Added
* Added more themeable variables to MenuItem
* Added an active style to MenuItem

### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Required props no longer set a default prop

3.10.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

3.9.0 - (July 3, 2018)
------------------
### Changed
* Minor dependency version bump

3.8.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

3.7.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency
* Added localized aria-labels menu buttons when in bounded context

3.6.0 - (June 19, 2018)
------------------
### Changed
* Minor dependency version bump

3.5.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.
* Converted nightwatch tests to webdriver.io tests

3.4.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

3.3.0 - (May 25, 2018)
------------------
### Changed
* Minor dependency version bump

3.2.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

3.1.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

3.0.0 - (May 9, 2018)
------------------
### Major Change
Updated to use terra-popup v4.0.0

2.8.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump
* Updated dependency on terra-popup.

2.7.0 - (April 20, 2018)
------------------
### Added
* Added aria-checked attribute to selected menu items.

2.6.0 - (April 15, 2018)
------------------
### Changed
* Removed redunant peer dependencies.

2.5.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (March 30, 2018)
------------------
### Changed
* Minor dependency version bump

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
### Changed
* Minor dependency version bump

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16
* Changed React.Children.map to React.Children.forEach to prevent '.$' being prepended to the key.

1.13.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.12.0 - (January 18, 2018)
------------------
### Added
* Appropriate roles for accessibility

### Changed
* Divider component from an hr to an li with separator role.

### Fixed
* Fixed issue with left arrow presses on first layer.

1.11.0 - (January 5, 2018)
------------------
### Fixed
* Fixed issue with left arrow presses on first layer.

1.10.0 - (December 5, 2017)
------------------
### Changed
* Minor dependency version bump

1.9.0 - (November 28, 2017)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (November 16, 2017)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (November 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (October 31, 2017)
------------------
### Added
* Added option for auto width sizing.

### Changed
* Updated menu to use the auto height available through popup.

### Fixed
* Issue where tabbing would focus on Menu container before items in menu.
* Issue where divider was no longer visible.
* Issue where disabled items could still be selected.

1.5.0 - (October 24, 2017)
------------------
### Changed
* Minor dependency version bump

1.4.0 - (October 12, 2017)
------------------
### Added
* Keyboard navigation with arrow keys

### Fixed
* Issue where Menu.Item prop updates were not getting rendered immediately.
* Conflict with new terra-popup implementation and tests.

1.3.0 - (October 6, 2017)
------------------
### Fixed
* Bug around selectable menus with only 1 child element.

### Added
* Added ability to disable menu items

1.2.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.1.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (September 12, 2017)
------------------
Initial stable release
