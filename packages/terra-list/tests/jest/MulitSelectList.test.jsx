import React from 'react';
import MultiSelectList from '../../src/MultiSelectList';

// Snapshot Tests
it('should render a default component', () => {
  const compactTile = shallow(<MultiSelectList />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with items', () => {
  const item1 = <MultiSelectList.Item key="123" isSelectable />;
  const item2 = <MultiSelectList.Item key="124" isSelectable />;
  const item3 = <MultiSelectList.Item key="125" isSelectable />;
  const item4 = <MultiSelectList.Item key="126" isSelectable />;
  const item5 = <MultiSelectList.Item key="127" isSelectable />;
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<MultiSelectList>{items}</MultiSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with a selectable and non-selectable item', () => {
  const item1 = <MultiSelectList.Item key="123" isSelectable />;
  const item2 = <MultiSelectList.Item key="124" />;
  const items = [item1, item2];
  const singleSelect = shallow(<MultiSelectList>{items}</MultiSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with isDivided', () => {
  const item1 = <MultiSelectList.Item key="123" isSelectable />;
  const items = [item1];
  const singleSelect = shallow(<MultiSelectList isDivided>{items}</MultiSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

// Event Tests
it('should select an item when maxSelectionCount is 2', () => {
  const textContent1 = <p>text1</p>;
  const textContent2 = <p>text2</p>;
  const textContent3 = <p>text3</p>;
  const textContent4 = <p>text4</p>;
  const textContent5 = <p>text5</p>;
  const item1 = <MultiSelectList.Item content={textContent1} className="stuff1" key="123" isSelectable />;
  const item2 = <MultiSelectList.Item content={textContent2} className="stuff2" key="124" isSelectable />;
  const item3 = <MultiSelectList.Item content={textContent3} className="stuff3" key="125" isSelectable />;
  const item4 = <MultiSelectList.Item content={textContent4} className="stuff4" key="126" isSelectable />;
  const item5 = <MultiSelectList.Item content={textContent5} className="stuff5" key="127" isSelectable />;
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<MultiSelectList maxSelectionCount={2}>{items}</MultiSelectList>);

  singleSelect.find('.stuff1').simulate('click');
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff2').simulate('click');
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff3').simulate('click');
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff1').simulate('click');
  expect(singleSelect).toMatchSnapshot();
});
