import React from 'react';
import Portal from '../../src/Portal';

const content = <div>I am the content</div>;
const div = document.createElement('div');
document.body.appendChild(div);

describe('<Portal />', () => {
  it('is rendered as an empty component by default', () => {
    const wrapper = shallow(<Portal />);
    expect(wrapper.type()).toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it('wraps the children in a div, appends it to <body/>, then unmouts it', () => {
    // <body><div/><body>
    expect(document.body.children).toHaveLength(1);

    const wrapper = mount(<Portal>{content}</Portal>, div);
    // <body><div><!-- react-empty --></div></body>
    wrapper.setProps({ isOpen: true });
    // <body>
    //  <div><!-- react-empty --></div>
    //  <div><div>I am the content</div></div>
    // </body>
    expect(document.body.children).toHaveLength(2);
    const lastChild = document.body.lastElementChild;
    expect(lastChild.tagName).toBe('DIV');
    expect(lastChild.children).toHaveLength(1);
    expect(lastChild.children[0].textContent).toBe('I am the content');

    wrapper.setProps({ isOpen: false });
    // <body><div><!-- react-empty --></div></body>
    expect(document.body.children).toHaveLength(1);
  });

  it('appends the children to a custom DOM element', () => {
    // <body><div/><body>
    const target = document.createElement('div');
    target.id = 'target';
    document.body.appendChild(target);
    // <body><div/><div id='target'/><body>
    const wrapper = mount(<Portal target={target}>{content}</Portal>, div);
    // <body>
    //  <div><!-- react-empty --></div>
    //  <div id='target'/>
    // </body>
    wrapper.setProps({ isOpen: true });
    // <body>
    //  <div><!-- react-empty --></div>
    //  <div id='target'>
    //    <div><div>I am the content</div></div>
    //  </div>
    // </body>
    const children = document.getElementById('target').children;
    expect(children).toHaveLength(1);
    expect(children[0].children[0].tagName).toBe('DIV');
    expect(children[0].children[0].textContent).toBe('I am the content');
  });
});
