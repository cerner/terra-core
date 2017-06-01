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
  const multiSelect = shallow(<MultiSelectList>{items}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
});

it('should render with a selectable and non-selectable item', () => {
  const item1 = <MultiSelectList.Item key="123" isSelectable />;
  const item2 = <MultiSelectList.Item key="124" />;
  const items = [item1, item2];
  const multiSelect = shallow(<MultiSelectList>{items}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
});

it('should render with isDivided', () => {
  const item1 = <MultiSelectList.Item key="123" isSelectable />;
  const items = [item1];
  const multiSelect = shallow(<MultiSelectList isDivided>{items}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
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
  const multiSelect = shallow(<MultiSelectList maxSelectionCount={2}>{items}</MultiSelectList>);

  multiSelect.find('.stuff1').simulate('click');
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff2').simulate('click');
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff3').simulate('click');
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff1').simulate('click');
  expect(multiSelect).toMatchSnapshot();
});

it('should mount with no items', () => {
  const multiSelect = mount(<MultiSelectList />);
  expect(multiSelect).toMatchSnapshot();
});

it('should mount with one items', () => {
  const item1 = <MultiSelectList.Item key="123" />;
  const multiSelect = mount(<MultiSelectList>{item1}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
});
