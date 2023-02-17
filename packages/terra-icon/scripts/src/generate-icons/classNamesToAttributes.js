const classNamesToAttributes = (attributes) => {
  const iconAttributes = { ...attributes };

  if (iconAttributes.className) {
    // remove is-bidi css class and add isBidi as an attribute
    if (iconAttributes.className.includes('is-bidi')) {
      iconAttributes.className = iconAttributes.className.replace('is-bidi', '');
      iconAttributes.isBidi = true;
    }

    // remove is-spin css class and add isSpin as an attribute
    if (iconAttributes.className.includes('is-spin')) {
      iconAttributes.className = iconAttributes.className.replace('is-spin', '');
      iconAttributes.isSpin = true;
    }

    // remove trailing whitespace
    iconAttributes.className = iconAttributes.className.replace(/^\s+|\s+$/g, '');
  }

  return iconAttributes;
};

export default classNamesToAttributes;
