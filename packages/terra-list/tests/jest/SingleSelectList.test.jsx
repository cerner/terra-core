import React from 'react';
import SingleSelectList from '../../src/SingleSelectList';

// Snapshot Tests
it('should render a default component', () => {
  const compactTile = shallow(<SingleSelectList />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with items', () => {
  const textContent1 = <p>text1</p>;
  const textContent2 = <p>text2</p>;
  const textContent3 = <p>text3</p>;
  const textContent4 = <p>text4</p>;
  const textContent5 = <p>text5</p>;
  const item1 = shallow(<SingleSelectList.Item content={textContent1} />);
  const item2 = shallow(<SingleSelectList.Item content={textContent2} />);
  const item3 = shallow(<SingleSelectList.Item content={textContent3} />);
  const item4 = shallow(<SingleSelectList.Item content={textContent4} />);
  const item5 = shallow(<SingleSelectList.Item content={textContent5} />);
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<SingleSelectList>{items}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with isDivided', () => {
  const textContent1 = <p>text1</p>;
  const item1 = shallow(<SingleSelectList.Item content={textContent1} />);
  const items = [item1];
  const singleSelect = shallow(<SingleSelectList isDivided>{items}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with hasChevrons', () => {
  const textContent1 = <p>text1</p>;
  const item1 = shallow(<SingleSelectList.Item content={textContent1} />);
  const items = [item1];
  const singleSelect = shallow(<SingleSelectList hasChevrons>{items}</SingleSelectList>);
  expect(singleSelect).toMatchSnapshot();
});

// Event Tests
it('should select an item', () => {
  const textContent1 = <p>text1</p>;
  const textContent2 = <p>text2</p>;
  const textContent3 = <p>text3</p>;
  const textContent4 = <p>text4</p>;
  const textContent5 = <p>text5</p>;
  const item1 = <SingleSelectList.Item content={textContent1} className="stuff1" key="123" />;
  const item2 = <SingleSelectList.Item content={textContent2} className="stuff2" key="124" />;
  const item3 = <SingleSelectList.Item content={textContent3} className="stuff3" key="125" />;
  const item4 = <SingleSelectList.Item content={textContent4} className="stuff4" key="126" />;
  const item5 = <SingleSelectList.Item content={textContent5} className="stuff5" key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<SingleSelectList>{items}</SingleSelectList>);

  singleSelect.find('.stuff1').simulate('click');
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff2').simulate('click');
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff3').simulate('click');
  expect(singleSelect).toMatchSnapshot();

  singleSelect.find('.stuff1').simulate('click');
  expect(singleSelect).toMatchSnapshot();
});
