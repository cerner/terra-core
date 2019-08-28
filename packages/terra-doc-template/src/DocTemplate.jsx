import React from 'react';
import PropTypes from 'prop-types';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import classNames from 'classnames/bind';
import NpmBadge from './NpmBadge';
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
   * The url for the provided package if not in npm. This will be ignored if packageVersion is not set.
   */
  packageUrl: PropTypes.string,
  /**
   * The given component's package version.
   */
  packageVersion: PropTypes.string,
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
    componentProps: PropTypes.string,
    propsResolution: PropTypes.string,
    stuff: PropTypes.object,
  })),
};

const defaultProps = {
  packageName: '',
  packageUrl: '',
  packageVersion: '',
  readme: '',
  srcPath: '',
  examples: [],
  propsTables: [],
};

const DocTemplate = ({
  packageName, packageVersion, packageUrl, readme, srcPath, examples, propsTables, children, ...customProps
}) => {
  let id = 0;
  let componentProps;
  if (propsTables[0] && propsTables[0].componentProps) componentProps = propsTables[0].componentProps;
  const localExamples = examples;
  let localPropsTables;
  if (propsTables) localPropsTables = propsTables;

  // Assign unique identifiers to use as keys later
  for (let i = 0; i < localExamples.length; i += 1) {
    localExamples[i].id = id;
    id += 1;
  }

  if (localPropsTables) {
    for (let i = 0; i < localPropsTables.length; i += 1) {
      localPropsTables[i].id = id;
      id += 1;
    }
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
    <NpmBadge
      packageName={packageName}
      packageUrl={packageUrl}
      packageVersion={packageVersion}
    />
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
        {componentProps
          ? (
            <div className={cx('props-table-markdown')}>
              <>
                <h2>
                  {propsTables[0].componentName}
                  Props
                </h2>
                <Markdown src={propsTables[0].componentProps} />
              </>
            </div>
          )
          : localPropsTables.map(propsTable => (
            <PropsTable
              src={propsTable.componentSrc}
              componentName={propsTable.componentName}
              key={propsTable.id}
              propsResolution={propsTable.propsResolution}
            />
          ))}
      </div>
      {children && <div className={cx('doc-card')}>{children}</div>}
    </div>
  );
};

DocTemplate.propTypes = propTypes;
DocTemplate.defaultProps = defaultProps;

export default DocTemplate;
