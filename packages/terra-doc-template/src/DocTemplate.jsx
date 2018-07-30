import React from 'react';
import PropTypes from 'prop-types';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import classNames from 'classnames/bind';
import IndexExampleTemplate from './ExampleTemplate';
import styles from './DocTemplate.module.scss';

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
   * The url to the source code for the given component.
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
  examples: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.node,
    example: PropTypes.element,
    source: PropTypes.string,
  })),
  /**
   * All of the props table(s) that will be displayed. An empty array is supported.
   * ```
   * componentSrc: The source code of the component
   * componentName: The name of the component
   * ```
   */
  propsTables: PropTypes.arrayOf(PropTypes.shape({
    componentSrc: PropTypes.string,
    componentName: PropTypes.string,
  })),
};

const defaultProps = {
  packageName: '',
  readme: '',
  srcPath: '',
  examples: [],
  propsTables: [],
};

const DocTemplate = ({
  packageName, readme, srcPath, examples, propsTables, ...customProps
}) => {
  let id = 0;
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

  const docTemplateClassNames = cx([
    'doc-template',
    customProps.className,
  ]);

  let exampleHeader;
  if (localExamples.length > 0) {
    const exampleHeaderText = localExamples.length > 1 ? 'Examples' : 'Example';
    exampleHeader = <h1 className={cx('examples-header')}>{exampleHeaderText}</h1>;
  }

  const badge = (
    <a href={`https://www.npmjs.org/package/${packageName}`}>
      <img src={`https://img.shields.io/npm/v/${packageName}.svg`} alt="NPM version" />
    </a>
  );

  return (
    <div {...customProps} className={docTemplateClassNames}>
      {packageName && badge}
      {readme && <Markdown src={readme} />}
      {srcPath && <a href={srcPath}>View component source code</a>}

      {exampleHeader}
      {localExamples.map(example =>
        (<IndexExampleTemplate
          title={example.title}
          example={example.example}
          exampleSrc={example.source}
          description={example.description}
          key={example.id}
        />))}

      {localPropsTables.map(propsTable =>
        (<PropsTable
          src={propsTable.componentSrc}
          componentName={propsTable.componentName}
          key={propsTable.id}
        />))}
    </div>
  );
};

DocTemplate.propTypes = propTypes;
DocTemplate.defaultProps = defaultProps;

export default DocTemplate;
