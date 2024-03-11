# Changelog

## Unreleased

* Changed
  * Updated documentation for `terra-form-select`.

## 1.64.0 - (March 5, 2024)

* Changed
  * Minor dependency version bump.

## 1.63.0 - (March 4, 2024)

* Updated
  * Updated `terra-responsive-element` document to have correct hyperlink to `terra-breakpoints`.

## 1.62.0 - (February 29, 2024)

* Added
  * Added documentation on using new `id` prop with action elements in `terra-alert`.

## 1.61.0 - (February 28, 2024)

* Updated
  * Updated test example in `terra-section-header` for sticky section header title.

## 1.60.0 - (February 27, 2024)

* Changed
  * Minor dependency version bump.

## 1.59.0 - (February 23, 2024)

* Added
  * Added a test example for `terra-button` to validate focus inside table.
  * Added test to `terra-section-header` for the sticky section header title.

## 1.58.0 - (February 20, 2024)

* Changed
  * Minor dependency version bump.

## 1.57.0 - (February 15, 2024)

* Added
  * Added a test example for `terra-button-group` to validate focus when none of the buttons are selected.
  * Added doc example for `terra-progress-bar`.

* Updated
  * Updated Draggable list item example for selection state in `terra-list`.
  * Updated `terra-status` documentation with deprecation notice and badge.
  * Updated `terra-html-table` documentation with deprecation notice and badge.
  * Updated test and doc examples for `terra-progress-bar`

## 1.56.0 - (January 9, 2024)

* Changed
  * Minor dependency version bump

## 1.55.0 - (January 4, 2024)

* Changed
  * Minor dependency version bump

## 1.54.0 - (January 2, 2024)

* Added
  * Added inline label example for `terra-input-field`, `terra-form-native-select-field`, `terra-form-combobox-field` and `terra-form-single-select-field`.
  * Added a new example for `terra-list` with interactive elements as a list items.
  * Added new test example for `terra-form-search-select`
  * Added instruction note for invalid example in `terra-search-select` and `terra-combo-box`.
  * Added accessibility note for selectable button in `terra-button`

## 1.53.0 - (December 11, 2023)

* Changed 
   * Reverted `Removed ariaDescription prop from list`.

* Added
  * Added new Accessibility and Implementation guide for Terra Search Field
  * Added a test case for `terra-list` to support drag and drop in `terra-modal-manager`.
  * Added a invalid example in `terra-search-Field`.
  * Added aria-label to announce the visual label for `terra-form-select`.

* Changed
  * Removed `ariaDescription` example added for terra-list

## 1.52.0 - (November 21, 2023)

* Added
  * Added test to `terra-section-header` for the fixed section header title.

* Added
  * Added error message for `terra-form-search-select` invalid example.

* Added
  * Added visual label and associated with input field using 'for' and 'id'.
  * Added 'ariaLabel' attribute for `terra-form-select` examples.

## 1.51.0 - (November 16, 2023)

* Changed
  * Minor dependency version bump

## 1.50.0 - (November 13, 2023)

* Added
  * Added about page for `TagList`.
  * Updated doc examples for `terra-badge`.

## 1.49.0 - (November 3, 2023)

* Updated
  * Updated accessibility guidance for `terra-arrange`.

* Changed
  * Changed paginator label on custom page count example.

## 1.48.0 - (November 2, 2023)

* Updated
  * Updated example for selection state of Fusion-Button in `terra-button`.
  * Updated examples and tests for `terra-section-header` for accessibility changes.

## 1.47.0 - (October 26, 2023)

* Changed
  * Minor dependency version bump

## 1.46.0 - (October 23, 2023)

* Updated
  * Updated `terra-arrange` examples to use `terra-form-radio`.
  * Updated `terra-paginator` custom page label and count example to display correct page count.
  * Updated `terra-list` examples to include `isTabFocusDisabled` prop.
  * Removed `terra-table` as a dependency as the docs have now moved to `terra-framework-docs`.

* Added
  *  Added example for selection state of Fusion-Button in `terra-button`.

## 1.45.0 - (October 16, 2023)

* Added
  * Added aria-label attribute for `terra-dropdown-split-button` examples.

* Added
  * Added a visual error note for invalid example in `terra-form-single-select`.
  * Added example for `terra-badge` with `terra-html-table`.

* Updated
  * Updated `terra-alert` documentation for custom titles.
  * Updated `terra-dropdown-button` documentation for testing uuid details.
  * Updated exisiting examples upto a11y standards

* Fixed
  * Fixed import statements not rendering properly for `terra-icon`.

## 1.44.1 - (October 11, 2023)

* Fixed
  * Fixed hyperlink button example import for `terra-hyperlink`.

## 1.44.0 - (October 6, 2023)

* Updated
  * Updated test and doc examples for `terra-progress-bar`.

## 1.43.0 - (October 3, 2023)

* Added
  * Added progressive paginator examples for custom page label and page count.

* Updated
  * Updated test example to validate `hidePageCount` prop.
  * Updated terra-list examples to demonstrate arrow key navigation within list and list sections.

## 1.42.0 - (September 26, 2023)

* Updated
  * Updated test drag and drop example for `terra-list`.

* Added
  * Added a test case for `terra-list` to support drag and drop in `terra-slide-panel`.

## 1.41.0 - (September 21, 2023)

* Fixed
  * `terra-icon` import corrections in documentation and examples.
  * Fixed formatting `terra-icon` accessibility guide.

* Changed
  * Updated icon example to specify `IconCeMarking` is private.

## 1.40.0 - (September 19, 2023)

* Added
  * Added drag and drop example for `terra-list`.
  * Added instruction note for `terra-form-radio` label hidden example.
  * Added accessibility guidance for `terra-paginator`.

* Updated
  * Updated `terra-icon` imports in documentation.
  * Updated `terra-scroll` to add realistic examples.
  * Updated all paginator examples to use meaningful titles.
  * Updated testing recommendations to use `jest.spyOn` instead of `jest.mock`.
  * Updated `terra-alert` long text example for accessible `terra-show-hide`.
  * Updated doc site for `terra-form-single-select` and `terra-form-single-select-field`.


## 1.39.0 - (August 25, 2023)

* Fixed
  * Updated `terra-native-select` example to fix slightly truncated button.

* Changed
  * Updated `terra-button-group` tests.

## 1.38.0 - (August 23, 2023)

* Removed
  * Removed custom styles of `terra-arrange` examples to make whole content visible.

* Added
  * Added drag and drop example for `terra-list`.
  * Added accessibility guidance for `terra-arrange`.
  * Added an event to prevent page scroll on hyperlink for `terra-toggle-section-header`.

* Changed
  * Updated `terra-button-group` tests.
  * Updated `terra-form-radio-field` example to display selected value.

## 1.37.0 - (August 18, 2023)

* Added
  * Added Search field examples for optional Label with default and custom labels.

* Changed
  * Updated `iconAll` test to accommodate new icons added from OCS icon library v1.51.0.
  * Updated default search delay to 2500ms.
  * Updated Search field examples to be more functionality focused.

## 1.36.0 - (August 11, 2023)

* Changed
  * Minor dependency version bump

## 1.35.0 - (August 11, 2023)

* Changed
  * Updated all paginator examples for `terra-paginator` to use new props.
  * Updated imports from `src` to `lib`.
  * Updated `terra-toggle-button` example and user documentation.

## 1.34.0 - (August 8, 2023)

* Updated
  * Updated `terra-tag` to include realistic examples.

## 1.33.0 - (August 2, 2023)

* Changed
  * Minor dependency version bump

## 1.32.0 - (August 1, 2023)

* Changed
  * Updated Arrange component example to use `span` element instead of `div`.

* Added
  * Added realistic examples for `terra-arrange`.
  * Added realistic examples for `terra-toggle-section-header`.
  * Added email validation for `terra-form-field`.

* Updated
  * Updated an example for `terra-dropdown-button`.
  * Updated email field validation for `terra-form-field`.
  * Updated `terra-show-hide` examples for new focusRef prop, description for the new prop usage.

* Added
  * Added documentation updates for `terra-form-input`.

* Changed
  * Updated Toggle Button Examples to have a dashed border around interactive elements.

## 1.31.0 - (July 13, 2023)

* Added
  * Added a test case for click event when setFocusOnContainer is disabled
  * Added email format instruction text for `terra-form-field`.

* Changed
  * Minor formatting update in `terra-alert` & `terra-form-fieldset`.

## 1.30.0 - (July 11, 2023)

* Added
  * Added test example for controlled form native select component.
  * Added more realistic examples for terra-toggle-button.

## 1.29.0 - (June 28, 2023)

* Changed
  * Updated `terra-status-view - Change Variant` example component to use the apply button to change the selected variant.
  * Updated `terra-form-textarea` example component and added an button to toggle valid/invalid status

* Added
  * Added documentation updates for `Single Select` in `terra-form-select`.

## 1.28.0 - (June 14, 2023)

* Added
  * Added terra-scroll A11y tests.
  * Added an example in terra-content-container without interactive elements.
  * Added examples for terra-content-container with dark colors.
* Changed
  * Updated `terra-status-view - Change Variant` example component to use the `terra-form-select` component instead of HTML native `<select>`.
  * Updated example for `terra-visually-hidden-text` for better demonstration of correct usage.
  * Updated "alert" wording to "notification banner" to avoid confusion with the alert notification type.
  * Updated examples for testing `alert` notification focus shift.
  * Updated `Custom Icon + message + buttons example` for `terra-status-view`.
  * Corrected typo in `terra-demographics-banner` example doc.
  * Updated documentation for a11y guidance on `alert` notification type, live regions, and titles.

* Added
  * Added testing sections to `terra-alert` and `terra-form-fieldset` documentation.

## 1.27.0 - (May 9, 2023)

* Removed
  * Removed debugger text from status view first paragraph after the title.

* Changed
  * Updated demographics banner examples to include `identifiersLongForm` prop.
  * Changed terra-alert examples to include aria-live attribute.

* Added
  * Added an example for terra-form-select native select field without placeholder.
  * Add terra-alert accessibility guide.
  * Added examples for fullscreen and container-related overlays with custom content and loading overlays with custom message.

## 1.26.0 - (April 27, 2023)

* Added
  * Added dynamic example for terra-status-view.
  * Added the UX recommendation for terra-content-container.

* Changed
  * Updated icon documentation to incorporate `one-cerner-style-icons` v1.5.0.
  * Updated non-meaningful content with meaningful content for `action-header`, `arrange`, `content-container`, `divider`, `checkbox`, `radio`, `paginator`, `scroll`, `section-header`, `show-hide`, `toggle`, `toggle-button` and `toggle-section-header`
  * Updated terra-toggle component focusable attribute value from boolean to string to fix some console log warnings.


* Added
  * Added examples for `terra-text` to demonstrate valid date and time formats.

* Added
  * Added examples for `terra-text` to demonstrate valid date and time formats.

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
