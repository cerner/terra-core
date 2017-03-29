import React from 'react';

import ContentContainer from 'terra-content-container';

const header = <p>header</p>;
const content = <p>content</p>;

const container = () => (
  <div style={{ height: '200px', overflow: 'auto' }}>
    <ContentContainer header={header} fill>
      {content}
    </ContentContainer>
  </div>);

export default container;
