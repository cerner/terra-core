const DisclosureComponentRegistry = {};

const registerComponentForDisclosure = (key, Component) => {
  DisclosureComponentRegistry[key] = Component;
};

const getComponentForDisclosure = key => (
  DisclosureComponentRegistry[key]
);

export { registerComponentForDisclosure, getComponentForDisclosure };
