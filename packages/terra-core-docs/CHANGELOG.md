# Changelog

## Unreleased

* Changed
  * Updated icon documentation to incorporate `one-cerner-style-icons` v1.5.0.
  * Updated non-meaningful content with meaningful content for `action-header`, `arrange`, `content-container`, `divider`, `checkbox`, `radio`, `paginator`, `scroll`, `section-header`, `show-hide`, `toggle`, `toggle-button` and `toggle-section-header`

* Added
  * Updated Usage Guide to include information on decorative, supportive and meaningful text attributes.

## 1.25.0 - (April 7, 2023)

* Fixed
  * Fixed `terra-ui` build failures happening due to usage of relative paths on mdx file.
  * Fixed `terra-button` A11y guide example to match the description.


## 1.24.0 - (April 5, 2023)

* Added 
  * Added Accessibility Guide for `terra-dropdown-button`.

* Changed
  * Updated examples for terra-content-container

* Added
  * Added accessibility guide for `terra-hyperlink`
  * Added Accessibility guideline for `terra-heading`
  * Added examples for `terra-list`
  * Added Accessibility Guide for `terra-section-header`
  * Added accessibility guide for `terra-progress-bar`
  * Added accessibility guide for `terra-avatar`
  * Added examples for `terra-alert`

* Changed
  * Added tests for `terra-list`.
  * Fix second example on default Paginator doc page
  * Updated example for `terra-hyperlink`
  * Updated example for `terra-progress-bar`
  * Updated list options for `terra-dropdown-button`

## 1.23.0 - (March 1, 2023)

* Changed
  * Updated action-header examples to include A11y labels.
  * Updated `terra-button-group` tests and examples.

* Added
  * Added accessibility guide for `terra-button-group`.

## 1.22.0 - (February 16, 2023)

* Changed
  * Minor dependency version bump

## 1.21.0 - (February 15, 2023)

* Changed
  * Updated radio and checkbox tests to fix fusion theme tests.

* Added 
  * Added Accessibility Guide for `terra-toggle`.
  * Added A11y guide and examples for `terra-button`.

* Updated
  * Updated imports of decorative icons.
  * Updated jest & wdio tests.

## 1.20.0 - (February 7, 2023)

* Changed
  * Updated examples to use informative icons.

* Added 
  * Added Label Example for `terra-toggle`.
  
## 1.19.0 - (January 31, 2023)

* Added
  * Added A11y guide for terra-icon.
  * Added examples and accessibility guide for `terra-image`.

## 1.18.0 - (January 9, 2023)

* Changed
  * Updated `iconAll` test to accommodate new icons added from OCS icon library v1.49.0.
  * Added `react-intl` to peerDependency list for `terra-list` doc info.

## 1.17.0 - (January 3, 2023)

* Added
  * Added Accessibility Guide for `terra-form-fieldset`.
  * Added single and multi select list test examples for `terra-list`.

* Changed
  * Updated single and multi select guides with the new ariaSelectionStyle prop for `terra-list`.

## 1.16.0 - (December 7, 2022)

* Added
  * Added Accessibility Guide for `terra-form-select`.
  * Added higher-order examples and Accessibility Guide for `terra-profile-image`.
  * Added ariaLabel and ariaLabelledBy examples for `terra-toolbar`.
  * Added accordion examples for `terra-section-header`.
  * Added Accessibility Guide for `terra-divider`.
  * Added tests and example for adding row header to `terra-html-table`.
  * Added `terra-list` tests and examples for `ariaDescribedBy`, `ariaDescription`, and `ariaDetails` props.
  * Added Accessibility Guide for `terra-html-table`.
  * Added an accessibility hooks example for `terra-form-field` and `terra-input`.

* Changed
  * Updated wording in examples for `terra-demographics-banner`.
  * Updated `terra-list` section guide to not use listbox role.
  * Updated `terra-divider` tests and doc examples to include heading level prop.
  * Updated `terra-section-header` tests and examples.

## 1.15.1 - (September 8, 2022)

* Changed
  * Moved `terra-outline-view-table` docs and tests folders to component dev-site folder.

## 1.15.0 - (September 07, 2022)

* Added
  * Added new `terra-outline-view-table` docs and tests folders.

* Changed
  * Relative import paths of `terra-hyperlink` tests are changed to absolute path.
  * Updated `iconAll` test to accommodate new icons added from OCS icon library v1.48.0.

## 1.14.1 - (July 14, 2022)

* Changed
  * Minor dependency version bump

## 1.14.0 - (July 5, 2022)

* Fixed
  * Updated broken links in terra-form-select and action-footer.

* Changed
  * Added test for programmatic focus of hyperlink.

## 1.13.6 - (May 3, 2022)

* Changed
  * Icon table regenerated after fixing trending up/down labeling errors
  * Updated screenshot tests to reflect trending icon changes

## 1.13.5 - (April 29, 2022)

* Changed
  * Updated `iconAll` test to accommodate new icons added from OCS icon library v1.46.0.
  * Updated routes/sidebar names for package root component pages to "About" for consistency.
  * Moved docs files for the following packages into the root directory for their docs:
    * List
    * Table
    * Form Select
  * Merged 'About' and 'Avatar' pages for `terra-avatar` docs.

## 1.13.4 - (March 15, 2022)

* Changed
  * Minor dependency version bump

## 1.13.3 - (March 8, 2022)

* Fixed
  * Updated broken links in terra-form-select docs.

## 1.13.2 - (February 24, 2022)

* Changed
  * Minor dependency version bump

## 1.13.1 - (February 15, 2022)

* Changed
  * Minor dependency version bump

## 1.13.0 - (February 2, 2022)

* Added

  * Migrate docs from terra-tag.
  * Migrate docs from terra-toggle-button.
  * Migrate docs from terra-visually-hidden-text.
  * Migrate docs from terra-toolbar.
  * Migrate docs from terra-text.
  * Migrate docs from terra-toggle-section-header.
  * Migrate docs from terra-toggle.
  * Migrate docs from terra-switch.
  * Migrate docs from terra-table.
  * Migrate docs from terra-status.
  * Added support for Node 14.

## 1.12.2 - (January 4, 2022)

* Added
  * Migrate docs from terra-section-header.
  * Migrate docs from terra-spacer.
  * Migrate docs from terra-signature.
  * Migrate docs from terra-show-hide.
  * Migrate docs from terra-status-view.
  * Migrate docs from terra-search-field.
  * Migrate docs from terra-scroll.
  * Migrate docs from terra-responsive-element.

## 1.12.1 - (December 14, 2021)

* Added
  * Migrate docs from terra-dynamic-grid.
  * Migrate docs from terra-dropdown-button.
  * Migrate docs from terra-form-checkbox.
  * Migrate docs from terra-form-field.
  * Migrate docs from terra-divider.
  * Migrate docs from terra-form-fieldset.
  * Migrate docs from terra-form-select.
  * Migrate docs from terra-form-radio.
  * Migrate docs from terra-form-input.
  * Migrate docs from terra-form-textarea.
  * Migrate docs from terra-grid.
  * Migrate docs from terra-html-table.
  * Migrate docs from terra-hyperlink.
  * Migrate docs from terra-heading.
  * Migrate docs from terra-i18n.
  * Migrate docs from terra-icon.
  * Migrate docs from terra-image.
  * Migrate docs from terra-overlay.
  * Migrate docs from terra-list.
  * Migrate docs from terra-paginator.
  * Migrate docs from terra-progress-bar.
  * Migrate docs from terra-profile-image.

## 1.12.0 - (November 2, 2021)

* Added
  * Migrate docs from terra-cell-grid.
  * Migrate docs from terra-demographics-banner.
  * Migrate docs from terra-content-container.
  * Migrate docs from terra-card.
  * Migrate docs from terra-button.
  * Migrate docs from terra-button-group.

## 1.11.0 - (October 8, 2021)

* Added
  * Migrate docs from terra-base.
  * Migrate docs from terra-badge
  * Migrate docs from terra-breakpoints

## 1.10.0 - (September 28, 2021)

* Changed

  * Updated Arrange tests to be more reliable.

* Added
  * Migrate docs from terra-avatar

## 1.9.0 - (September 21, 2021)

* Changed
  * Minor dependency version bump

## 1.8.0 - (August 31, 2021)

* Changed
  * Minor dependency version bump

## 1.7.0 - (August 25, 2021)

* Changed
  * Minor dependency version bump

## 1.6.0 - (August 3, 2021)

* Changed
  * Minor dependency version bump

## 1.5.0 - (July 6, 2021)

* Changed
  * Minor dependency version bump

## 1.4.0 - (June 22, 2021)

* Changed
  * Minor dependency version bump

## 1.3.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 1.2.0 - (May 19, 2021)

* Changed
  * Minor dependency version bump

## 1.1.0 - (May 11, 2021)

* Added
  * Migrate docs for terra-alert
  * Migrate docs for terra-arrange

## 1.0.0 - (May 4, 2021)

* Initial stable release
