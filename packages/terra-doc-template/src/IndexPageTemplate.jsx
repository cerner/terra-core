import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'terra-markdown';
import Button from 'terra-button';
import SlidePanel from 'terra-slide-panel';
import classNames from 'classnames/bind';
import styles from './IndexPageTemplate.scss';

const cx = classNames.bind(styles);

const propTypes = {
  example: PropTypes.element,
  exampleSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
};

const defaultProps = {
  example: null,
  exampleSrc: null,
  title: null,
  description: null,
  children: null,
};

const codeIndicator = '```';

class IndexExampleTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { panelIsOpen: false };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle() {
    this.setState({ panelIsOpen: !this.state.panelIsOpen });
  }

  render() {
    const { title, example, exampleSrc, children, description, ...customProps } = this.props;

    const buttonClassname = cx('slide-panel-control-button');

    const indexExample = (
      <div>
        <Button text="Show Source Code" onClick={this.handlePanelToggle} className={buttonClassname} data-terra-example-hide />
        {example}
      </div>
    );

    const indexExampleSrc = (
      <div>
        <Button text="Show Example" onClick={this.handlePanelToggle} className={buttonClassname} data-terra-example-show />
        <Markdown src={`${codeIndicator}jsx\n${exampleSrc}${codeIndicator}`} />
      </div>
    );

    return (
      <div>
        <h2>{title}</h2>
        {description}
        <SlidePanel
          mainContent={indexExample}
          panelContent={indexExampleSrc}
          isOpen={this.state.panelIsOpen}
          isFullscreen
          {...customProps}
        />
        {children}
      </div>
    );
  }
}

IndexExampleTemplate.propTypes = propTypes;
IndexExampleTemplate.defaultProps = defaultProps;

export default IndexExampleTemplate;
