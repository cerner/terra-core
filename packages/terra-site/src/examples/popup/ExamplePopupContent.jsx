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
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 1</p>} key="120" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 2</p>} key="121" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 3</p>} key="122" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 4</p>} key="123" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 5</p>} key="124" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 6</p>} key="125" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 7</p>} key="126" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 8</p>} key="127" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 9</p>} key="128" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 10</p>} key="129" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 11</p>} key="130" />
      <SingleSelectList.Item content={<p style={{ padding: '0 5px' }}>Example Value 12</p>} key="131" />
    </SingleSelectList>
);

ExamplePopupContent.propTypes = propTypes;

export default ExamplePopupContent;
