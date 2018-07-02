import React from 'react';
import FilterView from '../../../FilterView';

function FilterViewTest() {
  return (
    <FilterView variant="persistent" placeholder="Search / Filter" >
      <FilterView.OptGroup label="Colors">
        <FilterView.Option value="red" display="Red" key={'red'} />
        <FilterView.Option value="green" display="Green" key={'green'} />
        <FilterView.Option value="blue" display="Blue" key={'blue'} />
      </FilterView.OptGroup>
      <FilterView.OptGroup label="Animals">
        <FilterView.Option value="panda" display="Panda" key={'panda'} />
        <FilterView.Option value="tiger" display="Tiger" key={'tiger'} />
        <FilterView.Option value="koala" display="Koala" key={'koala'} />
        <FilterView.Option value="panther" display="Panther" key={'panther'} />
        <FilterView.Option value="alligator" display="Alligator" key={'alligator'} />
      </FilterView.OptGroup>
      <FilterView.OptGroup label="Chips">
        <FilterView.Option value="doritos" display="Doritos" key={'doritos'} />
        <FilterView.Option value="cheetos" display="Cheetos" key={'cheetos'} />
        <FilterView.Option value="ruffles" display="Ruffles" key={'ruffles'} />
      </FilterView.OptGroup>
    </FilterView>
  );
}
export default () => <FilterViewTest />;
