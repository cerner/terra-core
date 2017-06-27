import ComponentDisclosureRegistry from '../../src/app-delegate/AppDelegate';

describe('ComponentDisclosureRegistry', () => {
  it('should provide registration and retrieval functions', () => {
    const TestObj = () => {};
    const testKey = 'TEST_KEY';

    ComponentDisclosureRegistry.registerComponentForDisclosure(testKey, TestObj);

    expect(ComponentDisclosureRegistry.getComponentForDisclosure(testKey)).toBe(TestObj);
  });
});
