import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import { Tag } from 'terra-tag';

const HrefTag = () => (
  <div>
    <Tag href="https://www.google.com/search?q=atrial+fibrillation" text="AF-Atrial Fibrillation" />
    <Tag icon={<IconPerson />} href="https://www.google.com/search?q=bronchitis" text="Bronchitis" />
  </div>
);

export default HrefTag;
