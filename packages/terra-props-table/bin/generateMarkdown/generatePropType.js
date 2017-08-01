function formatShape(shape) {
  return JSON.stringify(shape, null, 1);
}

const generatePropType = (type) => {
  let typeName = type.name;

  if (type.name === 'enum') {
    if (isNaN(type.value[0].value)) {
      typeName = typeof type.value[0].value;
    } else {
      typeName = 'number';
    }
  } else if (typeName === 'arrayOf') {
    if (type.value.name === 'shape') {
      typeName = `array of objects structured like: ${formatShape(type.value.value)}`;
    } else {
      typeName = `array of ${type.value.name}s`;
    }
  } else if (typeName === 'union') {
    const options = type.value.map((option) => {
      const name = option.name === 'shape' ? `an object structured like ${formatShape(option.value)}` : option.name;
      return name;
    });
    typeName = options.join(' or ');
  } else if (typeName === 'shape') {
    typeName = `an object structured like: ${formatShape(type.value)}`;
  }

  return `\`${typeName}\``;
};

module.exports = generatePropType;
