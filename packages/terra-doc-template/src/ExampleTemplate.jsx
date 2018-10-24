import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import classNames from 'classnames/bind';
import styles from './ExampleTemplate.module.scss';
import theme from './syntax-highlighter-theme';

registerLanguage('jsx', jsx);

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

    this.state = { isExpanded: false };
    this.handleCodeToggle = this.handleCodeToggle.bind(this);
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
        <div className={cx('content')}>
          {description
            && (
            <div className={cx('description')}>
              {description}
            </div>
            )}
          {example}
          {children}
        </div>
        {exampleSrc
          && (
          <div className={cx('footer')}>
            <button type="button" className={cx('toggle')} onClick={this.handleCodeToggle}>
              <span className={cx('chevron-left')} />
              <span>Code</span>
              <span className={cx('chevron-right')} />
            </button>
            <div className={cx('code', { 'is-expanded': this.state.isExpanded })} aria-hidden={!this.state.isExpanded}>
              <SyntaxHighlighter language="jsx" style={theme} customStyle={{ margin: '0', borderRadius: '0' }}>
                {exampleSrc}
              </SyntaxHighlighter>
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
