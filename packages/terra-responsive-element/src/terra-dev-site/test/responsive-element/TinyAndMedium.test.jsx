/**
 * This test file is intended to test that the responsive element renders the correct component
 * at every breakpoint, falling back to smaller sizes if a breakpoint size is not defined.
 *
 * IE:
 * The text Tiny should render for tiny and small breakpoints.
 * The text Medium should render for medium, large, huge, enormous.
 */

import React from 'react';
import ResponsiveElement from '../../../ResponsiveElement';

const TinyAndMedium = () => (
  <ResponsiveElement tiny={<div>Tiny - Small</div>} medium={<div>Medium - Enormous</div>} />
);

export default TinyAndMedium;
