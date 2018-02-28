import React from 'react';

import Tag from '../../lib/Tag';

const DefaultTag = () => <Tag id="default" text="Default Tag" />;
const HrefTag = () => <Tag id="href" text="Href Tag" href="www.google.com" />;

export {
  DefaultTag,
  HrefTag,
};
