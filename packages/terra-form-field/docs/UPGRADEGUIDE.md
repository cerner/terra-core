# Terra Form Field Upgrade Guide

## Changes from version 3 to version 4

### Props

#### Updated
* Form Fields allowed the `label` to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in.
* `label` prop's type changed from node to string.
 
##### Steps to Upgrade
To upgrade from 3.0 to 4.0 each existing Field must be reviewed and updated to ensure only a string is being passed to the `label` prop. Solutions passing node data types need to be reworked to provide only a string.

## Changes from 2.0 to 3.0

### Changes to CSS Custom Properties

The following transitive dependency had breaking changes. See its upgrade guide for more information.
* terra-doc-template
