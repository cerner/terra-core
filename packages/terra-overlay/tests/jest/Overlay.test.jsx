import React from 'react';
import Overlay from '../../src/Overlay';

const content = <div>I am the content</div>;
const mockFn = jest.fn();
const div = document.createElement('div');
document.body.appendChild(div);

describe('<Overlay />', () => {
  it('renders default fullscreen overlay', () => {
    // <body><div/><body>
    expect(document.body.children).toHaveLength(1);

    const wrapper = mount(<Overlay onRequestClose={mockFn} />, div);
    // <body><div><!-- react-empty --></div></body>
    wrapper.setProps({ isOpen: true });
    // <body class='terra-Overlay--open'>
    //  <div><!-- react-empty --></div>
    //  <div>
    //    <div class='terra-Overlay terra-Overlay--center'>
    //      <div tabIndex='0' class='terra-Overlay-content'/>
    //    </div>
    //  </div>
    // </body>
    expect(document.body.classList).toContain('terra-Overlay--open');
    const overlay = document.getElementsByClassName('terra-Overlay')[0];
    expect(overlay.classList).toContain('terra-Overlay--center');
    const overlayContent = overlay.getElementsByClassName('terra-Overlay-content')[0];
    expect(overlayContent.getAttribute('tabindex')).toBe('0');

    wrapper.setProps({ isOpen: false });
    // // <body><div><!-- react-empty --></div></body>
    expect(document.body.children).toHaveLength(1);
  });

  it('overlays on a target DOM element', () => {
    // <body><div/><body>
    const target = document.createElement('div');
    target.id = 'target';
    document.body.appendChild(target);
    // <body><div/><div id='target'/><body>
    const wrapper = mount(
      <Overlay
        container={target}
        isFullScreen={false}
        onRequestClose={mockFn}
      >{content}</Overlay>,
      div,
    );
    // <body>
    //  <div><!-- react-empty --></div>
    //  <div id='target'/>
    // </body>
    wrapper.setProps({ isOpen: true });
    // <body>
    //  <div><!-- react-empty --></div>
    //  <div id='target' class='terra-Overlay--open'>
    //    <div>
    //      <div class='terra-Overlay terra-Overlay--center'
    //            style='positon: absolute; top: npx; left: mpx'>
    //        <div tabIndex='0' class='terra-Overlay-content'>
    //          <div>I am the content</div>
    //        </div>
    //      </div>
    //    </div>
    //  </div>
    // </body>
    expect(target.classList).toContain('terra-Overlay--open');
    const overlay = target.getElementsByClassName('terra-Overlay')[0];
    expect(overlay.style.position).toBe('absolute');
    expect(overlay.style.top).toBeDefined();
    expect(overlay.style.left).toBeDefined();
    const overlayContent = overlay.getElementsByClassName('terra-Overlay-content')[0];
    expect(overlayContent.children).toHaveLength(1);
    expect(overlayContent.textContent).toBe('I am the content');

    wrapper.setProps({ isOpen: false });
  });
});
