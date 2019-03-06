import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ContentContainer from 'terra-content-container/lib/ContentContainer';

const display1 = (
  <p key="1">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
  </p>
);
const display2 = (
  <p key="2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
  </p>
);
const display3 = (
  <p key="3">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
  </p>
);

const contentheader = <h3>Display Header</h3>;
const contentfooter = <h3>Display Footer</h3>;

const container = () => (
  <div style={{ border: '1px solid' }}>
    <ContentContainer header={contentheader} footer={contentfooter}>
      <div key="1">
        {display1}
      </div>
      <div key="2">
        {display2}
      </div>
      <div key="3">
        {display3}
      </div>
    </ContentContainer>
  </div>
);

export default container;
