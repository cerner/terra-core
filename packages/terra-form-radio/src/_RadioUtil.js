// TODO: move this to utils package. Issue #1010.
const isConsideredMobileDevice = () => window.matchMedia('(max-width: 1024px)').matches
    && (
      'ontouchstart' in window
      // eslint-disable-next-line no-undef
      || (window.DocumentTouch && document instanceof DocumentTouch)
      || navigator.maxTouchPoints > 0 // eslint-disable-line compat/compat
      || navigator.msMaxTouchPoints > 0
    );

const findLastFocasableItem = (radioBtns) => {
  let itemIndex = radioBtns.length - 1;

  while (radioBtns[itemIndex] && radioBtns[itemIndex].hasAttribute('disabled') && itemIndex > -1) {
    itemIndex -= 1;
  }

  return (itemIndex) || undefined;
};

const findFirstFocasableItem = (radioBtns) => {
  let itemIndex = 0;

  while (radioBtns[itemIndex] && radioBtns[itemIndex].hasAttribute('disabled') && itemIndex < radioBtns.length) {
    itemIndex += 1;
  }

  return (itemIndex < radioBtns.length) ? itemIndex : undefined;
};

export {
  isConsideredMobileDevice,
  findLastFocasableItem,
  findFirstFocasableItem,
};
