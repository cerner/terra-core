import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import DatePickerModalContent from './DatePickerModalContent';

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
          key: `DatePickerModalContent-${identifier}`,
          component: <DatePickerModalContent />,
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

export default ModalContainer;
