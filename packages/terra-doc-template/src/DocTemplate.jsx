import React from 'react';
import PropTypes from 'prop-types';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import classNames from 'classnames/bind';
import IndexExampleTemplate from './ExampleTemplate';
import styles from './DocTemplate.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The given component's npm package name.
   */
  packageName: PropTypes.string,
  /**
   * The given component's readme file imported to a string.
   */
  readme: PropTypes.string,
  /**
   * The path from the project root to the folder for the component. Only needs to be specified
   * if `packages/${packageName}` would be wrong.
   */
  srcPath: PropTypes.string,
  /**
   * The URL for the git repository of the project. Typically found by importing `{ repository }` from
   * the `package.json` and passing the `repository.url`. This prop and either `packageName` or `srcLink`
   * are required to be specified for the source link to be displayed on the page.
   */
  repositoryURL: PropTypes.string,
  /**
   * The git branch to use. For bitbucket repositories this should be the commit hash to browse from.
   */
  branch: PropTypes.string,
  /**
   * All of the example(s) that will be displayed. An empty array is supported.
   * ```
   * title: The title of the example
   * description: A description of the example to be displayed below the title
   * example: The example to be displayed
   * source: The source code of the example
   * ```
   */
  examples: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string,
        description: PropTypes.string,
        example: PropTypes.element,
        source: PropTypes.string,
      },
    ),
  ),
  /**
   * All of the props table(s) that will be displayed. An empty array is supported.
   * ```
   * componentSrc: The source code of the component
   * componentName: The name of the component
   * ```
   */
  propsTables: PropTypes.arrayOf(
    PropTypes.shape(
      {
        componentSrc: PropTypes.string,
        componentName: PropTypes.string,
      },
    ),
  ),
};

const defaultProps = {
  packageName: '',
  readme: '',
  srcPath: '',
  branch: 'master',
  repositoryURL: '',
  examples: [],
  propsTables: [],
};

const DocTemplate = ({ packageName, readme, srcPath, repositoryURL, branch, examples, propsTables, ...customProps }) => {
  let id = 0;
  let processedRepositoryURL;
  let processedSrcPath;
  let gitBranchPath;
  const localExamples = examples;
  const localPropsTables = propsTables;

  // Assign unique identifiers to use as keys later
  for (let i = 0; i < localExamples.length; i += 1) {
    localExamples[i].id = id;
    id += 1;
  }

  for (let i = 0; i < localPropsTables.length; i += 1) {
    localPropsTables[i].id = id;
    id += 1;
  }

  // Both of these props are needed to be able to generate the source path
  const showSrcPath = repositoryURL && (packageName || srcPath);

  if (showSrcPath) {
    // The repository url can be of the format 'provider:user/repository' so process those for the website
    if (repositoryURL.startsWith('git+')) {
      processedRepositoryURL = repositoryURL.substring(4, repositoryURL.length);

      if (processedRepositoryURL.endsWith('.git')) {
        processedRepositoryURL = processedRepositoryURL.substring(0, processedRepositoryURL.length - 4);
      }
    } else if (repositoryURL.startsWith('github:')) {
      processedRepositoryURL = `https://github.com/${repositoryURL.substring(7, repositoryURL.length)}`;
    } else if (repositoryURL.startsWith('bitbucket:')) {
      processedRepositoryURL = `https://bitbucket.org/${repositoryURL.substring(10, repositoryURL.length)}`;
    } else if (repositoryURL.startsWith('gitlab:')) {
      processedRepositoryURL = `https://gitlab.com/${repositoryURL.substring(7, repositoryURL.length)}`;
    } else if (repositoryURL.startsWith('git://')) {
      processedRepositoryURL = `https://${repositoryURL.substring(6, repositoryURL.length)}`;

      if (processedRepositoryURL.endsWith('.git')) {
        processedRepositoryURL = processedRepositoryURL.substring(0, processedRepositoryURL.length - 4);
      }
    // Fallback if the repositoryURL doesn't match any expected patterns
    } else {
      processedRepositoryURL = repositoryURL;
    }

    // Determines the path from the repositoryURL to the project files browser
    if (processedRepositoryURL.includes('bitbucket.org')) {
      gitBranchPath = `src/${branch}`;
    } else {
      gitBranchPath = `tree/${branch}`;
    }

    // Determines where in the project files the folder for the component is
    if (srcPath) {
      processedSrcPath = srcPath;
    } else {
      processedSrcPath = `packages/${packageName}`;
    }
  }

  const version = `[![NPM version](http://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.org/package/${packageName})`;

  return (
    <div {...customProps}>
      {packageName && <Markdown src={version} />}
      {readme && <Markdown src={readme} />}
      {showSrcPath && <a href={`${processedRepositoryURL}/${gitBranchPath}/${processedSrcPath}`}>View component source code</a>}

      {localExamples.length > 0 && <h1 className={cx('.examples-header')} >Examples</h1>}
      {localExamples.map(example =>
        <IndexExampleTemplate
          title={example.title}
          example={example.example}
          exampleSrc={example.source}
          description={example.description}
          key={example.id}
        />,
      )}

      {localPropsTables.map(propsTable =>
        <PropsTable
          src={propsTable.componentSrc}
          componentName={propsTable.componentName}
          key={propsTable.id}
        />,
      )}
    </div>
  );
};

DocTemplate.propTypes = propTypes;
DocTemplate.defaultProps = defaultProps;

export default DocTemplate;
