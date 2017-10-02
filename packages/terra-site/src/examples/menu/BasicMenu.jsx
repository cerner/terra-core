
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconFunnel from 'terra-icon/lib/icon/IconFunnel';
import Menu from 'terra-menu';

const propTypes = {
  /**
   * A callback function to be trigger when header is clicked
   */
  onSortChange: PropTypes.func,

};

const defaultProps = {
  headers: [],
};

// Constant for the width of the popup
const MENU_WIDTH = '240';

class SortOptionPopupWrapper extends React.Component {
  /**
   * Retrieves the sort button instance with id radSortingButton
   * @return the button node
   */
  static getButtonNode() {
    return document.getElementById('radSortingButton');
  }


  constructor(props) {
    super(props);
    this.state = { toggleOpen: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  /**
   * Callback function for when the popup anchor is clicked
   */
  handleButtonClick() {
    this.setState({ toggleOpen: !this.state.toggleOpen });
  }

  /**
   * Callback function for when the popup anchor is requesting to be closed
   */
  handleRequestClose() {
    this.setState({ toggleOpen: false });
  }

  /**
   * Callback function to trigger the onSortChange action and close the popup
   * @param headerMeaning {String} representing the headerMeaning of column by which data will be sorted
   * @param isAscending {bool} representing whether data is sorted ascending or descending
   */
  handleSortChange(event, index) {

    // close the popup
    this.handleRequestClose();
  }

  render() {
    return (
      <div className={'rad-CompressedWorklist-sortOption-wrapper'}>
        <Menu
          contentWidth={MENU_WIDTH}
          isOpen={this.state.toggleOpen}
          targetRef={SortOptionPopupWrapper.getButtonNode}
          onRequestClose={this.handleRequestClose}
          isArrowDisplayed
        >
          <Menu.ItemGroup key="Group" onChange={this.handleSortChange} isSelectable>
            <Menu.Item text={`Group Item 0`} key={`GroupItem2_0`} isSelected={false} />
            <Menu.Item text={`Group Item 1`} key={`GroupItem2_1`} isSelected />
            <Menu.Item text={`Group Item 2`} key={`GroupItem2_2`} isSelected={false} />
            <Menu.Item text={`Group Item 3`} key={`GroupItem2_3`} isSelected={false} />
          </Menu.ItemGroup>
          <Menu.Item text={`Group Item 4`} key={`GroupItem2_4`} isSelected={false} />
        </Menu>
        <Button
          id={'radSortingButton'}
          onClick={this.handleButtonClick}
          size={'medium'}
          icon={<IconFunnel />}
          className={'rad-CompressedWorklist-sortOption'}
        />
      </div>
    );
  }
}

SortOptionPopupWrapper.propTypes = propTypes;
SortOptionPopupWrapper.defaultProps = defaultProps;

export default SortOptionPopupWrapper;
