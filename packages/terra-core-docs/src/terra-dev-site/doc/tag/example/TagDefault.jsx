import React from 'react';
import Tag from 'terra-tag';

const TagDefault = () => (
  <div>
    {/* eslint-disable no-alert */}
    <Tag text="AF-Atrial Fibrillation" onClick={() => window.alert('Patient has been diagnosed with AF-Atrial Fibrillation')} />
    {/* eslint-enable no-alert */}
  </div>
);

export default TagDefault;
