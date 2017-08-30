import React from 'react';

import ContentContainer from '../../lib/ContentContainer';

const header = <span>header</span>;
const content = <span>content</span>;

const container = () => (
  <div style={{ height: '200px', overflow: 'auto' }}>
    <ContentContainer id="content-container" header={header} fill>
      {content}
    </ContentContainer>
  </div>);

export default container;
