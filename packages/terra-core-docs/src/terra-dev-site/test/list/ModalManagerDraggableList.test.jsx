/* eslint-disable max-classes-per-file */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import List, { Item } from 'terra-list/lib/index';
import {
  DisclosureManagerHeaderAdapter, DisclosureManagerContext,
} from 'terra-disclosure-manager';

import ModalManager from 'terra-modal-manager';
import styles from './DraggableListItem.module.scss';

const cx = classNames.bind(styles);

class DisclosureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.checkLockState = this.checkLockState.bind(this);

    this.state = {
      text: undefined,
    };
  }

  componentDidMount() {
    const disclosureManager = this.context;

    if (disclosureManager && disclosureManager.registerDismissCheck) {
      disclosureManager.registerDismissCheck(this.checkLockState);
    }
  }

  checkLockState() {
    if (this.state.text && this.state.text.length) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-restricted-globals
        if (!confirm(`${this.props.name} has unsaved changes that will be lost. Do you wish to continue?`)) { // eslint-disable-line no-alert
          reject();
          return;
        }

        resolve();
      });
    }

    return Promise.resolve();
  }

  render() {
    const { name, disclosureType } = this.props;
    const disclosureManager = this.context;

    return (
      <ContentContainer fill>
        <DisclosureManagerHeaderAdapter
          title={name}
        />
        <div className={cx('content-wrapper')}>
          <h3>{name}</h3>
          <p>The disclosed component can disclose content within the same modal.</p>
          <p>It can also render a header (like above) that implements the various DisclosureManager control functions.</p>
          <div>
            <List role="listbox" dividerStyle="standard" ariaDescribedBy="list-help" aria-label="list of patient" isDraggable>
              <Item
                key="1"
                isSelectable
                isSelected
              >
                <p>Cardiology</p>
              </Item>
              <Item
                key="2"
                isSelectable
              >
                <p>Radiology</p>
              </Item>
              <Item
                key="3"
                isSelectable
              >
                <p>Psychology</p>
              </Item>
              <Item
                key="4"
                isSelectable
              >
                <p>Nothing</p>
              </Item>
            </List>
          </div>
          <button
            type="button"
            onClick={() => {
              disclosureManager.dismiss()
                .catch(() => {
                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
                });
            }}
          >
            Dismiss
          </button>
          <button
            type="button"
            onClick={() => {
              disclosureManager.disclose({
                preferredType: disclosureType,
                size: 'small',
                content: {
                  key: `Nested ${name}`,
                  component: <DisclosureComponent name={`Nested ${name}`} disclosureType={disclosureType} />,
                },
              });
            }}
          >
            Disclose Again
          </button>
          <br />
          <br />
        </div>
      </ContentContainer>
    );
  }
}

DisclosureComponent.contextType = DisclosureManagerContext;
DisclosureComponent.propTypes = {
  name: PropTypes.string,
  disclosureType: PropTypes.string,
};
DisclosureComponent.defaultProps = {
  name: 'Disclosure Component',
};

class ContentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.getId = this.getId.bind(this);

    this.state = { id: 'dimensions' };
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getId(name) {
    return name + this.state.id;
  }

  renderButton(size) {
    const { disclosureType } = this.props;
    const disclosureManager = this.context;

    return (
      <button
        type="button"
        id={size}
        onClick={() => {
          disclosureManager.disclose({
            preferredType: disclosureType,
            size,
            content: {
              key: `Content-Disclosure-${size}`,
              component: <DisclosureComponent name="Disclosure Component" disclosureType={disclosureType} />,
            },
          });
        }}
      >
        {`Disclose (${size})`}
      </button>
    );
  }

  render() {
    return (
      <ContentContainer
        header={<h2 className={cx('header')}>Content Component</h2>}
      >
        <div className={cx('content-wrapper')}>
          {this.renderButton('default')}
          {this.renderButton('tiny')}
          {this.renderButton('small')}
          {this.renderButton('medium')}
          {this.renderButton('large')}
          {this.renderButton('huge')}
          {this.renderButton('fullscreen')}
          <br />
          <p>The child components can disclose content in the modal at various sizes.</p>
        </div>
      </ContentContainer>
    );
  }
}

ContentComponent.contextType = DisclosureManagerContext;
ContentComponent.propTypes = {
  disclosureType: PropTypes.string,
};

const ModalManagerExample = ({ showDisclosureAccessory }) => (
  <div className={cx('example-wrapper')}>
    <ModalManager
      disclosureAccessory={showDisclosureAccessory ? (
        <div className={cx('disclosure-accessory')}>
          Disclosure Accessory
        </div>
      ) : undefined}
    >
      <ContentComponent disclosureType="modal" />
    </ModalManager>
  </div>
);

ModalManagerExample.propTypes = {
  showDisclosureAccessory: PropTypes.bool,
};

export default ModalManagerExample;
/* eslint-enable max-classes-per-file */
