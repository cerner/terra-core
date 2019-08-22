import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import classNames from 'classnames/bind';
import styles from './ExampleTemplate.module.scss';
import theme from './syntax-highlighter-theme';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The example component.
   */
  example: PropTypes.element,
  /**
   * The example source code.
   */
  exampleSrc: PropTypes.string,
  /**
   * The example title.
   */
  title: PropTypes.string,
  /**
   * The example description.
   */
  description: PropTypes.node,
  /**
   * Additional content.
   */
  children: PropTypes.element,
};

const defaultProps = {
  example: undefined,
  exampleSrc: undefined,
  title: undefined,
  description: undefined,
  children: undefined,
};

class ExampleTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      isBackgroundTransparent: false,
    };

    this.handleBgToggle = this.handleBgToggle.bind(this);
    this.handleCodeToggle = this.handleCodeToggle.bind(this);
  }

  handleBgToggle() {
    this.setState(prevState => ({ isBackgroundTransparent: !prevState.isBackgroundTransparent }));
  }

  handleCodeToggle() {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  render() {
    const {
      title,
      example,
      exampleSrc,
      children,
      description,
      ...customProps
    } = this.props;

    const { isExpanded, isBackgroundTransparent } = this.state;

    let dynamicContentStyle = {};

    if (isBackgroundTransparent) {
      dynamicContentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      };
    }

    return (
      <div {...customProps} className={cx('template', customProps.className)}>
        {title
          && (
          <div className={cx('header')}>
            <h2 className={cx('title')}>
              {title}
            </h2>
          </div>
          )}
        {/* eslint-disable react/forbid-dom-props */}
        <div className={cx('content')} style={dynamicContentStyle}>
          {description
            && (
            <div className={cx('description')}>
              {description}
            </div>
            )}
          {example}
          {children}
        </div>
        {/* eslint-enable react/forbid-dom-props */}
        {exampleSrc
          && (
          <div className={cx('footer')}>
            <div className={cx('button-container')}>
              <button type="button" className={cx('bg-toggle')} onClick={this.handleBgToggle}>
                Toggle Background
              </button>
              <button type="button" className={cx('code-toggle')} onClick={this.handleCodeToggle}>
                <span className={cx('chevron-left')} />
                <span>Code</span>
                <span className={cx('chevron-right')} />
              </button>
            </div>
            <div className={cx('code', { 'is-expanded': isExpanded })} aria-hidden={!isExpanded}>
              {/* eslint-disable react/forbid-component-props */}
              {isExpanded ? (
                <SyntaxHighlighter language="jsx" style={theme} customStyle={{ margin: '0', borderRadius: '0' }}>
                  {exampleSrc}
                </SyntaxHighlighter>
              ) : undefined }
              {/* eslint-enable react/forbid-component-props */}
            </div>
          </div>
          )}
      </div>
    );
  }
}

ExampleTemplate.propTypes = propTypes;
ExampleTemplate.defaultProps = defaultProps;

export default ExampleTemplate;
