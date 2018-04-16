import React from 'react';
import Markdown from '../../src/Markdown';
import MockREADME from '../nightwatch/MockREADME.md';

it('should render correctly', () => {
  const singleSelect = mount(<Markdown id="Markdown" src={MockREADME} />);
  expect(singleSelect).toMatchSnapshot();
});
