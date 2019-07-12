const generatePeerDependencyDoc = (peerDependencies) => {
  const tableHeader = '| Peer Dependency | Version |';
  const tableHeaderBottom = '|-|-|';

  const dependencyRows = Object.keys(peerDependencies).sort().map((dependency) => {
    // Use the peer dependency version specified in the package.json
    const specifiedVersion = peerDependencies[dependency];

    return `| ${dependency} | ${specifiedVersion} |`;
  });

  const dependencyTableMarkdown = `\n${tableHeader}\n${tableHeaderBottom}\n${dependencyRows.join('\n')}\n`;

  const peerDependenciesContent = `<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app to properly function as designed.
${dependencyTableMarkdown}
<!-- AUTO-GENERATED-CONTENT:END -->`;

  return peerDependenciesContent;
};

module.exports = generatePeerDependencyDoc;
