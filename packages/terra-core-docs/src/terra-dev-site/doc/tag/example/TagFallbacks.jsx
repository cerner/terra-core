import React from 'react';
import { IconPerson } from 'terra-icon';
import Tag from 'terra-tag';

const TagFallbacks = () => (
  <div>
    <Tag text="AF-Atrial Fibrillation" />
    <Tag icon={<IconPerson />} text="Bronchitis" />
  </div>
);

export default TagFallbacks;
