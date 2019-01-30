import React from 'react';

import ContentContainer from '../../../ContentContainer';

const header = <header>header</header>;
const content = <div style={{ height: '100%', backgroundColor: '#98fb98' }}>content</div>;

const container = () => (
  <div style={{ height: '200px' }}>
    <ContentContainer id="content-container" header={header} fill>
      {content}
    </ContentContainer>
  </div>
);

export default container;
