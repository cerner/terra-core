import React from 'react';
import Markdown from '../../src/Markdown';
import MockREADME from '../../src/terra-dev-site/test/markdown/Markdown.md';

it('should render correctly', () => {
  const singleSelect = mount(<Markdown id="Markdown" src={MockREADME} />);
  expect(singleSelect).toMatchSnapshot();
});
