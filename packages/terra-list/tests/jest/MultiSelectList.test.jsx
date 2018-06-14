import React from 'react';
import MultiSelectList from '../../src/MultiSelectList';

const item1 = <MultiSelectList.Item content={<p>text1</p>} className="stuff1" key="123" />;
const item2 = <MultiSelectList.Item content={<p>text2</p>} className="stuff2" key="124" />;
const item3 = <MultiSelectList.Item content={<p>text3</p>} className="stuff3" key="125" />;
const item4 = <MultiSelectList.Item content={<p>text4</p>} className="stuff4" key="126" />;
const item5 = <MultiSelectList.Item content={<p>text5</p>} className="stuff5" key="127" />;

// Snapshot Tests
it('should render a default component', () => {
  const compactTile = shallow(<MultiSelectList />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with items', () => {
  const items = [item1, item2, item3, item4, item5];
  const multiSelect = shallow(<MultiSelectList>{items}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
});

it('should render with a selectable and non-selectable item', () => {
  const item6 = <MultiSelectList.Item key="124" isSelectable={false} />;
  const items = [item1, item6];
  const multiSelect = shallow(<MultiSelectList>{items}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
});

it('should render with isDivided', () => {
  const items = [item1];
  const multiSelect = shallow(<MultiSelectList isDivided>{items}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
});

// Event Tests
it('should select an item when maxSelectionCount is 2', () => {
  const items = [item1, item2, item3, item4, item5];
  const multiSelect = mount(<MultiSelectList maxSelectionCount={2}>{items}</MultiSelectList>);

  multiSelect.find('.stuff1').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff2').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff3').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff1').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();
});

it('should select an item across multiple sections when maxSelectionCount is 2', () => {
  const sectionItems1 = [item1, item3];
  const sectionItems2 = [item2, item4, item5];
  const multiSelectList = (
    <MultiSelectList hasSections maxSelectionCount={2}>
      <MultiSelectList.Section
        headerContent="Header1"
        listItems={sectionItems1}
      />
      <MultiSelectList.Section
        headerContent="Header2"
        listItems={sectionItems2}
      />
    </MultiSelectList>
  );

  const multiSelect = mount(multiSelectList);

  multiSelect.find('.stuff1').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff2').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff3').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();

  multiSelect.find('.stuff4').first().simulate('click', { preventDefault() {} });
  expect(multiSelect).toMatchSnapshot();
});

it('should mount with no items', () => {
  const multiSelect = mount(<MultiSelectList />);
  expect(multiSelect).toMatchSnapshot();
});

it('should mount with one item', () => {
  const multiSelect = mount(<MultiSelectList>{[item1]}</MultiSelectList>);
  expect(multiSelect).toMatchSnapshot();
});

it('should mount with no items with section headers', () => {
  const multiSelect = mount(<MultiSelectList hasSections>
      <MultiSelectList.Section headerContent="Header1" />
    </MultiSelectList>
  );
  expect(multiSelect).toMatchSnapshot();
});


it('should mount with one items with Section Headers', () => {
  const multiSelect = mount(<MultiSelectList hasSections>
      <MultiSelectList.Section headerContent="Header1" listItems={[item1]} />
    </MultiSelectList>
  );
  expect(multiSelect).toMatchSnapshot();
});
