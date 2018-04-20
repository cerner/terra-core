Changelog
=========

Unreleased
----------

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
