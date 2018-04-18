import React from 'react';
import PropTypes from 'prop-types';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import classNames from 'classnames/bind';
import IndexExampleTemplate from './IndexPageTemplate';
import styles from './DocTemplate.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The given component's npm package name
   */
  packageName: PropTypes.string,
  /**
   * The given component's readme file imported to a string
   */
  readme: PropTypes.string,
  /**
   * Either the path from the repository root to the documentation page (acquired by passing
   * the value `__filename`), or for non-monorepo projects the path from the repository root
   * to the desired file or folder
   */
  srcPath: PropTypes.string,
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
  examples: [],
  propsTables: [],
};

const DocTemplate = ({ packageName, readme, srcPath, examples, propsTables, ...customProps }) => {
  let id = 0;
  let finalSrcPath = srcPath;
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

  /**
   * Check if the path given is to a documentation page.
   * Matches the old site layout of having a terra-site package, and the new layout of having pages
   * distributed with their source packages.
   */
  if (srcPath.includes('packages/') && srcPath.includes('/examples/')) {
    // If we're using the new format
    if (srcPath.endsWith('site-page.jsx')) {
      // We're already in the proper package folder so trim off the extra. Add 1 to preserve a '/'.
      finalSrcPath = srcPath.substring(0, srcPath.indexOf('/examples/') + 1);
    // Else we're using the old format
    } else {
      const pathThroughPackages = srcPath.substring(0, srcPath.indexOf('packages/') + 9);
      // Short becuase it doesn't include the assumed terra- prefix. Non-terra components will have to
      // manually specify their path.
      const shortPackageName = srcPath.substring(srcPath.indexOf('/examples/') + 10, srcPath.indexOf('Index.jsx'));
      finalSrcPath = `${pathThroughPackages}terra-${shortPackageName}`;
    }
  }

  const version = `[![NPM version](http://img.shields.io/npm/v/${packageName}.svg)](https://www.npmjs.org/package/${packageName})`;

  return (
    <div {...customProps}>
      {packageName && <Markdown src={version} />}
      {readme && <Markdown src={readme} />}
      {srcPath && <a href={`https://github.com/cerner/terra-core/tree/master/${finalSrcPath}`}>View component source code</a>}

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
          src={propsTable.componentSource}
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
