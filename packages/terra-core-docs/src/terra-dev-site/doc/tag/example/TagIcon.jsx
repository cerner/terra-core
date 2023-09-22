import React from 'react';
import { IconPerson } from 'terra-icon';
import Tag from 'terra-tag';

const TagIcon = () => (
  <div>
    {/* eslint-disable no-alert */}
    <Tag icon={<IconPerson />} onClick={() => window.alert('Patient has been diagnosed with Bronchitis')} text="Bronchitis" />
    {/* eslint-enable no-alert */}
  </div>
);

export default TagIcon;
