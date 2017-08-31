const aggregateDependencies = (packageJson) => {
  const packageDependencies = {};

  if (packageJson.dependencies) {
    packageDependencies.dependencies = packageJson.dependencies;
  }

  if (packageJson.devDependencies) {
    packageDependencies.devDependencies = packageJson.devDependencies;
  }

  if (packageJson.peerDependencies) {
    packageDependencies.peerDependencies = packageJson.peerDependencies;
  }

  return packageDependencies;
};

module.exports = aggregateDependencies;
