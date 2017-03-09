import React from 'react';
import SlidePanel from '../../src/SlidePanel';

it('should render a default SlidePanel with no props', () => {
  const slidePanel = <SlidePanel />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with panelBehavior = squish', () => {
  const slidePanel = <SlidePanel panelBehavior="squish" />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with panelBehavior = overlay', () => {
  const slidePanel = <SlidePanel panelBehavior="overlay" />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with panelPosition = start', () => {
  const slidePanel = <SlidePanel panelPosition="start" />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with panelPosition = end', () => {
  const slidePanel = <SlidePanel panelPosition="end" />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with panelSize = small', () => {
  const slidePanel = <SlidePanel panelSize="small" />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with panelSize = large', () => {
  const slidePanel = <SlidePanel panelSize="large" />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with an open state', () => {
  const slidePanel = <SlidePanel isOpen />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with a fullscreen state', () => {
  const slidePanel = <SlidePanel isFullscreen />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with fill', () => {
  const slidePanel = <SlidePanel fill />;
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with main content', () => {
  const slidePanel = (
    <SlidePanel
      mainContent={<p>Main Content</p>}
    />
  );
  const wrapper = render(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with panel content', () => {
  const slidePanel = (
    <SlidePanel
      panelContent={<p>Panel Content</p>}
    />
  );
  const wrapper = render(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlidePanel with the given extra attributes', () => {
  const slidePanel = (
    <SlidePanel panelBehavior="overlay" id="my-slide-panel" className="pad-this-slide-panel" data-test-attr="ahoy thar" />
  );
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});

it('should override user provided attributes that aren\'t className', () => {
  const slidePanel = (
    <SlidePanel panelBehavior="overlay" className="pad-this-slide-panel" data-test-attr="ahoy thar" data-slide-panel-panel-behavior="i am not good with slide panel" />
  );
  const wrapper = shallow(slidePanel);

  expect(wrapper).toMatchSnapshot();
});
