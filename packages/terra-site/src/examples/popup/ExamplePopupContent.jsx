import React from 'react';
import PropTypes from 'prop-types';
import SingleSelectList from 'terra-list/lib/SingleSelectList';

const propTypes = {
  onChange: PropTypes.func,
};

const ExamplePopupContent = ({
    onChange,
  }) => (
    <SingleSelectList isDivided onChange={onChange}>
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 1</span>} key="120" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 2</span>} key="121" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 3</span>} key="122" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 4</span>} key="123" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 5</span>} key="124" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 6</span>} key="125" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 7</span>} key="126" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 8</span>} key="127" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 9</span>} key="128" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 10</span>} key="129" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 11</span>} key="130" />
      <SingleSelectList.Item content={<span style={{ padding: '10px' }}>Example Value 12</span>} key="131" />
    </SingleSelectList>
);

ExamplePopupContent.propTypes = propTypes;

export default ExamplePopupContent;
