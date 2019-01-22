import React from 'react';

import ContentContainer from '../../../ContentContainer';

const header = <header style={{ height: '100%', backgroundColor: '#f64747' }}>header</header>;
const footer = <div style={{ height: '100%', backgroundColor: '#98fb98' }}>content</div>;
const content = <footer style={{ height: '100%', backgroundColor: '#00bfff' }}>footer</footer>;

const container = () => (
  <div style={{ height: '200px' }}>
    <ContentContainer id="content-container" header={header} footer={footer}>
      {content}
    </ContentContainer>
  </div>
);

export default container;
