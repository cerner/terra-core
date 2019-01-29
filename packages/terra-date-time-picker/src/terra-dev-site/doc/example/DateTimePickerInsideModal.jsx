import React from 'react';
import ModalManager from 'terra-modal-manager';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import DateTimePickerModalContent from '../../common/DateTimePickerModalContent';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    return () => {
      const identifier = Date.now();

      this.props.disclosureManager.disclose({
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
  disclosureManager: disclosureManagerShape,
};

const WrappedModalContainer = withDisclosureManager(ModalContainer);

const ModalManagerDemo = () => (
  <ModalManager>
    <WrappedModalContainer />
  </ModalManager>
);

export default ModalManagerDemo;
