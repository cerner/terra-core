import React from 'react';
import ModalManager from 'terra-modal-manager';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import DateTimePickerModalContent from '../../common/DateTimePickerModalContent';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    return () => {
      const identifier = Date.now();

      this.props.app.disclose({
        preferredType: 'modal',
        content: {
          key: `DateTimePickerModalContent-${identifier}`,
          component: <DateTimePickerModalContent />,
        },
      });
    };
  }

  render() {
    return (
      <Button className="disclose" text="Disclose Modal" onClick={this.disclose()} />
    );
  }
}

ModalContainer.propTypes = {
  app: AppDelegate.propType,
};

const ModalManagerDemo = () => (
  <ModalManager>
    <ModalContainer />
  </ModalManager>
);

export default ModalManagerDemo;
