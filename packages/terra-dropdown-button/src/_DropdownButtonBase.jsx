import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from './_Dropdown';
import styles from './_DropdownButtonBase.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The button or buttons that are the primary option and caret
   */
  children: PropTypes.node.isRequired,
  /**
   * The options to display in the dropdown. Should be of type `Button`.
   */
  buttons: PropTypes.node.isRequired,
  /**
   * Whether or not the dropdown is open
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func.isRequired,
  /**
   * Determines whether the primary button and expanding the dropdown should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Determines whether the component should have block styles applied. The dropdown will match the component's width.
   */
  isBlock: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  isBlock: false,
};

class DropdownButtonBase extends React.Component {
  constructor(props) {
    super(props);

    this.setButtonWrapperRef = this.setButtonWrapperRef.bind(this);
    this.getButtonWrapperRef = this.getButtonWrapperRef.bind(this);

    this.buttonWrapperRef = null;
  }

  setButtonWrapperRef(ref) {
    this.buttonWrapperRef = ref;
  }

  getButtonWrapperRef() {
    return this.buttonWrapperRef;
  }

  render() {
    const {
      children,
      buttons,
      isOpen,
      requestClose,
      disabled,
      isBlock,
      ...customProps
    } = this.props;

    const DropdownButtonClassNames = cx([
      'dropdown-button-base',
      { 'is-block': isBlock },
      { disabled },
      customProps.className,
      /* This needs to match terra-hookshot's react-onclickoutside ignore classname or clicking the caret with
        the dropdown open will cause the dropdown to close and reopen
      */
      'ignore-react-onclickoutside',
    ]);

    let calcWidth;
    if (this.buttonWrapperRef && isBlock) {
      calcWidth = `${this.buttonWrapperRef.getBoundingClientRect().width}px`;
    }

    return (
      <div
        {...customProps}
        className={DropdownButtonClassNames}
        ref={this.setButtonWrapperRef}
      >
        {children}
        <Dropdown
          targetRef={this.getButtonWrapperRef}
          isOpen={isOpen}
          requestClose={requestClose}
          width={calcWidth}
        >
          {buttons}
        </Dropdown>
      </div>
    );
  }
}

DropdownButtonBase.propTypes = propTypes;
DropdownButtonBase.defaultProps = defaultProps;

export default DropdownButtonBase;
