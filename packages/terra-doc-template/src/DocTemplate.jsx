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
   * Enables the ability to add custom content to doc template. Children will be rendered after all other content.
   */
  children: PropTypes.node,
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
   * propsResolution: Type of react-docgen resolver to use for prop-types resolution. Supported values are `default` or `findAllComponentDefinitions`. Will use `default` if left unspecified.
   * ```
   */
  propsTables: PropTypes.arrayOf(PropTypes.shape({
    componentSrc: PropTypes.string,
    componentName: PropTypes.string,
    propsResolution: PropTypes.string,
  })),
  /**
   * Theme Variables
   */
  // eslint-disable-next-line react/forbid-prop-types
  themeVariables: PropTypes.object,
};

const defaultProps = {
  packageName: '',
  readme: '',
  srcPath: '',
  examples: [],
  propsTables: [],
};

const DocTemplate = ({
  packageName, readme, srcPath, examples, propsTables, themeVariables, children, ...customProps
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
      <img src={`https://badgen.net/npm/v/${packageName}`} alt="NPM version" />
    </a>
  );

  return (
    <div {...customProps} className={docTemplateClassNames}>
      <div className={cx('doc-card')}>
        {packageName && badge}
        {readme && <Markdown src={readme} />}
        {srcPath && <a href={srcPath}>View component source code</a>}
      </div>

      {exampleHeader}
      {localExamples.map(example => (
        <IndexExampleTemplate
          title={example.title}
          example={example.example}
          exampleSrc={example.source}
          description={example.description}
          key={example.id}
        />
      ))}

      <div className={cx('doc-card')}>
        {localPropsTables.map(propsTable => (
          <PropsTable
            src={propsTable.componentSrc}
            componentName={propsTable.componentName}
            key={propsTable.id}
            propsResolution={propsTable.propsResolution}
          />
        ))}
      </div>

      {themeVariables && (
        <div className={cx('doc-card')}>
          <div className="markdown-body">
            <h2>Theme Variables (CSS Custom Properties)</h2>
            <table>
              <thead>
                <tr>
                  <th>Property Name</th>
                  <th>Property Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(themeVariables).map(key => (
                  <tr>
                    <td>{key}</td>
                    <td>{themeVariables[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {children && <div className={cx('doc-card')}>{children}</div>}
    </div>
  );
};

DocTemplate.propTypes = propTypes;
DocTemplate.defaultProps = defaultProps;

export default DocTemplate;
