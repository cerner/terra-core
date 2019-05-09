# Terra Responsive Element Upgrade Guide

## Changes from 4.0 to 5.0

### Breaking Changes

The componentDidMount method handleResize Event call is now being changed to use the width of ResponsiveElement parent container. when responsiveTo prop is set as 'parent'.

-  this.handleResize(entries[0].contentRect.width);
+  this.handleResize(entries[0].target.getBoundingClientRect().width);

## Changes from 3.0 to 4.0

### Changes to CSS Custom Properties

The following transitive dependency had breaking changes. See its upgrade guide for more information.
* terra-doc-template
