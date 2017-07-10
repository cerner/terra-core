const generatePropType = (type) => {
  let typeName;

  if (type.name === 'enum') {
    if (isNaN(type.value[0].value)) {
      typeName = typeof type.value[0].value;
    } else {
      typeName = 'number';
    }
  } else {
    typeName = type.name;
  }

  return `\`${typeName}\``;
};

module.exports = generatePropType;
