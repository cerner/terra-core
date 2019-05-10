import React from 'react';
import Markdown from '../../src/Markdown';
import MockREADME from '../../src/terra-dev-site/test/markdown/Markdown.md';

const headings = [
  '# H1',
  '## H2',
  '### H3',
  '#### H4',
  '##### H5',
  '###### H6',
].join('\n');

const relative = '![alt text](favicon.ico "relative")';

it('should render correctly', () => {
  const singleSelect = mount(<Markdown src={MockREADME} />);
  expect(singleSelect).toMatchSnapshot();
});

it('should apply a base url', () => {
  const singleSelect = mount(<Markdown src={relative} baseUrl="/derp/" />);
  expect(singleSelect).toMatchSnapshot();
});

it('should not apply a base url', () => {
  const singleSelect = mount(<Markdown src={relative} />);
  expect(singleSelect).toMatchSnapshot();
});

it('should apply anchor tags to headings', () => {
  const singleSelect = mount(<Markdown src={headings} hasHeadingAnchors />);
  expect(singleSelect).toMatchSnapshot();
});

it('should not apply anchor tags to headings', () => {
  const singleSelect = mount(<Markdown src={headings} />);
  expect(singleSelect).toMatchSnapshot();
});
