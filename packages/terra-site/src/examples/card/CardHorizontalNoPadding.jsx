import React from 'react';
import Card from 'terra-card';

const CardHorizontalNoPadding = () => (
  <div>
    <Card children={<div> <hr style={{marginLeft:'-10px',marginRight:'-10px'}}/> "Hello World!!" <hr style={{marginLeft:'-10px',marginRight:'-10px'}}/> </div>}/>
</div>
);

export default CardHorizontalNoPadding;
