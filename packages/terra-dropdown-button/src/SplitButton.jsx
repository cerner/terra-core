import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import { injectIntl, intlShape } from 'react-intl';
import onClickOutside from 'react-onclickoutside';
import DropdownButtonBase from './_DropdownButtonBase';
import styles from './SplitButton.module.scss';
import Item from './Item';
import Util from './_DropdownListUtil';

const cx = classNames.bind(styles);

const Variants = {
  NEUTRAL: 'neutral',
  // EMPHASIS: 'emphasis', // Wait to add in future enhancement
  GHOST: 'ghost',
};
const WrappedButtonBase = onClickOutside(DropdownButtonBase);

const propTypes = {
  /**
   * The options to display in the dropdown. Should be comprised of the subcomponent `Item`.
   */
  children: PropTypes.node.isRequired,
  /**
   * Determines whether the component should have block styles applied. The dropdown will match the component's width.
   */
  isBlock: PropTypes.bool,
  /**
   * Whether or not the button has reduced padding for use in tables and single-row lists.
   */
  isCompact: PropTypes.bool,
  /**
   * Determines whether the primary button and expanding the dropdown should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Sets the text that will be shown on the primary button which is outside the dropdown.
   */
  primaryOptionLabel: PropTypes.string.isRequired,
  /**
   * What will be called when the primary button is pressed.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Sets the styles of the component, one of `neutral`, or `ghost`.
   */
  variant: PropTypes.oneOf(Object.values(Variants)),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  /**
   * @private
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func,
  /**
   *  @private
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  variant: 'neutral',
};

class SplitButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
    this.handleDropdownRequestClose = this.handleDropdownRequestClose.bind(this);
    this.handlePrimaryKeyDown = this.handlePrimaryKeyDown.bind(this);
    this.handlePrimaryKeyUp = this.handlePrimaryKeyUp.bind(this);
    this.handleCaretKeyDown = this.handleCaretKeyDown.bind(this);
    this.handleCaretKeyUp = this.handleCaretKeyUp.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleButtonClickOutside = this.handleButtonClickOutside.bind(this);
    this.positionDropdown = this.positionDropdown.bind(this);
    this.alignDropdown = this.alignDropdown.bind(this);

    this.state = {
      isOpen: false, caretIsActive: false, primaryIsActive: false, isKeyboardEvent: false, position: 'bottom', align: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOpen !== this.state.isOpen) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(this.positionDropdown, !prevState.isOpen ? 0 : 100);
    }
    if (prevState.isOpen !== this.state.isOpen) {
      setTimeout(this.alignDropdown, !prevState.isOpen ? 0 : 100);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.debounceTimer);
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleDropdownButtonClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleDropdownRequestClose(callback) {
    this.setState({ isOpen: false }, typeof callback === 'function' ? callback : undefined);
    this.setState({ isKeyboardEvent: false });
    this.setState({ caretIsActive: false });
  }

  handleButtonClickOutside(event) {
    event.preventDefault();
    this.setState({
      isOpen: false,
    });
  }

  /*
    In FireFox active styles don't get applied onKeyDown
   */
  handlePrimaryKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ primaryIsActive: true });
    }
  }

  handlePrimaryKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ primaryIsActive: false });
    }
  }

  handleCaretKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ caretIsActive: true });
      this.setState({ isKeyboardEvent: true });
    }
  }

  handleCaretKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ caretIsActive: false });
    }
  }

  positionDropdown() {
    if (!this.state.isOpen) {
      return;
    }
    const positionValue = Util.dropdownPosition(this.buttonNode, this.dropdown).semanticTopWhenAbove;
    if (positionValue !== this.state.position) {
      this.setState({ position: positionValue });
    }
  }

  alignDropdown() {
    if (!this.state.isOpen) {
      return;
    }
    const isAligned = ((this.dropdown.getBoundingClientRect().left + this.dropdown.getBoundingClientRect().x) > (document.body.getBoundingClientRect().right + document.body.getBoundingClientRect().x));
    if (this.state.align !== isAligned) {
      this.setState({ align: isAligned });
    }
  }

  render() {
    const {
      children,
      isBlock,
      isCompact,
      isDisabled,
      primaryOptionLabel,
      onSelect,
      variant,
      intl,
      requestClose,
      metaData,
      ...customProps
    } = this.props;

    const {
      isOpen,
      primaryIsActive,
      caretIsActive,
      isKeyboardEvent,
      position,
      align,
    } = this.state;

    const caretLabel = intl.formatMessage({ id: 'Terra.dropdownButton.moreOptions' });

    const primaryClassnames = cx(
      'split-button-primary',
      variant,
      { 'is-block': isBlock },
      { 'is-compact': isCompact },
      { 'is-active': primaryIsActive },
    );
    const caretClassnames = cx(
      'split-button-caret',
      variant,
      { 'is-compact': isCompact },
      { 'is-active': isOpen || caretIsActive },
      /* This needs to match terra-hookshot's react-onclickoutside ignore classname or clicking the caret with
        the dropdown open will cause the dropdown to close and reopen
      */
      { 'ignore-react-onclickoutside': isOpen },
    );

    return (
      <WrappedButtonBase
        {...customProps}
        items={children}
        isOpen={isOpen}
        requestClose={this.handleDropdownRequestClose}
        isBlock={isBlock}
        isCompact={isCompact}
        isDisabled={isDisabled}
        isKeyboardEvent={isKeyboardEvent}
        buttonRef={this.getButtonNode}
        onClickOutside={this.handleButtonClickOutside}
        refCallback={(ref) => { this.dropdown = ref; }}
        position={position}
        isAligned={align}
      >
        <button
          type="button"
          className={primaryClassnames}
          onClick={(event) => {
            onSelect(event, metaData);
            this.handleDropdownRequestClose();
            event.stopPropagation();
          }}
          onKeyDown={this.handlePrimaryKeyDown}
          onKeyUp={this.handlePrimaryKeyUp}
          disabled={isDisabled}
          tabIndex={isDisabled ? '-1' : undefined}
          aria-disabled={isDisabled}
        >
          {primaryOptionLabel}
        </button>
        <button
          type="button"
          onClick={this.handleDropdownButtonClick}
          onKeyDown={this.handleCaretKeyDown}
          onKeyUp={this.handleCaretKeyUp}
          className={caretClassnames}
          disabled={isDisabled}
          tabIndex={isDisabled ? '-1' : undefined}
          aria-disabled={isDisabled}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label={caretLabel}
          ref={this.setButtonNode}
        >
          <span className={cx('caret-icon')} />
        </button>
      </WrappedButtonBase>
    );
  }
}

SplitButton.propTypes = propTypes;
SplitButton.defaultProps = defaultProps;

export default injectIntl(SplitButton);
export { Item, Variants };
