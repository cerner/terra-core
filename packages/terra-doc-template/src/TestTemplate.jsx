import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ExampleTemplate.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Additional content.
   */
  children: PropTypes.element,
};

const defaultProps = {
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
      children,
      ...customProps
    } = this.props;

    return (
      <div {...customProps} className={cx('template', customProps.className)}>
        {children}
      </div>
    );
  }
}

ExampleTemplate.propTypes = propTypes;
ExampleTemplate.defaultProps = defaultProps;

export default ExampleTemplate;
