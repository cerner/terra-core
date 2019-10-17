# Terra Form Field Upgrade Guide

## Changes from version 3 to version 4

### Props

#### Updated
* `label` prop's type changed from node to string.
 
##### Steps to Upgrade
To upgrade from 3.0 to 4.0 each existing Field must be reviewed and updated to ensure only a string is being passed to the `labelText` prop. Solutions passing node data types need to be reworked to provide only a string.

## Changes from 2.0 to 3.0

### Changes to CSS Custom Properties

The following transitive dependency had breaking changes. See its upgrade guide for more information.
* terra-doc-template
