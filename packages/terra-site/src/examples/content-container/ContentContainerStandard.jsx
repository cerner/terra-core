import React from 'react';

import ContentContainer from 'terra-content-container';
import Heading from 'terra-heading';

const display1 = (<p key="1">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
                  </p>);
const display2 = (<p key="2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
                 </p>);
const display3 = (<p key="3">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
                 </p>);
const display4 = (<p key="4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
                 </p>);
const display5 = (<p key="5">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
                 </p>);
const display6 = (<p key="6">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.
Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
                 </p>);

const displays1 = [display1, display2, display3, display4, display5, display6];
const displays2 = displays1;
const displays3 = displays1;

const contentheader = <Heading level={1} size={'large'}>Display Header</Heading>;

const container = () => (
  <ContentContainer header={contentheader}>
    <div key="1">
      {displays1}
    </div>
    <div key="2">
      {displays2}
    </div>
    <div key="3">
      {displays3}
    </div>
  </ContentContainer>);

export default container;
