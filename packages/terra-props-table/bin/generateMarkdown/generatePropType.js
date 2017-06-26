const generatePropType = (type) => {
  const typeName = type.name === 'enum' ? typeof type.value[0].value : type.name;

  return `\`${typeName}\``;
};

module.exports = generatePropType;
