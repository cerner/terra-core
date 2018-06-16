import React from 'react';
import intlContexts from './intl-context-setup';
import Tabs from '../../src/Tabs';

describe('Tabs', () => {
  it('should render a default component', () => {
    const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Variants', () => {
    it('should render modular-left-aligned tabs', () => {
      const defaultRender = <Tabs variant="modular-left-aligned"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallow(defaultRender, intlContexts.shallowContext);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render modular-centered tabs', () => {
      const defaultRender = <Tabs variant="modular-centered"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallow(defaultRender, intlContexts.shallowContext);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render structural tabs', () => {
      const defaultRender = <Tabs variant="structural"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallow(defaultRender, intlContexts.shallowContext);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with tabs filled when indicated', () => {
    const defaultRender = <Tabs tabsFill><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content filled when indicated', () => {
    const defaultRender = <Tabs fill><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a controlled component when onChange and activeKey are set', () => {
    const defaultRender = <Tabs onChange={() => {}} activeKey="default"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an uncontrolled component when defaultActiveKey is set', () => {
    const defaultRender = <Tabs defaultKey="default"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set custom props', () => {
    const defaultRender = <Tabs className="customClass"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set custom props for child Tab Pane', () => {
    const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" className="customClass" /></Tabs>;
    const wrapper = shallow(defaultRender, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
