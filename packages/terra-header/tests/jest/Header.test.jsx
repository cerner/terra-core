/* eslint-disable no-alert, no-console */
import React from 'react';
import Button from 'terra-button';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import Header from '../../src/Header';

describe('Header', () => {
  const title = 'title';
  const level = 2;
  const content = <Button text="Button" />;
  // Snapshot Tests
  it('should render a default header', () => {
    const header = <Header />;
    const wrapper = shallow(header);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header with given title', () => {
    const header = <Header title={title} />;
    const wrapper = shallow(header);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fail if title is not a string', () => {
    expect(() => {
      shallow(<Header title={1} />);
    }).toThrowError();
    expect(() => {
      shallow(<Header title={<Button text={title} />} />);
    }).toThrowError();
  });

  it('should render a default header', () => {
    const header = <Header title={title} level={level} />;
    const wrapper = shallow(header);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fail if level is not a number between 1 and 6', () => {
    expect(() => {
      shallow(<Header title={title} level={0} />);
    }).toThrowError();
    expect(() => {
      shallow(<Header title={title} level={7} />);
    }).toThrowError();
    expect(() => {
      shallow(<Header title={title} level="5" />);
    }).toThrowError();
    expect(() => {
      shallow(<Header title={title} level={<Button text="5" />} />);
    }).toThrowError();
  });

  it('should render a header with startContent', () => {
    const header = <Header startContent={content} />;
    const wrapper = shallow(header);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fail if startContent is not an element', () => {
    expect(() => {
      shallow(<Header startContent={0} />);
    }).toThrowError();
    expect(() => {
      shallow(<Header startContent="content" />);
    }).toThrowError();
  });

  it('should render a header with endContent', () => {
    const header = <Header endContent={content} />;
    const wrapper = shallow(header);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fail if endContent is not an element', () => {
    expect(() => {
      shallow(<Header endContent={0} />);
    }).toThrowError();
    expect(() => {
      shallow(<Header endContent="content" />);
    }).toThrowError();
  });

  it('should render a header with children', () => {
    const header = (
      <Header>
        {content}
      </Header>
    );
    const wrapper = shallow(header);
    expect(wrapper).toMatchSnapshot();
  });
});
