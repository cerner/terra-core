import React from 'react';
import CenteredActionFooter from '../../../lib/CenteredActionFooter';

export default () => (
  <CenteredActionFooter
    center={
      <div>
        <a href="/">Link Action</a>
        <button>Button Action</button>
      </div>
    }
  />
);
