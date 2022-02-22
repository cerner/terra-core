import React from 'react';
import IconCollectionImportsCell from '../../src/IconCollectionTable/IconCollectionImportsCell';

const someImportNames = [
  'IconExplosion',
  'IconPig',
  'IconDinosaur',
]

describe('IconCollectionImportsCell', () => {
  it('should render a default component with import names', () => {
    const wrapper = shallow(<IconCollectionImportsCell importNames={someImportNames} />);
    expect(wrapper.children('p').length).toBe(3);
    expect(wrapper).toMatchSnapshot();
  });
});
