import React from 'react';
import Card from 'terra-card';

const CardWithHorizontal = () => (
  <div>
    <Card children={<div> <hr/> "Hello World!!" <hr /> </div>}/>
</div>
);

export default CardWithHorizontal;
