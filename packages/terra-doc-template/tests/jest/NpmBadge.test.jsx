import React from 'react';
import NpmBadge from '../../src/NpmBadge';

const packageName = 'terra-doc-template';
const packageUrl = 'https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template';
const packageVersion = '2.13.0';

describe('NpmBadge', () => {
  it('should render custom package badge when url and version props are set', () => {
    const wrapper = shallow(<NpmBadge
      packageName={packageName}
      packageUrl={packageUrl}
      packageVersion={packageVersion}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
