import React from 'react';
import Card from 'terra-card';

const CardClick = () => (
  <div>
    <Card handleClick={mockFn} children={"Click Me!!!"}/>
</div>
);

const mockFn = () => {
	alert('Ive been clicked!')
}


export default CardClick;
