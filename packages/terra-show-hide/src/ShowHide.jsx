import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'terra-toggle';
import { injectIntl, intlShape } from 'terra-base';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ShowHide.module.scss';
import Button from './_ShowHideButton';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content in the body of the component that will be shown or hidden.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function triggered when the component is expanded or collapsed.
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Text that will be visible to the user while the component is collapsed.
   */
  preview: PropTypes.string.isRequired,
  /**
   * Button text that will be displayed when the component is collapsed.
   */
  collapsedButtonText: PropTypes.string,
  /**
   * Button text that will be displayed when the component is expanded.
   */
  expandedButtonText: PropTypes.string,
  /**
   * Icon displayed next to the button text.
   */
  icon: PropTypes.element,
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,
  /**
   * Sets the animation for the component when it is expanded or collapsed.
   */
  isAnimated: PropTypes.bool,
  /**
   * Allows parent to toggle the component. True for open and false for close.
   */
  toggle: PropTypes.bool,
};

const defaultProps = {
  icon: <IconChevronDown />,
  isAnimated: false,
  toggle: false,
};

class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.props.onToggle();
  }

  render() {
    const {
      collapsedButtonText,
      children,
      expandedButtonText,
      icon,
      intl,
      isAnimated,
      onToggle,
      preview,
      toggle,
      ...customProps
    } = this.props;

    const collapsedText = (collapsedButtonText === undefined) ? intl.formatMessage({ id: 'Terra.showhide.showmore' }) : collapsedButtonText;
    const expandedText = (expandedButtonText === undefined) ? intl.formatMessage({ id: 'Terra.showhide.hide' }) : expandedButtonText;
    const buttonText = this.props.toggle ? expandedText : collapsedText;

    const showHideClassName = cx([
      'button',
      { 'is-open': this.props.toggle },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={showHideClassName}>
        {!this.props.toggle && preview}
        <Toggle isOpen={this.props.toggle} isAnimated={this.props.isAnimated} className={cx([{ animated: this.props.isAnimated }])}>
          {this.props.children}
        </Toggle>
        <Button
          icon={<span className={cx('icon')}>{icon}</span>}
          aria-expanded={this.props.toggle}
          text={buttonText}
          onClick={this.handleOnClick}
        />
      </div>
    );
  }
}

ShowHide.propTypes = propTypes;
ShowHide.defaultProps = defaultProps;

export default injectIntl(ShowHide);
