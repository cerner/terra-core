import React from 'react';

import ContentContainer from '../../lib/ContentContainer';

const header = <span>header</span>;
const footer = <span>footer</span>;
const content = <span>content</span>;

const container = () => (
  <div style={{ height: '200px' }}>
    <ContentContainer id="content-container" header={header} footer={footer}>
      {content}
    </ContentContainer>
  </div>);

export default container;
