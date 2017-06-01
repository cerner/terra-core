import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PopupPresenter from './PopupPresenter';
import 'terra-base/lib/baseStyles';

import './PopupManager.scss';

const propTypes = {
  children: PropTypes.node,
  zIndex: PropTypes.string,
};

const defaultProps = {
  children: [],
  zIndex: '7001',
};

class PopupManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.handleRequestOpen = this.handleRequestOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setManagerNode = this.setManagerNode.bind(this);
    this.getManagerNode = this.getManagerNode.bind(this);
  }

  handleRequestOpen(popupData) {
    const stateData = {
      isOpen: true,
      content: popupData.content,
      contentAttachment: popupData.contentAttachment,
      disableHeader: popupData.disableHeader,
      showArrow: popupData.showArrow,
      targetRef: popupData.targetRef,
    };
    this.setState(stateData);
  }

  handleRequestClose(event) {
    this.setState({isOpen: false});
  }

  setManagerNode(node) {
    this._managerNode = node;
  }

  getManagerNode() {
    return this._managerNode;
  }

  render() {
    const { presentPopup, children , zIndex} = this.props;


    let popupPresenter;
    if (this.state.isOpen) {
      popupPresenter = (
        <PopupPresenter 
          content={this.state.content}
          contentAttachment={this.state.contentAttachment}
          disableHeader={this.state.disableHeader}
          isOpen={this.state.isOpen}
          showArrow={this.state.showArrow}
          targetRef={this.state.targetRef}
          onRequestClose={this.handleRequestClose}
          boundingRef={this.getManagerNode}
          zIndex={zIndex}
        />
      );
    }
    
    return (
      <div className="terra-PopupManager" ref={this.setManagerNode}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { presentPopup: this.handleRequestOpen });
        })}
        {popupPresenter}  
      </div>
    );
  }
}

PopupManager.propTypes = propTypes;
PopupManager.defaultProps = defaultProps;

export default PopupManager;

